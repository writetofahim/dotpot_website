import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import webchatcover from "../../assets/img/contactcentersupport/webchatcover.png";
import Fixed_Price4 from "../../assets/img/Fixed_Price4.png";
import onsite_dev from "../../assets/img/onsite_dev.png";
import Medium_Business_07 from "../../assets/img/Medium_Business_07.png";
import communication from "../../assets/img/communication.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const ChatContact = () => {
  // Chat Data
  const worksData = [
    {
      id: 1,
      title: "Improve customer experience",
      description:
        `Dotpot IT's Chat module enables personalized chat experiences and access to <a href="https://www.richpanel.com/blog/multi-channel-customer-service" target="_blank" rel="nofollow">multichannel customer interactions</a> Engage with customers in real-time across various platforms, personalize assistance based on customer data, and leverage features like co-browsing and file sharing. Optimize efficiency with advanced routing and gain valuable insights through real-time monitoring and reporting.`,
      illustration: communication,
    },
    {
      id: 2,
      title: "Increase revenue",
      description:
        "Dotpot IT's Chat module enables just-in-time online engagement, leading to increased sales and reduced non-sale calls. Proactively assist website visitors at the right moment, address concerns, and provide personalized support. Streamline the support process and drive sales conversion rates with real-time chat assistance.",
      illustration: Fixed_Price4,
    },
    {
      id: 3,
      title: "Deliver fast and accurate",
      description:
        "Dotpot IT's Chat module ensures chat sessions are delivered to the right agent through queue-specific and skill-based routing. Optimize response times, enhance customer satisfaction, and streamline the chat handling process with intelligent routing capabilities.",
      illustration: onsite_dev,
    },
    {
      id: 4,
      title: "ACD Based Web Chat Routing",
      description:
        "Dotpot IT CC's Web Chat module uses the same ACD system as the CC solution for routing chat sessions. Chat sessions are treated as calls and distributed to agents based on admin policy, making monitoring and analysis simple.",
      illustration: Medium_Business_07,
    },
  ];

  useScrollToTop();

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Web Chat Support | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Get in touch with us for your IT needs. Contact us for website development, mobile app development, and more."
        />
        <meta
          name="keywords"
          content="software development company, Chat, Contact "
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact-center-services/chat"
        />
        <meta property="og:title" content="Web Chat Support | Dotpot iT" />
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
          content="https://dotpotit.com/contact-center-services/chat"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Chat Support | Dotpot iT" />
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
                            Web Chat Support
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Dotpot IT's contact center system includes a powerful <a href="https://freescout.net/module/chat/" target="_blank" rel="nofollow">web chat module</a> that meets the evolving needs of customers. By integrating this module, businesses can provide a seamless customer experience across multiple channels and achieve a healthy return on investment. Stay ahead of the curve and deliver exceptional customer service with Dotpot IT's contact center system.
                          </p>
                        </div>
                        <img
                          src={webchatcover}
                          alt="Web Chat Image"
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
                      Dotpot iT provides state-of-the-art web chat solutions for effective communication and enhanced customer engagement. With our expertise and exceptional support, we offer tailored web chat services that seamlessly integrate with your business, maximizing productivity and customer satisfaction. Trust Dotpot iT to deliver innovative web chat technology that drives success for your business.
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

export default ChatContact;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Chat",
    link: "/contact-center-services/chat",
  },
];
