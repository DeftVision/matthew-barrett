import React from 'react';
import { Card as MuiCard, CardContent, CardHeader } from '@mui/material';

export default function Card({ title, children, ...props }) {
    return (
        <MuiCard elevation={3} sx={{ borderRadius: 3, ...props.sx }} {...props}>
            {title && <CardHeader title={title} />}
            <CardContent>
                {children}
            </CardContent>
        </MuiCard>
    );
}
