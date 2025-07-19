// frontend/src/config/site.config.js

export const siteConfig = {
    siteName: 'Barrett Luxury Collection',
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
        // displayMedia: 'image', // or 'logo' or 'icon' or 'none'
        items: [
            {
                name: 'Boggletoff',
                feedback: `Matt went above and beyond to help me sell my home and find a new one. He was professional and courteous. 
                I couldn’t be more pleased with his work. 10/10 would recommend to anyone.`,
                initials: 'BO',
                image: '/images/testimonials/ron.webp',
                logo: '', // optional, fallback for branding
                icon: '', // optional fallback, e.g. 'HomeRepairService'
                projectLabel: ''
            },
            {
                name: 'Sbroderick11',
                feedback: `Matthew Has Helped us with 4 different Properties. Very professional and courteous . 
                Always took an extra step to help find our dream home . Would recommend him to anyone! 
                Cooperative and eager to help with any questions we had!`,
                initials: 'SB',
                // image: '/images/testimonials/tobias.webp',
                projectLabel: ''
            },
            {
                name: 'CarlaB9',
                feedback: `Matthew was professional, responsive, and incredibly detailed from start to finish. 
                He made the entire process smooth and stress-free, and we always felt like we were in expert hands. I wouldn’t work with anyone else.`,
                initials: 'CB',
                // image: '/images/testimonials/phil.webp',
                projectLabel: ''
            },
            {
                name: 'CarmenGalv',
                feedback: `We were relocating from out of state, and Matthew went above and beyond to make the transition seamless. 
                His knowledge of the market and personal dedication made us feel confident every step of the way.`,
                initials: 'CG',
                // image: '/images/testimonials/phil.webp',
                projectLabel: ''
            },
            {
                name: 'Rob Mullen',
                feedback: `This journey began with the day after Christmas. What a memorable month that we'll never forget. Matthew, our gratitude is above proper expression. 
                Hope of a brighter future for our family in such a beautiful home and community, some relief from chronic migraines for over a decade, being around a beloved parent, siblings and extended family, a childhood dream come true for Kim. 
                A sincere thank you for believing, supporting, dealing, and advocating for us since the day we met.Such an amazing experience you've made happen. Your professionalism, honestly, foresight, realtor skill, and raw talent are off the charts!!!
                And we gained And we gained a new friend/family member.`,
                initials: 'RM',
                // image: '/images/testimonials/phil.webp',
                projectLabel: ''
            }
        ]
    },
    meta: {
        '/': {
            title: '',
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