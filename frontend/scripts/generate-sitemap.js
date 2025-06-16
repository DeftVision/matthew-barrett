import fs from 'fs';
import path from 'path';
import { siteConfig } from '../src/config/site.config.js';

const BASE_URL = 'https://yourdomain.com'; // Replace with your production domain

const outputPath = path.resolve('public/sitemap.xml');
const pages = Object.keys(siteConfig.meta || {});

const xmlEntries = pages.map((route) => {
    const loc = route === '/' ? BASE_URL : `${BASE_URL}${route}`;
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    xmlEntries.join('\n') +
    `\n</urlset>\n`;

fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Sitemap generated at: ${outputPath}`);
