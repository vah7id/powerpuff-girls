import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Show from "./modules/program/show";
import Episode from "./modules/program/episode";
import './assets/styles/app.scss';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
            <Switch>
                <Route exact path="/" component={Show} />
                <Route path="/program/:programId/season/:seasonId/episode/:episodeId"
                       component={(routerProps) => <Episode
                           programId={routerProps.match.params.programId}
                           seasonId={routerProps.match.params.seasonId}
                           episodeId={routerProps.match.params.episodeId}
                       />}
                />
            </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
