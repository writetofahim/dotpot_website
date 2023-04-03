import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import coverImg from "../../assets/img/IT-Support-.png";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const ItSupport = () => {
  useScrollToTop();
  return (
    <div className="px-3">
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
          It Support
        </h1>
        <p className="text-md text-gray-400 text-center mb-10">
          IT support for businesses, maximizing efficiency and ensuring smooth
          operations.
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
              Information Technology (IT) is the backbone of modern businesses,
              and reliable IT support is essential for maximizing efficiency and
              ensuring smooth operations. At our company, we offer expert IT
              support services to businesses of all sizes, from small startups
              to large corporations. Our team of experienced IT professionals is
              dedicated to providing personalized support tailored to each
              client's specific needs, ensuring that their systems are running
              smoothly and efficiently.
            </p>

            <p>
              We understand that businesses rely on their IT systems to maintain
              productivity and drive growth, which is why we offer a range of
              services, including system monitoring, software installation and
              upgrades, network security, and data backup and recovery. Our
              proactive approach to IT support ensures that potential issues are
              identified and resolved before they become major problems,
              minimizing downtime and ensuring uninterrupted operations.
            </p>
            <p>
              Whether you need ongoing IT support or assistance with a one-time
              project, our team is here to help. We pride ourselves on providing
              reliable, cost-effective solutions that help our clients achieve
              their goals and stay ahead of the competition. Contact us today to
              learn more about our IT support services and how we can help your
              business succeed.
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

export default ItSupport;
