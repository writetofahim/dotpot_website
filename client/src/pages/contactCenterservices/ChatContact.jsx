import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from "../../components/OurPartnersSlider/OurPartnersSlider";

const ChatContact = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-center">
              Chat Contact (CC)
            </h1>
            <p className="mt-2">
              Use our CC services to develop your business.
            </p>
            <Link to="/contact">
              <button className="rounded-none bg-primary-300 text-4xl text-white mt-3 px-4 py-2">
                Contact Us
              </button>
            </Link>
          </div>

          <img
            className="w-1/2"
            src="https://gplex.com/demo/slide/chat.jpg"
            alt="chat-img"
          />
        </div>
        <OurPartnersSlider />

        <div className="container mx-auto">
          <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-left mt-3">
            Why you should use our Chat Contact service
          </h3>
          <p className="pt-10 text-md text-gray-400">
            DotpotiT CC system has a web chat module that meets customers need
            today and in the future. Integration of this module with the CC
            solution helps customers reap healthy return on investment. DotpotiT
            Chat module enables its users the ability to offer more than basic
            call center service to their online visitors. The era of digital
            consumers is driving demand for real-time online interaction
            channels. DotpotiT Chat module provides online customers with such
            sophisticated interaction platform.
            <br />
            The integrated Web Chat module uses the same Automatic Call
            Distribution (ACD) system of the DotpotiT CC solution to route chat
            sessions. DotpotiT system treats a chat session as a call and
            distribute the same to the agents as per CC admin policy. Thus it is
            very easy to monitor chat session progress and analyze relevant
            reports.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ChatContact;
