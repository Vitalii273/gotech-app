import {createTheme} from "@mui/material";

export const customTheme = createTheme({
    typography: {
        header: {
            fontSize: '30px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },
        title: {
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },
        field: {
            fontSize: '10px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },
        required: {
            fontSize: '10px',
            color: 'red',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        }

    }
})
