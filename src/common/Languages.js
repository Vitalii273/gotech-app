import React from 'react';
import {
    FormControlLabel,
    Radio,
    ThemeProvider,
} from "@mui/material";
import {useSelector} from "react-redux";
import { getLanguagesSelector} from "../store/mainState/selectors";
import { Field} from "formik";
import FormikRadioGroup from "./FormikRadioGroup";
import Card from "@mui/material/Card";
import {customTheme} from "../style/muiThemes";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const Languages = () => {
    const languages = useSelector(getLanguagesSelector);

    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                {languages && <ThemeProvider theme={customTheme}>
                    <Typography variant="title">{languages.title}</Typography>
                </ThemeProvider>}
                <Field name="languages">
                    {({field, form}) => {
                        return (
                            <FormikRadioGroup form={form} field={field}>
                                {languages && languages.questions.map((language) => (
                                    <FormControlLabel
                                        key={language.id}
                                        value={language.id}
                                        control={<Radio/>}
                                        label={language.label}
                                    />
                                ))}
                            </FormikRadioGroup>
                        );
                    }}
                </Field>
            </CardContent>
        </Card>
    );
};

export default Languages;
