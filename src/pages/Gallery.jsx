import './Gallery.css';
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
function Gallery(){

  const [slideIndex, setSlideIndex] = useState(1);
  const slides = [
    { id: 1, src: 'lebron.jpg' },
    { id: 2, src: 'linkdin.png' },
    { id: 3, src: 'image3.jpg' }
  ];

  const changeSlide = useCallback((n) => {
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) return 1;
      if (newIndex < 1) return slides.length;
      return newIndex;
    });
  }, [slides.length]); 

    return(
        <div className='gallery'>
          


          <div className="slideshow-container">
                  {slides.map((slide, index) => (
                    <div 
                      key={slide.id}
                      className={`slide fade ${index + 1 === slideIndex ? 'active' : ''}`}
                    >
                      <img 
                        src={process.env.PUBLIC_URL + `/photos/${slide.src}`} 
                        alt={`Slide ${slide.id}`} 
                      />
                    </div>
                  ))}

                  {/* Navigation Arrows */}
                  <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
                  <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
                </div>


              <Link 
              to="/hero"
              style={{ 
                position: 'absolute',
                right: 520,
                width: 350, 
                top: 650, 
                color: 'white',
                margin: 10,        
                font: 'Times New Roman',
                textAlign: 'center', 
                fontFamily: 'Times New Roman',
                padding: 15.1,
                border: 'solid',
                borderColor: 'white',
                textDecoration: 'none'
              }}
              > 
              BACK TO CIVILIZATION
              </Link>
        </div>
    );
}

export default Gallery;