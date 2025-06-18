import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, Testimonials } from './sections';
import Contact from './Contact';
import ProfileSection from '../components/ProfileSection';
import VideoPlayer from '../components/VideoPlayer';
import LightboxGallery from '../components/LightboxGallery';
import { Box } from '@mui/material';

export default function SinglePage() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    const featuredImages = [
        '/images/featured-home/1.webp',
        '/images/featured-home/2.webp',
        '/images/featured-home/3.webp',
    ];

    return (
        <>
            <Box component="section" id="hero">
                <Hero />
            </Box>

            {/* Video Section */}
            <Box component="section" sx={{ py: 8 }}>
                <VideoPlayer />
            </Box>

            {/* Image Gallery */}
            <Box component="section" id="gallery" sx={{ py: 8 }}>
                <LightboxGallery images={featuredImages} />
            </Box>

            {/* Profile Section */}
            <Box component="section" sx={{ py: 8 }}>
                <ProfileSection />
            </Box>

            <Box component="section" id="testimonials" sx={{ py: 8 }}>
                <Testimonials />
            </Box>

            <Box component="section" id="contact" sx={{ py: 8 }}>
                <Contact />
            </Box>
        </>
    );
}
