// About.js
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
function About() {
  return(
    <div className="about">
  <Link 
  to="/hero"
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
  BACK TO CIVILIZATION
  </Link>
  </div>
  );
}

export default About;
