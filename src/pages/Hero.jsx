import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { motion } from 'framer-motion';
function Hero() {
  const audioUrl = process.env.PUBLIC_URL + '/music/Lebron.mp3';
  return (
    <>
    <div className="heroContainer">
      <a href="https://github.com/Raybolt-wen" target="_blank" rel="noopener noreferrer">
      <motion.div
        // whileHover={{ scale: 1.1 }}
        // transition={{ type: "tween", stiffness: 300 }}
        // whileHover={{
        //   // rotateY: 5,
        //   // rotateX: -5,
        //   // scale: 1.02,
        //   // boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        //   backgroundColor: "blue", // Target color
        //   color: "blue",
        //   transition: { duration: 0.3 }
        // }}
        // transition={{ type: "spring", 
        //               stiffness: 300,
        //               damping: 10 }}
        whileHover={{
          borderColor: "#0000FF",  // Use HEX
          backgroundColor: "rgba(0,0,255,0.1)", // Optional background
          transition: { duration: 0.3 }
        }}        
        >
        <img 
          src={process.env.PUBLIC_URL + "/photos/Git.png"}
          alt="GitHub" 
          style={{ 
            position: 'absolute',
            right: 720,
            width: 200, 
            height: 180,
            top: 250, 
            objectFit: 'cover', 
            cursor: 'pointer',
            border: 'solid',
            borderColor: 'white'}}
        />
        </motion.div>
        </a>
        <a href="https://www.linkedin.com/in/ruide-wen-bb1aa022b/" target="_blank" rel="noopener noreferrer">
        <img 
          src={process.env.PUBLIC_URL + "/photos/Linkdin.png"}
          alt="Linkdin" 
          style={{ 
            position: 'absolute',
            right: 520,
            width: 150, 
            top: 250, 
            objectFit: 'cover', 
            cursor: 'pointer', 
            padding: 15.1,
            border: 'solid',
            borderColor: 'white'}}
        />
        </a>
        <div className='large-text'>
        <Link to = "/about"
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
              }}>
                Get to know me
              
              </Link>
        </div>
        <div>
          <audio controls>
            <source src={audioUrl} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </>
  );
}

export default Hero;