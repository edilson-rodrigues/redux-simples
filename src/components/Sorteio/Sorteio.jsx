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

const Sorteio = (props) => {
    const {min, max} = props;

    const random = parseInt(Math.random() * (max - min) + min);

    return (
        <Card title="Sorteio de um Número" color={card_color.purple}>
			<span>
				<span>Resultado</span>
				<ComponentStyle.Strong>{random}</ComponentStyle.Strong>
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

export default connect(mapStateToProps)(Sorteio);
