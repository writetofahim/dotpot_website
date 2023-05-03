/**
 * This is a Home component that imports and renders various components to create home page. 
 * The component imports and renders the following components:

Navbar
Hero
Information
KeyFeatures
ContactCenterServices
CustomizeYourService
ProcessWeFollow
PartnershipModels
IndustriesWeServe
RecentWorks
WhoWeWorkWith
WhatOurClientSay
SocialMedia
OurPartnersSlider
RecentBlogs
GoogleMap
Footer
 */

import React from "react";
import { Helmet } from "react-helmet";
import ContactCenterServices from "../../components/ContactCenterServices/ContactCenterServices";
import CustomizeService from "../../components/CustomizeService/CustomizeService";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Hero from "../../components/Hero/Hero";
import IndustriesWeServe from "../../components/IndustriesWeServe/IndustriesWeServe";
import Information from "../../components/Information/Information";
import KeyFeatures from "../../components/KeyFeatures/KeyFeatures";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from "../../components/OurPartnersSlider/OurPartnersSlider";
import OurTeam from "../../components/OurTeam/OurTeam";
import PartnershipModels from "../../components/PartnershipModels/PartnershipModels";
import ProcessWeFollow from "../../components/ProcessWeFollow/ProcessWeFollow";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import RecentWorks from "../../components/RecentWorks/RecentWorks";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import WhatOurClientSay from "../../components/WhatOurClientsSay/WhatOurClientsSay";
import WhoWeWorkWith from "../../components/WhoWeWorkWith/WhoWeWorkWith";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Home = () => {
  useScrollToTop();
  return (
    <>
      <Helmet>
        <title>Dotpot iT || Help Business Successful Online</title>
        <meta
          name="description"
          content="Learn about Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:title"
          content="Dotpot iT || Help Business Successful Online"
        />
        <meta
          property="og:description"
          content="Learn about Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/CncFVCL/dotpot.gif"
        />
        <meta property="og:url" content="https://dotpotit.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dotpot iT || Help Business Successful Online"
        />
        <meta
          name="twitter:description"
          content="Learn about Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/CncFVCL/dotpot.gif"
        />
      </Helmet>
      <Navbar />
      <Hero />
      <GetAQuote />
      <Information />
      <KeyFeatures />
      {/* <Service /> */}
      <ContactCenterServices />
      {/* <CustomizeYourService /> */}
      <CustomizeService />
      <ProcessWeFollow />
      <PartnershipModels />
      <IndustriesWeServe />
      <RecentWorks />
      <WhoWeWorkWith />
      <WhatOurClientSay />
      <RecentBlogs />
      {/* <div id="team"> */}
      <OurTeam />
      {/* </div> */}
      <SocialMedia />
      <OurPartnersSlider />
      {/* <GoogleMap /> */}
      {/* <ChatPopup /> */}
      <Footer />
    </>
  );
};

export default Home;
