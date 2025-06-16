import React from 'react';
import ResponsiveNav from '../components/nav/ResponsiveNav';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';

export default function LayoutSidebar({ children }) {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <ResponsiveNav />

            {/* Main layout area */}
            <Box
                flex={1}
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }} // stack on mobile
            >
                {/* Sidebar */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '250px' },
                        bgcolor: 'grey.200',
                        p: 2,
                    }}
                >
                    <Typography variant="h6" gutterBottom>Sidebar Area</Typography>
                    <Typography variant="body2">Add nav or filters here</Typography>
                </Box>

                {/* Main content */}
                <Box
                    sx={{
                        flex: 1,
                        p: { xs: 2, md: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {children}
                </Box>
            </Box>


            <Footer />
        </Box>
    );
}
