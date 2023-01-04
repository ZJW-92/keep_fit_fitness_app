import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import goldbadge from '../assets/images/1.jpg';
import silverbadge from '../assets/images/2.jpg';
import bronzebadge from '../assets/images/3.jpg';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: goldbadge,
      name: bodyPart,
    },
    {
      icon: silverbadge,
      name: target,
    },
    {
      icon: bronzebadge,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>

        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} 
         color="#e6c18f" textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '35px', xs: '20px' } }} color="silver">
          The Target Muscle Groups and equipment you need are:{' '}</Typography>


        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ borderRadius: '30%', width: '120px', height: '100px' }}>
             
              <img src={item.icon} alt={bodyPart} style={{  borderRadius: '30%' ,width: '120px', height: '100px' }} />
            </Button>
            <Typography color="silver" textTransform="capitalize" sx={{ fontSize: { lg: '35px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
