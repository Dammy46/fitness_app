import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/banner.png';

const Herobanner = () => {
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px"
    >
      <Typography color="#5cff40" fontWeight="600" fontSize="30px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
        color='#fff'
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" color='#fff'>
        Check out the most effective exercises personalized to you
      </Typography>
      <Button
        variant="contained"
        href="#exercise"
        color="success"
        sx={{ backgroundColor: '#5cff40', padding: '10px', marginTop: '15px' }}
      >
        Explore Exercise
      </Button>
      <Typography
        fontWeight={600}
        color="#5cff40"
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs: 'none' },
          fontSize: '200px',
        }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default Herobanner;
