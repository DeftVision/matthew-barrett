import React from 'react';
import { Button as MuiButton } from '@mui/material';

export default function Button(props) {
    return (
        <MuiButton
            variant="contained"
            color="primary"
            disableElevation
            sx={{ borderRadius: 2, textTransform: 'none', ...props.sx }}
            {...props}
        />
    );
}
