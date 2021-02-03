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

const Media = (props) => {
    const {min, max} = props;

    console.log('props-media', props);

    return (
        <Card title="Media dos Números" color={card_color.green}>
			<span>
				<span>Resultado</span>
                <ComponentStyle.Strong>{(min + max) / 2}</ComponentStyle.Strong>
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

export default connect(mapStateToProps)(Media);
