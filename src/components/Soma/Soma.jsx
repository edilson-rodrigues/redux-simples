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

const Soma = (props) => {
    const {min, max} = props;
    return (
        <Card title="Soma dos Números" color={card_color.blue}>
			<span>
				<span>Resultado</span>
				<ComponentStyle.Strong>{min + max}</ComponentStyle.Strong>
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

export default connect(mapStateToProps)(Soma);
