import React from 'react';
import CardContent from "@mui/material/CardContent";
import {TextField, ThemeProvider, Typography} from "@mui/material";
import {customTheme} from "../style/muiThemes";
import Card from "@mui/material/Card";
import {Field} from "formik";

const Describe = () => {

    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                <ThemeProvider theme={customTheme}>
                    <Typography variant="title">What do you like about programming?</Typography>
                </ThemeProvider>
                <Field
                    name="description"
                    id="description"
                    label="Your answer"
                    variant="filled"
                    margin="dense"
                    fullWidth
                    component={TextField}
                    sx={{
                        '&.MuiTextField-root': {
                            margin: 0,
                        }
                    }}
                />
            </CardContent>
        </Card>
    );
};

export default Describe;
