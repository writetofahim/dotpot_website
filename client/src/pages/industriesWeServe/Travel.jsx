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

const Travel = () => {
  const worksData = [
    {
      id: 1,
      title: "Online Booking System",
      description:
        `Implement a secure and user-friendly online booking system that allows customers to easily search, select, and book accommodations, flights, car rentals, and other travel services directly from your website.`,
      illustration: ecommarceweb,
    },
    {
      id: 2,
      title: "Interactive Maps and Destination Guides",
      description:
        `<a href="https://thriftytraveler.com/guides/travel/explore-the-world-destination-guide-interactive-map/" target="_blank" rel="nofollow">Integrate interactive maps to showcase popular destinations,</a> attractions, restaurants, and points of interest. Enhance the user experience with informative destination guides, highlighting key features and providing valuable travel insights.`,
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Multi-language and Currency Support",
      description:
        "Cater to a global audience by incorporating multi-language support and enabling users to view prices and make bookings in their preferred currencies.",
      illustration: agencyweb,
    },
    {
      id: 4,
      title: "Trip Planning Tools",
      description:
        "Offer trip planning tools such as itinerary builders, packing checklists, and weather forecasts to assist travelers in organizing their trips and ensuring a smooth travel experience.",
      illustration: agencyweb,
    },
  ];

  useScrollToTop();

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Travel & Hospitality | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Experience the ultimate travel companion - DotpotiT's state-of-the-art app. Simplify your journey with our cutting-edge features and seamless user experience."
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/travel"
        />
        <meta property="og:title" content="Travel & Hospitality | Dotpot iT" />
        <meta
          property="og:description"
          content="Experience the ultimate travel companion - DotpotiT's state-of-the-art app. Simplify your journey with our cutting-edge features and seamless user experience."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development company, Hotel bookings, Travel accommodations."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/travel"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel & Hospitality | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Experience the ultimate travel companion - DotpotiT's state-of-the-art app. Simplify your journey with our cutting-edge features and seamless user experience."
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
                          Travel & Hospitality
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Experience the ultimate <a href="https://semidotinfotech.com/travel-and-hospitality-solutions" target="_blank" rel="nofollow">travel & hospitality</a> companion - DotpotiT's state-of-the-art app. Simplify your journey with our cutting-edge features and seamless user experience.
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
                      Dotpot IT is the preferred partner for travel businesses seeking outstanding web design and development solutions. With their extensive expertise in the industry, they create visually captivating and user-friendly websites tailored to the unique needs of the travel market. Dotpot IT offers a range of customized services, including itinerary management systems, advanced search functionalities, immersive virtual experiences, and travel agent profiles. Prioritizing seamless user experiences, they provide ongoing maintenance and support to ensure optimal website performance. Dotpot IT empowers travel companies to elevate their online presence and deliver exceptional digital experiences in this dynamic industry.
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

export default Travel;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Travel",
    link: "/industries-we-serve/travel",
  },
];
