import * as React from 'react';
import Box from '@mui/material/Box';
import {useFormik} from "formik";
import {
    Button,
} from "@mui/material";
import {validationSchema} from "./utils/formUtils";
import Language from "./common/Language";
import Describe from "./common/Describe";
import Feedback from "./common/Feedback";

const MainForm = () => {
    const formik = useFormik({
        initialValues: {
            answer: '',
            javaScript: false,
            typeScript: false,
            coffeeScript: false,
            easy: false,
            normal: false,
            hard: false,
            other: false,
        },
        validate: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    console.log(formik)
    return (
        <Box
            sx={{
                '& .MuiTextField-root': {m: 1},
            }}
            autoComplete="off"
        >
            <form onSubmit={formik.handleSubmit}>
                <Language formik={formik}/>
                <Describe formik={formik}/>
                <Feedback formik={formik}/>
                <div>
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </Box>
    );
}

export default MainForm;
