import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import AnimatedBox from '../AnimatedBox';

export default function HeroCentered() {
    return (
        <Box sx={{ py: 8, textAlign: 'center' }}>
            <Container maxWidth="md">
                <AnimatedBox>
                    <Typography variant="h2" gutterBottom>
                        Welcome to Our Website
                    </Typography>
                    <Typography variant="h5">
                        This is a centered hero block — ideal for landing pages and intros.
                    </Typography>
                </AnimatedBox>
            </Container>
        </Box>
    );
}
