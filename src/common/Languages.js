import React, {memo, useState} from 'react';
import {
    FormControlLabel,
    Radio,
} from "@mui/material";
import {useSelector} from "react-redux";
import {getAdditionalSelector, getLanguagesSelector} from "../store/mainState/selectors";
import {Field} from "formik";
import FormikRadioGroup from "./FormikRadioGroup";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import {useMain} from "../store/hooks/use-main";

const Languages = memo(() => {
    const languages = useSelector(getLanguagesSelector);
    const additional = useSelector(getAdditionalSelector);
    const {mainControl} = useMain();
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        mainControl.getAdditional(e.target.value);
        setValue(e.target.value);
    }
    const renderAdditional = (id) => {
        return id === value && additional?.questions.map((question, index) => (
                <React.Fragment key={index}>
                    <Typography variant="additional">{question}</Typography>
                    <Field id="additional" name="additional" placeholder="Your answer"/>
                </React.Fragment>
            )
        )
    }

    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                {languages &&
                    <Typography variant="title" className="required">
                        {languages.title}
                    </Typography>
                }
                <Field name="languages">
                    {({field, form}) => {
                        return (
                            <FormikRadioGroup form={form} field={field}>
                                {languages && languages?.questions.map((language) => (
                                    <React.Fragment key={language.id}>
                                        <FormControlLabel
                                            value={language.id}
                                            control={<Radio/>}
                                            label={language.label}
                                            onChange={(e) => handleChange(e)}
                                        />
                                        {renderAdditional(language.id)}
                                    </React.Fragment>
                                ))}
                            </FormikRadioGroup>
                        );
                    }}
                </Field>
            </CardContent>
        </Card>
    );
});

export default Languages;
