import React from 'react';
import {
    FormControlLabel,
    Radio,
    ThemeProvider,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {getFeedbackSelector} from "../store/mainState/selectors";
import {useSelector} from "react-redux";
import {Field} from "formik";
import FormikRadioGroup from "./FormikRadioGroup";

import {customTheme} from "../style/muiThemes";

const Feedbacks = () => {
    const feedbacks = useSelector(getFeedbackSelector)
    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                {feedbacks && <ThemeProvider theme={customTheme}>
                    <Typography variant="title" className="required">{feedbacks.title}</Typography>
                </ThemeProvider>}
                <Field name="feedbacks">
                    {({field, form}) => {
                        return (
                            <FormikRadioGroup form={form} field={field}>
                                {feedbacks && feedbacks.questions.map((feedback) => (
                                    <FormControlLabel
                                        key={feedback.id}
                                        value={feedback.id}
                                        control={<Radio/>}
                                        label={feedback.label}
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

export default Feedbacks;
