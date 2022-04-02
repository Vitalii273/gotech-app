import * as React from 'react';
import Box from '@mui/material/Box';
import {Field, Formik, Form} from "formik";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    Grid, Radio, Typography
} from "@mui/material";
import {RadioGroup, TextField} from "formik-mui";
import {validationSchema} from "../utils/formUtils";
import Language from "../common/Language";
import Describe from "../common/Describe";
import Feedback from "../common/Feedback";
import {getInitialValuesSelector} from "../store/mainState/selectors";
import {useSelector} from "react-redux";
import feedback from "../common/Feedback";
import {onSubmit} from "./onSubmit";
import * as Yup from "yup";

const MainForm = () => {
    const initialValues = useSelector(getInitialValuesSelector);


    const SignupSchema = Yup.object().shape({
        // checkboxes: Yup.array()
        //     .min(2, "Too Few!")
        //     .max(2, "Too Many!"),
        stooge: Yup.string().required("Required"),
    })

    return (
        <Box
            sx={{
                '& .MuiTextField-root': {m: 1},
            }}
            autoComplete="off"
        >
            <Formik
                onSubmit={onSubmit}
                initialValues={{
                    stooge: "",
                    notes:""
                }}
                validationSchema={SignupSchema}
            >
                {props => (
                    <Form onSubmit={props.handleSubmit}>
                        <Grid item xs={12}>
                            <FormControl
                                component="fieldset"
                            >
                                <Field
                                    id="stooge"
                                    name="stooge"
                                    label="Best Stooge"
                                    component={RadioGroup}
                                >
                                    <FormLabel component="legend">Best Stooge</FormLabel>
                                    <FormControlLabel
                                        value="larry"
                                        control={<Radio/>}
                                        label="Larry"
                                    />
                                    <FormControlLabel
                                        value="moe"
                                        control={<Radio/>}
                                        label="Moe"
                                    />
                                    <FormControlLabel
                                        value="curly"
                                        control={<Radio/>}
                                        label="Curly"
                                    />
                                </Field>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="notes"
                                id="filled-textarea"
                                label="Notes"
                                placeholder="Notes"
                                multiline
                                fullWidth
                                margin="normal"
                                variant="filled"
                                component={TextField}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                        <Typography variant="caption" display="block" gutterBottom>
                            Errors
                        </Typography>
                        <pre>{JSON.stringify(props.errors, null, 2)}</pre>
                        <Typography variant="caption" display="block" gutterBottom>
                            Values
                        </Typography>
                        <pre>{JSON.stringify(props.values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default MainForm;
