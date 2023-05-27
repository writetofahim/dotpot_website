import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import Here_Dedicated_2 from "../../assets/img/Here_Dedicated_2.png";
import Here_Dedicated_3 from "../../assets/img/Here_Dedicated_3.png";
import Medium_Business_01 from "../../assets/img/Medium_Business_01.png";
import mobileappcover from "../../assets/img/contactcentersupport/mobileappcover.png";
import mobileappmodule from "../../assets/img/mobileappmodule.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const MobileApp = () => {
  // Mobile App Data
  const worksData = [
    {
      id: 1,
      title: "Mobile Agent Availability",
      description:
        "With the Mobile App Module, contact center agents can update their availability status and manage their schedules directly from their mobile devices. This feature allows for seamless coordination and ensures that agents are accessible and ready to handle customer interactions.",
      illustration: mobileappmodule,
    },
    {
      id: 2,
      title: "Customer Information Access",
      description: `The Mobile App Module provides agents with instant <a href="https://www.ibm.com/docs/en/cdfsp/7.6.1?topic=capabilities-controlling-access-customer-information" target="_blank" rel="nofollow">access to customer information,</a> including contact details, interaction history, and preferences. This allows agents to provide personalized and tailored service to customers, enhancing the overall customer experience.`,
      illustration: Here_Dedicated_2,
    },
    {
      id: 3,
      title: "Collaboration and Internal Messaging",
      description:
        "The Mobile App Module facilitates internal communication and collaboration among contact center agents. Agents can exchange messages, seek assistance from colleagues, and share relevant information, promoting teamwork and knowledge sharing.",
      illustration: Here_Dedicated_3,
    },
    {
      id: 4,
      title: "Supervisor Support",
      description:
        "The Mobile App Module also includes features that benefit supervisors and managers. They can monitor agent activities, track performance metrics, and provide real-time guidance and support to agents through the mobile interface.",
      illustration: Medium_Business_01,
    },
  ];

  useScrollToTop();

  return (
    <div className="bg-background-500">
      <Helmet>
        <script type="application/ld+json">
          {`
             {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Dotpot iT",
              "address":"House-1, Road-3, Block-A, Mirpur-10, Dhaka, Bangladesh",
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
        <title>Mobile App | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Dotpot IT's contact center system enables contact center agents to be mobile through the use of a mobile application. "
        />
        <meta
          name="keywords"
          content="software development company, mobile app development, mobile app"
        />
        <link rel="canonical" href="/contact-center-services/mobile-app" />
        <meta
          property="og:title"
          content="Mobile App for Contact center support | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Dotpot IT's contact center system enables contact center agents to be mobile through the use of a mobile application. "
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta property="og:url" content="/contact-center-services/mobile-app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile App for Contact center support | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Dotpot IT's contact center system enables contact center agents to be mobile through the use of a mobile application. "
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>

      <Navbar />

      <div
        className={` md:pt-[15vh] pt-[15vh] ${
          window.innerWidth > 1280 && "md:pt-[11vh]"
        } `}
      >
        <NavigatorComponent navigationData={navigationData} />
        <div>
          {/* Banner */}
          <div className="bg-primary-100 py-16">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={`mt-10 mb-16 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                    } duration-1000 `}
                  >
                    <div className="container mx-auto">
                      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center">
                        <div className="text-center md:text-center lg:text-left w-full md:w-1/2 lg:w-1/2 px-3 pb-10 ">
                          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                            Mobile App Module
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Go mobile with Dotpot IT's contact center system.
                            Our{" "}
                            <a
                              href="https://docs.oracle.com/cd/E26401_01/doc.122/e64384/T656045T656056.htm"
                              target="_blank"
                              rel="nofollow"
                            >
                              mobile application
                            </a>{" "}
                            empowers contact center agents to deliver
                            exceptional customer service on the go. With easy
                            access to customized services, agents can
                            efficiently serve customers anytime, anywhere.
                            Experience the convenience and efficiency of our
                            mobile app for contact center excellence.
                          </p>
                        </div>
                        <img
                          src={mobileappcover}
                          alt="Mobile App Image"
                          className="w-full md:w-1/2 lg:w-1/2"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </ReactVisibilitySensor>
          </div>

          {/* body */}
          <div className="container mx-auto w-full overflow-hidden">
            <>
              <div className={`flex flex-col gap-5`}>
                {worksData.map(({ id, title, description, illustration }) => (
                  <div
                    className={`md:flex justify-center items-center gap-x-20 font-work p-5`}
                    key={id}
                  >
                    <div
                      className={`w-full md:w-1/2 lg:w-1/2 ${
                        id % 2 === 0 && "order-2"
                      } `}
                    >
                      <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                          <div
                            className={` ${
                              isVisible
                                ? "opacity-100 translate-y-0"
                                : "translate-y-20 opacity-0"
                            } duration-1000 `}
                          >
                            <h2 className="lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left font-bold mb-5 text-textColor-500">
                              {title}
                            </h2>
                            <p className="lg:text-base md:text-sm text-xs text-gray-400 text-justify">
                              {parse(description)}
                            </p>
                          </div>
                        )}
                      </ReactVisibilitySensor>
                    </div>
                    <ReactVisibilitySensor partialVisibility>
                      {({ isVisible }) => (
                        <div
                          className={`w-full md:w-1/2 lg:w-1/2 ${
                            id % 2 === 0 && "order-1"
                          } ${
                            isVisible
                              ? "opacity-100 translate-y-0"
                              : "translate-y-20 opacity-0"
                          } duration-1000 `}
                        >
                          <img
                            className="w-4/5 mx-auto"
                            src={illustration}
                            alt={title}
                          />
                        </div>
                      )}
                    </ReactVisibilitySensor>
                  </div>
                ))}
              </div>
            </>
          </div>

          {/* Why Dotpot iT */}
          <div className="bg-primary-100 py-16">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={`${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                    } duration-1000 p-3 text-textColor-500`}
                  >
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
                      Why Dotpot iT
                    </h2>
                    <img
                      className="w-64 mx-auto"
                      src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                      alt=""
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT delivers cutting-edge Mobile App solutions for
                      seamless communication and enhanced user engagement. With
                      our expertise and exceptional support, we provide
                      customized Mobile App services that integrate perfectly
                      with your business, maximizing productivity and user
                      satisfaction. Trust Dotpot iT to provide innovative Mobile
                      App technology that drives success for your business.
                    </p>
                  </div>
                </>
              )}
            </ReactVisibilitySensor>
          </div>

          {/* Get in Touch */}
          <div className="">
            <GetAQuote />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MobileApp;

const navigationData = [
  { title: "Services", link: "/services" },
  { title: "Mobile App Development", link: "/contact-center-services/cti" },
];
