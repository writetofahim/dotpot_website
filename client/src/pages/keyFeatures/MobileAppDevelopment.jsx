import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";
import androidapp from "../../assets/img/androidapp.png";
import appmaintenance from "../../assets/img/appmaintenance.png";
import appstore from "../../assets/img/appstore.png";
import crossplatform from "../../assets/img/crossplatform.png";
import hybrideapp from "../../assets/img/hybrideapp.png";
import iosapp from "../../assets/img/iosapp.png";
import mobileapp from "../../assets/img/mobileapp.png";
import flutter_development from "../../assets/img/web_development/flutter_development.png";
import iconic_app_development from "../../assets/img/web_development/iconic_app_development.svg";
import kotlin_development from "../../assets/img/web_development/kotlin_development.png";
import swift_app_development from "../../assets/img/web_development/swift_app_development.png";

import windowsapp from "../../assets/img/windowsapp.png";

import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const MobileAppDevelopment = () => {
  const worksData = [
    {
      id: 1,
      title: "Android App Development",
      description:
        "Dotpot can provide Android App Development services to help businesses reach their customers on the world's most popular mobile platform. Our team of Android developers uses the latest technologies and programming languages to build high-quality, performance-driven apps for Android devices.",
      illustration: androidapp,
      sectionId: "android",
    },
    {
      id: 2,
      title: "iOS App Development",
      description:
        "Dotpot can provide iOS App Development services to help businesses reach their customers on Apple's iOS platform. Our team of iOS developers uses Swift and Objective-C to build native apps that provide a seamless user experience and meet Apple's strict guidelines.",
      illustration: iosapp,
      sectionId: "ios",
    },
    {
      id: 3,
      title: "Flutter Development",
      description: `Flutter is an open-source framework by Google for building high-performance, cross-platform mobile apps with a single codebase. It offers a reactive UI framework, extensive widget library, and "write once, run anywhere" approach. With its strong performance and active developer community, Flutter enables rapid development of visually appealing and native-like mobile applications.`,
      illustration: flutter_development,
      sectionId: "flutter",
    },
    {
      id: 4,
      title: "Kotlin Development",
      description: `Kotlin is a modern, statically-typed programming language developed by JetBrains. It is fully interoperable with Java and offers concise syntax, null safety, functional programming capabilities, and excellent tooling. Kotlin is widely used for Android app development and provides enhanced productivity, readability, and scalability, making it a popular choice for developers.`,
      illustration: kotlin_development,
      sectionId: "kotlin",
    },
    {
      id: 5,
      title: "Iconic Development",
      description: `Iconic Development is a leading framework for building cross-platform mobile apps, offering efficient code sharing, native performance, and a wide range of pre-built UI components. It simplifies development by enabling simultaneous app creation for iOS and Android platforms using a single codebase.`,
      illustration: iconic_app_development,
      sectionId: "iconic",
    },
    {
      id: 6,
      title: "Swift Development",
      description: `Swift is a modern and powerful programming language developed by Apple for building iOS, macOS, watchOS, and tvOS applications. It provides a concise syntax, type safety, and numerous built-in features, making it efficient for developing robust and user-friendly apps across Apple's platforms.`,
      illustration: swift_app_development,
      sectionId: "swift",
    },
    {
      id: 7,
      title: "Windows App Development",
      description:
        "Dotpot can provide Windows App Development services to help businesses reach their customers on Windows devices. Our team of Windows developers uses C# and XAML to build high-quality, performance-driven apps for Windows devices.",
      illustration: windowsapp,
      sectionId: "windows",
    },
    {
      id: 8,
      title: "Hybride App Development",
      description:
        "Dotpot iT specializes in hybrid app development, creating cross-platform apps with a single code base. Our experienced team will work with you to create a custom, responsive, and user-friendly app that reaches a wider audience and saves time and resources. Contact us today to learn more.",
      illustration: hybrideapp,
      sectionId: "hybrid",
    },
    {
      id: 9,
      title: "Cross-Platform App Development",
      description:
        "Dotpot iT creates cross-platform mobile apps that work seamlessly on iOS and Android. Save time and money with one app that reaches a wider audience. Contact us today to learn more",
      illustration: crossplatform,
      sectionId: "cross",
    },
    {
      id: 10,
      title: "App Maintenance and Support",
      description:
        "Dotpot iT provides app maintenance and support services, including regular updates, bug fixes, and performance optimization. Keep your mobile app running smoothly and focus on your business while we take care of your app. Contact us today to learn more!",
      illustration: appmaintenance,
      sectionId: "maintenance",
    },
    {
      id: 11,
      title: "App Store Optimization (ASO)",
      description:
        "Dotpot iT's App Store Optimization (ASO) service boosts your mobile app's visibility and downloads with thorough keyword research, metadata optimization, visual design, and ratings management. Contact us today to learn more about our ASO services and increase your app's success.",
      illustration: appstore,
      sectionId: "optimization",
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
        <title>Mobile App Development | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Dotpot iT provides mobile app development services for native Android, IOS and Hybrid mobile applications"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/key-features/mobile-app-development"
        />
        <meta
          name="keywords"
          content="Software Development Company, Android App Development, iOS App Development, Flutter Development"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mobile App Development | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Dotpot iT provides mobile app development services for native Android, IOS and Hybrid mobile applications"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
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
          content="Dotpot iT provides mobile app development services for native Android, IOS and Hybrid mobile applications"
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
                          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                            Mobile App Development By Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Bring your app vision to life with Dotpot iT. Our
                            expert team will work with you to create a custom
                            mobile app that meets your unique needs. Contact us
                            today!
                          </p>
                        </div>
                        <img
                          src={mobileapp}
                          alt="mobile application"
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
                {worksData.map(
                  ({ id, title, description, illustration, sectionId }) => (
                    <div
                      id={sectionId}
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

          {/* Technologies We Use */}
          <div className="bg-primary-100 py-16">
            <div className="container mx-auto ">
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
                      <h2 className="lg:text-3xl md:text-3xl text-xl font-bold text-center">
                        Technologies We Use
                      </h2>
                      <img
                        className="w-64  mx-auto pb-14"
                        src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                        alt="colored line"
                      />
                      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                        <div className="text-center md:text-center lg:text-left w-full lg:w-1/2 px-3 pb-10">
                          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-5">
                            We build Using Latest Technologies
                          </h2>
                          <p className="md:text-base text-xs text-gray-400 text-justify">
                            Dotpot iT is an innovative company that stays ahead
                            of the curve by utilizing cutting-edge technologies.
                            Our team of experts constantly explores the latest
                            tools and techniques to deliver effective solutions
                            for businesses. By leveraging the power of the
                            latest technologies, we develop transformative
                            solutions that help businesses stay competitive and
                            drive growth. Partnering with Dotpot iT means
                            accessing the most advanced and innovative
                            technologies available today.
                          </p>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center gap-10">
                          <div className="flex gap-10 flex-wrap justify-center">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                              alt="java"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                              alt="kotlin"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                              alt="swift"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                              alt="fluter"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                              alt="react"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                              alt="dart"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                              alt="next"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                              alt="vue"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                              alt="angular"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
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
                      Dotpot iT provides top-notch mobile app development
                      services that utilize the latest technologies at an
                      affordable cost. Our focus is on delivering innovative and
                      user-friendly mobile-based solutions for businesses of all
                      industries. We have a team of experienced developers who
                      are committed to providing high-quality solutions that
                      exceed clients' expectations and offer exceptional
                      customer service throughout the development process.
                      Choose Dotpot iT for cutting-edge mobile app development
                      that helps your business thrive.
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
