import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";
import advancedanalytics from "../../assets/img/advancedanalytics.png";
import contactcover from "../../assets/img/contactcover.png";
import calldistributor from "../../assets/img/customersupport/calldistributor.png";
import chatsupport from "../../assets/img/customersupport/chatsupport.png";
import collection from "../../assets/img/customersupport/collection.png";
import computertelephonyintegration from "../../assets/img/customersupport/computertelephonyintegration.png";
import emailmarketing from "../../assets/img/customersupport/emailmarketing.png";
import mobileappmodule from "../../assets/img/customersupport/mobileappmodule.png";
import predictivedialer from "../../assets/img/customersupport/predictivedialer.png";
import training from "../../assets/img/customersupport/training.png";
import voiceresponse from "../../assets/img/customersupport/voiceresponse.png";

import helpdesk from "../../assets/img/helpdesk.png";
import multichannel from "../../assets/img/multichannel .png";
import ticketingsystem from "../../assets/img/ticketingsystem.png";

import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";

import { useScrollToTop } from "../../hooks/useScrollToTop";

const ContactCenterSupport = () => {
  const worksData = [
    {
      id: 2,
      title: "CTI (Computer Telephony Integration)",
      description:
        "Dotpot's CTI services integrate telephony systems with computer systems, enabling businesses to enhance their customer support capabilities. With CTI, businesses can automate call routing, screen pop-ups with customer information, and enable click-to-dial functionality to improve agent efficiency and customer experience.",
      illustration: computertelephonyintegration,
      sectionId: "cti",
    },
    {
      id: 3,
      title: "Email Marketing",
      description:
        "Dotpot's Email Marketing services help businesses create and execute targeted email campaigns to engage with their customers. Our email marketing solutions include designing visually appealing email templates, managing subscriber lists, and tracking email campaign performance to optimize marketing efforts and drive customer engagement.",
      illustration: emailmarketing,
      sectionId: "email-marketing",
    },
    {
      id: 4,
      title: "Chat Support",
      description:
        "Dotpot's Chat Support services enable businesses to provide real-time assistance to customers through chat interfaces on their websites or applications. With chat support, businesses can offer instant responses to customer inquiries, provide personalized assistance, and enhance customer satisfaction by resolving issues quickly.",
      illustration: chatsupport,
      sectionId: "chat-support",
    },
    {
      id: 5,
      title: "Predictive Dialer",
      description:
        "Dotpot's Predictive Dialer services automate outbound calling by leveraging algorithms to predict agent availability and connect calls when an agent is likely to be available. Predictive dialers help optimize agent productivity, minimize idle time, and increase the efficiency of outbound call campaigns for sales, surveys, and telemarketing.",
      illustration: predictivedialer,
      sectionId: "pd",
    },
    {
      id: 6,
      title: "Mobile App Module",
      description:
        "Dotpot's Mobile App Module allows businesses to extend their customer support capabilities to mobile devices through a dedicated app. With our mobile app module, businesses can offer support features such as live chat, knowledge base access, ticket submission, and push notifications, enhancing convenience and accessibility for customers.",
      illustration: mobileappmodule,
      sectionId: "mobile-app",
    },
    {
      id: 7,
      title: "Collection Services",
      description:
        "Dotpot's Collection Services assist businesses in managing overdue payments and recovering outstanding debts. Our collection services include effective debt recovery strategies, debtor communication, negotiation, and legal assistance if necessary, helping businesses optimize their cash flow and minimize financial losses.",
      illustration: collection,
      sectionId: "collection",
    },
    {
      id: 8,
      title: "Customer Service Training",
      description:
        "Dotpot provides comprehensive customer service training programs to equip businesses with the skills and knowledge needed to deliver exceptional customer support. Our training covers various aspects of customer service, including communication techniques, problem-solving, empathy, and conflict resolution, enabling businesses to build a customer-centric culture.",
      illustration: training,
      sectionId: "training",
    },
    {
      id: 9,
      title: "Interactive Voice Response (IVR)",
      description:
        "Dotpot's Interactive Voice Response (IVR) systems automate customer interactions through voice or touch-tone inputs. With IVR, businesses can provide self-service options, gather information from callers, route calls to the appropriate departments or agents, and offer personalized experiences, improving efficiency and reducing call handling times.",
      illustration: voiceresponse,
      sectionId: "ivr",
    },
    {
      id: 10,
      title: "Automatic Call Distributor (ACD)",
      description:
        "Dotpot's Automatic Call Distributor (ACD) systems efficiently route incoming calls to the most suitable agents based on predefined rules, such as agent skills, availability, or customer priority. ACD systems help optimize call handling, reduce wait times, and ensure that customers are connected to the right agent quickly, improving overall customer satisfaction.",
      illustration: calldistributor,
      sectionId: "acd",
    },
    {
      id: 11,
      title: "Multi-Channel Support",
      description:
        "Dotpot provides multi-channel support services including phone, email, chat, and social media support to help businesses reach their customers across various channels. With multi-channel support, businesses can enhance customer engagement and satisfaction by providing customers with various options to connect with them.",
      illustration: multichannel,
      sectionId: "multi-channel",
    },
    {
      id: 12,
      title: "Help Desk Management",
      description:
        "Dotpot offers Help Desk Management services to streamline support operations and efficiently manage customer inquiries and requests. Our help desk management system allows businesses to track and manage support tickets, assign tickets to agents, and monitor response times to ensure prompt resolution of customer issues.",
      illustration: helpdesk,
      sectionId: "help-desk",
    },
    {
      id: 13,
      title: "Ticketing System",
      description:
        "Our Ticketing System enables businesses to manage customer inquiries and complaints by creating and tracking tickets through their life cycle. With our ticketing system, businesses can easily assign tickets to the right agents, monitor ticket status, and ensure timely resolution of customer issues.",
      illustration: ticketingsystem,
      sectionId: "ticket",
    },
    {
      id: 14,
      title: "Advanced Analytics",
      description:
        "Dotpot's Contact Center Support also includes advanced analytics to help businesses gain insights into their support operations and customer behavior. With our analytics, businesses can track customer satisfaction, monitor response times, and identify areas for improvement to enhance customer experience and loyalty.",
      illustration: advancedanalytics,
      sectionId: "advance-analysis",
    },
  ];
  useScrollToTop();

  const location = useLocation();
  const fragment = location.hash.substring(1);
  console.log(
    "🚀 ~ file: ContactCenterSupport.jsx:127 ~ ContactCenterSupport ~ fragment:",
    fragment
  );

  useEffect(() => {
    if (fragment) {
      const locationElement = document.getElementById(fragment);
      locationElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [fragment]);

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Contact Center Support | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="We're a top provider of Contact Center Solutions. Optimize your Productivity with us"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/key-features/contact-center-support"
        />
        <meta
          name="keywords"
          content="Ai Development Company, Machine learning development, Unity game development, eCommerce development"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Center Support | Dotpot iT"
        />
        <meta
          property="og:description"
          content="We're a top provider of Contact Center Solutions. Optimize your Productivity with us"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/contact-center-support"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Center Support | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="We're a top provider of Contact Center Solutions. Optimize your Productivity with us"
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      <Navbar />
      <div
        className={`md:pt-[15vh] pt-[15vh] ${
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
                          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                            Contact Center Support With Dotpot iT
                          </h2>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Dotpot offers Contact Center Support services for
                            businesses to improve their customer service
                            operations with multi-channel support, help desk
                            management, and advanced analytics for enhanced
                            customer experience and satisfaction.
                          </p>
                        </div>
                        <img
                          src={contactcover}
                          alt="contact center support"
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
          <div className="container mx-auto w-full overflow-hidden mt-14">
            <>
              <div className={`flex flex-col gap-5`}>
                {worksData.map(
                  ({ id, title, description, illustration, sectionId }) => (
                    <div
                      className={`md:flex justify-center items-center gap-x-20 font-work p-5`}
                      key={id}
                      id={sectionId}
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
                              <h1 className="lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left font-bold mb-5 text-textColor-500">
                                {title}
                              </h1>
                              <p className="lg:text-base md:text-sm text-xs text-gray-400 text-justify">
                                {description}
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
                  )
                )}
              </div>
            </>
          </div>

          {/* Why Dotpot iT */}
          <div className="py-16 bg-primary-100">
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
                      alt="colored line"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT provides top-notch Contact Center Support
                      services that utilize the latest technologies at an
                      affordable cost. Our focus is on delivering innovative and
                      user-friendly solutions for businesses of all industries.
                      We have a team of experienced professionals who are
                      committed to providing high-quality support services that
                      exceed clients' expectations and offer exceptional
                      customer service throughout the process. We understand the
                      importance of providing efficient and effective support to
                      your customers, and we provide cutting-edge contact center
                      support services to ensure your customers' satisfaction.
                      Choose Dotpot iT for cutting-edge Contact Center Support
                      services that help your business thrive.
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

export default ContactCenterSupport;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Contact Center Support",
    link: "/key-features/contact-center-support",
  },
];
