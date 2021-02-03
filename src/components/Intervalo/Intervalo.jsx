import React from "react";
import {connect} from "react-redux";

import ComponentStyle from "../Style";
import Card from "../Card";
import {actionChangeNumberMax, actionChangeNumberMin} from "../../store/actions/numbers";

const card_color = {
    red: "red",
    blue: "blue",
    green: "green",
    purple: "purple",
};

const Intervalo = (props) => {
    const {min, max} = props;
    const {changeNumberMin, changeNumberMax} = props;

    return (
        <Card title="Intervalo de Números" color={card_color.red}>
			<span>
				<ComponentStyle.Strong>
					Min
					<ComponentStyle.Input
                        type="number"
                        name="number-min"
                        id="" value={min}
                        onChange={e => changeNumberMin(+e.target.value)}
                    />
				</ComponentStyle.Strong>
				<ComponentStyle.Strong>
					Max
					<ComponentStyle.Input
                        type="number"
                        name="number-max"
                        value={max}
                        onChange={e => changeNumberMax(+e.target.value)}
                    />
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

const mapDispatchToProps = (dispatch) => {
    return {
        changeNumberMin(number) {
            //action creator -> action
            const action = actionChangeNumberMin(number);
            dispatch(action);
        },
        changeNumberMax(number) {
            //action creator -> action
            const action = actionChangeNumberMax(number);
            dispatch(action);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo);
