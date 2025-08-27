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
    const [appointmentTime, setAppointmentTime] = useState('');

    const timeOptions = React.useMemo(() => {
        const out = [];
        for (let h = 7; h <= 23; h++) {
            for (let m = 0; m < 60; m += 30) {
                if (h === 23 && m === 30) break; // skip 11:30 PM
                const hour12 = ((h + 11) % 12) + 1;
                const mm = m === 0 ? '00' : '30';
                const ampm = h < 12 ? 'AM' : 'PM';
                const label = `${hour12}:${mm} ${ampm}`;
                out.push({ value: label, label });
            }
        }
        return out;
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Honeypot
        if (e.target.website.value) {
            setIsSending(false);
            return;
        }

        // Simple required checks
        if (!appointmentDate) {
            setSnackbar({ open: true, message: 'Please choose an appointment date.', severity: 'error' });
            setIsSending(false);
            return;
        }
        if (!e.target.appointment_time.value) {
            setSnackbar({ open: true, message: 'Please select a time.', severity: 'error' });
            setIsSending(false);
            return;
        }

        sendOpenHouseForm(e.target)
            .then((result) => {
                console.log('Email sent!', result.text);
                setSnackbar({
                    open: true,
                    message: 'Form submitted successfully',
                    severity: 'success'
                });
                e.target.reset();
                setAppointmentDate('');
                setAppointmentTime('');
                setTimeout(() => {
                    window.location.href = 'https://www.barrettluxuryhomes.com/';
                }, 1500);
            })
            .catch((error) => {
                console.error('Email failed:', error);
                setSnackbar({
                    open: true,
                    message: 'Something went wrong. Please try again.',
                    severity: 'error'
                });
            })
            .finally(() => setIsSending(false));
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
                AUGUST 27th - SEPTEMBER 1st
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

                {/* Hidden field so FormData includes the date */}
                <input type="hidden" name="appointment_date" value={appointmentDate} />

                <Stack direction="column" spacing={2} textAlign="left">
                    <TextField type="text" label="Name" fullWidth name="visitor_name" required autoComplete='name' />
                    <TextField type="email" label="Email" fullWidth name="visitor_email" required autoComplete='email' />
                    <TextField type="tel" label="Phone" fullWidth name="visitor_phone" required autoComplete='tel' />


                    <FormControl required fullWidth>
                        <InputLabel id={labelId}>Appointment Date</InputLabel>
                        <Select
                            labelId={labelId}
                            id={selectId}
                            variant="outlined"
                            label="Appointment Date"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                        >
                            <MenuItem value="" disabled>Select date</MenuItem>
                            <MenuItem value="Aug 28th">Aug 27th - Wed</MenuItem>
                            <MenuItem value="Aug 28th">Aug 28th - Thur</MenuItem>
                            <MenuItem value="Aug 29th">Aug 29th - Fri</MenuItem>
                            <MenuItem value="Aug 30th">Aug 30th - Sat</MenuItem>
                            <MenuItem value="Sept 1st">Sept 1st - Mon</MenuItem>
                        </Select>
                    </FormControl>
                    <input type="hidden" name="appointment_time" value={appointmentTime} />

                    <FormControl required fullWidth>
                        <InputLabel id="appointment-time-label">Preferred Time</InputLabel>
                        <Select
                            variant='outlined'
                            labelId="appointment-time-label"
                            id="appointment-time"
                            label="Preferred Time"
                            value={appointmentTime}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                        >
                            <MenuItem value="" disabled>Select time</MenuItem>
                            {timeOptions.map((t) => (
                                <MenuItem key={t.value} value={t.value}>
                                    {t.label}
                                </MenuItem>
                            ))}
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

                {siteConfig?.features?.contactSnackbar && (
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
