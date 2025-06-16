import './styles/globals.css'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from './theme/MuiThemeProvider';
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HelmetProvider>
            <Router>
                <MuiThemeProvider>
                    <App/>
                </MuiThemeProvider>
            </Router>
        </HelmetProvider>
    </StrictMode>,
)
