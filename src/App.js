import React from 'react';
import './App.css';
import MainForm from "./components/MainForm";
import {Container, CssBaseline} from "@mui/material";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import {useEffect} from "react";
import {useMain} from "./store/hooks/use-main";
import {getLoaderSelector} from "./store/mainState/selectors";
import {useSelector} from "react-redux";
import LinearLoader from "./common/Loader";
import {ThemeProvider} from "@mui/material";
import {customTheme} from "./style/muiThemes";

const App = () => {
    const {mainControl} = useMain();
    const isLoading = useSelector(getLoaderSelector);

    useEffect(() => {
        mainControl.getLanguages();
        mainControl.getFeedback();
        mainControl.getDescribe();
    }, []);

    return (
        <ThemeProvider theme={customTheme}>
            <div className="App">
                <CssBaseline/>
                <Container maxWidth="sm">
                    {isLoading && <LinearLoader/>}
                    <Box sx={{
                        bgcolor: '#fde7f7',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '15px 0 15px 0'
                    }}>
                        <Header/>
                        <MainForm/>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
