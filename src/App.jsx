import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Hook from '/components/Hook/Hook';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Hook />
      {/* Add more components here */}
    </div>
  );
}

export default App;