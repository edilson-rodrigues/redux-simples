import React from "react";
import {connect} from "react-redux";
/* */
import {mapStateToProps} from "../../store/actions/shared_actions";
import {CARDCOLOR} from "../Card/CardStyle";
import Result from "../Results";

const Average = props => {
    const {min, max} = props;

    return (
        <Result
            title="Number average"
            color={CARDCOLOR.GREEN}
            result={(min + max) / 2}
        />
    );
};

export default connect(mapStateToProps)(Average);
