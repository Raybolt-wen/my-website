import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* You can add more components here as you build your website */}
    </div>
  );
}

export default App;

