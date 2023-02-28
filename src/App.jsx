import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ApplyJob from './pages/applyJob/ApplyJob'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyJob />}>
          {/* <Route path="/0" element={<ApplyJob />} /> */}
        </Route>  
      </Routes>
    </>
  )
}

export default App
