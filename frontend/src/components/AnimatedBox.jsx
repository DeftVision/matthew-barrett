import React from 'react';
import { Box } from '@mui/material';
import { useInView } from '../config/features/animations/useInView.js';
import { siteConfig } from '../config/site.config.js';
import { animationPresets } from '../config/animations.config.js';

export default function AnimatedBox({ children, animation = null, sx = {}, ...props }) {
    const [ref, isInView] = useInView();
    const animationStyle = animation || siteConfig.features.scrollAnimations;

    if (!animationStyle || !animationPresets[animationStyle]) {
        return <Box sx={sx} {...props}>{children}</Box>;
    }

    const { initial, animate } = animationPresets[animationStyle];
    const appliedStyles = isInView ? animate : initial;

    return (
        <Box ref={ref} sx={{ ...sx, ...appliedStyles }} {...props}>
            {children}
        </Box>
    );
}
