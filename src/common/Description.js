import React, {memo} from 'react';
import CardContent from "@mui/material/CardContent";
import {Typography} from "@mui/material";
import Card from "@mui/material/Card";
import {Field} from "formik";
import {getDescriptionSelector} from "../store/mainState/selectors";
import {useSelector} from "react-redux";

const Description = memo(() => {
    const describeQuestion = useSelector(getDescriptionSelector)

    return describeQuestion && describeQuestion?.questions.map((question, index) => (
        <Card key={index} sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                <Typography variant="title">{question}</Typography>
                <Field id="description" name="description" placeholder="Your answer"/>
            </CardContent>
        </Card>
    ))
});

export default Description;
