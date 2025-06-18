import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Collapse } from '@mui/material';
import ResponsiveGallery from '../components/ResponsiveGallery';
import AnimatedBox from '../components/AnimatedBox';

const images = Array.from({ length: 21 }, (_, i) => `/images/featured-home/${i + 1}.webp`);

export default function FeaturedGallery() {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded((prev) => !prev);

    return (
        <Box component="section" id="gallery" sx={{ py: 8 }}>
            <AnimatedBox>
                <Typography variant="h4" gutterBottom align="center">
                    Featured Property at 123 Luxe Ln
                </Typography>

                <ResponsiveGallery images={images} />

                <Box mt={4} display="flex" justifyContent="center">
                    <Card sx={{ maxWidth: '960px', width: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Luxury 4-Bedroom Estate
                            </Typography>
                            <Typography variant="body1">
                                This meticulously maintained home offers an open floor plan, custom finishes, and abundant natural light.
                            </Typography>

                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    Featuring 4 spacious bedrooms, 3.5 baths, a chef’s kitchen, a home office, and a three-car garage — this
                                    property combines comfort with modern elegance. The backyard includes a covered patio, heated pool, and
                                    professionally landscaped garden perfect for entertaining.
                                </Typography>
                            </Collapse>

                            <Button onClick={toggleExpanded} sx={{ mt: 2 }}>
                                {expanded ? 'Show Less' : 'Learn More'}
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </AnimatedBox>
        </Box>
    );
}
