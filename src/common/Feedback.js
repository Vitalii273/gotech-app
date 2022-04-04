import React, {memo, useState} from 'react';
import {
    FormControlLabel,
    Radio,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {getFeedbackSelector} from "../store/mainState/selectors";
import {useSelector} from "react-redux";
import {Field} from "formik";
import FormikRadioGroup from "./FormikRadioGroup";

const Feedbacks = memo(() => {
    const feedbacks = useSelector(getFeedbackSelector)
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const renderOtherAnswerField = (id) => {
        return id === value && value === "other" && (
            <Field id="otherAnswer" name="otherAnswer" placeholder="Your answer"/>
        )
    };

    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                {feedbacks &&
                    <Typography variant="title" className="required">
                        {feedbacks.title}
                    </Typography>
                }
                <Field name="feedbacks">
                    {({field, form}) => {
                        return (
                            <FormikRadioGroup form={form} field={field}>
                                {feedbacks && feedbacks?.questions.map((feedback) => (
                                    <React.Fragment key={feedback.id}>
                                        <FormControlLabel
                                            value={feedback.id}
                                            control={<Radio/>}
                                            label={feedback.label}
                                            onChange={(e) => handleChange(e)}
                                        />
                                        {renderOtherAnswerField(feedback.id)}
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

export default Feedbacks;
