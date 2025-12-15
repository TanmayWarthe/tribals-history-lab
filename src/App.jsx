import React from 'react'
import { Routes, Route } from "react-router-dom";
import HeroSection from './pages/HeroSection.jsx'
import Data from './pages/Data.jsx'
import ImageGallery from './pages/imagegallary.jsx';
import Login from './pages/Login.jsx'
import TribalHeroes from './pages/TribalHeroes.jsx'
import Register from './pages/Register.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
          <div className="hero-section"><HeroSection /></div>
            
            <div className="data-section"><Data /></div>
            <div className="image-gallery"><ImageGallery /></div>
            <div className="tribal-heros-section"><TribalHeroes /></div>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
