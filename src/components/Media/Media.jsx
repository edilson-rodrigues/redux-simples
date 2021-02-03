import React from "react";

import ComponentStyle from "../Style";
import Card from "../Card";

const card_color = {
	red: "red",
	blue: "blue",
	green: "green",
	purple: "purple",
};

const Media = () => (
	<Card title="Media dos Números" color={card_color.green}>
		<span>
			<span>Resultado</span>
			<ComponentStyle.Strong>5</ComponentStyle.Strong>
		</span>
	</Card>
);

export default Media;
