import React from 'react';
import {
    Construction,
    HomeRepairService,
    Kitchen
} from '@mui/icons-material';

const icons = {
    Construction,
    HomeRepairService,
    Kitchen,
};

export const getIconComponent = (name) => {
    const IconComponent = icons[name];
    return IconComponent
        ? <IconComponent sx={{ fontSize: 48, color: 'primary.main' }} />
        : null;
};
