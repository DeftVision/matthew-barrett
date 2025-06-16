import React, { useState, useEffect, useRef } from 'react';
import { Box, Paper, Typography, Avatar, Stack, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBox from '../AnimatedBox';
import { siteConfig } from '../../config/site.config';
import { getTestimonialMedia } from '../../utils/getTestimonialMedia';
import { useMeasure } from '@react-hookz/web';

export default function TestimonialBlock() {
    const { displayMedia, items } = siteConfig.testimonials;
    const { expandFeedbackAnimation } = siteConfig.features;

    const [expanded, setExpanded] = useState([]);
    const [overflowing, setOverflowing] = useState([]);
    const textRefs = useRef([]);
    const COLLAPSED_HEIGHT = 72;

    useEffect(() => {
        setExpanded(Array(items.length).fill(false));
        setOverflowing(Array(items.length).fill(false));
    }, [items]);

    useEffect(() => {
        const updated = items.map((_, i) => {
            const el = textRefs.current[i];
            if (!el) return false;
            return el.scrollHeight > COLLAPSED_HEIGHT + 1;
        });
        setOverflowing(updated);
    }, [items, expanded]);

    const toggleExpand = (index) => {
        setExpanded(prev => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    return (
        <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>What People Are Saying</Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 3,
                    mt: 4,
                }}
            >
                {items.map((t, i) => {
                    const [measureRef, { height }] = useMeasure();

                    return (
                        <AnimatedBox key={i} sx={{ maxWidth: 300, flex: '1 1 250px' }}>
                            <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        height: 160,
                                        overflow: 'hidden',
                                        '&:hover .overlay-label': { opacity: 1 }
                                    }}
                                >
                                    {getTestimonialMedia(t, displayMedia)}
                                    {t.projectLabel && displayMedia === 'image' && (
                                        <Box
                                            className="overlay-label"
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                width: '100%',
                                                bgcolor: 'rgba(0,0,0,0.5)',
                                                color: '#fff',
                                                px: 2,
                                                py: 1,
                                                fontSize: 14,
                                                textAlign: 'left',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                                pointerEvents: 'none'
                                            }}
                                        >
                                            {t.projectLabel}
                                        </Box>
                                    )}
                                </Box>

                                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                                        <Avatar>{t.initials}</Avatar>
                                        <Typography variant="subtitle1">{t.name}</Typography>
                                    </Stack>

                                    {expandFeedbackAnimation ? (
                                        <motion.div
                                            animate={{ height: expanded[i] ? height : COLLAPSED_HEIGHT }}
                                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div ref={measureRef}>
                                                <Typography
                                                    ref={el => (textRefs.current[i] = el)}
                                                    variant="body2"
                                                    sx={{
                                                        lineHeight: '24px',
                                                        fontSize: '14px',
                                                    }}
                                                >
                                                    {t.feedback}
                                                </Typography>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <Typography
                                            ref={el => (textRefs.current[i] = el)}
                                            variant="body2"
                                            sx={{
                                                lineHeight: '24px',
                                                fontSize: '14px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: expanded[i] ? 'none' : 3,
                                                WebkitBoxOrient: 'vertical',
                                                transition: 'all 0.3s ease',
                                                flexGrow: 1
                                            }}
                                        >
                                            {t.feedback}
                                        </Typography>
                                    )}

                                    {(overflowing[i] || expanded[i]) && (
                                        <Button
                                            size="small"
                                            onClick={() => toggleExpand(i)}
                                            sx={{ mt: 1, alignSelf: 'flex-start', textTransform: 'none' }}
                                        >
                                            {expanded[i] ? 'Show Less' : 'Read More'}
                                        </Button>
                                    )}
                                </Box>
                            </Paper>
                        </AnimatedBox>
                    );
                })}
            </Box>
        </Box>
    );
}
