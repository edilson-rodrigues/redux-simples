import React from "react";
import {connect} from "react-redux";
/* */
import {mapStateToProps} from "../../store/actions/shared_actions";
import {CARDCOLOR} from "../Card/CardStyle";
import Result from "../Results";


const Sum = (props) => {
    const {min, max} = props;
    return (
        <Result
            title="Sum of the numbers"
            color={CARDCOLOR.BLUE}
            result={min + max}
        />
    );
};

export default connect(mapStateToProps)(Sum);
