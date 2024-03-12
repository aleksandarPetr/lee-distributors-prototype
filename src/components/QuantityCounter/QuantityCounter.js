import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import './QuantityCounter.css';

const QuantityCounter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          variant='outlined'
          onClick={handleDecrement}
          sx={{
            minWidth: '47px',
            height: '47px',
            borderWidth: '0.5px',
            borderRadius: '0.5rem',
            borderColor: '#03356b',
            backgroundColor: 'transparent',
            color: '#03356b',
            fontSize: '1.5rem',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              borderColor: '#03356b',
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
            },
          }}
        >
          <FaMinus size='15' />
        </Button>
        <Typography sx={{ marginX: 2 }}>
          <div className='quantity-counter'>
            <span>{count}</span>
          </div>
        </Typography>
        <Button
          variant='outlined'
          onClick={handleIncrement}
          sx={{
            minWidth: '49px',
            height: '47px',
            borderWidth: '0.5px',
            borderRadius: '0.5rem',
            borderColor: '#03356b',
            backgroundColor: 'transparent',
            color: '#03356b',
            fontSize: '1.5rem',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              borderColor: '#03356b',
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
            },
          }}
        >
          <FaPlus size='15' />
        </Button>
      </Box>
    </div>
  );
};

export default QuantityCounter;
