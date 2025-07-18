import React, {useState} from 'react';
import {Alert, Box, Button, Snackbar, Stack, TextField, Typography} from '@mui/material';
import {siteConfig} from '../config/site.config';
import {useNavigate} from 'react-router-dom';

export default function SignIn() {
    const [snackbar, setSnackbar] = useState({open: false, message: '', severity: 'success'});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        fetch('/', {
            method: "POST",
            body: data
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
                setTimeout(() => navigate('/'), 3000);
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
        setSnackbar({...snackbar, open: false});
    };

    return (
        <Box
            sx={{
                maxWidth: '600px',
                mx: 'auto',      // horizontal centering
                py: 4,
                px: 2,           // optional: side padding on mobile
                textAlign: 'center',
            }}
        >
            <Box
                component='form'
                name='contact'
                method='POST'
                onSubmit={handleSubmit}
                data-netlify='true'
                netlify-honeypot='bot-field'
                sx={{width: '100%', mt: 4}}
            >
                <input type='hidden' name='form-name' value='contact'/>
                <input type='hidden' name='bot-field'/>

                <Stack direction='column' spacing={2}>
                    <Typography variant='h3'>Barrett Luxury Home</Typography>
                    <Typography variant='h4'>Sign In</Typography>
                    <TextField
                        type='text'
                        label='Name'
                        fullWidth
                        name='visitor_name'
                        required
                        aria-label='Name'
                    />
                    <TextField
                        type='email'
                        label='Email'
                        fullWidth
                        name='visitor_email'
                        required
                        aria-label='Email'
                    />
                    <TextField
                        type='phone'
                        label='Phone'
                        fullWidth
                        name='visitor_phone'
                        required
                        aria-label='Phone'
                    />

                    <Button type='submit' variant='contained' sx={{mt: 2}}>
                        Submit
                    </Button>
                </Stack>

                {siteConfig.features.contactSnackbar && (
                    <Snackbar
                        open={snackbar.open}
                        autoHideDuration={4000}
                        onClose={handleClose}
                        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
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
