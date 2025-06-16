import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import AnimatedBox from '../AnimatedBox';

export default function HeroStandard() {
    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <AnimatedBox>
                            <Typography variant="h3" gutterBottom>
                                More Than Just a Website
                            </Typography>
                            <Typography variant="body1">
                                This hero has space for an image or call-to-action on the right.
                            </Typography>
                        </AnimatedBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ bgcolor: 'grey.200', height: 200 }} /> {/* Placeholder for image */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
