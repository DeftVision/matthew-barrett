import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './index';

export default function MuiThemeProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
