import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveGallery({ images }) {
    const [start, setStart] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const visibleCount = 3;
    const imageWidth = isMobile ? 110 : 290;

    const handleNext = () => {
        if (start + visibleCount < images.length) setStart(start + 1);
    };

    const handlePrev = () => {
        if (start > 0) setStart(start - 1);
    };

    const showNav = images.length > visibleCount;

    return (
        <Box
            sx={{
                px: { xs: 2, sm: 3, md: 0 }, // ✅ Add horizontal padding on smaller screens
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {showNav && (
                <IconButton onClick={handlePrev} disabled={start === 0} sx={{ mr: 1 }}>
                    <ArrowBackIos fontSize="small" />
                </IconButton>
            )}

            <Box
                sx={{
                    overflow: 'hidden',
                    width: isMobile ? 330 : visibleCount * imageWidth,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        transform: `translateX(-${start * imageWidth}px)`,
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    {images.map((src, i) => (
                        <Box
                            key={i}
                            component="img"
                            src={src}
                            alt={`Home ${i + 1}`}
                            loading="lazy"
                            sx={{
                                width: isMobile ? '100px' : '280px',
                                height: isMobile ? '80px' : '180px',
                                objectFit: 'cover',
                                borderRadius: 2,
                                flexShrink: 0,
                                scrollSnapAlign: 'start',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    zIndex: 1,
                                    boxShadow: 3,
                                },
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {showNav && (
                <IconButton
                    onClick={handleNext}
                    disabled={start + visibleCount >= images.length}
                    sx={{ ml: 1 }}
                >
                    <ArrowForwardIos fontSize="small" />
                </IconButton>
            )}
        </Box>
    );
}
