import React from 'react'
import Hero from '../../components/Hero/Hero'
import IndustriesWeServe from '../../components/IndustriesWeServe/IndustriesWeServe'
import Information from '../../components/Information/Information'
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures'
import PartnershipModels from '../../components/PartnershipModels/PartnershipModels'
import ProcessWeFollow from '../../components/ProcessWeFollow/ProcessWeFollow'
import Services from '../../components/Services/Services'

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
    </>
  )
}

export default Home