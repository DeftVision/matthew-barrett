import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/site.config';
import { useLocation } from 'react-router-dom';

export default function Seo() {
    const location = useLocation();
    const { pathname } = location;

    const defaultTitle = siteConfig.siteName;
    const meta = siteConfig.meta[pathname] || {};
    const title = meta.title ? `${meta.title} | ${defaultTitle}` : defaultTitle;
    const description = meta.description || 'A modern web solution.';

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}
