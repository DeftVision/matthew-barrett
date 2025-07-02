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

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        fetch('/', {
            method: 'POST',
            body: data,
        })
            .then(() => {
                if (siteConfig.features.contactSnackbar) {
                    setSnackbar({
                        open: true,
                        message: 'Form submitted successfully',
                        severity: 'success',
                    });
                }
                form.reset();
            })
            .catch((error) => {
                if (siteConfig.features.contactSnackbar) {
                    setSnackbar({
                        open: true,
                        message: 'Form submission error: ' + error.message,
                        severity: 'error',
                    });
                }
            });
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
                onSubmit={handleSubmit}
                data-netlify="true"
                netlify-honeypot="bot-field"
                sx={{
                    maxWidth: 600,
                    mx: 'auto',
                    width: '100%',
                }}
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <Stack direction="column" spacing={3}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Contact Matthew
                    </Typography>

                    <TextField
                        type="text"
                        label="Name"
                        fullWidth
                        name="name"
                        required
                        aria-label="Name"
                    />
                    <TextField
                        type="email"
                        label="Email"
                        fullWidth
                        name="email"
                        required
                        aria-label="Email"
                    />
                    <TextField
                        type="text"
                        label="Message"
                        fullWidth
                        name="message"
                        required
                        multiline
                        minRows={4}
                        aria-label="Message"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 1,
                            backgroundColor: '#D4AF37',
                            fontWeight: 600,
                            '&:hover': {
                                backgroundColor: '#b8912c',
                            },
                        }}
                    >
                        Submit
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
