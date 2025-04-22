import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import './App.css';
import About from './pages/About';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="*" element={<Hero />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
