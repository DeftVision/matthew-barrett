import React, { useState } from 'react';
import {
    Alert,
    Box,
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Snackbar,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { sendOpenHouseForm } from '../utils/emailService';
import { siteConfig } from '../config/site.config';

export default function SignIn() {
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Honeypot check
        if (e.target.website.value) {
            setIsSending(false);
            return;
        }

        sendSwissDaysForm(e.target).then(
            (result) => {
                console.log('Email sent!', result.text);
                setSnackbar({
                    open: true,
                    message: 'Form submitted successfully',
                    severity: 'success'
                });
                e.target.reset();
                setTimeout(() => {
                    window.location.href = 'https://www.barrettluxuryhomes.com/';
                }, 1500);
            },
            (error) => {
                console.error('Email failed:', error);
                setSnackbar({
                    open: true,
                    message: 'Something went wrong. Please try again.',
                    severity: 'error'
                });
                setIsSending(false);
            }
        );
    };

    const handleClose = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box
            sx={{
                maxWidth: '600px',
                mx: 'auto',
                py: 4,
                px: 2,
                textAlign: 'center'
            }}
        >
            <Box sx={{ mb: 2 }}>
                <img
                    src="/logo.png"
                    alt="Barrett Luxury Homes"
                    style={{ maxWidth: '200px', height: 'auto' }}
                />
            </Box>

            <Typography variant="h4" mb={0}>
                Barrett Luxury Homes
            </Typography>
            <Typography variant="h5" mb={1}>
                SWISS DAYS EXCLUSIVE SHOWINGS
            </Typography>
            <Typography variant="h6" mb={1}>
                AUGUST 28, 29, 30
            </Typography>


            <Box
                component="form"
                name="swiss-days-form"
                method="POST"
                onSubmit={handleSubmit}
                sx={{ width: '100%', my: 5 }}
            >
                <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <Stack direction="column" spacing={2} textAlign="left">
                    <TextField type="text" label="Name" fullWidth name="visitor_name" required />
                    <TextField type="email" label="Email" fullWidth name="visitor_email" required />
                    <TextField type="tel" label="Phone" fullWidth name="visitor_phone" required />
                    <TextField type="text" label="Appointment" default="Book a time" fullWidth name="appointment" required />



                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isSending}
                        sx={{ mt: 2 }}
                    >
                        {isSending ? 'Sending...' : 'Submit'}
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
