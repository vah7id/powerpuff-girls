import * as React from "react";
import { Program } from "../interfaces";
import placeholderImage from "../../../assets/images/placeholder.png";
import '../../../assets/styles/DetailsCard.scss';

export const DetailsCard: React.FC<Program> = ({ name, image, summary }) => (
    <div className={'DetailsCard'}>
        <div className={'col'}>
            <h2>{name}</h2>
            <p dangerouslySetInnerHTML={{__html: summary}} />
        </div>
        <img src={image?.medium || placeholderImage} alt={name} />
    </div>
);

export default DetailsCard;
