import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ApplyJob from './pages/applyJob/ApplyJob'
import Home from './pages/home/Home'
import Apply from "./pages/applyJob/Apply";
import AboutUs from "./pages/about/AboutUs";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
