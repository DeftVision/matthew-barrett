import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';


export default function ResponsiveNav() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return isDesktop ? <DesktopNav /> : <MobileNav />
}