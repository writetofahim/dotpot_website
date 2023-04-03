import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'

const CustomerService = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-center">
            Customer Service
          </h1>
          <p className="mt-2">Use our Customer Services to grow your business.</p>
          <Link to="/contact">
            <button className="rounded-none bg-primary-300 text-4xl text-white mt-3 px-4 py-2">Contact Us</button>
          </Link>
        </div>
        
          <img className="w-1/2" src="https://gplex.com/demo/slide/care.png" alt="cs-img"/>
        
        </div>
        <OurPartnersSlider />

        
        <div className="container mx-auto">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-left mt-3">Why you should use our Customer services</h3>
          <p className="pt-10 text-md text-gray-400">
          Well delivered customer service is the most important thing one can do to improve relationships with own customers? No matter how great the product is or how talented the staffs are, one of the things that customers are most likely to remember is their experience of direct interaction they had with the company. DotpotiT CC customers will surely experience high quality support services they deserve. In today's highly competitive business environment, it's more important than ever for companies to focus on providing exceptional customer service. No matter how great a product or service may be, customers are likely to remember their interactions with a company more than anything else. By offering high-quality support services, businesses can not only improve their relationships with their customers, but also differentiate themselves from their competitors. This is where DotpotiT comes in - with its advanced contact center solutions, including Automatic Call Distribution (ACD) technology, businesses can ensure that their customers are connected with the right agent who has the necessary skills to meet their needs..
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerService;
