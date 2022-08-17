import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercise from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
      />
      <Exercise
        setExercises={setExercises}
        bodyParts={bodyParts}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
