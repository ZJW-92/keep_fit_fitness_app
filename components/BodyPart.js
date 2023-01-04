import React from 'react';
import { Stack, Typography } from '@mui/material';
import {IoMdFitness} from 'react-icons/io'

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { width: '250px', height: '280px', gap: '55px' } : 
    { width: '270px', height: '280px', gap: '50px' }}
    
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
   
    <IoMdFitness color="#e6c18f" size= "5rem" />
    <Typography fontSize="28px" fontWeight="bold" color="#e6c18f" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;