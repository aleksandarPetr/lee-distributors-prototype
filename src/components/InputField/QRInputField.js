import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const QRInputField = () => {
  return (
    <form noValidate autoComplete='off'>
      <FormControl sx={{ width: '25ch', borderRadius: '20px' }}>
        <OutlinedInput
          placeholder='SKU number'
          sx={{
            // Adjust input field styles
            '.MuiOutlinedInput-input': {
              height: 'auto',
              padding: '10px 20px',
              borderColor: '#d2dcf3',
              '::placeholder': {
                color: 'gray',
                fontSize: '13px',
              },
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'blue',
              borderRadius: '2rem',
              borderColor: '#d2dcf3',
            },

            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d2dcf3',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d2dcf3',
            },
          }}
        />
      </FormControl>
    </form>
  );
};
export default QRInputField;
