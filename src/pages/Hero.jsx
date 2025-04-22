import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const audioUrl = process.env.PUBLIC_URL + '/music/Lebron.mp3';
  return (
    <>
    <div className="heroContainer">
      <a href="https://github.com/Raybolt-wen" target="_blank" rel="noopener noreferrer">
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