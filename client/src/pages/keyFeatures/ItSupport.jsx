import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import appmaintenance from "../../assets/img/appmaintenance.png";
import appstore from "../../assets/img/appstore.png";
import crossplatform from "../../assets/img/crossplatform.png";
import customizedsolutions from "../../assets/img/customizedsolutions.png";
import itsupport from "../../assets/img/itsupport.png";
import userexperience from "../../assets/img/userexperience.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const ItSupport = () => {
  const worksData = [
    {
      id: 1,
      title: "Customized solutions",
      description:
        "Dotpot iT offers customized IT solutions that are tailored to meet the specific needs and budget of each client. Our team works closely with you to assess your IT infrastructure and design a solution that improves efficiency and productivity. Our customized solutions can include network optimization, cybersecurity solutions, cloud migration, data backup and recovery, and more. We offer flexible support options that range from one-time fixes to ongoing maintenance and support, providing you with the most value for your investment.",
      illustration: customizedsolutions,
    },
    {
      id: 2,
      title: "Cross-Platform App Development",
      description:
        "Dotpot iT offers cross-platform app development services that are cost-effective, provide a consistent user experience, have faster time to market, are easy to maintain and update, achieve native-like performance, and can be customized to meet your specific business needs. We use a range of development tools to create a mobile application that engages your customers and helps your business grow.",
      illustration: crossplatform,
    },
    {
      id: 3,
      title: "User Experience",
      description:
        "Dotpot iT offers User Experience (UX) services to help businesses create a seamless and intuitive user interface for their customers. We conduct user research, usability testing, information architecture, interaction design, visual design, and accessibility to improve the overall user experience. Our goal is to help businesses enhance customer satisfaction and drive business growth by providing a great user experience.",
      illustration: userexperience,
    },
    {
      id: 4,
      title: "App Maintenance and Support",
      description:
        "Dotpot iT provides App Maintenance and Support services that include regular updates, bug fixing, performance optimization, security updates, technical and user support, and app store optimization. These services help keep your app up to date, secure, and running smoothly while also improving user satisfaction and increasing popularity.",
      illustration: appmaintenance,
    },
    {
      id: 5,
      title: "App Store Optimization (ASO)",
      description:
        "Dotpot iT provides App Store Optimization (ASO) services to improve the visibility and download rates of mobile apps. Our ASO experts can analyze your app's performance, conduct keyword research, optimize your app listing, analyze competitor apps, and conduct A/B testing to determine the most effective strategies. By optimizing your app for the app store, we can attract more potential users and drive more downloads.",
      illustration: appstore,
    },
  ];

  useScrollToTop();
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
        <meta property="og:title" content="It Support | Dotpot iT" />
        <meta
          property="og:description"
          content="IT support for businesses, maximizing efficiency and ensuring smooth operations"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
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
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
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
                          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                            IT Support
                          </h2>
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
                          alt=""
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
                            alt=""
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
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
                      Why Dotpot iT
                    </h1>
                    <img
                      className="w-64 mx-auto"
                      src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                      alt=""
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
