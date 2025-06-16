import React from 'react';
import ResponsiveNav from '../components/nav/ResponsiveNav';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';

export default function LayoutHeroFirst({ children }) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <ResponsiveNav />

            {/* Hero block */}
            <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, textAlign: 'center' }}>
                {/*<Typography variant="h3">Hero First Layout</Typography>*/}
            </Box>

            {/* Main content fills space */}
            <Box sx={{ flex: 1, mt: 4, px: 2 }}>
                {children}
            </Box>

            <Footer />
        </Box>
    );
}
