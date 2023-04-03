import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'

const EmailMarketing = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-center">
            Email Marketing
          </h1>
          <p className="mt-2">Use our Email Marketing Services to grow your business.</p>
          <Link to="/contact">
            <button className="rounded-none bg-primary-300 text-4xl text-white mt-3 px-4 py-2">Contact Us</button>
          </Link>
        </div>
        
          <img className="w-1/2" src="https://gplex.com/demo/slide/email.jpg" alt="email-img"/>
        
        </div>
        <OurPartnersSlider />

        
        <div className="container mx-auto">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-left mt-3">Why you should use our Email Marketing service</h3>
          <p className="pt-10 text-md text-gray-400">
          This module allows incoming emails to the DotpotiT Contact Center (CC) to be distribute to the agents based on CC admin policy. A note can be added by the CC agent to each email. Even if an email has been sent, or is in the process of being sent or is in queue the agent concerned may add a note if felt necessary. The email module saves a comprehensive record of all emails sent/received including various useful statistics and user friendly filtering tool to retrieve the needed data/information in the future. Incoming and outgoing mails may be filtered based on agent groups or other policy factors. One or more files can be attached to any email message, and be sent along with it to the recipient. Agent not only can send email with attachment, also can receive incoming mail with attachments.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default EmailMarketing;
