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
        <title>
          Dotpot iT | iT company with Web Development, AI Development, Game
          Development, App Development, Blockchain Development, and IT Support
        </title>
        <meta
          name="description"
          content="Dotpot iT is a leading IT company providing a wide range of services, including app development, web development, game development, AI development, and more. We offer comprehensive solutions to help businesses optimize operations and stay ahead in the evolving world of technology."
        />
        <link rel="canonical" href="https://dotpotit.com/" />
        <meta
          property="og:title"
          content="Dotpot iT | iT company with Web Development, AI Development, Game
          Development, App Development, Blockchain Development, and IT Support"
        />
        <meta
          property="og:description"
          content="Dotpot iT is a leading IT company providing a wide range of services, including app development, web development, game development, AI development, and more. We offer comprehensive solutions to help businesses optimize operations and stay ahead in the evolving world of technology."
        />
        <meta
          name="keywords"
          content="Software Development, Web Development, AI Development, Game Development"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta property="og:url" content="https://dotpotit.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dotpot iT || iT company with Web Development, AI Development, Game
          Development, App Development, Blockchain Development, and IT Support"
        />
        <meta
          name="twitter:description"
          content="Dotpot iT is a leading IT company providing a wide range of services, including app development, web development, game development, AI development, and more. We offer comprehensive solutions to help businesses optimize operations and stay ahead in the evolving world of technology."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta property="og:type" content="website" />
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
      <OurTeam />
      <SocialMedia />
      <OurPartnersSlider />
      {/* <GoogleMap /> */}
      {/* <ChatPopup /> */}
      <Footer />
    </>
  );
};

export default Home;
