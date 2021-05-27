import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Home_Slide1 from './HomeSlides/Home_Slide1';
import Home_Slide2 from './HomeSlides/Home_Slide2';

const slides = [Home_Slide1, Home_Slide1];
const delay = 3500;

export default function SlideshowDesktop() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((Slide, index) => (
          <div className="slide" key={index}>
            {<Slide />}
          </div>
        ))}
      </div>
      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
