import React from "react";
import CardStyle from "./CardStyle";

const Card = (props) => {
	const { title, children, color } = props;
	return (
		<CardStyle color={color}>
			<CardStyle.Header>
				<CardStyle.Title>{title}</CardStyle.Title>
			</CardStyle.Header>
			<CardStyle.Content color={`${color}-light`}>{children}</CardStyle.Content>
		</CardStyle>
	);
};

export default Card;
