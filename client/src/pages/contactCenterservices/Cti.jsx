import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'

const Cti = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-center">
            Computer Telephony Integration (CTI)
          </h1>
          <p className="mt-2">Use our CTI services to grow your business.</p>
          <Link to="/contact">
            <button className="rounded-none bg-primary-300 text-4xl text-white mt-3 px-4 py-2">Contact Us</button>
          </Link>
        </div>
        
          <img className="w-1/2" src="https://www.revenue.io/wp-content/uploads/2014/01/05-cti-scaled.jpg" alt="cti-img"/>
        
        </div>
        <OurPartnersSlider />

        
        <div className="container mx-auto">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-left mt-3">Why you should use our CTI service</h3>
          <p className="pt-10 text-md text-gray-400">
            DotpotiT CRM integration helps agents personalize calls using CTI
            screen popups and more. Identify callers by unique attributes like
            phone number, display relevant information such as the caller’s name
            on the agent’s screen before the call connects. DotpotiT integrates
            with most custom CRMs. CTI can also authenticate a call, screening
            its number against a database. These prospect and numbers are often
            stored in external CRM tool e.g. Salesforce. <br />
            CTI tools may be used to route incoming calls to the right agent.
            Calls can be routed based on a variety of factors including
            time-of-day, agent’s skills, and even based on which marketing
            promotion or search keyword triggered a call in the first place.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cti;
