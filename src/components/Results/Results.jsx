import React from 'react';
import ComponentStyle from "../Style";
import {CARDCOLOR} from "../Card/CardStyle";
import Card from "../Card";

const Result = ({title = 'Title', color = CARDCOLOR.RED, result}) => (
    <Card title={title} color={color}>
		<span>
			<span>
				Results
			</span>
			<ComponentStyle.Strong>
				{result}
			</ComponentStyle.Strong>
		</span>
    </Card>
);

export default Result;
