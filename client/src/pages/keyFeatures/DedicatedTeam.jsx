import React from "react";
import { Helmet } from "react-helmet";
import coverImg from "../../assets/img/dedicated-team.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const DedicatedTeam = () => {
  useScrollToTop();
  return (
    <div className="">
      <Helmet>
        <title>Dedicated Team | Dotpot iT</title>
        <meta
          name="description"
          content="Empower your business with our dedicated team"
        />
        <meta property="og:title" content="Dedicated Team | Dotpot iT" />
        <meta
          property="og:description"
          content="Empower your business with our dedicated team"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/dedicated-team"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dedicated Team | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Empower your business with our dedicated team"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className="bg-background-500">
        <div className="pt-[15vh] pb-10 container mx-auto min-h-screen px-3">
          <NavigatorComponent navigationData={navigationData} />
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-textColor-500 text-center">
            Dedicated Team
          </h1>
          <p className="text-md text-secondary-400 text-center mb-10">
            Empower your business with our dedicated team.
          </p>
          <div className="mb-5 container mx-auto">
            <img className="md:w-1/2 mx-auto " src={coverImg} alt="" />
          </div>
          <div className="container  mx-auto flex flex-col py-10">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-5  block text-textColor-500">
              Overview
            </h3>
            {/* Overview */}
            <div className="text-textColor-500 flex flex-col gap-5 p-5">
              <p className="text-justify">
                At our company, we have a dedicated team of professionals who are
                committed to empowering your business. Our team consists of
                experts with diverse backgrounds and skillsets, enabling us to
                provide comprehensive solutions to meet your unique business
                needs. Whether you need help with IT support, website development,
                or AI and blockchain technology, our team has the expertise to
                take your business to the next level.
              </p>

              <p className="text-justify">
                We believe that the success of your business is our success, which
                is why we prioritize collaboration and communication with our
                clients. By working closely with you, we gain a deep understanding
                of your business objectives and tailor our solutions to meet your
                specific needs. Our goal is to empower your business with the
                tools and technologies you need to thrive in a competitive market.
              </p>
              <p className="text-justify">
                Our team is committed to delivering exceptional service and
                support, ensuring that you have everything you need to succeed.
                With our dedicated team by your side, you can trust that your
                business is in good hands. Contact us today to learn more about
                how we can help empower your business.
              </p>
            </div>
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

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Dedicated Team",
    link: "/key-features/dedicated-team",
  },
];
