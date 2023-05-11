import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import contactcover from "../../assets/img/contactcover.png"
import multichannel  from "../../assets/img/multichannel .png"
import helpdesk from "../../assets/img/helpdesk.png"
import ticketingsystem from "../../assets/img/ticketingsystem.png"
import advancedanalytics from "../../assets/img/advancedanalytics.png"
import ReactVisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";
import GetAQuote from "../../components/GetAQuote/GetAQuote";

const ContactCenterSupport = () => {
  const worksData = [
    {
      id: 1,
      title: "Multi-Channel Support",
      description:
        "Dotpot provides multi-channel support services including phone, email, chat, and social media support to help businesses reach their customers across various channels. With multi-channel support, businesses can enhance customer engagement and satisfaction by providing customers with various options to connect with them.",
      illustration:
      multichannel 
    },
    {
      id: 2,
      title: "Help Desk Management",
      description:
        "Dotpot offers Help Desk Management services to streamline support operations and efficiently manage customer inquiries and requests. Our help desk management system allows businesses to track and manage support tickets, assign tickets to agents, and monitor response times to ensure prompt resolution of customer issues.",
      illustration:
      helpdesk
    },
    {
      id: 3,
      title: "Ticketing System",
      description:
        "Our Ticketing System enables businesses to manage customer inquiries and complaints by creating and tracking tickets through their life cycle. With our ticketing system, businesses can easily assign tickets to the right agents, monitor ticket status, and ensure timely resolution of customer issues.",
      illustration:
      ticketingsystem
    },
    {
      id: 4,
      title: "Advanced Analytics",
      description:
        "Dotpot's Contact Center Support also includes advanced analytics to help businesses gain insights into their support operations and customer behavior. With our analytics, businesses can track customer satisfaction, monitor response times, and identify areas for improvement to enhance customer experience and loyalty.",
      illustration:
      advancedanalytics
    },
  ];
  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Contact Center Support | Dotpot iT</title>
        <meta
          name="description"
          content="We're a top provider of Contact Center Solutions. Optimize your Productivity with us"
        />
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
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
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
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className={` md:pt-[15vh] pt-[15vh] ${window.innerWidth > 1280 && "md:pt-[11vh]"} `}>
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
                          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">Contact Center Support</h2>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                          Dotpot offers Contact Center Support services for businesses to improve their customer service operations with multi-channel support, help desk management, and advanced analytics for enhanced customer experience and satisfaction.
                          </p>
                        </div>
                        <img src={contactcover} alt="" className="w-full md:w-1/2 lg:w-1/2" />
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
              <div
                className={`flex flex-col gap-5`}
              >
                {worksData.map(({ id, title, description, illustration }) => (
                  <div className={`md:flex justify-center items-center gap-x-20 font-work p-5`} key={id}>
                    <div className={`w-full md:w-1/2 lg:w-1/2 ${id % 2 === 0 && "order-2"} `}>
                      <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (<div className={` ${isVisible
                          ? "opacity-100 translate-y-0"
                          : "translate-y-20 opacity-0"
                          } duration-1000 `}><h1 className="lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left font-bold mb-5 text-textColor-500">
                            {title}
                          </h1>
                          <p className="lg:text-base md:text-sm text-xs text-gray-400 text-justify">{description}</p></div>)}
                      </ReactVisibilitySensor>

                    </div>
                    <ReactVisibilitySensor partialVisibility>
                      {({ isVisible }) => (<div className={`w-full md:w-1/2 lg:w-1/2 ${id % 2 === 0 && "order-1"} ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                        } duration-1000 `}>
                        <img className="w-4/5 mx-auto" src={illustration} alt="" />
                      </div>)}
                    </ReactVisibilitySensor>
                  </div>
                ))}
              </div>
            </>

          </div>

          {/* Why Dotpot iT */}
          <div className="py-16 bg-primary-100">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={`${isVisible
                      ? "opacity-100 translate-y-0"
                      : "translate-y-20 opacity-0"
                      } duration-1000 p-3 text-textColor-500`}
                  >
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
                      Why Dotpot iT
                    </h1>
                    <img
                      className="w-64 mx-auto"
                      src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                      alt=""
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                    Dotpot iT provides top-notch Contact Center Support services that utilize the latest technologies at an affordable cost. Our focus is on delivering innovative and user-friendly solutions for businesses of all industries. We have a team of experienced professionals who are committed to providing high-quality support services that exceed clients' expectations and offer exceptional customer service throughout the process. We understand the importance of providing efficient and effective support to your customers, and we provide cutting-edge contact center support services to ensure your customers' satisfaction. Choose Dotpot iT for cutting-edge Contact Center Support services that help your business thrive.
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
