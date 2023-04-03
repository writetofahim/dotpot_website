import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import coverImg from "../../assets/img/contact-center-support.webp";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const ContactCenterSupport = () => {
  useScrollToTop();
  return (
    <div className="px-3">
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
          Contact Center Support
        </h1>
        <p className="text-md text-gray-400 text-center mb-10">
          We're a top provider of Contact Center Solutions. Optimize your
          Productivity with us.
        </p>
        <div className="border-b container mx-auto">
          <img className="md:w-1/2 mx-auto " src={coverImg} alt="" />
        </div>
        <div className="container  mx-auto flex flex-col mb-10 my-10">
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-5  block text-primary-500">
            Overview
          </h3>
          {/* Overview */}
          <div className="text-gray-400 flex flex-col gap-5 p-5">
            <p>
              Our company specializes in offering top-notch Contact Center
              Solutions designed to help businesses optimize their productivity.
              We understand that effective communication with customers is
              essential for the success of any business, and we have developed a
              range of solutions to help our clients achieve their goals.
            </p>

            <p>
              Our team of experts works closely with clients to identify their
              unique needs and develop customized solutions that deliver
              measurable results. From advanced call routing and intelligent IVR
              systems to real-time reporting and analytics, we offer a
              comprehensive suite of services that enable businesses to
              streamline their operations and enhance customer satisfaction.
            </p>
            <p>
              With years of experience and a deep understanding of the latest
              technologies, we are well-equipped to help businesses of all sizes
              achieve their goals. Whether you're looking to enhance your
              customer service capabilities or improve your sales performance,
              we have the expertise and resources to help you succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default ContactCenterSupport;
