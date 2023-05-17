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
      <div className="w-full pt-[15vh]">
        <Helmet>
          <title>About Us | Dotpot iT</title>
          <meta
            name="description"
            content="Dotpot iT is a leading IT company providing a wide range of services, including app development, web development, game development, AI development, and more. We offer comprehensive solutions to help businesses optimize operations and stay ahead in the evolving world of technology."
          />
          <link rel="canonical" href="https://dotpotit.com/about" />
          <meta property="og:title" content="About Us | Dotpot iT" />
          <meta
            property="og:description"
            content="Dotpot iT is a leading IT company providing a wide range of services, including app development, web development, game development, AI development, and more. We offer comprehensive solutions to help businesses optimize operations and stay ahead in the evolving world of technology."
          />
          <meta
            property="og:image"
            content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
          />
          <meta
            name="keywords"
            content="web development, AI development, game development, app development, blockchain development, IT support, custom software development, full-stack web development, machine learning development, Unity game development, eCommerce development, agile software development, cloud-based solutions, expert developers, affordable web development, professional game development, AI chatbot integration, web design and development, cross-platform app development, virtual and augmented reality development, chat support for customers, blockchain consulting services, IT infrastructure support, cybersecurity services, software testing and quality assurance, responsive web design, scalable solutions, database management services, UX/UI design services, website maintenance and support"
          />
          <meta property="og:url" content="https://dotpotit.com/about" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="About Us | Dotpot iT" />
          <meta
            name="twitter:description"
            content="Dotpot iT is a leading IT company providing a wide range of services, including app development, web development, game development, AI development, and more. We offer comprehensive solutions to help businesses optimize operations and stay ahead in the evolving world of technology."
          />
          <meta
            name="twitter:image"
            content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
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
    <div className="w-full flex items-center justify-center p-2 bg-background-500 rounded-all py-10">
      <div className="container p-3 md:p-5 flex flex-col items-center gap-5">
        <h1>
          <Typed
            className="text-center text-3xl md:text-5xl font-bold text-textColor-500"
            strings={["Who We Are?"]}
            typeSpeed={100}
          />
        </h1>
        {/* <h1 className="text-center text-gray-600 text-3xl md:text-5xl font-bold">Who We Are ? </h1> */}
        <p className="w-full md:w-2/3 text-center text-lg md:text-xl text-textColor-500">
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
