import React from "react";
import {render} from "react-dom";
import {Formik, Field} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import {RadioGroup, TextField} from "formik-material-ui";
import * as Yup from "yup";


import "typeface-roboto";

import {onSubmit} from "./onSubmit";
import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    Grid,
    Paper, Radio, Typography
} from "@mui/material";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(5)
    },
    formControl: {
        margin: theme.spacing(3)
    }
}));

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required"),
    checkboxes: Yup.array()
        .min(2, "Too Few!")
        .max(2, "Too Many!"),
    stooge: Yup.string().required("Required"),
    toppings: Yup.array().required("Required"),
    test: Yup.string().required("Required")
});

const App = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="sm">
                <Grid>
                    <Grid item xs={12}>
                        <Paper elevation={10} className={classes.paper}>
                            <h1>Form</h1>
                            <Formik
                                onSubmit={onSubmit}
                                initialValues={{
                                    notes: "",
                                    stooge: ""
                                }}
                                validationSchema={SignupSchema}
                            >
                                {props => (
                                    <form onSubmit={props.handleSubmit}>
                                        <Grid item xs={12}>
                                            <Field
                                                name="firstName"
                                                id="firstName"
                                                label="First Name"
                                                variant="filled"
                                                margin="dense"
                                                fullWidth
                                                component={TextField}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name="lastName"
                                                id="lastName"
                                                label="Last Name"
                                                variant="filled"
                                                margin="dense"
                                                fullWidth
                                                component={TextField}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name="email"
                                                id="email"
                                                type="email"
                                                label="Email"
                                                variant="filled"
                                                margin="dense"
                                                fullWidth
                                                component={TextField}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name="toppings"
                                                id="filled-select-toppings-native"
                                                select
                                                label="Toppings"
                                                fullWidth
                                                rows={8}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                SelectProps={{
                                                    multiple: true,
                                                    native: true
                                                }}
                                                helperText="Please select your topping"
                                                margin="normal"
                                                component={TextField}
                                            >
                                                {[
                                                    "Chicken",
                                                    "Ham",
                                                    "Mushrooms",
                                                    "Cheese",
                                                    "Tuna",
                                                    "Pineapple"
                                                ].map(topping => (
                                                    <option key={topping} value={topping.toLowerCase()}>
                                                        {topping}
                                                    </option>
                                                ))}
                                            </Field>
                                            <Field
                                                name="test"
                                                id="filled-select-toppings-native"
                                                select
                                                label="Toppings"
                                                fullWidth
                                                rows={8}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                SelectProps={{
                                                    native: true
                                                }}
                                                helperText="Please select your topping"
                                                margin="normal"
                                                component={TextField}
                                            >
                                                {[
                                                    "Chicken",
                                                    "Ham",
                                                    "Mushrooms",
                                                    "Cheese",
                                                    "Tuna",
                                                    "Pineapple"
                                                ].map(topping => (
                                                    <option key={topping} value={topping.toLowerCase()}>
                                                        {topping}
                                                    </option>
                                                ))}
                                            </Field>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl
                                                required
                                                component="fieldset"
                                                className={classes.formControl}
                                            >
                                                <FormLabel component="legend">Pick two</FormLabel>
                                                <FormGroup>
                                                    <Field
                                                        type="checkbox"
                                                        name="checkboxes"
                                                        value="gilad"
                                                    >
                                                        {({field}) => (
                                                            <FormControlLabel
                                                                control={<Checkbox {...field} />}
                                                                label="Gilad Gray"
                                                            />
                                                        )}
                                                    </Field>
                                                    <Field
                                                        type="checkbox"
                                                        name="checkboxes"
                                                        value="jason"
                                                    >
                                                        {({field}) => (
                                                            <FormControlLabel
                                                                control={<Checkbox {...field} />}
                                                                label="Jason Killian"
                                                            />
                                                        )}
                                                    </Field>
                                                    <Field
                                                        type="checkbox"
                                                        name="checkboxes"
                                                        value="antoine"
                                                    >
                                                        {({field}) => (
                                                            <FormControlLabel
                                                                control={<Checkbox {...field} />}
                                                                label="Antoine Llorca"
                                                            />
                                                        )}
                                                    </Field>
                                                </FormGroup>
                                                <FormHelperText>
                                                    You can display an error
                                                </FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl
                                                component="fieldset"
                                                className={classes.formControl}
                                            >
                                                <Field
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
                                    </form>
                                )}
                            </Formik>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

const rootElement = document.getElementById("root");
render(<App/>, rootElement);
