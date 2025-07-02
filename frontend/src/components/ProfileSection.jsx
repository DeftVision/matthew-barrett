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

                <Box
                    sx={{
                        maxWidth: '600px',
                        textAlign: { xs: 'center', md: 'left' }, // ✅ Responsive alignment
                    }}
                >
                    <Typography
                        variant="overline"
                        color="secondary"
                        sx={{ letterSpacing: 1 }}
                    >
                        Luxury Real Estate Expert
                    </Typography>

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ mt: 1 }}
                    >
                        Matthew Barrett
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7, mt: 1 }}
                    >
                        I take the time to really understand what you’re looking for, then work hard to help you find the right fit.
                        I keep things simple, stay responsive, and make sure the process feels clear and comfortable from start to finish.
                        Whether you're buying your first place or your next one, I'm here to help.
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        href="#contact"
                        sx={{
                            mt: 3,
                            backgroundColor: '#D4AF37',
                            fontWeight: 'bold',
                            '&:hover': { backgroundColor: '#b8912c' },
                        }}
                    >
                        Contact Matthew
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}
