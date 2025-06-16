import { createTheme } from '@mui/material/styles';
import { siteConfig } from '../config/site.config';

export const theme = createTheme({
    palette: {
        primary: {
            main: siteConfig.branding.primaryColor,
        },
        secondary: {
            main: siteConfig.branding.accentColor,
        },
    },
    typography: {
        fontFamily: `${siteConfig.branding.bodyFont}, sans-serif`,
        h1: { fontFamily: siteConfig.branding.headingFont },
        h2: { fontFamily: siteConfig.branding.headingFont },
        h3: { fontFamily: siteConfig.branding.headingFont },
        h4: { fontFamily: siteConfig.branding.headingFont },
        h5: { fontFamily: siteConfig.branding.headingFont },
        h6: { fontFamily: siteConfig.branding.headingFont },
    },
});
