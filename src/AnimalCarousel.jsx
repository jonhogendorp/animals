import React, { useState } from 'react';
import './App.css';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';

const images = [bird, cat, cow];

function Carousel() {
 const [currentImage, setCurrentImage] = useState(0);

 const next = () => {
  setCurrentImage((currentImage + 1) % images.length);
 }

 const prev = () => {
  setCurrentImage((currentImage - 1 + images.length) % images.length);
 }

 return (
  <div className='carousel' style={{color: 'red', backgroundColor: 'blue'}}>
   <button onClick={prev}>Prev</button>
   <img className='animalPictureCarousel' src={images[currentImage]} alt='animal' />
   <button onClick={next}>Next</button>
  </div>
 );
}

export default Carousel;