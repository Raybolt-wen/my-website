import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { motion } from 'framer-motion';
import AnimatedWidget from '/Users/ray/Documents/Projects/my-website/my-website/src/components/AnimatedWidget';
function Hero() {
  return (
    <>
    <div className="heroContainer">
      <div className="social-links">
        <a href="https://github.com/Raybolt-wen" target="_blank" rel="noopener noreferrer">
              <motion.div
                className='social-icon-github'
                whileHover={{
                  backgroundColor: "rgba(0, 47, 255, 0.1)",
                  transition: { duration: 0.15 }
                }}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/photos/Git.png"}
                  alt="GitHub" 
                  className='social-image'
                />
              </motion.div>
            </a>

            <a href="https://www.linkedin.com/in/ruide-wen-bb1aa022b/" target="_blank" rel="noopener noreferrer">
            <motion.div
                className='social-icon-linkdin'
                whileHover={{
                  backgroundColor: "rgba(0, 47, 255, 0.1)",
                  transition: { duration: 0.15 }
                }}
                >
            <img 
              src={process.env.PUBLIC_URL + "/photos/Linkdin.png"}
              alt="Linkdin" 
              className='social-image'
            />
            </motion.div>
            </a>
      </div>
            <AnimatedWidget 
              className = 'main-widget-about'
            >
                <Link to = "/about" 
                  className= "nav-link"
                  > 
                        Get to know me
                      </Link>
         </AnimatedWidget>

        <AnimatedWidget
          className ="main-widget-photos"
              // style={{ 
              //   width: 350, 
              //   color: 'white',
              //   margin: 10,        
              //   font: 'Times New Roman',
              //   textAlign: 'center', 
              //   fontFamily: 'Times New Roman',
              //   padding: 15.1,
              //   border: 'solid',
              //   borderColor: 'white',
              //   textDecoration: 'none'
              // }}
            >
                <Link to = "/gallery" 
                  className= "nav-link"
                  // style = {{
                  //   color: 'inherit',
                  //   textDecoration: 'none',
                  //   display: 'block'
                  // }} 
                  > 
                        Couple of photos
                      </Link>
         </AnimatedWidget>
        </div>
    </>
  );
}

export default Hero;