import React, { useState } from 'react';
import {
    Alert,
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { sendOpenHouseForm } from '../utils/emailService';
import { siteConfig } from '../config/site.config';

export default function SwissDaysSignup() {
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [isSending, setIsSending] = useState(false);
    const [appointmentDate, setAppointmentDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Honeypot check
        if (e.target.website.value) {
            setIsSending(false);
            return;
        }

        // Ensure date selected
        if (!appointmentDate) {
            setSnackbar({
                open: true,
                message: 'Please choose an appointment date.',
                severity: 'error'
            });
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
            }
        ).finally(() => setIsSending(false));
    };

    const handleClose = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const labelId = 'appointment-date-label';
    const selectId = 'appointment-date';

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

            <Typography variant="h4" mb={1}>
                SWISS DAYS EXCLUSIVE SHOWINGS
            </Typography>
            <Typography variant="h5" mb={1}>
                AUGUST 28, 29, 30
            </Typography>

            <Box
                component="form"
                name="swiss-days-form"
                method="POST"
                onSubmit={handleSubmit}
                sx={{ width: '100%', my: 5 }}
            >
                {/* Honeypot */}
                <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                {/* Hidden field synced to Select so FormData includes it */}
                <input type="hidden" name="appointment_date" value={appointmentDate} />

                <Stack direction="column" spacing={2} textAlign="left">
                    <TextField type="text" label="Name" fullWidth name="visitor_name" required />
                    <TextField type="email" label="Email" fullWidth name="visitor_email" required />
                    <TextField type="tel" label="Phone" fullWidth name="visitor_phone" required />

                    <FormControl required>
                        <InputLabel id={labelId}>Appointment Date</InputLabel>
                        <Select
                            labelId={labelId}
                            id={selectId}
                            variant="outlined"
                            label="Appointment Date"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                        >
                            <MenuItem value="August 28th">August 28th</MenuItem>
                            <MenuItem value="August 29th">August 29th</MenuItem>
                            <MenuItem value="August 30th">August 30th</MenuItem>
                        </Select>
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
