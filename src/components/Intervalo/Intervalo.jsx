import React from "react";
import {connect} from "react-redux";

import ComponentStyle from "../Style";
import Card from "../Card";

const card_color = {
    red: "red",
    blue: "blue",
    green: "green",
    purple: "purple",
};

const Intervalo = (props) => {
    const {min, max} = props;
    return (
        <Card title="Intervalo de Números" color={card_color.red}>
			<span>
				<ComponentStyle.Strong>
					Min
					<ComponentStyle.Input type="number" name="number" id="" value={min}/>
				</ComponentStyle.Strong>
				<ComponentStyle.Strong>
					Max
					<ComponentStyle.Input type="number" name="number" id="" value={max}/>
				</ComponentStyle.Strong>
			</span>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        min: state.number.min,
        max: state.number.max,
    }
}

export default connect(mapStateToProps)(Intervalo);
