import React from 'react';
import CardContent from "@mui/material/CardContent";
import {ThemeProvider, Typography} from "@mui/material";
import {customTheme} from "../style/muiThemes";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";

const Describe = ({formik}) => {
    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                <ThemeProvider theme={customTheme}>
                    <Typography variant="title">What do you like about programming?</Typography>
                </ThemeProvider>
                <TextField
                    fullWidth
                    id="answer"
                    name="answer"
                    label="Your answer"
                    value={formik.values.answer}
                    onChange={formik.handleChange}
                    variant="filled"
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
