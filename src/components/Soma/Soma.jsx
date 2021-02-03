import React from "react";

import ComponentStyle from "../Style";
import Card from "../Card";

const card_color = {
	red: "red",
	blue: "blue",
	green: "green",
	purple: "purple",
};

const Soma = () => (
	<Card title="Soma dos Números" color={card_color.blue}>
		<span>
			<span>Resultado</span>
			<ComponentStyle.Strong>10</ComponentStyle.Strong>
		</span>
	</Card>
);

export default Soma;
