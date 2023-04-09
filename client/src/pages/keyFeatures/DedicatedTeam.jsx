import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import coverImg from "../../assets/img/dedicated-team.jpg";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const DedicatedTeam = () => {
  useScrollToTop();
  return (
    <div className="">
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
          Dedicated Team
        </h1>
        <p className="text-md text-gray-400 text-center mb-10">
          Empower your business with our dedicated team.
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
              At our company, we have a dedicated team of professionals who are
              committed to empowering your business. Our team consists of
              experts with diverse backgrounds and skillsets, enabling us to
              provide comprehensive solutions to meet your unique business
              needs. Whether you need help with IT support, website development,
              or AI and blockchain technology, our team has the expertise to
              take your business to the next level.
            </p>

            <p>
              We believe that the success of your business is our success, which
              is why we prioritize collaboration and communication with our
              clients. By working closely with you, we gain a deep understanding
              of your business objectives and tailor our solutions to meet your
              specific needs. Our goal is to empower your business with the
              tools and technologies you need to thrive in a competitive market.
            </p>
            <p>
              Our team is committed to delivering exceptional service and
              support, ensuring that you have everything you need to succeed.
              With our dedicated team by your side, you can trust that your
              business is in good hands. Contact us today to learn more about
              how we can help empower your business.
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

export default DedicatedTeam;
