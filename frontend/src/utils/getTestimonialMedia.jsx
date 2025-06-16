import React from 'react';
import { getIconComponent } from './getIconComponent';
import { Box } from '@mui/material'

export const getTestimonialMedia = (testimonial, displayMedia) => {
    if (displayMedia === 'image' && testimonial.image) {
        return (
            <Box
                component="img"
                src={testimonial.image}
                alt={`${testimonial.name}'s project`}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)'
                    }
                }}
            />
        );
    }

    if (displayMedia === 'logo' && testimonial.logo) {
        return (
            <Box
                component="img"
                src={testimonial.logo}
                alt={`${testimonial.name} logo`}
                sx={{ maxHeight: 64, mx: 'auto', my: 2 }}
            />
        );
    }

    if (displayMedia === 'icon' && testimonial.icon) {
        return (
            <Box sx={{ my: 2, textAlign: 'center' }}>
                {getIconComponent(testimonial.icon)}
            </Box>
        );
    }

    return null;
};
