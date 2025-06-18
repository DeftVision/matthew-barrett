import React, { useState } from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function LightboxGallery({ images = [] }) {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const handleOpen = (index) => {
        setCurrent(index);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
            }}
        >
            {images.map((src, index) => (
                <Box
                    key={index}
                    sx={{
                        flex: '1 1 calc(33.333% - 1rem)',
                        maxWidth: 'calc(33.333% - 1rem)',
                        minWidth: '200px',
                        aspectRatio: '3 / 2',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 2,
                        boxShadow: 1,
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.9 },
                    }}
                    onClick={() => handleOpen(index)}
                >
                    <img
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        loading="lazy"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            ))}

            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        outline: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                    }}
                >
                    <IconButton onClick={handlePrev} sx={{ color: 'white' }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <img
                        src={images[current]}
                        alt={`Large ${current + 1}`}
                        style={{ maxHeight: '90vh', maxWidth: '80vw', borderRadius: 4 }}
                    />

                    <IconButton onClick={handleNext} sx={{ color: 'white' }}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Modal>
        </Box>
    );
}
