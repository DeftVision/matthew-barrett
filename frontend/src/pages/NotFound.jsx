import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Seo from '../meta/Seo';

export default function NotFound() {
    return (
        <>
            <Seo />
            <Box
                sx={{
                    textAlign: 'center',
                    py: 10,
                    maxWidth: 600,
                    mx: 'auto',
                    px: 2,
                }}
            >
                <Typography variant="h3" component="h1" gutterBottom>
                    404 – Page Not Found
                </Typography>
                <Typography variant="body1" paragraph>
                    The page you’re looking for doesn’t exist or has been moved.
                </Typography>
                <Button variant="contained" component={Link} to="/">
                    Go Home
                </Button>
            </Box>
        </>
    );
}
