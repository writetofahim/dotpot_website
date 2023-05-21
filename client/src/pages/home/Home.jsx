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
          Dotpot iT | It Company with Web, AI, Game, App development service
        </title>
        <meta
          name="description"
          content="Dotpot iT provides web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
        />
        <link rel="canonical" href="https://dotpotit.com/" />
        <meta
          property="og:title"
          content="Dotpot iT | It Company with Web, AI, Game, App development service"
        />
        <meta
          property="og:description"
          content="Dotpot iT provides web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
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
          content="Dotpot iT | It Company with Web, AI, Game, App development service"
        />
        <meta
          name="twitter:description"
          content="Dotpot iT provides web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
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
      <TrustpilotBox />
      <OurPartnersSlider />
      {/* <GoogleMap /> */}
      {/* <ChatPopup /> */}
      {/* <TrustBox /> */}
      <Footer />
    </>
  );
};

export default Home;

export const TrustBox = () => {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null);
  React.useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);
  return (
    <div
      ref={ref} // We need a reference to this element to load the TrustBox in the effect.
      className="trustpilot-widget" // Renamed this to className.
      // [ long list of data attributes...]
      data-locale="en-US"
      data-template-id="5419b6a8b0d04a076446a9ad"
      data-businessunit-id="64629248c3fdd6cd235af790"
    >
      <a
        href="https://www.trustpilot.com/review/dotpotit.com"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
  );
};

const TrustpilotBox = () => {
  return (
    <div
      className="trustpilot-widget my-10"
      data-locale="en-US"
      data-template-id="5419b6a8b0d04a076446a9ad"
      data-businessunit-id="64629248c3fdd6cd235af790"
      data-style-height="24px"
      data-style-width="100%"
      data-theme="light"
      data-min-review-count="10"
      data-without-reviews-preferred-string-id="1"
      data-style-alignment="center"
    >
      <a
        href="https://www.trustpilot.com/review/dotpotit.com"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
  );
};
