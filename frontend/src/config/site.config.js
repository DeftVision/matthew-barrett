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
                name: 'Cassi K.',
                feedback: `Trina built bookshelves and a window seat! She did a great job and they turned out so well! I really liked working with her. The photos are before paint which I opted to do. I can’t wait to get all my books set up!`,
                initials: 'CK',
                image: '/images/testimonials/bookshelf-cassi-k.webp',
                logo: '', // optional, fallback for branding
                icon: '', // optional fallback, e.g. 'HomeRepairService'
                projectLabel: 'Built-In Bookshelves'
            },
            {
                name: 'Jeremy B.',
                feedback: `Trina installed two exterior doors for us. Her work was excellent with an obvious eye for detail. She was responsive, detail oriented, and offered a very competitive bid.`,
                initials: 'JB',
                image: '/images/testimonials/exterior-door-jeremy-b.webp',
                projectLabel: 'Exterior Door Installation'
            },
            {
                name: 'Elsa Z.',
                feedback: `They were great! Very professional and the work was meticulously done. They were quick to respond with contacted and had superb follow-up. I would highly recommend them for your project that is too small for a big contractor and too big for you to handle. The can complete the entire project from start to finish! They framed, dry walled, mudded, taped, painted and installed tile and mantle of my new fireplace.`,
                initials: 'EZ',
                image: '/images/testimonials/fireplace-elsa-z.webp',
                projectLabel: 'Custom Fireplace'
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