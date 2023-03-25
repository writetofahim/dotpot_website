import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import privacy from '../../assets/pdfs/privacy.pdf'
import Footer from '../../components/Footer/Footer'

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* Main Div */}
      <div className="pt-24 w-full min-h-[100vh] flex items-center justify-center">
          
        <iframe
          src={privacy}
          title="Terms and Conditions"
          className="w-full h-screen"
        />

      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy