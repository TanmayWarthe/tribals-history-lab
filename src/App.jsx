import React from 'react'
import { Routes, Route } from "react-router-dom";
import HeroSection from './pages/HeroSection.jsx'
import Data from './pages/Data.jsx'
import Login from './pages/Login.jsx'
import Slider from './pages/Slider.jsx'
import Register from './pages/Register.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <div id="data-section">
              <Data />
            </div>
            <div className="slider">
              <Slider />
            </div>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
