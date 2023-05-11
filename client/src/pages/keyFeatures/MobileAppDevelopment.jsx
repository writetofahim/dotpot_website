import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import mobileapp from "../../assets/img/mobileapp.png"
import androidapp from "../../assets/img/androidapp.png"
import iosapp from "../../assets/img/iosapp.png"
import windowsapp from "../../assets/img/windowsapp.png"
import hybrideapp from "../../assets/img/hybrideapp.png"
import crossplatform from "../../assets/img/crossplatform.png"
import appmaintenance from "../../assets/img/appmaintenance.png"
import appstore from "../../assets/img/appstore.png"
import ReactVisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";
import GetAQuote from "../../components/GetAQuote/GetAQuote";

const MobileAppDevelopment = () => {
  const worksData = [
    {
      id: 1,
      title: "Android App Development",
      description:
        "Dotpot can provide Android App Development services to help businesses reach their customers on the world's most popular mobile platform. Our team of Android developers uses the latest technologies and programming languages to build high-quality, performance-driven apps for Android devices.",
      illustration:
      androidapp
    },
    {
      id: 2,
      title: "iOS App Development",
      description:
        "Dotpot can provide iOS App Development services to help businesses reach their customers on Apple's iOS platform. Our team of iOS developers uses Swift and Objective-C to build native apps that provide a seamless user experience and meet Apple's strict guidelines.",
      illustration:
      iosapp
    },
    {
      id: 3,
      title: "Windows App Development",
      description:
        "Dotpot can provide Windows App Development services to help businesses reach their customers on Windows devices. Our team of Windows developers uses C# and XAML to build high-quality, performance-driven apps for Windows devices.",
      illustration:
      windowsapp
    },
    {
      id: 4,
      title: "Hybride App Development",
      description:
        "Dotpot iT specializes in hybrid app development, creating cross-platform apps with a single code base. Our experienced team will work with you to create a custom, responsive, and user-friendly app that reaches a wider audience and saves time and resources. Contact us today to learn more.",
      illustration:
      hybrideapp
    },
    {
      id: 5,
      title: "Cross-Platform App Development",
      description:
        "Dotpot iT creates cross-platform mobile apps that work seamlessly on iOS and Android. Save time and money with one app that reaches a wider audience. Contact us today to learn more",
      illustration:
      crossplatform
    },
    {
      id: 6,
      title: "App Maintenance and Support",
      description:
        "Dotpot iT provides app maintenance and support services, including regular updates, bug fixes, and performance optimization. Keep your mobile app running smoothly and focus on your business while we take care of your app. Contact us today to learn more!",
      illustration:
      appmaintenance
    },
    {
      id: 7,
      title: "App Store Optimization (ASO)",
      description:
        "Dotpot iT's App Store Optimization (ASO) service boosts your mobile app's visibility and downloads with thorough keyword research, metadata optimization, visual design, and ratings management. Contact us today to learn more about our ASO services and increase your app's success.",
      illustration:
      appstore
    },
  ];

  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Mobile App Development | Dotpot iT</title>
        <meta
          name="description"
          content="Get Top-notch, Extensively, Innovative Mobile App Solution By Us"
        />
        <meta
          property="og:title"
          content="Mobile App Development | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Get Top-notch, Extensively, Innovative Mobile App Solution By Us"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/mobile-app-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile App Development | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Get Top-notch, Extensively, Innovative Mobile App Solution By Us"
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
                          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">Mobile App Development</h2>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Bring your app vision to life with Dotpot iT. Our expert team will work with you to create a custom mobile app that meets your unique needs. Contact us today!
                          </p>
                        </div>
                        <img src={mobileapp} alt="" className="w-full md:w-1/2 lg:w-1/2" />
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

          {/* Technologies We Use */}
          <div className="bg-primary-100 py-16">
            <div className="container mx-auto ">
              <ReactVisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <>
                    <div
                      className={`${isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                        } duration-1000 p-3 text-textColor-500`}
                    >
                      <h1 className="lg:text-3xl md:text-3xl text-xl font-bold text-center">
                        Technologies We Use
                      </h1>
                      <img
                        className="w-64  mx-auto pb-14"
                        src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                        alt=""
                      />
                      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                        <div className="text-center md:text-center lg:text-left w-full lg:w-1/2 px-3 pb-10">
                          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-5">We build Using Latest Technologies</h2>
                          <p className="md:text-base text-xs text-gray-400 text-justify">Dotpot iT is an innovative company that stays ahead of the curve by utilizing cutting-edge technologies. Our team of experts constantly explores the latest tools and techniques to deliver effective solutions for businesses. By leveraging the power of the latest technologies, we develop transformative solutions that help businesses stay competitive and drive growth. Partnering with Dotpot iT means accessing the most advanced and innovative technologies available today.</p>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center gap-10">
                          <div className="flex gap-10 flex-wrap justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="kotlin"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="swift"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="fluter"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="dart"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" alt="next"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="vue"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="angular"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </ReactVisibilitySensor>
            </div>
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
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
                      Why Dotpot iT
                    </h1>
                    <img
                      className="w-64 mx-auto"
                      src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                      alt=""
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT provides top-notch mobile app development services that utilize the latest technologies at an affordable cost. Our focus is on delivering innovative and user-friendly mobile-based solutions for businesses of all industries. We have a team of experienced developers who are committed to providing high-quality solutions that exceed clients' expectations and offer exceptional customer service throughout the development process. Choose Dotpot iT for cutting-edge mobile app development that helps your business thrive.
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
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Mobile App Development",
    link: "/key-features/mobile-app-development",
  },
];