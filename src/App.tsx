import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={null} />
        <Route path="/contact" element={null} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
