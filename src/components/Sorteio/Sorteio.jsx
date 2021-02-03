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
	const { min, max } = props;
	const aleatorio = parseInt(Math.random() * (max - min)) + min;

	return (
		<Card title="Sorteio de um Número" color={card_color.purple}>
			<span>
				<span>Resultado</span>
				<ComponentStyle.Strong>{aleatorio}</ComponentStyle.Strong>
			</span>
		</Card>
	);
};

export default Sorteio;
