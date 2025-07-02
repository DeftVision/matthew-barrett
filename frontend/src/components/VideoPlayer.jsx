import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import AnimatedBox from '../components/AnimatedBox';
import { animationPresets } from '../config/animations.config';
import { siteConfig } from '../config/site.config';

export default function FeaturedVideo() {
    const animationKey = siteConfig.features.scrollAnimations;
    const animation = animationPresets[animationKey];

    return (
        <Box component="section" sx={{ py: 8, px: 2 }}>
            <AnimatedBox
                initial={animation.initial}
                animate={animation.animate}
                sx={{
                    maxWidth: 1200,
                    mx: 'auto',
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 2, sm: 4 },
                        borderRadius: 3,
                        backgroundColor: '#f5f5f5',
                        overflow: 'hidden',
                    }}
                >
                    {/* Subheading */}
                    <Typography
                        variant="overline"
                        sx={{
                            display: 'block',
                            textAlign: 'center',
                            fontWeight: 500,
                            color: 'secondary.main',
                            mb: 1,
                            letterSpacing: 1,
                        }}
                    >
                        Luxury Listing
                    </Typography>

                    {/* Main heading */}
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            mb: 3,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            letterSpacing: 0.5,
                            color: 'text.primary',
                        }}
                    >
                        For Sale: Now Featuring 3050 Country Crossing Road in Heber City, Utah
                    </Typography>

                    {/* Responsive 16:9 video */}
                    <Box
                        sx={{
                            position: 'relative',
                            pb: '56.25%',
                            height: 0,
                            borderRadius: 2,
                            overflow: 'hidden',
                        }}
                    >
                        <video
                            controls
                            poster="/images/featured-home/1.webp"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        >
                            <source src="/videos/your-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                </Paper>
            </AnimatedBox>
        </Box>
    );
}
