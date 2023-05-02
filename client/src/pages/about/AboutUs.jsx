/**
 * This component is the About Us page of a website.
 * It imports several components and data files, including the Navbar, Footer, OurPartnersSlider, AboutHero, PartnershipModels, ProcessWeFollow, WhoWeWorkWith, RecentWorks, SocialMedia, GoogleMap, and ContactForm.
 * It uses the imported data files to render different sections of the page, including the hero section, main section, and several other sections, such as the partnership models, process we follow, recent works, and social media sections.
 * It also sets a hero image and a button link to the Contact Us page.
 */

import React from "react";
import { Helmet } from "react-helmet";
import Typed from "react-typed";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PartnershipModels from "../../components/PartnershipModels/PartnershipModels";
import ProcessWeFollow from "../../components/ProcessWeFollow/ProcessWeFollow";
import RecentWorks from "../../components/RecentWorks/RecentWorks";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import WhoWeWorkWith from "../../components/WhoWeWorkWith/WhoWeWorkWith";

import Particle from "../../components/Hero/Particle";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const AboutUs = () => {
  useScrollToTop();

  const heroImg =
    "https://www.hyperlinkinfosystem.com/assets/uploads/banner/1634022694.png";
  const button = { title: "Contact Us", link: "/contact" };
  return (
    <>
      <Navbar />
      <div className="w-full pt-[95px]">
        <Helmet>
          <title>About Us | Dotpot iT</title>
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

        <Particle />

        <NavigatorComponent navigationData={navigationData} />
        <AboutSection />

        {/* <AboutHero heading="About Dotpot iT" text="A fast growing IT complay" heroImg={heroImg} button={button} /> */}
        {/* <OurPartnersSlider /> */}

        <ContactInfo />

        <ProcessWeFollow />
        <PartnershipModels />
        <WhoWeWorkWith />
        <RecentWorks />
        <SocialMedia />
        {/* <GoogleMap /> */}
        {/* <ChatPopup /> */}
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;

const AboutSection = () => {
  return (
    <div className="w-full flex items-center justify-center p-2 bg-bgSecondary-500 rounded-all py-10">
      <div className="container p-3 md:p-5 flex flex-col items-center gap-5">
        <Typed
          className="text-center text-3xl md:text-5xl font-bold text-primary-500"
          strings={["Who We Are?"]}
          typeSpeed={100}
        />
        {/* <h1 className="text-center text-gray-600 text-3xl md:text-5xl font-bold">Who We Are ? </h1> */}
        <p className="w-full md:w-2/3 text-center text-lg md:text-xl text-secondary-500">
          Dotpot iT is a leading IT company that offers a wide range of IT
          products and services. From app development and web development to
          game development, AI development, and blockchain development, we
          provide solutions that meet the unique needs of our clients. We also
          offer contact center support and tech support to help businesses
          optimize their operations and achieve their goals. With our expertise
          and commitment to excellence, Dotpot iT is the ideal partner for
          businesses looking to stay ahead in the rapidly-evolving world of
          technology.
        </p>
      </div>
    </div>
  );
};

const navigationData = [{ title: "About Us", link: "/about" }];
