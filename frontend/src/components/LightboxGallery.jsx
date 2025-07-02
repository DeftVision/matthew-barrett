// src/components/LightboxGallery.jsx

import React, { useState, useEffect } from 'react';
import { Modal, Box, IconButton, Typography } from '@mui/material';
import { useSwipeable } from 'react-swipeable';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

export default function LightboxGallery({ images = [], open, onClose, startIndex = 0 }) {
    const [current, setCurrent] = useState(startIndex);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (open) setCurrent(startIndex);
    }, [open, startIndex]);

    const handleNext = () => {
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length);
            setAnimating(false);
        }, 150);
    };

    const handlePrev = () => {
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev - 1 + images.length) % images.length);
            setAnimating(false);
        }, 150);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                {...handlers}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    bgcolor: 'rgba(0, 0, 0, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1300,
                }}
            >
                {/* Close Button */}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 24,
                        right: 24,
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
                        zIndex: 1400,
                    }}
                    aria-label="Close"
                >
                    <CloseIcon />
                </IconButton>

                {/* Slide Counter */}
                <Typography
                    variant="body2"
                    sx={{
                        position: 'absolute',
                        top: 24,
                        left: 24,
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        fontWeight: 500,
                    }}
                >
                    {current + 1} of {images.length}
                </Typography>

                {/* Previous Arrow */}
                <IconButton onClick={handlePrev} sx={{ color: 'white', position: 'absolute', left: 16 }}>
                    <ArrowBackIosNewIcon fontSize="large" />
                </IconButton>

                {/* Image */}
                <img
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    style={{
                        maxHeight: '90%',
                        maxWidth: '90%',
                        borderRadius: '8px',
                        boxShadow: '0 0 24px rgba(255, 255, 255, 0.2)',
                        opacity: animating ? 0 : 1,
                        transition: 'opacity 0.3s ease',
                    }}
                />

                {/* Next Arrow */}
                <IconButton onClick={handleNext} sx={{ color: 'white', position: 'absolute', right: 16 }}>
                    <ArrowForwardIosIcon fontSize="large" />
                </IconButton>
            </Box>
        </Modal>
    );
}
