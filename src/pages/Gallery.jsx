import './Gallery.css';
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
function Gallery(){
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const [slideIndex, setSlideIndex] = useState(1);
  const videoRef = useRef([]);


  const slides = useMemo(() => [
    { id: 1, src: 'inAir.webp'},
    { id: 2, src: 'manifest.jpg' },
    { id: 12, src: 'SingingNit.mp4' },
    { id: 3, src: 'inAir2.jpg' },
    { id: 4, src: 'LowKick.jpg' },
    { id: 5, src: 'PromDrink.jpg' },
    { id: 6, src: 'Questionmark.mp4' },
    { id: 7, src: 'Sleepover.jpg' },
    { id: 8, src: 'ballinFace.jpg' },
    { id: 9, src: 'lottery.jpg' },
    { id: 10, src: 'marcoux.jpg' },
    { id: 11, src: 'drinkinInChina.jpg' }
  ], []);

  const changeSlide = useCallback((n) => {
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) return 1;
      if (newIndex < 1) return slides.length;
      if (videoRef.current[prevIndex - 1]?.pause) {
        videoRef.current[prevIndex - 1].pause();
      }
      setCurrentPlayingIndex(null);
      return newIndex;
    });
  }, [slides.length]); 

  const handleVideoControl = (index) => {
    const video = videoRef.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setCurrentPlayingIndex(index);
    } else {
      video.pause();
      setCurrentPlayingIndex(null);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') changeSlide(-1);
      if (e.key === 'ArrowRight') changeSlide(1);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [changeSlide]);


    return(
        <div className='gallery'>
        <div className='title-text'>
          <h1>
            <Link 
              to="/hero"
              style={{
                    color: 'white',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px', /* Adjust spacing */
                    textUnderlinePosition: 'under'
                  }}
            >
              My
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
                        <div className="video-wrapper">
                        <video
                          ref={el => videoRef.current[index] = el}
                          src={process.env.PUBLIC_URL + `/photos/${slide.src}`}
                          controls={false}
                          muted={false}
                          style={{ width: '100%', background: 'black' }}
                          onEnded={() => setCurrentPlayingIndex(null)}
                        />
                        <button onClick={() => handleVideoControl(index)}
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    padding: '10px 20px',
                    fontSize: '1.2rem'
                  }}
                >
                  {currentPlayingIndex === index ? '⏸️ Pause' : '▶️ Play'}
                        </button>
                      </div>
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
        </div>
    );
}

export default Gallery;