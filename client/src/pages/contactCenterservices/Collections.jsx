import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartnersSlider from "../../components/OurPartnersSlider/OurPartnersSlider";

const Collections = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-center">
              Collections
            </h1>
            <p className="mt-2">
              Use our automated collections to grow your business.
            </p>
            <Link to="/contact">
              <button className="rounded-none bg-primary-300 text-4xl text-white mt-3 px-4 py-2">
                Contact Us
              </button>
            </Link>
          </div>

          <img
            className="w-1/2"
            src="https://gplex.com/demo/slide/collection.jpg"
            alt="collections-img"
          />
        </div>
        <OurPartnersSlider />

        <div className="container mx-auto">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-5 block text-primary-400 text-left mt-3">Why you should use our Collections service</h3>
          <p className="pt-10 text-md text-gray-400">
            With DotpotiT automated dialing options, your agents will only
            receive calls that are connected to debtors, allowing you to contact
            more debtors each day. In addition, our real-time and historical
            reporting enables you to identify optimal times to reach debtors and
            maximizes your chances of debt recovery. If your agents are manually
            calling debtors, you're losing valuable time and money as they
            frequently reach voicemail and rarely connect to a live person.
            Using gPlex, you can eliminate these unnecessary costs and allow
            your agents to focus on making the most out of the live connections
            they make. <br />
            DotpotiT telemarketing module for businesses and call centers of all
            sizes — bringing incredible speed and efficiency to telemarketing
            companies, by radically improving speed-to-contact, daily call
            volume, agents productivity, and customer satisfaction. <br />
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Collections;
