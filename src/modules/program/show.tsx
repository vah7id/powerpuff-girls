import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import { Episode } from './interfaces';
import EpisodeItem from './components/EpisodeItem';
import ProgramDetails from './components/ProgramDetails';

interface ProgramProps {
    program: Show;
    fetchProgram(id: number): void;
}

type ReduxProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
type Props = ProgramProps & ReduxProps;

class Show extends React.Component<Props> {
    componentWillMount(): void {
        // TODO: make the dynamic program view by replacing the below id with URL /:programId
        const id = 6771; // The Powerpuff Girls program id
        this.props.fetchProgram(id);
    }
    render() {
        return (
            <div className="Program">
                {
                    this.props.program ? <>
                        <ProgramDetails {...this.props.program} />
                        <h3>Episodes</h3>
                        <ul>{this.props.program.episodes.map((episode: Episode, index) =>
                            <EpisodeItem idx={index} programId={this.props.program.id} {...episode} />)}</ul>
                    </> :
                    <p>Loading...</p>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    program: state.program,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchProgram: (id: number) => dispatch(actions.fetchProgram(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
