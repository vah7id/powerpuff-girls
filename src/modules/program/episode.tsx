import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import { Episode } from './interfaces';

interface ProgramProps {
    programId: string;
    seasonId: string;
    episodeId: string;
    episode: Episode;
    fetchEpisode(season: string, episode: string, program: string): void;
}

type ReduxProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
type Props = ProgramProps & ReduxProps;

class Show extends React.Component<Props> {
    componentWillMount(): void {
        this.props.fetchEpisode(this.props.seasonId, this.props.episodeId, this.props.programId);
    }
    render() {
        return (
            <div className="Episode">
                {this.props.episode ? <>
                    <h2>
                        {this.props.episode.name},
                        SE{this.props.season} EP{this.props.id}
                    </h2>
                    <p dangerouslySetInnerHTML={{__html: this.props.episode.summary}} />
                    <img src={this.props.episode.image.medium} alt={this.props.episode.name} />
                    </> :
                <p>Loading...</p>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps) => ({
    episode: state.program.episode,
    season: ownProps.seasonId,
    id: ownProps.episodeId,
    program: ownProps.programId,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchEpisode: (season: string, episode: string, program: string) => dispatch(actions.fetchEpisode(season, episode, program)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
