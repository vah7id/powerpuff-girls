import * as React from "react";
import { Program } from "../interfaces";

export const ProgramDetails: React.FC<Program> = ({ title, id, cover, description }) => (
    <>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{__html: description}} />
        <img src={cover} alt={title} />
    </>
);

export default ProgramDetails;
