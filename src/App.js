// import React, { useRef, useEffect } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import './App.css';

// function App() {
//   const audioRef = useRef(null);
  
//   useEffect(() => {
//     // Attempt to play audio when component mounts
//     // Note: This will likely be blocked by browsers without user interaction
//     audioRef.current.play().catch(error => {
//       console.log("Autoplay prevented:", error);
//     });
//   }, []);

//   const handlePlay = () => {
//     audioRef.current.play();
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <nav className="navbar">
//        {/* Your navbar content */}
//       </nav>
//        <div className="hero-section">
//         {/* Your content that goes on top of the background */}
//       </div>
//       {/* Audio Player */}
//       <button 
//         onClick={handlePlay} 
//         className="music-button"
//       >
//         Play Music
//       </button>
      
//       <audio 
//         ref={audioRef}
//         src="/Users/ray/Documents/Projects/my-website/Lebron.mp3" 
//         loop
//       />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  const [audio, setAudio] = useState(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [playError, setPlayError] = useState(null);
  
  // Load the audio file when component mounts
  useEffect(() => {
    const newAudio = new Audio("/music/Lebron.mp3");
    
    newAudio.addEventListener('canplaythrough', () => {
      console.log('Audio loaded and ready to play');
      setAudioLoaded(true);
    });
    
    newAudio.addEventListener('error', (e) => {
      console.error('Audio loading error:', e);
      setPlayError('Failed to load audio file');
    });
    
    newAudio.load();
    setAudio(newAudio);
    
    // Cleanup
    return () => {
      newAudio.pause();
      newAudio.src = '';
    };
  }, []);
  
  const handlePlay = () => {
    if (!audio || !audioLoaded) {
      setPlayError('Audio not loaded yet');
      return;
    }
    
    // Clear any previous errors
    setPlayError(null);
    
    // Play with proper error handling
    audio.play()
      .then(() => {
        console.log('Playback started successfully');
      })
      .catch(error => {
        console.error('Playback error:', error);
        setPlayError(`Couldn't play audio: ${error.message}`);
      });
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
      <button 
        onClick={handlePlay}
        className="music-button"
        disabled={!audioLoaded}
      >
        
        {audioLoaded ? 'Play Music' : 'Loading Music...'}
      </button>
      
      {playError && (
        <div className="error-message">
          {playError}
        </div>
      )}
    </div>
  );
}

export default App;
