import { Route, Routes, Navigate } from 'react-router-dom';
import LayoutWrapper from './layouts/LayoutWrapper';
import { siteConfig } from './config/site.config';
import { Box } from '@mui/material';
import { Hero, Services, Testimonials } from './pages/sections';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { SinglePage, TermsOfService, PrivacyPolicy } from './pages';

function App() {
    return (
        <LayoutWrapper>
            <Routes>
                {siteConfig.layout.mode === 'spa' ? (
                    <Route path="/" element={<SinglePage />} />
                ) : (
                    <>
                        <Route path="/" element={<Navigate to="/hero" replace />} />
                        <Route path="/hero" element={<Hero />} />
                        <Route
                            path="/services"
                            element={
                                <Box sx={{ px: 2 }}>
                                    <Services />
                                </Box>
                            }
                        />
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

                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </LayoutWrapper>

    );
}


export default App;
