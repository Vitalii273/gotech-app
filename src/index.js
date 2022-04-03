import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import {store} from './store';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const app = (
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route exact path='/' element={<App/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    </StrictMode>
);

root.render(app);

reportWebVitals();
