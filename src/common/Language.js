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
import {useSelector} from "react-redux";
import {getLanguagesSelector} from "../store/mainState/selectors";

const Language = ({formik}) => {
    const languages = useSelector(getLanguagesSelector);
    console.log(languages)
    return (
        <Card sx={{width: '50ch', marginTop: '15px'}}>
            <CardContent>
                {languages && <ThemeProvider theme={customTheme}>
                    <Typography variant="title">{languages.title}</Typography>
                </ThemeProvider>}
                <FormControl
                    required
                    error={Boolean(formik.errors)}
                    sx={{m: 1, display: 'flex',}}
                    component="fieldset"
                    variant="standard">
                    <FormGroup>
                        {languages && languages.questions.map((language, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={formik.values[language.id]}
                                        onChange={formik.handleChange}
                                        name={language.id}/>
                                }
                                label={language.label}
                            />
                        ))}
                        <FormHelperText>You can display an error</FormHelperText>
                    </FormGroup>
                </FormControl>
            </CardContent>
        </Card>
    );
};

export default Language;
