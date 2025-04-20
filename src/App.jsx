import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Add more components here */}
    </div>
  );
}

export default App;