// import React from 'react';
// import Navbar from './components/Navbar/Navbar.jsx';
// import Hero from './components/Hero/Hero.jsx';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Navbar />
// //       <Hero />
// //       {/* You can add more components here as you build your website */}
// //     </div>
// //   );
// // }

// function App() {
//   return (
//     <div>
//       <div className="App">
//       <Navbar />
//        <Hero />
//        {/* You can add more components here as you build your website */}
//      </div>
//       <nav className="navbar">
//         {/* Your navbar content */}
//       </nav>
//       <div className="hero-section">
//         {/* Your content that goes on top of the background */}
//       </div>
//     </div>
//   );
// }





// export default App;

import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  const audioRef = useRef(null);
  
  useEffect(() => {
    // Attempt to play audio when component mounts
    // Note: This will likely be blocked by browsers without user interaction
    audioRef.current.play().catch(error => {
      console.log("Autoplay prevented:", error);
    });
  }, []);

  const handlePlay = () => {
    audioRef.current.play();
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <nav className="navbar">
       {/* Your navbar content */}
      </nav>
       <div className="hero-section">
        {/* Your content that goes on top of the background */}
      </div>
      {/* Audio Player */}
      <button 
        onClick={handlePlay} 
        className="music-button"
      >
        Play Music
      </button>
      
      <audio 
        ref={audioRef}
        src="/music/background-music.mp3" 
        loop
      />
    </div>
  );
}

export default App;
