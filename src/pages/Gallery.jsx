import './Gallery.css';
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react';
function Gallery(){

  const [audioEnabled, setAudioEnabled] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const videoRefs = useRef([]);


  const slides = [
    { id: 1, src: 'inAir.webp'},
    { id: 2, src: 'manifest.jpg' },
    { id: 11, src: 'SingingNit.mp4' },
    { id: 3, src: 'inAir2.jpg' },
    { id: 4, src: 'LowKick.jpg' },
    { id: 5, src: 'PromDrink.jpg' },
    { id: 6, src: 'Questionmark.mp4' },
    { id: 7, src: 'Sleepover.jpg' },
    { id: 8, src: 'ballinFace.jpg' },
    { id: 10, src: 'marcoux.jpg' },
    
    { id: 9, src: 'lottery.jpg' },
    { id: 11, src: 'drinkinInChina.jpg' }
  ];

  const changeSlide = useCallback((n) => {
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) return 1;
      if (newIndex < 1) return slides.length;
      return newIndex;
    });
  }, [slides.length]); 


  // Add user interaction trigge

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  useEffect(() => {
    const currentVideo = videoRefs.current[slideIndex - 1];
    if (currentVideo) {
      currentVideo.play().catch(console.error);
    }
  }, [slideIndex]);

    return(
      
        <div className='gallery'>
        <div className='title-text'>
          <h1>
            <Link 
              to="/hero"
              style={{
                    color: 'white',
                    textDecoration: 'underline'
                  }}
              >
            Rays
            </Link> favourite photos
          </h1>
        </div>

          <div className="slideshow-container">
                  {slides.map((slide, index) => (
                    <div 
                      key={slide.id}
                      className={`slide fade ${index + 1 === slideIndex ? 'active' : ''}`}
                    >
                      {slide.src.endsWith('.mp4') ? (
                    <video
                      autoPlay
                      muted={!audioEnabled}
                      loop
                      playsInline
                      src={process.env.PUBLIC_URL + `/photos/${slide.src}`}
                    />
                  ) : (
                    <img 
                      src={process.env.PUBLIC_URL + `/photos/${slide.src}`} 
                      alt={`Slide ${slide.id}`} 
                    />
                  )}
                    </div>
                  ))}

                  {/* Navigation Arrows */}
                  <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
                  <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
                </div>
                <button 
          className="audio-toggle"
          onClick={toggleAudio}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000,
            color: 'white',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px'
          }}
        >
          {audioEnabled ? '🔊' : '🔇'}
        </button>
        </div>
    );
}

export default Gallery;