import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOption, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercise = ({ exercises, setExercises, bodyParts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 10;
  const indexOfLastPage = currentPage * exercisePerPage;
  const indexOfFirstPage = indexOfLastPage - exercisePerPage;
  const currentExercises = exercises.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: '1800px', behavior: 'smooth' });
  };

  //** Within the USEEFFECT function */
  //** Step one declare a an empty array in a variable. */
  //** Step two check if the bodyParts is equal to the string (all), if that's true, fetch the exercises data and store it in the empty array, and if not, fetch all the body parts data and store it in the empty array. */
  //** Step three set the Exercises to the declared array. */
  //** Step four call the fuction immediately  */
  useEffect(() => {
    const exercisesData = async () => {
      let exerciseArray = [];

      if (bodyParts === 'all') {
        exerciseArray = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOption
        );
      } else {
        exerciseArray = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyParts}`,
          exerciseOption
        );
      }
      setExercises(exerciseArray);
    };
    exercisesData();
    // eslint-disable-next-line
  }, [bodyParts]);

  return (
    <Box id="exercise" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px" color='#fff'>
        Showing results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: '50px' }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {!currentExercises.length ? (
          <Loader />
        ) : (
          currentExercises.map((exer, i) => (
            <ExerciseCard key={i} exercise={exer} />
          ))
        )}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 10 && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            defaultPage={1}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;
