import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
    FormControl,
    FormControlLabel,
    FormLabel, Radio,
    RadioGroup,
    ThemeProvider,
    Typography
} from "@mui/material";
import {Field} from "formik";
import {customTheme} from "../style/muiThemes";
import {useSelector} from "react-redux";
import {getLanguagesSelector} from "../store/mainState/selectors";

const Languages = () => {
    const languages = useSelector(getLanguagesSelector);
    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                <FormControl
                    component="fieldset"
                ><Field
                    name="stooge"
                    label="Best Stooge"
                    component={RadioGroup}
                >
                    <FormLabel component="legend">
                        {languages &&
                            <ThemeProvider theme={customTheme}>
                                <Typography variant="title">{languages.title}</Typography>
                            </ThemeProvider>}
                    </FormLabel>
                    {languages && languages.questions.map((language, index) => (
                        <FormControlLabel
                            key={index}
                            value={language.id}
                            control={<Radio/>}
                            label={language.label}
                        />
                    ))}
                </Field>}
                </FormControl>
            </CardContent>
        </Card>
    );
};

export default Languages;
