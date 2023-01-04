import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    

    <Stack direction="row">
      <Button sx={{ ml: '25px', color: '#330033 ', background: '#e6c18f', fontSize: '20px', borderRadius: '50px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '30px', color: '#330033 ', background: '#e6c18f', fontSize: '20px', borderRadius: '50px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <br/>
    <Typography ml="20px" color="#e6c18f" fontWeight="bold" sx={{ fontSize: { lg: '28px', xs: '22px' } }} mt="20px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
