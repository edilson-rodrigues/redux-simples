import React from "react";

import IntervaloStyle from "./IntervaloStyle";
import Card from "../Card";

const card_color = {
	red: "red",
	blue: "blue",
	green: "green",
	purple: "purple",
};

const Intervalo = () => (
	<Card title="Intervalo de Números" color={card_color.red}>
		<span>
			<IntervaloStyle.Strong>
				Mínimo
				<IntervaloStyle.Input
					type="number"
					name="number"
					id=""
					value={0}
					readonly
				/>
			</IntervaloStyle.Strong>
			<IntervaloStyle.Strong>
				Máximo
				<IntervaloStyle.Input
					type="number"
					name="number"
					id=""
					value={10}
					readonly
				/>
			</IntervaloStyle.Strong>
		</span>
	</Card>
);

export default Intervalo;
