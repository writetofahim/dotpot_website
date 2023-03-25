import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import terms from "../assets/pdfs/terms.pdf"

const Terms_Conditions = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* Main Div */}
      <div className="pt-24 w-full min-h-[100vh] flex items-center justify-center">
          
        <iframe
          src={terms}
          title="Terms and Conditions"
          className="w-full h-screen"
        />

      </div>

      <Footer />
    </div>
  )
}

export default Terms_Conditions