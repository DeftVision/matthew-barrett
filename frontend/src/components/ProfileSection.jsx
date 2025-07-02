import React from 'react';
import {
    Box,
    Stack,
    Typography,
    Button
} from '@mui/material';

export default function ProfileSection() {
    return (
        <Box
            id="realtor-profile"
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 2, sm: 3 },
                maxWidth: '1280px',
                mx: 'auto',
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    component="img"
                    src="/images/realtor.webp"
                    alt="Matthew Barrett"
                    sx={{
                        width: { xs: 140, sm: 160, md: 180 },
                        height: 'auto',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        boxShadow: 3,
                    }}
                />

                <Box sx={{ maxWidth: '640px', textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography
                        variant="overline"
                        color="secondary"
                        sx={{ letterSpacing: 1 }}
                    >
                        Luxury Real Estate Expert
                    </Typography>

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ mt: 1 }}
                    >
                        Matthew Barrett
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                        As the founder of The Barrett Luxury Collection and a trusted advisor in Utah’s premier real estate market, I bring an uncompromising level of precision, discretion, and dedication to every client I represent. Known as “Mr. Precise,” my reputation is built on delivering white-glove service, strategic insight, and seamless execution from first conversation to final signature. I specialize in luxury homes, second residences, and relocation for discerning individuals who expect more, because I do too. With a sharp eye for design, a deep understanding of market trends, and an innate ability to anticipate needs before they arise, I ensure that every detail is not only managed, but elevated. Real estate isn’t just my profession. It’s my craft.
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
