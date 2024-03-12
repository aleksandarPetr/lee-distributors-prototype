import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import ProductCard from '../../components/ProductCard/ProductCard';

import './Info.css';

const Info = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <div className='info'>
      <div className='header'>
        <IoMdArrowBack size={40} onClick={redirectToHome} />
      </div>
      <div className='product-carousel-wrapper mb-5'>
        <ProductCarousel />
      </div>
      <div className='product-info-wrapper'>
        <ProductCard />
      </div>
    </div>
  );
};

export default Info;
