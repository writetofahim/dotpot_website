import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import agile from "../../assets/img/agile.png";
import clientcentric from "../../assets/img/clientcentric.png";
import communication from "../../assets/img/communication.png";
import costeffective from "../../assets/img/costeffective.png";
import dedicatedteam from "../../assets/img/dedicatedteam.png";
import deliveringprojects from "../../assets/img/deliveringprojects.png";
import experience from "../../assets/img/experience.png";
import quality from "../../assets/img/quality.png";
import support from "../../assets/img/support.png";
import technologystack from "../../assets/img/technologystack.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const DedicatedTeam = () => {
  const worksData = [
    {
      id: 1,
      title: "Experience",
      description:
        "Dotpot's dedicated team has extensive experience in software development, having worked on numerous projects across various industries. This experience enables them to provide high-quality solutions that meet their clients' needs.",
      illustration: experience,
    },
    {
      id: 2,
      title: "Agile Methodology",
      description:
        `Dotpot's team follows the <a href="https://www.wrike.com/project-management-guide/faq/what-is-agile-methodology-in-project-management/" target="_blank">agile methodology,</a> which emphasizes collaboration, flexibility, and continuous improvement. This approach allows them to quickly respond to changes and deliver the project's requirements efficiently.`,
      illustration: agile,
    },
    {
      id: 3,
      title: "Client-Centric Approach",
      description:
        "Dotpot's team puts the client's needs at the center of every project. They work closely with the client to understand their requirements, goals, and expectations and tailor their solutions to meet these needs.",
      illustration: clientcentric,
    },
    {
      id: 4,
      title: "Quality Assurance",
      description:
        `Dotpot's team has a dedicated <a href="https://www.techtarget.com/searchsoftwarequality/definition/quality-assurance" target="_blank">quality assurance</a> team that ensures that the project's quality meets the highest standards. They conduct regular testing and review to identify and address any issues that may arise.`,
      illustration: quality,
    },
    {
      id: 5,
      title: "Communication",
      description:
        "Dotpot's team values open and transparent communication with their clients. They provide regular progress updates, seek feedback, and ensure that the client is informed of any issues or changes that may impact the project's success.",
      illustration: communication,
    },
    {
      id: 6,
      title: "Technology Stack",
      description:
        "Dotpot's team has expertise in a range of technologies and programming languages, including but not limited to React, Node.js, PHP, Laravel, WordPress, Shopify, and Magento.",
      illustration: technologystack,
    },
    {
      id: 7,
      title: "Cost-Effective Solutions",
      description:
        "Dotpot's team provides cost-effective solutions that meet the project's requirements without compromising quality. They work closely with the client to identify cost-saving opportunities and optimize their solutions accordingly.",
      illustration: costeffective,
    },
    {
      id: 8,
      title: "Timely Delivery",
      description:
        "Dotpot's team is committed to delivering projects within the set timeline. They prioritize time management and work efficiently to ensure that the project is completed on time.",
      illustration: deliveringprojects,
    },
    {
      id: 9,
      title: "Support",
      description:
        "Dotpot's team provides ongoing support even after the project's completion to ensure that the client's needs are met and any issues that arise are promptly addressed.",
      illustration: support,
    },
  ];

  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Dedicated Team | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Empower your business with our dedicated team"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/key-features/dedicated-team"
        />
        <meta
          name="keywords"
          content="Software Development Company, Cost-Effective Solutions, Timely Delivery, Support"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dedicated Team | Dotpot iT" />
        <meta
          property="og:description"
          content="Empower your business with our dedicated team"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/dedicated-team"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dedicated Team | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Empower your business with our dedicated team"
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
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
                            Dedicated Team Of Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Dotpot's dedicated team is a group of skilled
                            professionals who work collaboratively to ensure the
                            successful completion of their software development
                            projects. They are selected for their expertise,
                            work flexibly to adapt to changes, and are held
                            accountable for the project's success.
                          </p>
                        </div>
                        <img
                          src={dedicatedteam}
                          alt="dedicated team"
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
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
                      Why Dotpot iT
                    </h2>
                    <img
                      className="w-64 mx-auto"
                      src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                      alt="colored line"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT provides top-notch Dedicated Team services that
                      utilize the latest technologies at an affordable cost. Our
                      focus is on delivering innovative and user-friendly
                      solutions for businesses of all industries by offering a
                      team of experienced professionals who are dedicated to
                      working exclusively on your project. We understand the
                      importance of delivering high-quality solutions that
                      exceed clients' expectations and offer exceptional
                      customer service throughout the development process.
                      Choose Dotpot iT for a dedicated team that helps your
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

export default DedicatedTeam;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Dedicated Team",
    link: "/key-features/dedicated-team",
  },
];
