import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Program from "./modules/program";
import Episode from "./modules/episode";

function App() {
  return (
    <div className="App">
        <header className="App-header">
          Powerpuff-girls technical assignment
        </header>
        <Router>
            <div>
            <Switch>
                <Route path="/">
                    <Program />
                </Route>
                <Route path="/program/:programId/eps/:episodeId">
                    <Episode />
                </Route>
            </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
