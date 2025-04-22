import React from 'react';
import './Hero.css';

function Hero() {
  const audioUrl = process.env.PUBLIC_URL + '/music/Lebron.mp3';
  return (
    <>
    <div className="hero">
        <div className="hero-content">
          <div className="text-overlay">
          <p>I sit by myself </p> 
          <p>Thinking 'bout LeBron</p>
          <p>I love you, LeBron</p>
          <p>I hope you get another ring </p>
          <p> Before you leave the court </p>
          <p> Oh, thank you, LeBron </p>
          <p> For everything </p>
          <p> Thinking 'bout LeBron </p>
        </div>
      </div>
      </div>
      <div>
    <audio controls>
      <source src={audioUrl} type="audio/mpeg" />
    </audio>
  </div>
    </>

  //   <div className="App">
  //   <Hero />
  //   <nav className="navbar">=
  //    </nav>
  //     <div className="hero-section">
  //    </div>
  // </div>
  );
}

export default Hero;