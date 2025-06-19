export const siteConfig = {
    siteName: 'Realtor Matthew Barrett',
    layout: {
        type: 'centered',
        navAnchor: 'left',
        mode: 'spa',
        heroVariant: 'standard'
    },
    features: {
        contactForm: false,
        scrollAnimations: 'bold',
        contactSnackbar: false,
        expandFeedbackAnimation: true
    },
    branding: {
        primaryColor: '#121212',
        accentColor: '#D4AF37',
        headingFont: 'Playfair Display',
        bodyFont: 'Inter',
    },
    navLinks: {
        spa: [
            {label: 'Home', href: '/'},
            {label: 'Services', href: '#services'},
            {label: 'Testimonials', href: '#testimonials'},
            {label: 'Contact', href: '#contact'},
        ],
        multi: [
            {label: 'Home', href: '/'},
            {label: 'Services', href: '/services'},
            {label: 'Testimonials', href: '/testimonials'},
            {label: 'Contact', href: '/contact'},
        ]
    },
    services: [
        {
            title: 'Service Card 1',
            description: 'Transform your basement into livable, finished space — from framing to flooring.',
            icon: 'HomeRepairService'
        },
        {
            title: 'Service Card 2',
            description: 'Modern layouts, custom finishes for the heart of your home.',
            icon: 'Kitchen'
        },
        {
            title: 'Service Card 3',
            description: 'From drywall patches to trim fixes, we handle repairs that improve your space.',
            icon: 'Construction'
        }
    ],
    serviceCardStyle: 'icon',
    testimonials: {
        layout: 'grid', // or 'carousel'
        displayMedia: 'image', // or 'logo' or 'icon' or 'none'
        items: [
            {
                name: 'Ron S.',
                feedback: `There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk.`,
                initials: 'RS',
                image: '/images/testimonials/ron.webp',
                logo: '', // optional, fallback for branding
                icon: '', // optional fallback, e.g. 'HomeRepairService'
                projectLabel: 'Parks and Rec'
            },
            {
                name: 'Tobias F.',
                feedback: `Michael, if I may take off my acting pants for one moment and pull my encouraging trousers up over my anxiety panties…`,
                initials: 'TF',
                image: '/images/testimonials/tobias.webp',
                projectLabel: 'Arrested Development'
            },
            {
                name: 'Phil D.',
                feedback: `I’m cool, dad. That’s my thang. I’m hip, I surf the web, I text. LOL: laugh out loud. OMG: oh my God. WTF: why the face?`,
                initials: 'PD',
                image: '/images/testimonials/phil.webp',
                projectLabel: 'Modern Family'
            }
        ]
    },
    meta: {
        '/': {
            title: 'Welcome',
            description: 'Landing page for modern web solutions.',
        },
        '/services': {
            title: 'Services',
            description: 'Explore our service offerings.',
        },
        '/testimonials': {
            title: 'Testimonials',
            description: 'See what our clients say.',
        },
        '/contact': {
            title: 'Contact',
            description: 'Get in touch with us.',
        },
        '/terms': {
            title: 'Terms of Service',
            description: 'Our service terms.',
        },
        '/privacy': {
            title: 'Privacy Policy',
            description: 'Our data handling policies.',
        },
        '*': {
            title: '404 Not Found',
            description: 'This page does not exist',
        }
    },

}

// layout:
// type: heroFirst, centered, sidebar
// nav anchor: left, right
// mode: spa, multi
// hero variant: standard, centered

// features:
// contact form: true, false
// scroll animations: subtle, bold, fade, slideLeft, slideRight, zoomIn
// contact snackbar: true, false