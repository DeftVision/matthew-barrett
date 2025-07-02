//frontend/src/components/blocks/ServiceGrid.jsx

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import AnimatedBox from '../AnimatedBox';
import { siteConfig } from '../../config/site.config';
import { getIconComponent } from '../../utils/getIconComponent.jsx';

export default function ServicesGrid() {
    const { services, serviceCardStyle } = siteConfig;

    return (
        <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Services</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 3,
                    mt: 4,
                }}
            >
                {services.map((service, i) => (
                    <Box
                        key={i}
                        sx={{
                            flex: '1 1 250px',
                            maxWidth: 300,
                        }}
                    >
                        <AnimatedBox>
                            <Paper sx={{ p: 0, borderRadius: 3, overflow: 'hidden' }}>
                                <Box sx={{ p: 3 }}>
                                    {serviceCardStyle === 'icon' && (
                                        <Box sx={{ mb: 2 }}>
                                            {getIconComponent(service.icon)}
                                        </Box>
                                    )}
                                    <Typography variant="h6" gutterBottom>{service.title}</Typography>
                                    <Typography variant="body2" sx={{ mb: 2 }}>{service.description}</Typography>
                                    <Typography
                                        component="a"
                                        href="#contact"
                                        sx={{
                                            color: 'secondary.main',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                            '&:hover': { textDecoration: 'underline' }
                                        }}
                                    >
                                        Get a Quote →
                                    </Typography>
                                </Box>
                            </Paper>
                        </AnimatedBox>
                    </Box>
                ))}

            </Box>
        </Box>
    );
}
