import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/gym_icon.png'

const bodyPartCategory = ({item, bodyParts, setBodyParts}) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyParts === item ? '4px solid #5cff40' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
      gap: '47px',
        cursor: 'pointer'
              }}
              onClick={() => {
                    setBodyParts(item); window.scrollTo({ top: 1800, left: 100, behavior: 'smooth'})
              }}
    >
              <img src={Icon} alt="icon" style={{ width: '40px', height: '40px' }} />
              <Typography fontSize='24px' fontWeight="bold" textTransform='capitalize'>{item}</Typography>
    </Stack>
  );
}

export default bodyPartCategory