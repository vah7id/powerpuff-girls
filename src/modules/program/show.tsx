import React from 'react';
import { connect } from 'react-redux';
import { actions } from './state/actions';
import {Episode, ProgramState} from './interfaces';
import EpisodeItem from './components/EpisodeItem';
import DetailsCard from './components/DetailsCard';
import { RootState } from '../../store/rootState';
import '../../assets/styles/Program.scss';

interface Props {
    program: ProgramState;
    fetchProgram(id: number): void;
}

class Show extends React.Component<Props> {
    componentWillMount(): void {
        // TODO: to make the dynamic program view, just replace the below id with URL /:programId
        const programId = 6771; // The Powerpuff Girls program id
        this.props.fetchProgram(programId);
    }
    render() {
        return (
            <div className="Program">
                {
                    this.props.program?.id ? <>
                        {/* Program overview card component */}
                        <DetailsCard {...this.props.program} />
                        <h3>Episodes</h3>
                        <ul>
                        {
                            /* map and render all the available episodes */
                            this.props.program.episodes &&
                            this.props.program.episodes.map((episode: Episode, index) =>
                            <EpisodeItem idx={index} programId={this.props.program.id} {...episode} />)
                        }
                        </ul>
                    </> :
                    <p>Loading...</p>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    program: state.program,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchProgram: (id: number) => dispatch(actions.fetchProgram(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
