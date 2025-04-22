import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <h1>Lebron Lebron Lebron James</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Im</a></li>
        <li><a href="#about">Talking</a></li>
        <li><a href="#services">About</a></li>
        <Link to="/hero">Hero</Link>
        <Link to="https://www.instagram.com">Home</Link>
        <Link to="/about">About</Link>
        <Link to="https://github.com/Raybolt-wen">Github</Link>
      </ul>
      <button className="contact-btn">Man on the Lakers</button>
      <nav>

    </nav>
    </nav>
    </>
  );
}



export default Navbar;
