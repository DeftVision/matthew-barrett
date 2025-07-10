import React from 'react';
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import AnimatedBox from '../components/AnimatedBox';
import { animationPresets } from '../config/animations.config';
import { siteConfig } from '../config/site.config';
import { useDeviceType } from '../utils/useDeviceType';

export default function FeaturedVideo() {
    const animationKey = siteConfig.features.scrollAnimations;
    const animation = animationPresets[animationKey];

    const { isMobile } = useDeviceType();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box
            component="section"
            id="featured-video"
            sx={{
                py: 8,
                px: 2,
                mt: { xs: 6, sm: 8 },
                scrollMarginTop: '100px',
            }}
        >
            <AnimatedBox
                initial={animation.initial}
                animate={animation.animate}
                sx={{ maxWidth: 1200, mx: 'auto' }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 3, sm: 4 },
                        borderRadius: 3,
                        backgroundColor: '#f5f5f5',
                        overflow: 'hidden',
                    }}
                >
                    {/* Subheading */}
                    <Box sx={{ textAlign: 'center', mb: 1 }}>
                        <Typography
                            variant="overline"
                            sx={{
                                fontWeight: 600,
                                color: 'secondary.main',
                                letterSpacing: 1,
                            }}
                        >
                            Luxury Listing
                        </Typography>
                        <Box
                            sx={{
                                width: 40,
                                height: 2,
                                backgroundColor: 'secondary.main',
                                mx: 'auto',
                                mt: 0.5,
                                borderRadius: 1,
                            }}
                        />
                    </Box>

                    {/* Main heading */}
                    <Typography
                        variant={isMobile ? 'h6' : 'h5'}
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

                    {/* Responsive 16:9 video with hover effect */}
                    <Box
                        sx={{
                            position: 'relative',
                            pb: { xs: '50%', sm: '56.25%' },
                            height: 0,
                            borderRadius: 2,
                            overflow: 'hidden',
                            transition: 'box-shadow 0.3s ease',
                            boxShadow: isDesktop ? 1 : 0,
                            '&:hover': isDesktop
                                ? {
                                    boxShadow: 6,
                                }
                                : {},
                        }}
                    >
                        <video
                            controls
                            preload={isMobile ? 'metadata' : 'auto'}
                            poster="/images/featured-home/2.webp"
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
