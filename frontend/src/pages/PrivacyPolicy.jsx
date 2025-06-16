import React from 'react';
import { Box, Typography } from '@mui/material';
import Seo from '../meta/Seo';

export default function PrivacyPolicy() {
    return (
        <>
            <Seo />
            <Box sx={{ maxWidth: '800px', mx: 'auto', py: 6, px: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Privacy Policy
                </Typography>

                <Typography variant="subtitle2" gutterBottom>
                    Last updated: June 2025
                </Typography>

                <Typography variant="body1">
                    This Privacy Policy outlines how we collect, use, and protect your information when you visit this website.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom>
                    1. Information We Collect
                </Typography>
                <Typography variant="body1">
                    We may collect basic contact information (like name and email) when you submit forms. We do not collect sensitive personal or health data.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom>
                    2. How We Use It
                </Typography>
                <Typography variant="body1">
                    Your information is used only to respond to your inquiries. It is not sold, rented, or shared with third parties.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom>
                    3. Cookies
                </Typography>
                <Typography variant="body1">
                    This site may use basic cookies to improve user experience. You can disable cookies in your browser settings.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom>
                    4. Third-Party Services
                </Typography>
                <Typography variant="body1">
                    We do not integrate third-party analytics, advertising, or tracking platforms at this time.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom>
                    5. Data Security
                </Typography>
                <Typography variant="body1">
                    Reasonable measures are in place to protect your data, but we cannot guarantee absolute security in web transmission.
                </Typography>

                <Typography variant="h6" component="h2" gutterBottom>
                    6. Contact
                </Typography>
                <Typography variant="body1">
                    If you have any questions, please contact us using the form on the Contact page.
                </Typography>
            </Box>
        </>
    );
}
