/**
 * This is the services page
 * Components are imported to construct the whole page
 */

import React from "react";
import { Helmet } from "react-helmet";
import ContactCenterServices from "../../components/ContactCenterServices/ContactCenterServices";
import CustomizeService from "../../components/CustomizeService/CustomizeService";
import Footer from "../../components/Footer/Footer";
import Particle from "../../components/Hero/Particle";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import PartnershipModels from "../../components/PartnershipModels/PartnershipModels";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import RecentWorks from "../../components/RecentWorks/RecentWorks";
import WhoWeWorkWith from "../../components/WhoWeWorkWith/WhoWeWorkWith";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Services = () => {
  useScrollToTop();
  return (
    <div className="full">
      <Helmet>
        <title>Services | Dotpot iT</title>
        <meta
          name="description"
          content="Learn about Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta property="og:title" content="About Us | Dotpot iT" />
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
        <meta name="twitter:title" content="About Us | Dotpot iT" />
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
      <Particle />
      <div className="w-full pt-[15vh]">
        <NavigatorComponent navigationData={navigationData} />
        <CustomizeService />
        {/* <Service /> */}
        <ContactCenterServices />
        <PartnershipModels />
        <RecentWorks />
        <WhoWeWorkWith />
        <RecentBlogs />
        {/* <SocialMedia /> */}
        {/* <ChatPopup /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Services;

const navigationData = [{ title: "Services", link: "/services" }];
