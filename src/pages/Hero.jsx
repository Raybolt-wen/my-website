import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { motion } from 'framer-motion';
import AnimatedWidget from '/Users/ray/Documents/Projects/my-website/my-website/src/components/AnimatedWidget';
function Hero() {
  return (
    <>
    <div className="heroContainer">
    <a href="https://github.com/Raybolt-wen" target="_blank" rel="noopener noreferrer">
          <motion.div
            style={{
              position: 'absolute',
              right: 720,
              top: 250,
              border: '2px solid white',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              borderColor: 'white'
            }}
            whileHover={{
              backgroundColor: "rgba(0, 47, 255, 0.1)",
              transition: { duration: 0.15 }
            }}
          >
            <img 
              src={process.env.PUBLIC_URL + "/photos/Git.png"}
              alt="GitHub" 
              style={{ 
                width: 180,
                height: 150,
                objectFit: 'cover' 
              }}
            />
          </motion.div>
        </a>

        <a href="https://www.linkedin.com/in/ruide-wen-bb1aa022b/" target="_blank" rel="noopener noreferrer">
        <motion.div
            style={{
              position: 'absolute',
              right: 520,
              top: 250,
              border: '2px solid white',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              borderColor: 'white'
            }}
            whileHover={{
              backgroundColor: "rgba(0, 47, 255, 0.1)",
              transition: { duration: 0.15 }
            }}
            >
        <img 
          src={process.env.PUBLIC_URL + "/photos/Linkdin.png"}
          alt="Linkdin" 
          style={{ 
            width: 150, 
            height: 150,
            objectFit: 'cover'}}
        />
        </motion.div>
        </a>
        <div className='large-text'>
            <AnimatedWidget
              style={{ 
                position: 'absolute',
                right: 520,
                width: 350, 
                top: 450, 
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
                <Link to = "/about" 
                  style = {{
                    color: 'inherit',
                    textDecoration: 'none',
                    display: 'block'
                  }} > 
                        Get to know me
                      </Link>
         </AnimatedWidget>
        <div className='gallery-link'>
        <AnimatedWidget
              style={{ 
                width: 350, 
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
                <Link to = "/gallery" 
                  style = {{
                    color: 'inherit',
                    textDecoration: 'none',
                    display: 'block'
                  }} > 
                        Couple of photos
                      </Link>
         </AnimatedWidget>
        </div>
                </div>
      </div>
    </>
  );
}

export default Hero;