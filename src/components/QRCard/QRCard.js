import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './QRCard.css';
import Image from 'react-bootstrap/Image';
import BarCodeImage from '../../assets/bar-code.png';
import QRInputField from '../InputField/QRInputField';
import { useNavigate } from 'react-router-dom';

const QRCard = () => {
  const navigate = useNavigate();

  const redirectToInfo = () => {
    navigate('/info');
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: '1rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
      }}
    >
      <CardContent>
        <h2 className='qr-title'>
          <strong>Scan Bar Code</strong>
        </h2>
        <p className='qr-message'>
          Place Bar Code inside the frame so you can scan the product
        </p>
        <div className='bar-code-wrapper'>
          <Image
            src={BarCodeImage}
            alt='Logo'
            style={{
              width: '15rem',
              height: 'auto',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          />
        </div>
        <div className='bar-code-input-wrapper'>
          <h2 className='qr-title'>
            <strong>OR</strong>
          </h2>
          <p className='qr-message' style={{ marginBottom: '1rem' }}>
            Manually enter the SKU number in input field below:
          </p>
          <QRInputField />
        </div>
        <div className='confirm-button-wrapper'>
          <CardActions
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={redirectToInfo}
              style={{
                marginTop: '2.1rem',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                borderRadius: '2rem',
                backgroundColor: '#03356b',
                color: 'white',
                border: 'none',
                width: '10rem',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
              }}
            >
              Confirm
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCard;
