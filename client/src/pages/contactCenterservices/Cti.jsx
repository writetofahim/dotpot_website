import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import agencyweb from "../../assets/img/agencyweb.png";
import call2 from "../../assets/img/call2.png";
import callerpiority from "../../assets/img/contactcentersupport/callerpiority.png";
import crm from "../../assets/img/contactcentersupport/crm.png";
import cticover from "../../assets/img/contactcentersupport/cticover.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Cti = () => {
  // CTI Data
  const worksData = [
    {
      id: 1,
      title: "Integrated CRM",
      description: `Our CTI solution seamlessly integrates with <a href="https://www.salesforce.com/crm/crm-integration/#:~:text=CRM%20integration%20connects%20each%20application,of%20your%20business%20and%20customers." target="_blank" rel="nofollow">Customer Relationship Management (CRM)</a> software, allowing you to access and manage customer information during calls. This integration streamlines your workflow and enhances the efficiency of your customer interactions.`,
      illustration: crm,
    },
    {
      id: 2,
      title: "Collaborative Screen Pops",
      description:
        "With collaborative screen pops, relevant customer information automatically appears on the agent's screen when a call is received. This feature provides agents with real-time data, enabling them to personalize their interactions and provide a superior customer experience.",
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Call Whisper",
      description:
        "Call whisper functionality allows supervisors or managers to provide guidance or additional information to agents during live calls without the customer hearing it. This feature facilitates training and coaching, enabling agents to handle calls effectively and improve their performance.",
      illustration: callerpiority,
    },
    {
      id: 4,
      title: "Call Analytics and Reporting",
      description:
        "With our Computer Telephony Integration (CTI) solutions, you can gain insights into call volume, agent performance, call duration, and other key metrics. These insights help you identify areas for improvement and make data-driven decisions to enhance your call center operations. Choose Dotpot iT for advanced CTI solutions that drive efficiency and improve customer experiences.",
      illustration: call2,
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
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
        <title>
          Computer Telephony Integration (CTI) | Dotpot iT a leading it company
        </title>
        <meta
          name="description"
          content="Dotpot IT offers Computer Telephony Integration for efficient debtor contact and increased debt recovery rates."
        />
        <meta
          name="keywords"
          content="software development company, cti, cti screen"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact-center-services/cti"
        />
        <meta
          property="og:title"
          content="Telephony Integration (CTI) | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Dotpot IT offers Computer Telephony Integration for efficient debtor contact and increased debt recovery rates."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact-center-services/cti"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Telephony Integration (CTI) | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Dotpot IT offers Computer Telephony Integration for efficient debtor contact and increased debt recovery rates."
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
                            Computer Telephony Integration (CTI)
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Dotpot IT{" "}
                            <a
                              href="https://www.nice.com/glossary/what-is-contact-center-cti-computer-telephony-integration#:~:text=Computer%20telephony%20integration%20(CTI)%20means,more%20control%20over%20call%20management."
                              target="_blank"
                              rel="nofollow"
                            >
                              integrates with various CRMs and offers CTI
                            </a>{" "}
                            screen popups to agents, providing them with caller
                            information, such as name and phone number, before
                            connecting to the call. This helps agents
                            personalize calls and improve customer experience.
                          </p>
                        </div>
                        <img
                          src={cticover}
                          alt="CTI Image"
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
                      Dotpot iT offers advanced Computer Telephony Integration
                      (CTI) solutions for efficient call handling. With our
                      expertise and exceptional service, we provide tailored CTI
                      systems that seamlessly integrate telephony and computer
                      systems, enhancing productivity and customer satisfaction.
                      Choose Dotpot iT for innovative CTI technology that helps
                      your business thrive.
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

export default Cti;
const navigationData = [
  { title: "Services", link: "/services" },
  { title: "CTI", link: "/contact-center-services/cti" },
];
