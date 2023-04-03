import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'

const Ivr = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-center">
          Interactive Voice Response (IVR)
          </h1>
          <p className="mt-2">Use Interactive Voice Response services to grow your business.</p>
          <Link to="/contact">
            <button className="rounded-none bg-primary-300 text-4xl text-white mt-3 px-4 py-2">Contact Us</button>
          </Link>
        </div>
        
          <img className="w-1/2" src="https://gplex.com/demo/slide/ivr.jpg" alt="ivr-img"/>
        
        </div>
        <OurPartnersSlider />

        
        <div className="container mx-auto">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-left mt-3">Why you should use our IVR service?</h3>
          <p className="pt-10 text-md text-gray-400">
          Interactive Voice Response (IVR) is a feature that allows computers to interact with humans through voice commands and key inputs. An IVR system gives callers a self-service option to complete steps on their own to reach their desired call recipients. IVR is especially important when call volumes are high or when agents are unable to answer/handle calls. <br/>
          The IVR system helps reduce your cost per call by letting customers choose the type of help they want such as self-service or speaking to an agent. Not only will our IVR software free up your agents to handle more complex cases, but customers can quickly self-solve basic issues like bill pay, account inquiries, and more. Flexible IVR module allows creating and editing voice menu for call routing at any time. Multiple IVR allows you to provide multiple services. Several tools in your DotpotiT administrative panel help you to create IVR menu. IVR systems are increasingly being used to place outbound calls for tasks such as delivering or gathering information for appointments, past due bills, and other time critical events and activities.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Ivr;
