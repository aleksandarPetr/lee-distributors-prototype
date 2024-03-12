import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import WarehouseAccordion from '../WarehouseAccordion/WarehouseAccordion';
import QuantityCounter from '../QuantityCounter/QuantityCounter';
import QuantityInputField from '../QuantityInputField/QuantityInputField';

const ProductCard = () => {
  const navigate = useNavigate();

  const redirectToConfirmation = () => {
    navigate('/confirmation');
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: '1.5rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        backgroundColor: '#ebeff4',
        marginLeft: '1rem',
        marginRight: '1rem',
        marginTop: 0,
      }}
    >
      <CardContent>
        <div className='basic-product-info'>
          <h6 className='product-sku-number'>SKU Number: SATCO-S11467</h6>
          <h2 className='product-title mt-2 mb-3'>
            <strong>300 watt EQUIVALENT A25 BULB</strong>
          </h2>
          <p className='product-description'>
            A 300-watt equivalent A25 bulb, using energy-efficient technology,
            emits a bright, 5000K natural white light akin to daylight.
          </p>
        </div>
        <Divider sx={{ borderBottomWidth: 0.5, borderColor: 'black' }} />
        <div className='additional-product-info'>
          <div className='quantity-wrapper my-3'>
            <h2 className='quantity-title'>
              <strong>Available Stock Quantity</strong>
            </h2>
            <div className='quantity-number'>
              <span>25</span>
            </div>
          </div>
          <Divider sx={{ borderBottomWidth: 0.5, borderColor: 'black' }} />

          <div className=' my-1'>
            <WarehouseAccordion />
          </div>
        </div>
        <div className='confirmation-wrapper mt-5'>
          <div className='quantity-counter'>
            {/* <QuantityCounter /> */}
            <QuantityInputField />
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
                onClick={redirectToConfirmation}
                style={{
                  borderRadius: '2rem',
                  backgroundColor: '#03356b',
                  color: 'white',
                  border: 'none',
                  width: '10rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                }}
              >
                Add
              </Button>
            </CardActions>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
