import React from 'react';
import { Box, Typography, Link as MuiLink, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                px: 2,
                mt: 'auto',
                bgcolor: 'grey.100',
                textAlign: 'center',
                borderTop: '1px solid #ddd',
            }}
        >
            <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
                <MuiLink component={RouterLink} to="/terms" underline="hover">
                    Terms of Service
                </MuiLink>
                <MuiLink component={RouterLink} to="/privacy" underline="hover">
                    Privacy Policy
                </MuiLink>
            </Stack>

            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} Built by{' '}
                <MuiLink href="https://deftvision.io" target="_blank" rel="noopener noreferrer">
                    Deft Vision
                </MuiLink>
            </Typography>
        </Box>
    );
}
