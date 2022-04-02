import React from 'react';
import CardContent from "@mui/material/CardContent";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    ThemeProvider,
    Typography
} from "@mui/material";
import {customTheme} from "../style/muiThemes";
import Card from "@mui/material/Card";
import {getFeedbackSelector} from "../store/mainState/selectors";
import {useSelector} from "react-redux";

const Feedback = ({formik}) => {
    const feedbacks = useSelector(getFeedbackSelector)
    const handleChange = (e) => {
        console.log(e);
        formik.handleChange(e);
    }
    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                {feedbacks && <ThemeProvider theme={customTheme}>
                    <Typography variant="title">{feedbacks.title}</Typography>
                </ThemeProvider>}
                <FormControl
                    required
                    error={Boolean(formik.errors)}
                    sx={{m: 1, display: 'flex',}}
                    component="fieldset"
                    variant="standard">
                    <FormGroup>
                        {feedbacks && feedbacks.questions.map((feedback, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={formik.values[feedback.id]}
                                        onChange={(e) => handleChange(e)}
                                        name={feedback.id}/>
                                }
                                label={feedback.label}
                            />
                        ))}

                        <FormHelperText>You can display an error</FormHelperText>
                    </FormGroup>
                </FormControl>
            </CardContent>
        </Card>
    );
};

export default Feedback;
