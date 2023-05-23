import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import acdcover from "../../assets/img/contactcentersupport/acdcover.png";
import skillsbasedrouting from "../../assets/img/contactcentersupport/skillsbasedrouting.png";
import callerpiority from "../../assets/img/contactcentersupport/callerpiority.png";
import findlastcall from "../../assets/img/contactcentersupport/findlastcall.png";
import roundrobin from "../../assets/img/contactcentersupport/roundrobin.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const Acd = () => {
  // ACD Data
  const worksData = [
    {
      id: 1,
      title: "Skills-Based Routing",
      description:
        `<a href="https://www.ringcentral.com/contact-center/skills-based-routing.html" target="_blank" rel="nofollow">An agent can be assigned to receive calls from multiple skills/companies.</a>An agent can be assigned to receive calls from multiple skills/companies. Dotpot IT contact center system allows categorization of agents based on skills or length of service. The system finds available high priority agents to pass the calls.`,
      illustration: skillsbasedrouting,
    },
    {
      id: 2,
      title: "Caller Priority",
      description:
        "Dotpot iT is a leading tech company that specializes in cutting-edge website design solutions for businesses. Our custom-made designs help businesses establish a unique online presence, drive engagement, and generate revenue. With years of experience, our talented team of designers and developers craft highly functional and visually appealing websites that exceed our clients' expectations. Trust us to transform your online presence and take your business to the next level.",
      illustration: callerpiority,
    },
    {
      id: 3,
      title: "Find Last Call Agent",
      description:
        "If a caller calls for the second time the ACD engine attempts to transfer the call to the agent who had handled the caller’s previous call.",
      illustration: findlastcall,
    },
    {
      id: 4,
      title: "Round Robin",
      description:
        "The Round Robin feature ensures that the incoming calls to your call center are distributed to the agents on the basis of covering all agents on duty in a cyclic order.",
      illustration: roundrobin,
    },
  ];

  useScrollToTop();

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>
          Automatic Call Distribution | Dotpot it leading it Company
        </title>
        <meta
          name="description"
          content="Get in touch with us for your IT needs. Contact us for website development, mobile app development, and more."
        />
        <meta
          name="keywords"
          content="software development company, acd, call center"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact-center-services/acd"
        />
        <meta property="og:title" content="Automatic Call Distribution" />
        <meta
          property="og:description"
          content="Get in touch with us for your IT needs. Contact us for website development, mobile app development, and more."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact-center-services/acd"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automatic Call Distribution" />
        <meta
          name="twitter:description"
          content="Get in touch with us for your IT needs. Contact us for website development, mobile app development, and more."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>

      <Navbar />

      <div
        className={` md:pt-[15vh] pt-[15vh] ${window.innerWidth > 1280 && "md:pt-[11vh]"
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
                    className={`mt-10 mb-16 ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "translate-y-20 opacity-0"
                      } duration-1000 `}
                  >
                    <div className="container mx-auto">
                      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center">
                        <div className="text-center md:text-center lg:text-left w-full md:w-1/2 lg:w-1/2 px-3 pb-10 ">
                          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                            Automatic Call Distribution (ACD)
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Dotpot IT <a href="https://www.ringcentral.com/contact-center/automatic-call-distribution.html" target="_blank" rel="nofollow">Automatic Call Distribution (ACD)</a> is a technology that allows contact centers to distribute inbound calls, emails and chat messages to agents based on call arrival time, priority, customer needs, and agent skill set. Instead of simply sending inbound requests to an available agent, ACD system categorizes calls/messages and then automatically and intelligently routes the same to appropriate agent with relevant skillset to help the
                            customer.
                          </p>
                        </div>
                        <img
                          src={acdcover}
                          alt="ACD Image"
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
                      className={`w-full md:w-1/2 lg:w-1/2 ${id % 2 === 0 && "order-2"
                        } `}
                    >
                      <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                          <div
                            className={` ${isVisible
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
                          className={`w-full md:w-1/2 lg:w-1/2 ${id % 2 === 0 && "order-1"
                            } ${isVisible
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
                    className={`${isVisible
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
                      Dotpot iT offers advanced Automatic Call Distribution (ACD) solutions. We prioritize efficiency and customer satisfaction, routing calls intelligently and reducing wait times. With our experienced team and exceptional service, we provide high-quality ACD systems tailored to your needs. Choose Dotpot iT for innovative call handling that helps your business thrive.
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

export default Acd;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "ACD",
    link: "/contact-center-services/acd",
  },
];
