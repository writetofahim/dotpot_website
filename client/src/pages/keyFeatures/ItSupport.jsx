import React from "react";
import { Helmet } from "react-helmet";
import coverImg from "../../assets/img/IT-Support-.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const ItSupport = () => {
  useScrollToTop();
  return (
    <div className="">
      <Helmet>
        <title>It Support | Dotpot iT</title>
        <meta
          name="description"
          content="IT support for businesses, maximizing efficiency and ensuring smooth operations"
        />
        <meta property="og:title" content="It Support | Dotpot iT" />
        <meta
          property="og:description"
          content="IT support for businesses, maximizing efficiency and ensuring smooth operations"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/it-support"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="It Support | Dotpot iT" />
        <meta
          name="twitter:description"
          content="IT support for businesses, maximizing efficiency and ensuring smooth operations"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className="pt-[15vh] container mx-auto mb-10 min-h-screen p-3">
        <NavigatorComponent navigationData={navigationData} />

        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
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
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-5  block">
            Overview
          </h3>
          {/* Overview */}
          <div className="text-gray-400 flex flex-col gap-5 p-5 text-justify">
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

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "It Support",
    link: "/key-features/it-support",
  },
];
