import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'

const Acd = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-center">
          Automatic Call Distribution (ACD)
          </h1>
          <p className="mt-2">Use our CTI services to grow your business.</p>
          <Link to="/contact">
            <button className="rounded-none bg-primary-300 text-4xl text-white mt-3 px-4 py-2">Contact Us</button>
          </Link>
        </div>
        
          <img className="w-1/2" src="https://gplex.com/demo/slide/acd.jpg" alt="acd-img"/>
        
        </div>
        <OurPartnersSlider />

        
        <div className="container mx-auto">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-left mt-3">Why you should use our ACD service</h3>
          <p className="pt-10 text-md text-gray-400">
          DotpotiT Automatic Call Distribution (ACD) is a technology that allows contact centers to distribute inbound calls, emails and chat messages to agents based on call arrival time, priority, customer needs, and agent skill set. Instead of simply sending inbound requests to an available agent, ACD system categorizes calls/messages and then automatically and intelligently routes the same to appropriate agent with relevant skillset to help the customer. By using DotpotiT's ACD system, contact centers can improve customer satisfaction and reduce wait times by quickly connecting customers with the right agent. ACD systems can also help contact centers optimize their resources by making sure agents with specific skillsets are handling the right types of calls and messages.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Acd;
