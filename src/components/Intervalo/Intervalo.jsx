import React from "react";
import {connect} from "react-redux";

import ComponentStyle from "../Style";
import Card from "../Card";
import {actionChangeNumberMin} from "../../store/actions/numbers";

const card_color = {
    red: "red",
    blue: "blue",
    green: "green",
    purple: "purple",
};

const Intervalo = (props) => {
    const {min, max} = props;
    const {changeNumberMin} = props;

    changeNumberMin(1000);


    return (
        <Card title="Intervalo de Números" color={card_color.red}>
			<span>
				<ComponentStyle.Strong>
					Min
					<ComponentStyle.Input type="number" name="number" id="" value={min} readOnly/>
				</ComponentStyle.Strong>
				<ComponentStyle.Strong>
					Max
					<ComponentStyle.Input type="number" name="number" id="" value={max} readOnly/>
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

const mapActionCreatorsToProps = (dispatch) => {
    return {
        changeNumberMin(number) {
            //action creator -> action
            const action = actionChangeNumberMin(number);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Intervalo);
