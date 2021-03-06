import * as React from 'react';
import Box from '@mui/material/Box';
import Description from "../common/Description";
import Languages from "../common/Languages";
import {validateForm} from "../utils/formUtils";
import {Form, Formik} from "formik";
import {Button} from "@mui/material";
import Feedbacks from "../common/Feedback";
import './index.css'

const MainForm = () => {
    const onSubmit = (values) => {
        alert(`You said "${JSON.stringify(values, null, 2)}!"`);
    };

    return (
        <Box
            sx={{
                '& .MuiTextField-root': {m: 1},
            }}
            autoComplete="off"
        >
            <Formik
                initialValues={{
                    languages: "",
                    additional: "",
                    feedbacks: "",
                    description: "",
                    otherAnswer: "",
                }}
                validate={validateForm}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        <Languages/>
                        <Description/>
                        <Feedbacks/>
                        <div className="activation-buttons">
                            <Button color="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default MainForm;
