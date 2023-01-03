import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage  from '../assets/images/banner.jpg';


const HeroBanner = () => (
  
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography fontFamily="Helvetica" color="#e6c18f" fontWeight="800" fontSize="95px" marginTop="-70px"  marginBottom="70px" textTransform="capitalize">keep fit <br/>fitness center</Typography>
    <Typography color="silver" fontWeight="600" textTransform="capitalize" sx={{ fontSize: { lg: '70px', xs: '40px' } }} mb="30px" mt="30px">
     Workout, Eat, <br />
      Sleep & Repeat!
    </Typography>
    
    <Stack>
      <a href="#exercises" style={{ marginTop: '55px', textDecoration: 'none', width: '250px', 
      textAlign: 'center', background: '#e6c18f', padding: '15px', fontSize: '25px', 
      textTransform: 'none', color: 'black', borderRadius: '50px' }}>All workout</a>

      <a href="#search" style={{ marginTop: '45px', textDecoration: 'none', width: '250px', 
      textAlign: 'center', background: '#e6c18f', padding: '15px', fontSize: '25px', 
      textTransform: 'none', color: 'black', borderRadius: '50px' }}>Search workout</a>
    </Stack>
    <img src={HeroBannerImage } alt="hero-banner" className="hero-banner-img" />
  
  </Box>

);

export default HeroBanner;
