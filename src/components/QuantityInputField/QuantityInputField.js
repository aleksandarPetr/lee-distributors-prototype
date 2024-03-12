import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './QuantityInputField.css';

const QuantityInputField = () => {
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '140px', margin: 0 },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <TextField
          id='outlined-number'
          label='Quantity'
          type='number'
          InputLabelProps={{
            shrink: true,
            style: { color: '#03356b' },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#03356b',
                borderWidth: '2px',
                borderRadius: '10px',
              },
              '&:hover fieldset': {
                borderColor: '#03356b',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#03356b',
              },
            },
          }}
        />
      </div>
    </Box>
  );
};

export default QuantityInputField;
