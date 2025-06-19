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
                                I have no strong feelings one way or the other. I’m 40% zinc! 40% dolomite!
                                40% luck, 40% skill, 20% concentrated power of will. We're whalers on the moon, we carry a harpoon.
                                I don’t know what you did, Fry, but once again, you screwed up in the most incredible way. Leela, I find your lack of depth disturbing.
                                And by the way... I'm not drunk, I'm just exhausted from drinking all night.
                            </Typography>

                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear.
                                    I didn't even know we were calling him Big Bear.
                                    We never had the chance to. Maybe it was the eleven months he spent in the womb.
                                    The doctor said there were claw marks on the walls of her uterus. Yeah, well, have you seen the new Mustang?
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
