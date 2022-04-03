import React from "react";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

const renderOptions = (options) => {
    return options.map((option) => (
        <FormControlLabel
            key={option}
            value={option}
            control={<Radio/>}
            label={option}
        />
    ));
};

const FormikRadioGroup = ({field, form: {touched, errors}, name, options, children, ...props}) => {
    const fieldName = name || field.name;

    return (
        <>
            <RadioGroup {...field} {...props} name={fieldName}>
                {options ? renderOptions(options) : children}
            </RadioGroup>
            {touched[fieldName]
                && errors[fieldName]
                && (
                    <span style={{color: "red"}}>
          {errors[fieldName]}
        </span>)}
        </>
    );
};

export default FormikRadioGroup;
