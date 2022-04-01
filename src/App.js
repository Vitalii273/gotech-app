import './App.css';
import MainForm from "./components/MainForm";
import {Container, CssBaseline} from "@mui/material";
import Header from "./components/Header";
import Box from "@mui/material/Box";

const App = () => {
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
