import { Fab } from '@mui/material'
import React from 'react'
import BackToTop from '../../components/BackToTop/BackToTop'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import IndustriesWeServe from '../../components/IndustriesWeServe/IndustriesWeServe'
import Information from '../../components/Information/Information'
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures'
import Navbar from '../../components/Navbar/Navbar'
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'
import PartnershipModels from '../../components/PartnershipModels/PartnershipModels'
import ProcessWeFollow from '../../components/ProcessWeFollow/ProcessWeFollow'
import RecentWorks from '../../components/RecentWorks/RecentWorks'
import Services from '../../components/Services/Services'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import WhatOurClientSay from '../../components/WhatOurClientsSay/WhatOurClientsSay'
import WhoWeWorkWith from '../../components/WhoWeWorkWith/WhoWeWorkWith'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Information />
      <KeyFeatures />
      <Services />
      <ProcessWeFollow />
      <PartnershipModels />
      <IndustriesWeServe />
      <RecentWorks />
      <WhoWeWorkWith />
      <WhatOurClientSay />
      <SocialMedia />
      <OurPartnersSlider />
      <Footer />
      {/* <BackToTop /> */}
    </>
  )
}

export default Home