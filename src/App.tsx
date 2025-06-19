import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import BarPage from './pages/Bars';
import BarMapPage from './pages/BarMap';
import TeamPage from './pages/TeamPage';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import SignupPage from './pages/SignupPage';

function App() {
  {/* 
    if we need a protected route we can do this and its already setup: <ProtectedRoute><BarPage /> </ProtectedRoute> 
    The advantage to protecting the bar route or barmaps route would be to save api rest and make the user log in.
    However, with current user count no need to worry...
    */}

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bars" element={<BarPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/barmap" element={<BarMapPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignupPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
