import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import startup01 from "../../assets/img/startup01.png";
import startup02 from "../../assets/img/startup02.png";
import startup03 from "../../assets/img/startup03.png";
import startup04 from "../../assets/img/startup04.png";
import startup05 from "../../assets/img/startup05.png";
import startup06 from "../../assets/img/startup06.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const WebsiteDesign = () => {
  const worksData = [
    {
      id: 1,
      title: "Expertise and Experience",
      description:
        "Our IT company has a team of skilled professionals with years of experience in developing software and providing IT services to a variety of clients. This expertise can be invaluable to startups that may not have the technical knowledge or resources to build their own technology infrastructure.",
      illustration: startup02,
    },
    {
      id: 2,
      title: "Customized Solutions",
      description:
        " Your IT company can develop custom software solutions tailored to the unique needs of each startup. This ensures that the technology solution is efficient, effective, and aligns with the business goals of the startup.",
      illustration: startup03,
    },
    {
      id: 3,
      title: "Ongoing Support",
      description:
        "Startups can benefit from ongoing technical support and maintenance to ensure that their technology infrastructure remains up-to-date and optimized. Your IT company can provide regular updates, security patches, and system backups to keep the startup's technology running smoothly.",
      illustration: startup04,
    },
    {
      id: 4,
      title: "Cost-Effective",
      description:
        "Startups often operate on a tight budget, and your IT company can provide cost-effective solutions that deliver maximum value for the investment. By outsourcing technology development and support, startups can save money on hiring and training in-house IT staff.",
      illustration: startup05,
    },
    {
      id: 5,
      title: "Strategic Partnership",
      description: `By partnering with your IT company, startups can benefit from a <a href="https://www.indeed.com/career-advice/career-development/strategic-partnerships" target="_blank" rel="nofollow">strategic</a> advisor who can provide insights and guidance on technology investments, security, and other IT-related issues. Your IT company can serve as a trusted partner that helps the startup achieve its long-term goals.`,
      illustration: startup06,
    },
  ];

  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <script type="application/ld+json">
          {`
             {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Dotpot iT",
              "address":"House-1, Road-3, Block-A, Mirpur-10, Dhaka, Bangladesh",
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
        <title>Startup Business | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Empower your startup's success with our tailored IT solutions and expert support."
        />
        <link
          rel="canonical"
          href="https://www.dotpotit.com/who-we-works-with/startup-business"
        />
        <meta property="og:title" content="Startup Business | Dotpot iT" />
        <meta
          property="og:description"
          content="Empower your startup's success with our tailored IT solutions and expert support."
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/website-design"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Design | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Empower your startup's success with our tailored IT solutions and expert support."
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
                            Start Up Business
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            As an IT company, your expertise can be invaluable
                            to{" "}
                            <a
                              href="https://www.investopedia.com/terms/s/startup.asp"
                              target="_blank"
                              rel="nofollow"
                            >
                              startup businesses
                            </a>{" "}
                            looking to establish a strong digital presence. Your
                            team of skilled professionals can provide a range of
                            services, such as developing custom software
                            solutions, designing and launching a website or
                            mobile app, setting up cloud infrastructure, and
                            providing ongoing technical support.
                          </p>
                        </div>
                        <img
                          src={startup01}
                          alt="Start Up Business Illustration"
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
                    key={id}
                    className={`md:flex justify-center items-center gap-x-20 font-work p-5`}
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
                      alt="Separator Image"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      In the early stages of a startup, having a reliable and
                      efficient technology infrastructure is critical. With your
                      help, startups can streamline their operations, automate
                      processes, and ultimately scale their business more
                      quickly. Your team can also help startups optimize their
                      online marketing efforts, such as search engine
                      optimization, social media marketing, and email campaigns.
                    </p>
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      In addition to providing technical support, your company
                      can also serve as a trusted advisor to startups, helping
                      them navigate the complex world of IT and make informed
                      decisions about their technology investments. By
                      partnering with your IT company, startups can focus on
                      their core business objectives and leave the technology to
                      the experts.
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
    title: "Startup Business",
    link: "/who-we-works-with/startup-business",
  },
];
