import React, { useState, useEffect, useCallback } from 'react';
import { Modal, Box, IconButton, Typography, Fade } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSwipeable } from 'react-swipeable';

export default function LightboxGallery({ images = [], initialIndex = 0, onClose }) {
    const [open, setOpen] = useState(true);
    const [current, setCurrent] = useState(initialIndex);
    const [fadeKey, setFadeKey] = useState(initialIndex);

    const close = () => {
        setOpen(false);
        if (onClose) onClose();
    };

    const handleNext = useCallback(() => {
        setCurrent((prev) => {
            const next = (prev + 1) % images.length;
            setFadeKey(next);
            return next;
        });
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setCurrent((prev) => {
            const next = (prev - 1 + images.length) % images.length;
            setFadeKey(next);
            return next;
        });
    }, [images.length]);

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') close();
        },
        [handleNext, handlePrev]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,
    });

    return (
        <Modal open={open} onClose={close}>
            <Box
                {...swipeHandlers}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    bgcolor: 'rgba(0, 0, 0, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    zIndex: 1400,
                    px: 2,
                }}
            >
                <Fade in key={fadeKey} timeout={400}>
                    <Box
                        component="img"
                        src={images[current]}
                        alt={`Slide ${current + 1}`}
                        sx={{
                            maxHeight: '80vh',
                            maxWidth: '90vw',
                            borderRadius: 2,
                            boxShadow: 6,
                            objectFit: 'contain',
                        }}
                    />
                </Fade>

                <Typography
                    variant="caption"
                    sx={{
                        mt: 2,
                        color: '#ffffffcc',
                        textShadow: '0 0 4px rgba(0,0,0,0.5)',
                    }}
                >
                    {current + 1} / {images.length}
                </Typography>

                {/* Close Button */}
                <IconButton
                    onClick={close}
                    sx={{
                        position: 'fixed',
                        top: 20,
                        right: 20,
                        color: 'white',
                        bgcolor: 'rgba(0,0,0,0.3)',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/* Navigation Arrows */}
                <IconButton
                    onClick={handlePrev}
                    sx={{
                        position: 'absolute',
                        left: 20,
                        color: 'white',
                        bgcolor: 'rgba(0,0,0,0.3)',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                    }}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                    onClick={handleNext}
                    sx={{
                        position: 'absolute',
                        right: 20,
                        color: 'white',
                        bgcolor: 'rgba(0,0,0,0.3)',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                    }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Modal>
    );
}
