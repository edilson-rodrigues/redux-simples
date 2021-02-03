import React from "react";

import ComponentStyle from "../Style";
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
			<ComponentStyle.Strong>
				Mínimo
				<ComponentStyle.Input
					type="number"
					name="number"
					id=""
					value={0}
					readonly
				/>
			</ComponentStyle.Strong>
			<ComponentStyle.Strong>
				Máximo
				<ComponentStyle.Input
					type="number"
					name="number"
					id=""
					value={10}
					readonly
				/>
			</ComponentStyle.Strong>
		</span>
	</Card>
);

export default Intervalo;
