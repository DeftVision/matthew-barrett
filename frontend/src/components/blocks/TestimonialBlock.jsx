import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Paper,
    Typography,
    Button,
    Grid,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedBox from '../AnimatedBox';
import { siteConfig } from '../../config/site.config';
import { useMeasure } from '@react-hookz/web';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function TestimonialBlock() {
    const { items } = siteConfig.testimonials;
    const { expandFeedbackAnimation } = siteConfig.features;
    const [expanded, setExpanded] = useState([]);
    const [overflowing, setOverflowing] = useState([]);
    const textRefs = useRef([]);
    const COLLAPSED_HEIGHT = 96;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        setExpanded(Array(items.length).fill(false));
        setOverflowing(Array(items.length).fill(false));
    }, [items]);

    useEffect(() => {
        const updated = items.map((_, i) => {
            const el = textRefs.current[i];
            return el ? el.scrollHeight > COLLAPSED_HEIGHT + 1 : false;
        });
        setOverflowing(updated);
    }, [items]);

    const toggleExpand = (index) => {
        setExpanded((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    return (
        <Box
            id="testimonials"
            component="section"
            sx={{ py: 8, px: 2 }}
        >
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontFamily: 'Playfair Display', fontWeight: 600 }}
            >
                What People Are Saying
            </Typography>

            <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{
                    mt: 4,
                    maxWidth: '1200px',
                    mx: 'auto',
                    px: 2,
                }}
            >
                {items.map((t, i) => {
                    const [measureRef, { height }] = useMeasure();

                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={i}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <AnimatedBox sx={{ width: '100%', maxWidth: 350 }}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <FormatQuoteIcon
                                        sx={{
                                            fontSize: 32,
                                            color: 'text.secondary',
                                            mb: 1,
                                            opacity: 0.6,
                                        }}
                                    />

                                    {expandFeedbackAnimation ? (
                                        <motion.div
                                            animate={{ height: expanded[i] ? height : COLLAPSED_HEIGHT }}
                                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div ref={measureRef}>
                                                <Typography
                                                    ref={(el) => (textRefs.current[i] = el)}
                                                    variant="body2"
                                                    sx={{
                                                        fontSize: '14px',
                                                        textAlign: 'left',
                                                        whiteSpace: 'pre-line',
                                                    }}
                                                >
                                                    {t.feedback}
                                                </Typography>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <Typography
                                            ref={(el) => (textRefs.current[i] = el)}
                                            variant="body2"
                                            sx={{
                                                fontSize: '14px',
                                                textAlign: 'left',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: expanded[i] ? 'none' : 3,
                                                WebkitBoxOrient: 'vertical',
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            {t.feedback}
                                        </Typography>
                                    )}

                                    <Typography
                                        variant="caption"
                                        sx={{
                                            mt: 2,
                                            fontStyle: 'italic',
                                            textAlign: 'left',
                                            color: 'text.secondary',
                                        }}
                                    >
                                        — {t.name}, via Zillow
                                    </Typography>

                                    {(overflowing[i] || expanded[i]) && (
                                        <Button
                                            size="small"
                                            onClick={() => toggleExpand(i)}
                                            sx={{
                                                mt: 1,
                                                alignSelf: 'flex-start',
                                                textTransform: 'none',
                                                fontWeight: 600,
                                                px: 0,
                                                color: 'text.primary',
                                                '&:hover': {
                                                    color: theme.palette.primary.main,
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                        >
                                            {expanded[i] ? 'Show Less' : 'Read More'}
                                        </Button>
                                    )}
                                </Paper>
                            </AnimatedBox>
                        </Grid>
                    );
                })}
            </Grid>

        </Box>
    );
}
