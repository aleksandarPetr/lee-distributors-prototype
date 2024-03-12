// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'react-bootstrap/Image';
import productImage1 from '../../assets/product-example-images/bulb-1.png';
import productImage2 from '../../assets/product-example-images/bulb-2.png';
import './ProductCarousel.css';
import React from 'react';
import Slider from 'react-slick';

// const products = [
//   {
//     name: '300 Watt Equivalent A25 Bulb - 5000K Natural White',
//     upc: '045923114670',
//     sku: 'SATCO-S11467',
//     category: 'LED',
//     photos: [
//       '../../assets/product-example-images/bulb-1.png',
//       '../../assets/product-example-images/bulb-2.png',
//     ],
//   },
// ];

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className='carousel-image-wrapper'>
        <Image
          src={productImage1}
          alt='Logo'
          style={{
            width: '6rem',
            height: 'auto',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        />
      </div>
      <div className='carousel-image-wrapper'>
        <Image
          src={productImage2}
          alt='Logo'
          style={{
            width: '6rem',
            height: 'auto',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        />
      </div>
      {/* <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
      {/* {products.map((product) =>
        product.photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={product.name} />
          </div>
        ))
      )} */}
    </Slider>
  );
}
