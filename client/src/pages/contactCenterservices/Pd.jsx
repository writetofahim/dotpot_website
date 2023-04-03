import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'

const Pd = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-center">
            Predictive Dialer (PD)
          </h1>
          <p className="mt-2">Use our PD services to grow your business.</p>
          <Link to="/contact">
            <button className="rounded-none bg-primary-300 text-4xl text-white mt-3 px-4 py-2">Contact Us</button>
          </Link>
        </div>
        
          <img className="w-1/2" src="https://gplex.com/demo/slide/pd.jpg" alt="pd-img"/>
        
        </div>
        <OurPartnersSlider />

        
        <div className="container mx-auto">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-left mt-3">Why you should use our PD service?</h3>
          <p className="pt-10 text-md text-gray-400">
          DotpotiT Predictive Dialer ('DotpotiT PD') is an automatic dialing (call campaign / robo-calls) solution used in a contact center environment. It is a cutting edge technology that allows a contact center system to setup an automatic outbound calling procedure supporting multiple call campaigns or lead generation efforts. The module is guided by a sophisticated self-correcting and self-learning statistical dialing algorithm to dial telephone numbers from linked database in batches. The system screens and eliminates unnecessary and un-productive calls such as answering machines, fax tones, disconnected numbers, busy tones, etc. and forwards only the live connected calls to the customer service agents. Ultimately it helps minimize agent idle time and increases productivity of contact centers.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Pd;
