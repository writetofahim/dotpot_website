import React from 'react'
import Hero from '../../components/Hero/Hero'
import IndustriesWeServe from '../../components/IndustriesWeServe/IndustriesWeServe'
import Information from '../../components/Information/Information'
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures'
import PartnershipModels from '../../components/PartnershipModels/PartnershipModels'
import ProcessWeFollow from '../../components/ProcessWeFollow/ProcessWeFollow'
import RecentWorks from '../../components/RecentWorks/RecentWorks'
import Services from '../../components/Services/Services'
import WhoWeWorkWith from '../../components/WhoWeWorkWith/WhoWeWorkWith'

const Home = () => {
  return (
    <>
      <Hero />
      <Information />
      <KeyFeatures />
      <Services />
      <ProcessWeFollow />
      <PartnershipModels />
      <IndustriesWeServe />
      <RecentWorks />
      <WhoWeWorkWith />
    </>
  )
}

export default Home