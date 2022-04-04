import React, {memo} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Header = memo(() => {
    return (
        <Card sx={{width: '50ch'}}>
            <CardContent>
                    <Typography variant="title">
                        GoTech Questionnaire
                    </Typography>
                    <Typography variant="field" component="div">
                        Show me what you got
                    </Typography>
                    <Typography variant="required">
                        *Required
                    </Typography>
            </CardContent>
        </Card>
    );
});

export default Header;
