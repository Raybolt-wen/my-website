import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { motion } from 'framer-motion';
import AnimatedWidget from '/Users/ray/Documents/Projects/my-website/my-website/src/components/AnimatedWidget';
function Hero() {
  return (
    <>
    <div className="heroContainer">
    
    <div className="title-text-hero">
      Ray Wen
    </div>

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

            <a href="https://x.com/raywen38" target="_blank" rel="noopener noreferrer">
              <motion.div
                className='social-icon-Twitter'
                whileHover={{
                  backgroundColor: "rgba(0, 47, 255, 0.1)",
                  transition: { duration: 0.15 }
                }}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/photos/twitter.png"}
                  alt="twitter" 
                  className='social-image'
                />
              </motion.div>
            </a>

            <a href="https://open.spotify.com/user/31467hd2bxydznvftzcyvtf5jfiq?si=199ac18452224090" target="_blank" rel="noopener noreferrer">
              <motion.div
                className='social-icon-spotify'
                whileHover={{
                  backgroundColor: "rgba(0, 47, 255, 0.1)",
                  transition: { duration: 0.15 }
                }}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/photos/spotify.png"}
                  alt="GitHub" 
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
            >
                <Link to = "/gallery" 
                  className= "nav-link"
                  > 
                        Couple of photos
                      </Link>
         </AnimatedWidget>

         <AnimatedWidget 
              className = 'main-widget-resume'
            >
              <a href="mailto:raywen38@example.com" className='nav-link'>
                  Contact
                </a>
              
         </AnimatedWidget>
        </div>
    </>
  );
}

export default Hero;