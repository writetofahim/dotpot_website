import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'

const MobileApp = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-center">
          Mobile App
          </h1>
          <p className="mt-2">Let's build a mobile app to grow your business.</p>
          <Link to="/contact">
            <button className="rounded-none bg-primary-300 text-4xl text-white mt-3 px-4 py-2">Contact Us</button>
          </Link>
        </div>
        
          <img className="w-min h-min" src="https://gplex.com/demo/slide/mobile_apps.png" alt="app-img"/>
        
        </div>
        <OurPartnersSlider />

        
        <div className="container mx-auto">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-left mt-3">Why you should use our Mobile App service?</h3>
          <p className="pt-10 text-md text-gray-400">
          DotpotiT contact center system has enabled mobility of contact center agents through mobile application. The Apps come handy for enterprise customers. Mobile apps allow access to customized services. Moreover, DotpotiT's mobile application also offers real-time tracking of agent performance and customer interactions. This allows for efficient management of contact center operations and ensures high levels of customer satisfaction. Additionally, the mobile app is user-friendly and provides a seamless experience for both agents and customers. With this innovative solution, enterprises can provide excellent customer support anytime, anywhere, and on any device. DotpotiT's contact center system is a game-changer for businesses looking to enhance their customer experience and stay ahead of the competition.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MobileApp;
