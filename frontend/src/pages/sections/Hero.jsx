import React from 'react';
import {Box, Typography, Button, Container} from '@mui/material';

export default function Hero() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: { xs: 8, md: 12 },
                textAlign: 'center',
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h2" gutterBottom>
                    Barrett Luxury Collection
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 3 }}>
                    Exceptional homes deserve an exceptional approach.
                </Typography>
                <Button variant="contained" color="secondary" href="#gallery">
                    Schedule a FREE private consultation and experience the difference.
                </Button>
            </Container>
        </Box>
    );
}
