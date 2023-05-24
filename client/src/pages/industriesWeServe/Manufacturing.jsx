import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import agencyweb from "../../assets/img/agencyweb.png";
import blogweb from "../../assets/img/blogweb.png";
import coverweb from "../../assets/img/coverweb.png";
import customappweb from "../../assets/img/customappweb.png";
import ecommarceweb from "../../assets/img/ecommarceweb.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const Manufacturing = () => {
  const worksData = [
    {
      id: 1,
      title: "Product Catalog",
      description:
        `Showcase a comprehensive product catalog with detailed information about each product, including specifications, features, and variations. Allow users to filter and search for specific products based on their requirements.`,
      illustration: ecommarceweb,
    },
    {
      id: 2,
      title: "Manufacturing Capabilities",
      description:
        "Highlight the manufacturing capabilities and processes of the company. Provide information about machinery, technologies, quality control measures, certifications, and compliance standards to instill confidence in potential customers.",
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Case Studies and Success Stories",
      description:
        "Showcase successful projects and case studies to demonstrate the expertise and track record of the manufacturing company. Include testimonials from satisfied customers to build credibility.",
      illustration: blogweb,
    },
    {
      id: 4,
      title: "Supply Chain Management",
      description:
        `Provide transparency into the supply chain management process. Illustrate how the company manages sourcing of raw materials, production, quality control, and delivery to ensure efficient operations and timely fulfillment.`,
      illustration: blogweb,
    },
  ];

  useScrollToTop();

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Manufacturing | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Optimize manufacturing processes with DotpotIT's custom software solutions. Boost productivity, reduce costs, and drive efficiency for your business success. "
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/manufacturing"
        />
        <meta property="og:title" content="Manufacturing | Dotpot iT" />
        <meta
          property="og:description"
          content="Optimize manufacturing processes with DotpotIT's custom software solutions. Boost productivity, reduce costs, and drive efficiency for your business success. "
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development company, Manufacturing software solutions, Process optimization for manufacturing"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/manufacturing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manufacturing | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Optimize manufacturing processes with DotpotIT's custom software solutions. Boost productivity, reduce costs, and drive efficiency for your business success. "
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      <Navbar />
      <div className={` md:pt-[15vh] pt-[15vh] ${window.innerWidth > 1280 && "md:pt-[11vh]"
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
                            Manufacturing
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Optimize <a href="https://www.indeed.com/career-advice/career-development/manufacturing-processes" target="_blank" rel="nofollow">manufacturing processes</a> with DotpotIT's custom software solutions. Boost productivity, reduce costs, and drive efficiency for your business success.
                          </p>
                        </div>
                        <img
                          src={coverweb}
                          alt="web development"
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
                      alt="Separator Image"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot IT is the go-to choice for manufacturing businesses in need of exceptional web design and development solutions. With their extensive expertise in the field, they create visually captivating and user-friendly websites specifically tailored to the unique needs of the manufacturing industry. Dotpot IT offers a comprehensive range of services, including customized inventory management systems, order tracking functionalities, warehouse management portals, and more. They prioritize seamless user experiences and provide ongoing maintenance and support to ensure optimal website performance. Dotpot IT assists manufacturing companies in enhancing their online presence and delivering exceptional digital experiences in this ever-evolving sector.
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

export default Manufacturing;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Manufacturing",
    link: "/industries-we-serve/manufacturing",
  },
];
