import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import compliance from "../../assets/img/compliance.png";
import comprehensivesecurity from "../../assets/img/comprehensivesecurity.png";
import cybersecuritycover from "../../assets/img/cybersecuritycover.png";
import monitoring from "../../assets/img/monitoring.png";
import proactiveapproach from "../../assets/img/proactiveapproach.png";
import riskassessment from "../../assets/img/riskassessment.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const CyberSecurity = () => {
  const worksData = [
    {
      id: 1,
      title: "Comprehensive Security Solutions",
      description:
        "Dotpot IT offers a range of cyber security solutions that cover various aspects of security, including network security, endpoint security, cloud security, web security, and application security.",
      illustration: comprehensivesecurity,
    },
    {
      id: 2,
      title: "Risk Assessment",
      description:
        "Dotpot IT conducts a comprehensive risk assessment of your organization's IT infrastructure to identify vulnerabilities, threats, and risks. Based on the assessment, they provide customized security solutions that meet your organization's specific needs.",
      illustration: riskassessment,
    },
    {
      id: 3,
      title: "24/7 Monitoring",
      description:
        "Dotpot IT provides continuous monitoring of your organization's IT infrastructure, including your network, servers, endpoints, and applications, to detect and respond to security incidents in real-time.",
      illustration: monitoring,
    },
    {
      id: 4,
      title: "Compliance",
      description:
        "Dotpot IT ensures that your organization's security measures comply with industry standards and regulatory requirements, such as HIPAA, PCI DSS, and GDPR.",
      illustration: compliance,
    },
    {
      id: 5,
      title: "Proactive Approach",
      description:
        "Dotpot IT takes a proactive approach to cyber security by conducting regular security assessments, monitoring your IT infrastructure, and implementing measures to prevent potential threats before they become a problem.",
      illustration: proactiveapproach,
    },
  ];

  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Cyber Security | Dotpot iT</title>
        <meta
          name="description"
          content="Our Cyber Security provides the state of the earth security services for our customer's data"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/key-features/cyber-security"
        />
        <meta property="og:title" content="Cyber Security | Dotpot iT" />
        <meta
          property="og:description"
          content="Our Cyber Security provides the state of the earth security services for our customer's data"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/cyber-security"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cyber Security | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Our Cyber Security provides the state of the earth security services for our customer's data"
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software Development Company, Web design and development, Comprehensive Security Solutions"
        />
      </Helmet>
      {/* Navbar */}
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
                            Cyber Security
                          </h2>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            A dedicated cyber security team is responsible for
                            identifying and responding to cyber threats. It is
                            led by a CISO and includes professionals with
                            diverse skill sets. The team collaborates with other
                            teams and external stakeholders, updates their
                            skills and knowledge, and has a well-defined
                            incident response plan.
                          </p>
                        </div>
                        <img
                          src={cybersecuritycover}
                          alt="cyber security"
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
                      alt="colored line"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT provides top-notch Cyber Security services that
                      utilize the latest technologies at an affordable cost. Our
                      focus is on delivering innovative and user-friendly
                      security solutions for businesses of all industries. We
                      have a team of experienced security professionals who are
                      committed to providing high-quality solutions that exceed
                      clients' expectations and offer exceptional customer
                      service throughout the process. We understand the
                      importance of securing your business from cyber threats,
                      and we provide cutting-edge security measures to ensure
                      the safety of your data and systems. Choose Dotpot iT for
                      cutting-edge Cyber Security services that help your
                      business thrive.
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

export default CyberSecurity;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Cyber Security",
    link: "/key-features/cyber-security",
  },
];
