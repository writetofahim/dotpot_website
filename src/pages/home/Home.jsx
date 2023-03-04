import { Fab } from '@mui/material'
import React from 'react'
import BackToTop from '../../components/BackToTop/BackToTop'
import ContactCenterServices from '../../components/ContactCenterServices/ContactCenterServices'
import CustomizeYourService from '../../components/CustomizeYourService/CustomizeYourService'
import Footer from '../../components/Footer/Footer'
import GoogleMap from '../../components/GoogleMap/GoogleMap'
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
      <ContactCenterServices />
      <CustomizeYourService />
      <ProcessWeFollow />
      <PartnershipModels />
      <IndustriesWeServe />
      <RecentWorks />
      <WhoWeWorkWith />
      <WhatOurClientSay />
      <SocialMedia />
      <OurPartnersSlider />
      <RecentBlogs />
      <GoogleMap />
      <Footer />
      {/* <BackToTop /> */}
    </>
  )
}

export default Home