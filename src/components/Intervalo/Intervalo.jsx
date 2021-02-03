import React from "react";

import ComponentStyle from "../Style";
import Card from "../Card";

const card_color = {
	red: "red",
	blue: "blue",
	green: "green",
	purple: "purple",
};

const Intervalo = (props) => {
	const { min, max, onMinChange, onMaxChange } = props;
	return (
		<Card title="Intervalo de Números" color={card_color.red}>
			<span>
				<ComponentStyle.Strong>
					Mínimo
					<ComponentStyle.Input
						type="number"
						name="number"
						id=""
						value={min}
						onChange={(e) => onMinChange(+e.target.value)}
					/>
				</ComponentStyle.Strong>
				<ComponentStyle.Strong>
					Máximo
					<ComponentStyle.Input
						type="number"
						name="number"
						id=""
						value={max}
						onChange={(e) => onMaxChange(+e.target.value)}
					/>
				</ComponentStyle.Strong>
			</span>
		</Card>
	);
};

export default Intervalo;
