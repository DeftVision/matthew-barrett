import { Route, Routes, Navigate } from 'react-router-dom';
import { siteConfig } from './config/site.config';
import { Box } from '@mui/material';
import { Hero, Testimonials } from './pages/sections';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn'

import { SinglePage, TermsOfService, PrivacyPolicy } from './pages';

function App() {
    return (
            <Routes>
                {siteConfig.layout.mode === 'spa' ? (
                    <Route path="/" element={<SinglePage />} />
                ) : (
                    <>
                        <Route path="/" element={<Navigate to="/hero" replace />} />
                        <Route path="/hero" element={<Hero />} />
                        <Route
                            path="/testimonials"
                            element={
                                <Box sx={{ px: 2 }}>
                                    <Testimonials />
                                </Box>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Box sx={{ px: 2 }}>
                                    <Contact />
                                </Box>
                            }
                        />
                    </>
                )}

                <Route path="/signin" element={<SignIn />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        

    );
}


export default App;
