import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {ThemeProvider} from "@mui/material";
import {customTheme} from "../style/muiThemes";

const Header = () => {
    return (
        <Card sx={{width: '50ch'}}>
            <CardContent>
                <ThemeProvider theme={customTheme}>
                    <Typography variant="title">
                        GoTech Questionnaire
                    </Typography>
                    <Typography variant="field" component="div">
                        Show me what you got
                    </Typography>
                    <Typography variant="required">
                        *Required
                    </Typography>
                </ThemeProvider>
            </CardContent>
        </Card>
    );
}

export default Header;
