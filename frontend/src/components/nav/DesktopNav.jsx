import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';

import Logo from '../../assets/logo.svg?react';


export default function DesktopNav() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    const location = useLocation();

    if (!isDesktop) return null;

    const navLinks = siteConfig.navLinks[siteConfig.layout.mode];
    const align = siteConfig.layout.navAnchor === 'right' ? 'flex-end' : 'flex-start';

    return (
        <AppBar position='static'>
            <Toolbar sx={{ justifyContent: align }}>
                <Box sx={{ mr: 4 }}>
                    <Logo style={{ height: 48, width: 'auto', color: 'white' }} />
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {navLinks.map(({ label, href }) => (
                        <Button
                            key={href}
                            component='a'
                            href={href}
                            color='inherit'
                            sx={{
                                borderBottom: location.pathname === href ? '2px solid white' : 'none',
                                borderRadius: 0,
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
