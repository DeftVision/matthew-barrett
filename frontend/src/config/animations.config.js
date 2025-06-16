// config/animations.config.js
export const animationPresets = {
    subtle: {
        initial: {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        animate: {
            opacity: 1,
            transform: 'none',
            transition: 'all 0.6s ease-out',
        },
    },
    bold: {
        initial: {
            opacity: 0,
            transform: 'scale(0.9) translateY(40px)',
        },
        animate: {
            opacity: 1,
            transform: 'scale(1) translateY(0)',
            transition: 'all 0.8s ease',
        },
    },
    fade: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: 'opacity 0.6s ease-in',
        },
    },
    slideLeft: {
        initial: {
            opacity: 0,
            transform: 'translateX(50px)',
        },
        animate: {
            opacity: 1,
            transform: 'translateX(0)',
            transition: 'all 0.6s ease-out',
        },
    },
    slideRight: {
        initial: {
            opacity: 0,
            transform: 'translateX(-50px)',
        },
        animate: {
            opacity: 1,
            transform: 'translateX(0)',
            transition: 'all 0.6s ease-out',
        },
    },
    zoomIn: {
        initial: {
            opacity: 0,
            transform: 'scale(0.85)',
        },
        animate: {
            opacity: 1,
            transform: 'scale(1)',
            transition: 'all 0.5s ease-out',
        },
    },
};
