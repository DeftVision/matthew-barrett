import React from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';

export default function ProfileSection() {
    return (
        <Box
            id="realtor-profile"
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                px: 2,
                maxWidth: '1200px',
                mx: 'auto',
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={6}
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    component="img"
                    src="/images/realtor.webp"
                    alt="Matthew Barrett"
                    sx={{
                        width: { xs: 160, sm: 180, md: 200 },
                        height: 'auto',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        boxShadow: 3,
                    }}
                />

                <Box maxWidth="600px">
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Matthew Barrett
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Nam eu illum tritani gubergren. Etiam possim admodum ut pri, mel explicari temporibus necessitatibus ad, harum fabulas reformidans usu id. Quo ut dolores eloquentiam, posse intellegam qui an.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="#contact"
                        sx={{ mt: 2, backgroundColor: '#D4AF37', '&:hover': { backgroundColor: '#b8912c' } }}
                    >
                        Contact Matthew
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}
