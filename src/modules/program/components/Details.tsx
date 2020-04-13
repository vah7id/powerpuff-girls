import * as React from "react";
import { Program } from "../interfaces";
import placeholderImage from "../../../assets/images/placeholder.png";
import '../../../assets/styles/details.scss';

export const Details: React.FC<Program> = ({ title, id, cover, description }) => (
    <div className={'Details'}>
        <div className={'col'}>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{__html: description}} />
        </div>
        <img src={cover || placeholderImage} alt={title} />
    </div>
);

export default Details;
