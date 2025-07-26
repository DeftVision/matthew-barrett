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

        sendOpenHouseForm(e.target).then(
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
                Open House
            </Typography>

            <Typography
                variant="subtitle1"
                sx={{ fontWeight: 'bold', mb: 3 }}
                component="a"
                href="https://www.google.com/maps/search/?api=1&query=3050+Country+Crossing+Rd,+Heber+City,+Utah+84032"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
            >
                3050 Country Crossing Rd, Heber City, Utah 84032
            </Typography>

            <Box
                component="form"
                name="open-house-form"
                method="POST"
                onSubmit={handleSubmit}
                sx={{ width: '100%', my: 5 }}
            >
                <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <Stack direction="column" spacing={2} textAlign="left">
                    <TextField type="text" label="Name" fullWidth name="visitor_name" required />
                    <TextField type="email" label="Email" fullWidth name="visitor_email" required />
                    <TextField type="tel" label="Phone" fullWidth name="visitor_phone" required />
                    <TextField type="text" label="Price Point" fullWidth name="price_point" required />
                    <TextField type="text" label="Preferred Area to Move" fullWidth name="move_area" required />
                    <TextField type="text" label="How Soon Are You Looking to Move?" fullWidth name="move_timeline" required />

                    <FormControl component="fieldset">
                        <FormLabel sx={{ mb: 1 }}>Have you spoken with a lender?</FormLabel>
                        <RadioGroup row name="lender_contacted" required>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel sx={{ mb: 1 }}>Do you have a house to sell?</FormLabel>
                        <RadioGroup row name="has_home_to_sell" required>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel sx={{ mb: 1 }}>Would you like a free home evaluation?</FormLabel>
                        <RadioGroup row name="wants_home_eval" required>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

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
