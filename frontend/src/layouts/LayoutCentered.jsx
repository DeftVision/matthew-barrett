import React from 'react';
import ResponsiveNav from '../components/nav/ResponsiveNav';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

export default function LayoutCentered({ children }) {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <ResponsiveNav />

            <Box sx={{ flex: 1, py: 6, px: 2, textAlign: 'center' }}>
                {children}
            </Box>

            <Footer />
        </Box>
    );
}
