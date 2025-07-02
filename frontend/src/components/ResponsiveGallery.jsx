// src/components/ResponsiveGallery.jsx

import React, { useState } from 'react';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LightboxGallery from './LightboxGallery';

export default function ResponsiveGallery({ images = [] }) {
    const [current, setCurrent] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const visibleThumbnails = isMobile ? 1 : 3;

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleOpenLightbox = (index) => {
        setCurrent(index);
        setLightboxOpen(true);
    };

    const handleCloseLightbox = () => {
        setLightboxOpen(false);
    };

    const startIndex = current;
    const endIndex = (startIndex + visibleThumbnails) % images.length;
    const visible = images.slice(
        startIndex,
        endIndex > startIndex ? endIndex : undefined
    );

    return (
        <Box
            sx={{
                mt: { xs: 4, md: 6 },
                px: { xs: 2, sm: 4 },
                width: '100%',
                maxWidth: '1200px',
                mx: 'auto',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <IconButton
                    onClick={handlePrev}
                    sx={{
                        position: 'absolute',
                        left: { xs: 4, sm: 8 },
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
                    }}
                >
                    <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        overflow: 'hidden',
                        width: '100%',
                    }}
                >
                    {visible.map((src, i) => (
                        <Box
                            key={i}
                            component="img"
                            src={src}
                            alt={`Gallery ${i + 1}`}
                            onClick={() => handleOpenLightbox((startIndex + i) % images.length)}
                            sx={{
                                height: { xs: 220, sm: 180 },
                                width: { xs: '100%', sm: 220 },
                                objectFit: 'cover',
                                borderRadius: 2,
                                cursor: 'pointer',
                                boxShadow: 2,
                                transition: 'opacity 0.3s',
                                '&:hover': { opacity: 0.9 },
                            }}
                        />
                    ))}
                </Box>

                <IconButton
                    onClick={handleNext}
                    sx={{
                        position: 'absolute',
                        right: { xs: 4, sm: 8 },
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
                    }}
                >
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
            </Box>

            {lightboxOpen && (
                <LightboxGallery
                    images={images}
                    initialIndex={current}
                    onClose={handleCloseLightbox}
                />
            )}
        </Box>
    );
}
