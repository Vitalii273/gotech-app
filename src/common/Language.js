import React from 'react';
import Card from "@mui/material/Card";
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

const Language = ({formik}) => {
    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                <ThemeProvider theme={customTheme}>
                    <Typography variant="title">What language is your favorite?</Typography>
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
                                    checked={formik.values.javaScript}
                                    onChange={formik.handleChange}
                                    name="javaScript"/>
                            }
                            label="JavaScript"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.typeScript}
                                    onChange={formik.handleChange}
                                    name="typeScript"/>
                            }
                            label="TypeScript"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formik.values.coffeeScript}
                                    onChange={formik.handleChange}
                                    name="coffeeScript"/>
                            }
                            label="Coffeescript"
                        />
                        <FormHelperText>You can display an error</FormHelperText>
                    </FormGroup>
                </FormControl>
            </CardContent>
        </Card>
    );
};

export default Language;
