import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import logoImage from '../../assets/logo/lee-distributors-logo.png'; // Update the path accordingly
import QRCard from '../../components/QRCard/QRCard';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='logo pe-3 pt-4 mt-2'>
        <Image
          src={logoImage}
          alt='Logo'
          style={{
            width: '10rem',
            height: 'auto',
            marginBottom: '2.5rem',
          }}
        />
      </div>
      <div className='container'>
        <div className='bar-code-container'>
          <div className='bar-code-title'>
            <QRCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
