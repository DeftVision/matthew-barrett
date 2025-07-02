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
                    3050 Country Crossing Rd, Heber City
                </Typography>

                <ResponsiveGallery images={images} />

                <Box mt={4} display="flex" justifyContent="center">
                    <Card sx={{ maxWidth: '960px', width: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Luxury 5-Bedroom 6-Bath Estate
                            </Typography>
                            <Typography variant="body1">
                                *Seller and Creative Financing Available* MUST SEE FULLY INDEPENDENT ADU, thoughtfully designed on one level with its own private entrance for easy access.
                                Complete with a full-size kitchen equipped with high-end appliances and a spacious living area, it's perfect for extended family, guests, or rental opportunities.
                                Discover this stunning 5 bed 6 bath 6,400 sq. ft. custom-built luxury home perfectly located in one of the most desired communities in Heber City.
                            </Typography>

                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    Just 10 minutes from the new Mayflower Ski Resort.
                                    Enjoy breathtaking views of Mount Timpanogos from many angles of the home. Very private home with an adjacent lot that can never be built on.
                                    Designed with high-end finishes throughout, this home features heated floors for ultimate comfort and a spacious accessory dwelling unit (ADU) for added versatility.
                                    The massive 6-car garage, complete with sleek epoxy flooring, offers ample space for vehicles and storage.
                                    Nestled in a desirable location with quick access to world-class skiing and outdoor recreation, this estate is a true retreat that combines elegance, functionality, and unparalleled mountain living.
                                    Don't miss the opportunity to make this one-of-a-kind property your own! Square footage figures are provided as a courtesy estimate only and were obtained from building plans.
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
