import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOption, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercise = ({ setExercises, bodyParts, setBodyParts }) => {
  const [search, setSearch] = useState('');

  const [bodyPartsCategory, setBodyPartsCategory] = useState([]);

  //* within the USEEFFECT function */
  //** Line 16-22 i'm fetching all the body part list data when the page loads up, and it's save the data in a state hook array. all this in the fetchExerciseData function  */
  //** Line 23 call the fetchExerciseData function immediately*/
  useEffect(() => {
    const fetchExerciseData = async () => {
      const category = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOption
      );
      setBodyPartsCategory(['all', ...category]);
    };
    fetchExerciseData();

    // eslint-disable-next
  }, []);

  //** The handleSearch function */
  //** Line 30-34 check if the search value is not empty, if not, i'm fetching all the exercises data and storing it in exercisesData */
  //** Line 37-43 searchedExercise variable, Filter through the exercisesData, convert it to lower case and check if it includes the search variable*/
  //**After this action set the Search variable to an empty string */
  //** set the Exercises variable to the searchExercise*/
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOption
      );

      const searchedExercise = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercise);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="49px"
        textAlign="center"
        color='#fff'
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
              padding: {
                lg: '16px 190px 16px 16px',
                xs: '16px 100px 16px 16px',
              },
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          className='input'
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#5cff40',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: '0px',
            fontSize: { lg: '20px', xs: '14px' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar
          data={bodyPartsCategory}
          bodyParts={bodyParts}
          setBodyParts={setBodyParts}
          isBodyPart
        />
      </Box>
    </Stack>
  );
};

export default SearchExercise;
