import React from 'react';
import { siteConfig } from '../config/site.config';

import { LayoutHeroFirst, LayoutCentered, LayoutSidebar } from './index'

const layoutMap = {
    heroFirst: LayoutHeroFirst,
    centered: LayoutCentered,
    sidebar: LayoutSidebar,

}


export default function LayoutWrapper({ children }) {
    const LayoutComponent = layoutMap[siteConfig.layout.type] || LayoutCentered;

    return <LayoutComponent>{children}</LayoutComponent>
}