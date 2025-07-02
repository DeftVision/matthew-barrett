// src/components/FeaturedGallery.jsx

import React, { useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Collapse,
    useTheme,
    useMediaQuery
} from '@mui/material';
import ResponsiveGallery from '../components/ResponsiveGallery';
import AnimatedBox from '../components/AnimatedBox';
import { animationPresets } from '../config/animations.config';
import { siteConfig } from '../config/site.config';

const images = Array.from(
    { length: 21 },
    (_, i) => `/images/featured-home/${i + 1}.webp`
);

export default function FeaturedGallery() {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded((prev) => !prev);

    const animationKey = siteConfig.features.scrollAnimations;
    const animation = animationPresets[animationKey];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            component="section"
            id="gallery"
            sx={{
                py: { xs: 6, sm: 8, md: 10 },
                px: { xs: 2, sm: 3, md: 4 },
                maxWidth: '1280px',
                mx: 'auto'
            }}
        >
            {/* Section Heading */}
            <AnimatedBox
                initial={animation.initial}
                animate={animation.animate}
                sx={{ textAlign: 'center', mb: 2 }}
            >
                <Typography
                    variant={isMobile ? 'h6' : 'h5'}
                    sx={{
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase',
                    }}
                >
                    Featured
                </Typography>

            </AnimatedBox>

            {/* Responsive Gallery */}
            <AnimatedBox
                initial={animation.initial}
                animate={animation.animate}
                sx={{ display: 'flex', justifyContent: 'center' }}
            >
                <ResponsiveGallery images={images} />
            </AnimatedBox>

            {/* Description Card */}
            <AnimatedBox
                initial={animation.initial}
                animate={animation.animate}
                sx={{
                    mt: { xs: 5, sm: 6 },
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Card
                    elevation={2}
                    sx={{
                        maxWidth: '960px',
                        width: '100%',
                        px: { xs: 2, sm: 3 },
                        py: 3
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            Luxury 5-Bedroom 6-Bath Estate
                        </Typography>

                        <Typography variant="body1" color="text.primary">
                            <strong>*Seller and Creative Financing Available*</strong> MUST SEE FULLY INDEPENDENT ADU, thoughtfully designed on one level with its own private entrance for easy access. Complete with a full-size kitchen equipped with high-end appliances and a spacious living area, it's perfect for extended family, guests, or rental opportunities. Discover this stunning 5 bed 6 bath 6,400 sq. ft. custom-built luxury home perfectly located in one of the most desired communities in Heber City.
                        </Typography>

                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                Just 10 minutes from the new Mayflower Ski Resort. Enjoy breathtaking views of Mount Timpanogos from many angles of the home. Very private home with an adjacent lot that can never be built on. Designed with high-end finishes throughout, this home features heated floors for ultimate comfort and a spacious accessory dwelling unit (ADU) for added versatility. The massive 6-car garage, complete with sleek epoxy flooring, offers ample space for vehicles and storage.
                                <br /><br />
                                Nestled in a desirable location with quick access to world-class skiing and outdoor recreation, this estate is a true retreat that combines elegance, functionality, and unparalleled mountain living. Don't miss the opportunity to make this one-of-a-kind property your own!
                            </Typography>
                        </Collapse>

                        <Button onClick={toggleExpanded} sx={{ mt: 2 }}>
                            {expanded ? 'Show Less' : 'Learn More'}
                        </Button>
                    </CardContent>
                </Card>
            </AnimatedBox>
        </Box>
    );
}
