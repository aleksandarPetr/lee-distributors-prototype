import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import FailureImage from '../../assets/denied.svg';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './ConfirmationComponents.css';

const Failed = () => {
  const navigate = useNavigate();

  const redirectToInfo = () => {
    navigate('/info');
  };
  return (
    <div className='success-container'>
      <h2 className='confirmation-title mb-5'>
        <span>Product addition failed!</span>
      </h2>
      <div className='success-image mt-3'>
        {/* <a href="https://storyset.com/device">Device illustrations by Storyset</a> */}
        <Image
          src={FailureImage}
          alt='Failed'
          style={{
            width: '20rem',
            height: 'auto',
            marginBottom: '2.5rem',
          }}
        />
      </div>
      <div className='back-to-home-page-mesage mb-5'>
        Click the button below to return to the homepage.
      </div>
      <div>
        <CardActions
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 0,
          }}
        >
          <Button
            variant='outlined'
            onClick={redirectToInfo}
            style={{
              borderRadius: '2rem',
              backgroundColor: '#fff',
              color: 'black',
              borderWidth: '1px',
              borderColor: '#06346a',
              width: '10rem',
              height: '47.5px',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              '&:hover': {
                backgroundColor: '#06346a',
                color: '#fff',
              },
            }}
          >
            Back
          </Button>
        </CardActions>
      </div>
    </div>
  );
};

export default Failed;
