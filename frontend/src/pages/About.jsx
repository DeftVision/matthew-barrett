import React from 'react';
import { Box, Typography } from '@mui/material';
import AnimatedBox from './../components/AnimatedBox';
import Seo from '../meta/Seo'

export default function About () {
    return (
       <>
           <Seo />
           <Box
               sx={{
                   maxWidth: '600px',
                   mx: 'auto',
                   py: 4,
                   textAlign: 'center'
               }}

           >
               <AnimatedBox>
                 <Typography>About Page</Typography>
               </AnimatedBox>
           </Box>
       </>
    );
};