import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import cscover from "../../assets/img/contactcentersupport/cscover.png";
import callerpiority from "../../assets/img/contactcentersupport/callerpiority.png";
import voiceresponse from "../../assets/img/customersupport/voiceresponse.png";
import Medium_Business_07 from "../../assets/img/Medium_Business_07.png";
import ticketingsystem from "../../assets/img/ticketingsystem.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const CustomerService = () => {
  // Customer Service Data
  const worksData = [
    {
      id: 1,
      title: "Ticketing System",
      description:
        `Dotpot iT offers a <a href="https://www.customerservicemanager.com/what-is-a-ticketing-system-in-customer-service/" target="_blank" rel="nofollow">ticketing system</a> that allows customer service agents to manage and track customer inquiries and issues in a structured and organized manner. This ensures timely resolution, reduces response times, and enhances overall customer satisfaction.`,
      illustration: ticketingsystem,
    },
    {
      id: 2,
      title: "Call Routing and Queuing",
      description:
        "Dotpot iT enables intelligent call routing and queuing, ensuring that customer calls are directed to the most appropriate agents based on their skills, availability, and priority. This optimizes call handling and minimizes customer wait times.",
      illustration: callerpiority,
    },
    {
      id: 3,
      title: "Live Chat Support",
      description:
        "Dotpot iT enables live chat functionality, allowing customers to have real-time conversations with customer service agents. This instant messaging feature provides quick responses, resolves issues promptly, and enhances customer satisfaction.",
      illustration: Medium_Business_07,
    },
    {
      id: 4,
      title: "Virtual Assistant and Chatbots",
      description:
        `Dotpot iT incorporates <a href="https://elearningindustry.com/what-is-the-distinction-between-a-chatbot-and-a-virtual-assistant" target="_blank" rel="nofollow">virtual assistant and chatbot</a> technologies to provide automated and personalized customer support. These AI-powered tools can handle routine inquiries, provide instant responses, and escalate complex issues to human agents when needed.`,
      illustration: voiceresponse,
    },
  ];

  useScrollToTop();

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Customer Service | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Dotpot IT CC prioritizes exceptional customer service for strong customer relationships and memorable experiences."
        />
        <meta
          name="keywords"
          content="software development company, cc, customer center"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact-center-services/customer-service"
        />
        <meta property="og:title" content="Customer Service | Dotpot iT" />
        <meta
          property="og:description"
          content="Dotpot IT CC prioritizes exceptional customer service for strong customer relationships and memorable experiences."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact-center-services/customer-service"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Service | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Dotpot IT CC prioritizes exceptional customer service for strong customer relationships and memorable experiences."
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
                            Customer Service by Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Providing excellent customer service is crucial for building and enhancing relationships with customers. Regardless of the quality of the product or the skills of the staff, customers tend to recall their direct interactions with the company the most. At Dotpot IT CC, we prioritize delivering top-notch support services to ensure our customers receive the exceptional experience they deserve.
                          </p>
                        </div>
                        <img
                          src={cscover}
                          alt="CS Image"
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
                      Dotpot iT offers advanced solutions for efficient and exceptional customer service. With our expertise and exceptional support, we provide customized services that seamlessly integrate with your business, maximizing productivity and ensuring customer satisfaction. Trust Dotpot iT to deliver cutting-edge technology that drives success for your customer service operations.
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

export default CustomerService;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Customer Service",
    link: "/contact-center-services/customer-service",
  },
];
