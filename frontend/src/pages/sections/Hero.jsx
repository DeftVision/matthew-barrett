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
                    Barrett Collection
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 3 }}>
                    Where square footage meets emotional damage.
                </Typography>
                <Button variant="contained" color="secondary" href="#gallery">
                    Explore Now
                </Button>
            </Container>
        </Box>
    );
}
