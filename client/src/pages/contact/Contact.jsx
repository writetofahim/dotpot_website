/**
 * This is the Contact component, which renders the contact page of the website.
 * It imports various components such as Navbar, Footer, SocialMedia, ContactFormLarge, OurPartnersSlider, RecentWorks, WhoWeWorkWith, Service, and GoogleMap to display different sections of the page.
 * The ContactFormLarge component is used to display a contact form where users can submit their queries.
 * Tailwind css used for styling
 */

import React from "react";
import { Link } from "react-router-dom";
import ContactFormLarge from "../../components/ContactForm/ContactFormLarge";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from "../../components/OurPartnersSlider/OurPartnersSlider";
import RecentWorks from "../../components/RecentWorks/RecentWorks";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import WhoWeWorkWith from "../../components/WhoWeWorkWith/WhoWeWorkWith";

import { Helmet } from "react-helmet";
import Particle from "../../components/Hero/Particle";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Contact = () => {
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Contact Us | Dotpot iT</title>
        <meta
          name="description"
          content="Get in touch with us for your IT needs. Contact us for website development, mobile app development, and more."
        />
        <meta property="og:title" content="Contact Us | Dotpot iT" />
        <meta
          property="og:description"
          content="Get in touch with us for your IT needs. Contact us for website development, mobile app development, and more."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/assets/logo-492dab11.png"
        />
        <meta property="og:url" content="https://dotpotit.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Get in touch with us for your IT needs. Contact us for website development, mobile app development, and more."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <Particle />
      <div className="w-full pt-[15vh] overflow-hidden">
        <NavigatorComponent navigationData={navigationData} />
        <ContactInfo />
        <OurPartnersSlider />
        {/* Contact Form Section */}
        <div className="full flex flex-col items-center justify-center mb-10">
          <h3 className="mt-10 mb-5 text-5xl font-bold text-textColor-500">Contact Us</h3>
          <p className="mb-5 text-center font-semibold text-textColor-500">
            We would be happy to hear from you, please fill in the form below or
            mail us your requirements on <br />
            <Link to="mailto: help@dotpotit.com" className="text-textColor-500">
              help@dotpotit.com
            </Link>
          </p>
          <div className="container flex flex-col items-center">
            <ContactFormLarge />
          </div>
        </div>

        <WhoWeWorkWith />
        <RecentWorks />
        <SocialMedia />
        {/* <GoogleMap /> */}
        {/* <ChatPopup /> */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;

const navigationData = [{ title: "Contact", link: "/contact" }];
