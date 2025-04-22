import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './pages/Hero';
import './App.css';
import About from './pages/About';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
