import React from 'react';
import { connect } from 'react-redux';
import { actions } from './state/actions';
import { Episode } from './interfaces';
import DetailsCard from "./components/DetailsCard";

interface Props {
    program: string;
    season: string;
    id: string;
    episode: Episode;
    fetchEpisode(season: string, episode: string, program: string): void;
}

class Show extends React.Component<Props> {
    componentWillMount(): void {
        // fetch the episode details
        this.props.fetchEpisode(this.props.season, this.props.id, this.props.program);
    }
    render() {
        return (
            <div className="Episode">
                {/* reusing the details card component for episode single preview */}
                {this.props.episode ?
                    <DetailsCard
                        id={this.props.id}
                        name={`${this.props.episode.name}, SE${this.props.season} EP${this.props.id}`}
                        summary={this.props.episode.summary}
                        image={this.props.episode.image}
                    /> :
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
