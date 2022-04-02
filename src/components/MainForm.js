import * as React from 'react';
import Box from '@mui/material/Box';
import Languages from "../common/Languages";
import Describe from "../common/Describe";
import {validateForm} from "../utils/formUtils";
import {Form, Formik} from "formik";
import {Button} from "@mui/material";
import Feedbacks from "../common/Feedback";

const MainForm = () => {
    const onSubmit = (values) => {
        alert(`You said "${values.radioGroup, values.feedbacks}!"`);
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
                    feedbacks: "",
                    description:"",
                }}
                validate={validateForm}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        <Languages/>
                        <Describe/>
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
