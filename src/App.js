import './App.css';
import MainForm from "./components/MainForm";
import {Container, CssBaseline} from "@mui/material";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import {useEffect} from "react";
import {useMain} from "./store/hooks/use-main";

const App = () => {
    const {mainControl} = useMain()
    useEffect(() => {
    mainControl.getLanguages();
    mainControl.getFeedback();
    }, [mainControl])
    return (
        <div className="App">
            <CssBaseline/>
            <Container maxWidth="sm">
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
    );
}

export default App;
