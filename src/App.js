import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import './App.css';
import About from './pages/About';
import Gallery from './pages/Gallery';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="*" element={<Hero />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
