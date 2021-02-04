import React from "react";
import {connect} from "react-redux";
/* */
import {mapDispatchToProps, mapStateToProps} from "../../store/actions/shared_actions";
import Card from "../Card";
import {CARDCOLOR} from "../Card/CardStyle";
import InputNumber from "../InputNumber";


const Interval = (props) => {
    const {min, max} = props;
    const {changeNumberMin, changeNumberMax} = props;

    return (
        <Card title="Number range" color={CARDCOLOR.RED}>
			<span>
                <InputNumber
                    label={"Min"}
                    value={min}
                    onChange={e => changeNumberMin(+e.target.value)}
                />
                <InputNumber
                    label={"Max"}
                    value={max}
                    onChange={e => changeNumberMax(+e.target.value)}
                />
			</span>
        </Card>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Interval);
