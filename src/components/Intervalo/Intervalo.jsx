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
	return (
		<Card title="Intervalo de Números" color={card_color.red}>
			<span>
				<ComponentStyle.Strong>
					Mínimo
					<ComponentStyle.Input type="number" name="number" id="" value={1} />
				</ComponentStyle.Strong>
				<ComponentStyle.Strong>
					Máximo
					<ComponentStyle.Input type="number" name="number" id="" value={10} />
				</ComponentStyle.Strong>
			</span>
		</Card>
	);
};

export default Intervalo;
