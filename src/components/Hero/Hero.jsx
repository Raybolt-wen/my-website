import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to My React Website</h1>
        <p>Building amazing web experiences with React</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;