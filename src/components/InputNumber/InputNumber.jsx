import React from "react";
import ComponentStyle from "../Style";

const InputNumber = ({label, onChange, value}) => (
    <ComponentStyle.Strong>
        {label}
        <ComponentStyle.Input
            type="number"
            name="number"
            id="" value={value}
            onChange={onChange}
        />
    </ComponentStyle.Strong>
)

export default InputNumber;
