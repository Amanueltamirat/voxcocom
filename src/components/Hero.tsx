import React, { useState, useEffect, useCallback } from 'react';

const Hero = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Function to go to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Set up the auto-rotation interval
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, interval, nextSlide]);

  // Pause auto-rotation when user interacts with carousel
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Resume auto-rotation when user stops interacting
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="hero-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0
            }}
          >
            {image.title && (
              <div className="slide-content">
                <h2>{image.title}</h2>
                {image.description && <p>{image.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button className="carousel-btn prev-btn" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-btn next-btn" onClick={nextSlide}>
        ›
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active ' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

