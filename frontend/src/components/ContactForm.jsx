import emailjs from '@emailjs/browser';
import { sendContactForm } from '../utils/emailService';
import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Snackbar,
    Alert
} from '@mui/material';
import { siteConfig } from '../config/site.config';
export default function ContactForm() {
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Honeypot check
        if (e.target.website.value) {
            setIsSending(false);
            return;
        }

        sendContactForm(e.target).then(
            (result) => {
                console.log('Email sent!', result.text);
                alert("Thank you! Your message has been sent.");
                setIsSending(false);
            },
            (error) => {
                console.error('Email failed:', error);
                alert("Oops, something went wrong. Please try again.");
                setIsSending(false);
            }
        );

        e.target.reset(); // Clear the form after sending
    };



    const handleClose = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box
            id="contact"
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                px: 2,
            }}
        >
            <Box
                component="form"
                name="contact"
                method="POST"
                onSubmit={sendEmail}
                sx={{
                    maxWidth: 600,
                    mx: 'auto',
                    width: '100%',
                }}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Contact Matthew
                </Typography>
                <Stack direction="column" spacing={3}>
                    <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                    <TextField label="Name" name="user_name" aria-label='Your name' fullWidth required />
                    <TextField label="Email" type="email" name="user_email" aria-label='Your email' fullWidth required />
                    <TextField label="Phone" type="tel" name="user_phone" aria-label='Your Phone' fullWidth required />
                    <TextField
                        label="Message"
                        name="message"
                        aria-label="You Message"
                        fullWidth
                        multiline
                        rows={4}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isSending}
                        sx={{
                            mt: 1,
                            backgroundColor: '#D4AF37',
                            fontWeight: 600,
                            '&:hover': {
                                backgroundColor: '#b8912c',
                            },
                        }}
                    >
                        {isSending ? 'Sending...' : 'Get in Touch'}
                    </Button>
                </Stack>

                {siteConfig.features.contactSnackbar && (
                    <Snackbar
                        open={snackbar.open}
                        autoHideDuration={4000}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        <Alert severity={snackbar.severity} onClose={handleClose}>
                            {snackbar.message}
                        </Alert>
                    </Snackbar>
                )}
            </Box>
        </Box>
    );
}
