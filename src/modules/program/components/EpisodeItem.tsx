import * as React from "react";
import { Episode } from "../interfaces";
import { Link } from "react-router-dom";

export const EpisodeItem: React.FC<Episode> = ({ idx, programId, season, number }) => (
    <li key={idx}>
        <Link to={`/program/${programId}/season/${season}/episode/${number}`}>SE {season} EP {number}</Link>
    </li>
);

export default EpisodeItem;
