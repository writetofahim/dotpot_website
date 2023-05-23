import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import Medium_Business_01 from "../../assets/img/Medium_Business_01.png";
import Medium_Business_02 from "../../assets/img/Medium_Business_02.png";
import Medium_Business_03 from "../../assets/img/Medium_Business_03.png";
import Medium_Business_04 from "../../assets/img/Medium_Business_04.png";
import Medium_Business_05 from "../../assets/img/Medium_Business_05.png";
import Medium_Business_06 from "../../assets/img/Medium_Business_06.png";
import Medium_Business_07 from "../../assets/img/Medium_Business_07.png";
import Medium_Business_08 from "../../assets/img/Medium_Business_08.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const WebsiteDesign = () => {
  const worksData = [
    {
      id: 1,
      title: "Customized Software Solutions",
      description:
        `Our <a href="https://www.businessnewsdaily.com/5175-custom-software-development.html" target="_blank">custom software development</a> services can help medium-sized businesses to streamline their processes, automate tasks, and improve communication. We work closely with our clients to understand their business needs and create software that addresses those specific challenges.`,
      illustration: Medium_Business_02,
    },
    {
      id: 2,
      title: "IT Consulting",
      description:
        "Our IT consulting services can help medium-sized businesses to navigate the complex world of technology. We provide guidance on a wide range of topics, including cybersecurity, data management, cloud computing, and IT infrastructure.",
      illustration: Medium_Business_03,
    },
    {
      id: 3,
      title: "Scalability",
      description:
        "Our software solutions are designed to be scalable, meaning they can grow and evolve as the business grows. This ensures that the software remains relevant and useful for years to come, providing a solid foundation for the business to build upon.",
      illustration: Medium_Business_04,
    },
    {
      id: 4,
      title: "Cost-Effective",
      description:
        " We understand that medium-sized businesses have limited budgets, which is why we offer cost-effective solutions that provide excellent value for money. Our solutions are designed to help businesses compete with larger organizations without breaking the bank.",
      illustration: Medium_Business_05,
    },
    {
      id: 5,
      title: "Security",
      description:
        "We take cybersecurity seriously and ensure that all of our software solutions are designed with security in mind. We can also provide cybersecurity consulting services to help businesses identify and mitigate cyber threats.",
      illustration: Medium_Business_06,
    },
    {
      id: 6,
      title: "Ongoing Support",
      description:
        "We provide ongoing support to our clients to ensure that their software and systems are running smoothly at all times. Our support services can help businesses to maximize the value of their IT investments and ensure that they have access to the help they need whenever they need it.",
      illustration: Medium_Business_07,
    },
    {
      id: 7,
      title: "Competitive Advantage",
      description:
        "By leveraging our IT services and solutions, medium-sized businesses can gain a competitive advantage in their market. We can help businesses to stay ahead of the competition by providing innovative solutions that improve their operations and help them to achieve their business goals.",
      illustration: Medium_Business_08,
    },
  ];

  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Start Up Business | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="As an IT company, your expertise can be invaluable to startup businesses looking to establish a strong digital presence."
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/who-we-works-with/startup-business"
        />
        <meta property="og:title" content="Start Up Business | Dotpot iT" />
        <meta
          property="og:description"
          content="As an IT company, your expertise can be invaluable to startup businesses looking to establish a strong digital presence."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development, New business, Business idea"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/who-we-works-with/startup-business"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Start Up Business | Dotpot iT" />
        <meta
          name="twitter:description"
          content="As an IT company, your expertise can be invaluable to startup businesses looking to establish a strong digital presence."
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
                            Medium Business
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            As an IT company that specializes in software development and IT services, we understand the unique challenges that <a href="https://www.gartner.com/en/information-technology/glossary/smbs-small-and-midsize-businesses" target="_blank">medium-sized businesses</a> face. That's why we offer a range of solutions that can help these businesses improve their operations, increase productivity, and ultimately, grow their bottom line.One way we help medium-sized businesses is by providing custom software development services that are tailored to their specific needs. We work closely with our clients to understand their business processes, identify pain points, and develop solutions that address these challenges. Whether it's a web-based application or a mobile app, we can build software that helps streamline operations, improve communication, and increase efficiency.
                          </p>
                        </div>
                        <img
                          src={Medium_Business_01}
                          alt="Medium Business illustration"
                          className="w-full md:w-1/3 lg:w-1/3"
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
          <div className="py-16">
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
                      alt="Separator Image"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      We have a team of experts who bring a wealth of experience
                      in software development and IT consulting. Our team's
                      expertise enables us to provide high-quality services that
                      are customized to meet the unique needs of medium-sized
                      businesses. Secondly, we offer customized software
                      solutions that are tailored to the specific needs of each
                      client. This means that businesses can benefit from
                      software solutions that address their pain points and
                      streamline their operations. Additionally, our software
                      solutions are scalable, allowing them to grow and evolve
                      as the business grows. Finally, we offer ongoing support
                      to our clients, ensuring that their software and systems
                      are running smoothly at all times. Our support services
                      can help businesses to maximize the value of their IT
                      investments and stay ahead of the competition. Overall,
                      these factors make us an ideal choice for medium-sized
                      businesses looking for an IT partner that can provide
                      customized solutions, expertise, scalability, and ongoing
                      support.
                    </p>
                  </div>
                </>
              )}
            </ReactVisibilitySensor>
          </div>

          {/* Get in Touch */}
          <div className="bg-primary-100">
            <GetAQuote />
          </div>
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default WebsiteDesign;

const navigationData = [
  {
    title: "Medium Business",
    link: "/who-we-works-with/small-and-medium-business",
  },
];
