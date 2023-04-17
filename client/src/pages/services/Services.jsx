/**
 * This is the services page
 * Components are imported to construct the whole page
 */

import React from "react";
import ContactCenterServices from "../../components/ContactCenterServices/ContactCenterServices";
import CustomizeService from "../../components/CustomizeService/CustomizeService";
import Footer from "../../components/Footer/Footer";
import Particle from "../../components/Hero/Particle";
import Navbar from "../../components/Navbar/Navbar";
import PartnershipModels from "../../components/PartnershipModels/PartnershipModels";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import RecentWorks from "../../components/RecentWorks/RecentWorks";
import WhoWeWorkWith from "../../components/WhoWeWorkWith/WhoWeWorkWith";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Services = () => {
  useScrollToTop();
  return (
    <div className="full">
      <Navbar />
      <Particle />
      <div className="w-full pt-[15vh]">
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
