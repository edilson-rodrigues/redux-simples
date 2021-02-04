import React from "react";
import CardStyle, {CARDCOLOR} from "./CardStyle";

const Card = (props) => {
    const {title, children, color} = props;
    return (
        <CardStyle color={color}>
            <CardStyle.Header>
                <CardStyle.Title>{title}</CardStyle.Title>
            </CardStyle.Header>
            <CardStyle.Content color={color + CARDCOLOR.LIGHT}>{children}</CardStyle.Content>
        </CardStyle>
    );
};

export default Card;

