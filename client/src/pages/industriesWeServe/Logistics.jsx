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

const Logistics = () => {
  const worksData = [
    {
      id: 1,
      title: "Shipment Tracking",
      description:
        `Implement a robust shipment tracking system that allows customers to track the status and location of their packages in real-time. Provide automated notifications and updates throughout the shipping process.`,
      illustration: ecommarceweb,
    },
    {
      id: 2,
      title: "Order Management",
      description:
        "Create an intuitive order management system that enables businesses to efficiently process and fulfill orders. Include features such as order tracking, inventory management, and integration with third-party logistics providers if applicable.",
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Inventory Management",
      description:
        "Develop an inventory management system that allows businesses to track stock levels, manage SKU information, and generate reports on inventory status. Provide alerts for low stock levels and seamless integration with e-commerce platforms.",
      illustration: blogweb,
    },
    {
      id: 4,
      title: "Route Optimization",
      description:
        `Incorporate <a href="https://optimoroute.com/what-is-route-optimization/" target="_blank" rel="nofollow">route optimization  </a>capabilities to help logistics companies streamline their delivery processes. Utilize algorithms to calculate the most efficient routes, reducing fuel consumption, and delivery time.`,
      illustration: blogweb,
    },
    {
      id: 5,
      title: "Secure Data Handling",
      description:
        "Implement robust security measures to protect sensitive customer data, including encryption, secure payment gateways, and adherence to data protection regulations.",
      illustration: blogweb,
    },
  ];

  useScrollToTop();

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Logistics & Distribution | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Revolutionize your logistics & distribution business with Dotpot IT's customized web solutions. Streamline operations for optimal efficiency and exponential growth. "
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/logistics"
        />
        <meta
          property="og:title"
          content="Logistics & Distribution | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Revolutionize your logistics & distribution business with Dotpot IT's customized web solutions. Streamline operations for optimal efficiency and exponential growth. "
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development company, Supply Chain Management, Warehousing Solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/logistics"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Logistics & Distribution | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Revolutionize your logistics & distribution business with Dotpot IT's customized web solutions. Streamline operations for optimal efficiency and exponential growth. "
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
                            Logistics & Distribution
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Revolutionize your <a href="https://www.crownsds.com/whats-the-difference-between-logistics-and-distribution/" target="_blank" rel="nofollow">logistics & distribution</a> business with Dotpot IT's customized web solutions. Streamline operations for optimal efficiency and exponential growth.
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
                      Dotpot IT is the preferred partner for logistics and distribution businesses seeking top-notch web design and development solutions. With their extensive expertise in the field, they craft visually appealing and user-friendly websites that cater specifically to the needs of this industry. Dotpot IT offers a range of tailored services, including inventory management systems, order tracking functionalities, warehouse management portals, and more. They prioritize seamless user experiences and provide ongoing maintenance and support to ensure optimal website performance. Dotpot IT assists logistics and distribution companies in enhancing their online presence and delivering exceptional digital experiences in this ever-evolving sector.
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

export default Logistics;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Logistics",
    link: "/industries-we-serve/logistics",
  },
];
