import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";
import appmaintenance from "../../assets/img/appmaintenance.png";
import appstore from "../../assets/img/appstore.png";
import crossplatform from "../../assets/img/crossplatform.png";
import itsupport from "../../assets/img/itsupport.png";
import cloudcomputing from "../../assets/img/itsupport/cloudcomputing.png";
import cybersequrity from "../../assets/img/itsupport/cybersequrity.png";
import database from "../../assets/img/itsupport/database.png";
import itcouncil from "../../assets/img/itsupport/itcouncil.png";
import projectmanagement from "../../assets/img/itsupport/projectmanagement.png";
import technicalsupport from "../../assets/img/itsupport/technicalsupport.png";
import userexperience from "../../assets/img/userexperience.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const ItSupport = () => {
  const worksData = [
    {
      id: 2,
      title: "Cloud Computing",
      description:
        `<a href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing#:~:text=Simply%20put%2C%20cloud%20computing%20is,resources%2C%20and%20economies%20of%20scale." target="_blank" rel="nofollow">Cloud computing</a> delivers computing services over the internet, providing flexible and scalable access to storage, databases, software, and applications. It offers businesses cost efficiency and the ability to scale resources as needed, allowing them to focus on core activities while relying on reliable cloud service providers.`,
      illustration: cloudcomputing,
      sectionId: "cloud-computing",
    },
    {
      id: 3,
      title: "Database Administration",
      description:
        "Database administration involves managing and maintaining databases within an organization. It includes tasks like designing databases, ensuring data integrity and security, optimizing performance, and troubleshooting. Database administrators play a crucial role in efficient data storage, retrieval, and manipulation in various applications and systems.",
      illustration: database,
      sectionId: "database-administration",
    },
    {
      id: 4,
      title: "Cybersecurity",
      description:
        "Dotpot iT's cybersecurity service safeguards your digital assets and protects your business from online threats. We assess your security measures, identify vulnerabilities, and implement robust solutions. From advanced threat detection to secure network configurations and data encryption, our comprehensive cybersecurity strategies keep your business secure in the digital world.",
      illustration: cybersequrity,
      sectionId: "cybersecurity",
    },
    {
      id: 5,
      title: "IT Consulting",
      description:
        "Dotpot iT provides top-notch IT consulting services to help businesses leverage technology for strategic advantage. Our experienced consultants offer tailored recommendations and insights to optimize IT infrastructure, streamline operations, and drive growth. Whether it's technology adoption, digital transformation, or IT project management, we deliver effective solutions that maximize your investments.",
      illustration: itcouncil,
      sectionId: "it-consulting",
    },
    {
      id: 6,
      title: "Project Management",
      description:
        "Dotpot iT offers comprehensive project management services to ensure successful execution of your IT initiatives. Our skilled project managers utilize industry-standard methodologies and best practices to plan, execute, and monitor projects. With effective communication, stakeholder engagement, and risk management, we deliver projects on time and within budget.",
      illustration: projectmanagement,
      sectionId: "project-management",
    },
    {
      id: 7,
      title: "Technical Support",
      description:
        "Dotpot iT provides reliable technical support services to ensure smooth operation and optimal performance of your IT systems. Our experienced team is available to troubleshoot issues and provide timely solutions. With flexible support options and knowledgeable experts, we minimize downtime and disruptions to keep your business running smoothly.",
      illustration: technicalsupport,
      sectionId: "technical-support",
    },
    {
      id: 8,
      title: "Cross-Platform App Development",
      description:
        "Dotpot iT offers cross-platform app development services that are cost-effective, provide a consistent user experience, have faster time to market, are easy to maintain and update, achieve native-like performance, and can be customized to meet your specific business needs. We use a range of development tools to create a mobile application that engages your customers and helps your business grow.",
      illustration: crossplatform,
      sectionId: "app-development",
    },
    {
      id: 9,
      title: "User Experience",
      description:
        "Dotpot iT offers User Experience (UX) services to help businesses create a seamless and intuitive user interface for their customers. We conduct user research, usability testing, information architecture, interaction design, visual design, and accessibility to improve the overall user experience. Our goal is to help businesses enhance customer satisfaction and drive business growth by providing a great user experience.",
      illustration: userexperience,
      sectionId: "user-experience",
    },
    {
      id: 10,
      title: "App Maintenance and Support",
      description:
        `Dotpot iT provides <a href="https://synoptek.com/insights/it-blogs/application-development-maintenance/#:~:text=Application%20maintenance%20is%20the%20continuous,the%20best%20of%20their%20abilities." target="_blank" rel="nofollow">App Maintenance and Support</a> services that include regular updates, bug fixing, performance optimization, security updates, technical and user support, and app store optimization. These services help keep your app up to date, secure, and running smoothly while also improving user satisfaction and increasing popularity.`,
      illustration: appmaintenance,
      sectionId: "app-support",
    },
    {
      id: 11,
      title: "App Store Optimization (ASO)",
      description:
        "Dotpot iT provides App Store Optimization (ASO) services to improve the visibility and download rates of mobile apps. Our ASO experts can analyze your app's performance, conduct keyword research, optimize your app listing, analyze competitor apps, and conduct A/B testing to determine the most effective strategies. By optimizing your app for the app store, we can attract more potential users and drive more downloads.",
      illustration: appstore,
      sectionId: "app-store",
    },
  ];

  useScrollToTop();

  const location = useLocation();
  const fragment = location.hash.substring(1);

  useEffect(() => {
    if (fragment) {
      const locationElement = document.getElementById(fragment);
      locationElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [fragment]);
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>It Support | Dotpot iT</title>
        <meta
          name="description"
          content="IT support for businesses, maximizing efficiency and ensuring smooth operations"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/key-features/it-support"
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="iT support, iT consulting, Software Support"
        />
        <meta property="og:title" content="It Support | Dotpot iT" />
        <meta
          property="og:description"
          content="IT support for businesses, maximizing efficiency and ensuring smooth operations"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
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
                          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500 mt-5">
                            IT Support By Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Dotpot iT offers reliable IT support for businesses
                            of all sizes. Our experienced team provides fast and
                            efficient solutions for any IT issues, so you can
                            focus on growing your business. Contact us today to
                            learn more.
                          </p>
                        </div>
                        <img
                          src={itsupport}
                          alt="it support"
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
          <div className="container mx-auto w-full overflow-hidden mt-24">
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
                      alt="colored line"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT provides top-notch IT support services that
                      utilize the latest technologies at an affordable cost. Our
                      focus is on delivering innovative and user-friendly IT
                      solutions for businesses of all industries. We have a team
                      of experienced technicians who are committed to providing
                      high-quality support services that exceed clients'
                      expectations and offer exceptional customer service
                      throughout the process. Choose Dotpot iT for cutting-edge
                      IT support services that help your business thrive.
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

export default ItSupport;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "It Support",
    link: "/key-features/it-support",
  },
];
