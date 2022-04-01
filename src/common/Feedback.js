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

const Feedback = ({formik}) => {
    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                <ThemeProvider theme={customTheme}>
                    <Typography variant="title">How was the assigment?</Typography>
                </ThemeProvider>
                <FormControl
                    required
                    error={Boolean(formik.errors)}
                    sx={{m: 1, display: 'flex',}}
                    component="fieldset"
                    variant="standard">
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.easy}
                                    onChange={formik.handleChange}
                                    name="easy"/>
                            }
                            label="Easy"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.normal}
                                    onChange={formik.handleChange}
                                    name="normal"/>
                            }
                            label="Normal"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.hard}
                                    onChange={formik.handleChange}
                                    name="hard"/>
                            }
                            label="Hard"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.other}
                                    onChange={formik.handleChange}
                                    name="other"/>
                            }
                            label="Other"
                        />
                        <FormHelperText>You can display an error</FormHelperText>
                    </FormGroup>
                </FormControl>
            </CardContent>
        </Card>
    );
};

export default Feedback;
