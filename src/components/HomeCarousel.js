import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5 },
};

const items = [
  <div className='item' data-value='1'>
    <img src='/images/slider1.png'></img>
  </div>,
  <div className='item' data-value='2'>
    <img src='/images/slider2.png'></img>
  </div>,
  <div className='item' data-value='3'>
    <img src='/images/slider3.png'></img>
  </div>,
  <div className='item' data-value='4'>
    <img src='/images/slider4.png'></img>
  </div>,
  <div className='item' data-value='5'>
    <img src='/images/slider5.png'></img>
  </div>,
];

const HomeCarousel = () => (
  <div
    style={{
      backgroundColor: "rgb(143 24 141)",
      padding: "10px",
      transform: "rotate(-1.55deg)",
      width: "99.92%",
    }}
  >
    <AliceCarousel
      autoPlay
      autoPlayStrategy='none'
      autoPlayInterval={1000}
      animationDuration={1000}
      animationType='fadeout'
      disableDotsControls
      infinite
      disableButtonsControls
      items={items}
      responsive={responsive}
      controlsStrategy='alternate'
    />
  </div>
);

export default HomeCarousel;
