import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);
  if (!exerciseVideos.length) {
    return 'Loading';
  }
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="30px">
      <Typography variant="h4" mb="33px">
        Watch{' '}
        <span style={{ color: '#5cff40', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercises video
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: 'inherit',
          gap: { lg: '50px', xs: '30px' },
        }}
      >
        {exerciseVideos?.slice(0, 5).map((item, i) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            className="exercise-video"
            key={i}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color='#000'>{item.video.title}</Typography>
              <Typography variant="h6" color='#000'>{item.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
