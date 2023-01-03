import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { GiWeightLiftingUp } from 'react-icons/gi'



const Footer = () => (
  <Box mt="80px" color="#e6c18f">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <GiWeightLiftingUp color="#e6c18f" size= "5rem" />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
      2023 Keep Fit. All Rights Reserved.</Typography>
  </Box>
);

export default Footer;
