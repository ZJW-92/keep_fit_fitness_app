import React from 'react'
import{Link} from 'react-router-dom';
import {Stack} from '@mui/material';  
import { GiWeightLiftingUp } from 'react-icons/gi'


const Navbar = () => (
  
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="10px">
    <Link to="/">
      <GiWeightLiftingUp color="#e6c18f" size= "4rem" />
    </Link>

    <Stack
      direction="row"
      gap="60px"
      fontFamily="Helvetica"
      fontSize="30px"
      alignItems="center"
    >
     <Link to ="/" style={{ textDecoration: 'none', color: '#e6c18f' }}>Home</Link>
      <a href="#exercises"  style={{ textDecoration: 'none', color: '#e6c18f' }}>Workout</a>
     <a href="#search" style={{ textDecoration: 'none', color: '#e6c18f' }}>Search</a>
    </Stack>
  </Stack>
);

export default Navbar