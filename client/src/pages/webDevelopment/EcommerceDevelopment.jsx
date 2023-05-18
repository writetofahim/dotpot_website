import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import benifite from "../../assets/img/benifite.png";
import ecommarcecover from "../../assets/img/ecommarcecover.png";
import ecomovervoew from "../../assets/img/ecomovervoew.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const EcommerceDevelopment = () => {
  useScrollToTop();
  const worksData = [
    {
      id: 1,
      title: "Overview",
      description:
        "Dotpot IT offers budget-friendly E-Commerce website development services focused on user experience. Their team provides guidance throughout the process and post-launch support.",
      illustration: ecomovervoew,
    },
    {
      id: 2,
      title: "Benefits of working with Dotpot IT",
      description: `
      <li class="text-gray-400 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">Expertise:</strong>
        <br />

        Our experienced team stays up-to-date with the latest E-Commerce website trends and technologies to ensure a cutting-edge site.

      </li>
      <li class="text-gray-400 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">Customization:</strong>
        <br />

        We don't offer one-size-fits-all solutions. Every E-Commerce website we develop is tailored to your specific needs for a unique solution.

      </li>
      <li class="text-gray-400 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">Support:</strong>
        <br />

        We provide full support from initial consultation to post-launch maintenance and updates for your peace of mind.

      </li>`,
      illustration: benifite,
    },
  ];
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>
          E-Commerce website Development | Dotpot iT a leading it company
        </title>
        <meta
          name="description"
          content="Learn about E-Commerce website Development iT, a leading IT company providing innovative solutions for businesses.visit website for details"
        />
        <link
          rel="canonical"
          href="https://www.dotpotit.com/web-development/e-commerce-website"
        />

        <meta
          property="og:title"
          content="E-Commerce website Development | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Learn about E-Commerce website Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="keywords"
          content="Software development Company Tailored web solutions, Stunning visuals, User-friendly experience, Cutting-edge technologies"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/web-development/e-commerce-website"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Learn about E-Commerce website Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      <div
        className={` pt-[15vh] ${
          window.innerWidth > 1280 ? "md:pt-[11vh]" : "md:pt-[15vh]"
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
                            E-Commerce website Development
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Dotpot IT offers E-commerce website development
                            services from design to maintenance, so you can
                            focus on growing your business.
                          </p>
                        </div>
                        <img
                          src={ecommarcecover}
                          alt="retail business"
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
                            <h1 className="lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left font-bold mb-5 text-textColor-500">
                              {title}
                            </h1>
                            <p className="lg:text-base md:text-sm text-xs text-gray-400 text-justify py-1">
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
              <ReactVisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <p
                    className={`text-gray-400 lg:px-5 text-center pb-2 w-1/2 mx-auto mt-16 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                    } duration-1000  `}
                  >
                    Ready to take your E-Commerce website to the next level?
                    Contact us today to learn more about our E-Commerce website
                    development services and how we can help you achieve your
                    goals.
                  </p>
                )}
              </ReactVisibilitySensor>
            </>
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

export default EcommerceDevelopment;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "E-Commerce Development",
    link: "/web-development/e-commerce-website",
  },
];
