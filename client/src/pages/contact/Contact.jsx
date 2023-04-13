/**
 * This is the Contact component, which renders the contact page of the website.
 * It imports various components such as Navbar, Footer, SocialMedia, ContactFormLarge, OurPartnersSlider, RecentWorks, WhoWeWorkWith, Service, and GoogleMap to display different sections of the page.
 * The ContactFormLarge component is used to display a contact form where users can submit their queries.
 * Tailwind css used for styling
 */

import React from "react";
import { Link } from "react-router-dom";
import ChatPopup from "../../components/ChatPopup/ChatPopup";
import ContactFormLarge from "../../components/ContactForm/ContactFormLarge";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from "../../components/OurPartnersSlider/OurPartnersSlider";
import RecentWorks from "../../components/RecentWorks/RecentWorks";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import WhoWeWorkWith from "../../components/WhoWeWorkWith/WhoWeWorkWith";

import Particle from "../../components/Hero/Particle";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Contact = () => {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <Particle />
      <div className="w-full pt-[15vh] overflow-hidden">
        <ContactInfo />
        <OurPartnersSlider />
        {/* Contact Form Section */}
        <div className="full flex flex-col items-center justify-center mb-10">
          <h3 className="mt-10 mb-5 text-5xl font-bold">Contact Us</h3>
          <p className="mb-5 text-center font-semibold">
            We would be happy to hear from you, please fill in the form below or
            mail us your requirements on <br />
            <Link to="mailto: help@dotpotit.com" className="text-secondary-500">
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
        <ChatPopup />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
