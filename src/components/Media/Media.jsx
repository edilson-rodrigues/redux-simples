import React from "react";

import ComponentStyle from "../Style";
import Card from "../Card";

const card_color = {
	red: "red",
	blue: "blue",
	green: "green",
	purple: "purple",
};

const Media = (props) => {
	const { min, max } = props;

	return (
		<Card title="Media dos Números" color={card_color.green}>
			<span>
				<span>Resultado</span>
				<ComponentStyle.Strong>{(max + min) / 2}</ComponentStyle.Strong>
			</span>
		</Card>
	);
};

export default Media;