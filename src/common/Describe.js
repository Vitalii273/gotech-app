import React from 'react';
import CardContent from "@mui/material/CardContent";
import {ThemeProvider, Typography} from "@mui/material";
import {customTheme} from "../style/muiThemes";
import Card from "@mui/material/Card";
import {Field} from "formik";
import {getDescriptionSelector} from "../store/mainState/selectors";
import {useSelector} from "react-redux";

const Describe = () => {
    const describeQuestion = useSelector(getDescriptionSelector)

    return describeQuestion && describeQuestion?.questions.map((question, index) =>(
        <Card key={index} sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                <ThemeProvider theme={customTheme}>
                    <Typography variant="title">{question}</Typography>
                </ThemeProvider>
                <Field id="answer" name="answer" placeholder="Your answer"/>
            </CardContent>
        </Card>
    ))
};

export default Describe;
