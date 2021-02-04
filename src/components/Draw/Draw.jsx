import React from "react";
import {connect} from "react-redux";
/* */
import {mapStateToProps} from "../../store/actions/shared_actions";
import {CARDCOLOR} from "../Card/CardStyle";
import Result from "../Results";

const Draw = props => {
    const {min, max} = props;

    const random = parseInt(Math.random() * (max - min) + min);

    return (
        <Result
            title="Draw a number"
            color={CARDCOLOR.PURPLE}
            result={random}
        />
    );
};

export default connect(mapStateToProps)(Draw);
