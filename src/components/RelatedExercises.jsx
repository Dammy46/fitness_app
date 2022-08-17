import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const RelatedExercises = ({target, equipment}) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' }, p: '30px' }}>
      <Typography variant="h4" mb="30px">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {target.length ? <HorizontalScrollBar data={target} /> : <Loader />}
      </Stack>
      <Typography variant="h4" mb="30px">
        Exercises that target that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipment.length ? <HorizontalScrollBar data={target} /> : <Loader />}
      </Stack>
    </Box>
  );
}

export default RelatedExercises