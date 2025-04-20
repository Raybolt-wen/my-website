import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Lebron Lebron Lebron James</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Im</a></li>
        <li><a href="#about">Talking</a></li>
        <li><a href="#services">About</a></li>
        <li><a href="#contact">The</a></li>
      </ul>
      <button className="contact-btn">Man on the Lakers</button>
    </nav>
  );
}



export default Navbar;
