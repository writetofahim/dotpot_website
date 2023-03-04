import { Fab } from '@mui/material'
import React from 'react'
import BackToTop from '../../components/BackToTop/BackToTop'
import CustomizeYourService from '../../components/CustomizeYourService/CustomizeYourService'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import IndustriesWeServe from '../../components/IndustriesWeServe/IndustriesWeServe'
import Information from '../../components/Information/Information'
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures'
import Navbar from '../../components/Navbar/Navbar'
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'
import PartnershipModels from '../../components/PartnershipModels/PartnershipModels'
import ProcessWeFollow from '../../components/ProcessWeFollow/ProcessWeFollow'
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs'
import RecentWorks from '../../components/RecentWorks/RecentWorks'
import Service from '../../components/Services/Service'
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
      {/* <Service /> */}
      <CustomizeYourService />
      <ProcessWeFollow />
      <PartnershipModels />
      <IndustriesWeServe />
      <RecentWorks />
      <WhoWeWorkWith />
      <WhatOurClientSay />
      <SocialMedia />
      <RecentBlogs />
      <OurPartnersSlider />
      <Footer />
      {/* <BackToTop /> */}
    </>
  )
}

export default Home