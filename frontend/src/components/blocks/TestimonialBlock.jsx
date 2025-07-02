import React, { useState, useEffect, useRef } from 'react';
import { Box, Paper, Typography, Stack, Button } from '@mui/material';
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
    }, [items]);

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
                            <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <FormatQuoteIcon
                                    sx={{
                                        fontSize: 32,
                                        alignSelf: 'center',
                                        color: 'text.secondary',
                                        mb: 1
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
                                                ref={el => (textRefs.current[i] = el)}
                                                variant="body2"
                                                sx={{
                                                    fontSize: '14px',
                                                    textAlign: 'left',
                                                    whiteSpace: 'pre-line'
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
                                            fontSize: '14px',
                                            textAlign: 'left',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: expanded[i] ? 'none' : 3,
                                            WebkitBoxOrient: 'vertical',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {t.feedback}
                                    </Typography>
                                )}

                                <Typography
                                    variant="caption"
                                    sx={{
                                        mt: 1,
                                        fontStyle: 'italic',
                                        textAlign: 'left',
                                        color: 'text.secondary'
                                    }}
                                >
                                    — {t.name}, via Zillow
                                </Typography>

                                {(overflowing[i] || expanded[i]) && (
                                    <Button
                                        size="small"
                                        onClick={() => toggleExpand(i)}
                                        sx={{ mt: 1, alignSelf: 'flex-start', textTransform: 'none' }}
                                    >
                                        {expanded[i] ? 'Show Less' : 'Read More'}
                                    </Button>
                                )}
                            </Paper>
                        </AnimatedBox>
                    );
                })}
            </Box>
        </Box>
    );
}
