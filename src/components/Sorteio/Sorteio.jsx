import React from "react";

import ComponentStyle from "../Style";
import Card from "../Card";

const card_color = {
	red: "red",
	blue: "blue",
	green: "green",
	purple: "purple",
};

const Sorteio = (props) => {
	return (
		<Card title="Sorteio de um Número" color={card_color.purple}>
			<span>
				<span>Resultado</span>
				<ComponentStyle.Strong>{8}</ComponentStyle.Strong>
			</span>
		</Card>
	);
};

export default Sorteio;
