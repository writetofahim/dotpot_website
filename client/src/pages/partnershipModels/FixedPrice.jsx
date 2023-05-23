import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import benifit from "../../assets/img/Fixed_Price1.png";
import projectscope from "../../assets/img/Fixed_Price3.png";
import coverfix from "../../assets/img/Fixed_Price4.png";
import client from "../../assets/img/Fixed_Price5.png";
import summuryfix from "../../assets/img/Fixed_Price6.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const FixedPrice = () => {
  const worksData = [
    {
      id: 1,
      title: "Fixed-Price Project Scope",
      description: `🔧💼📋Under this model, Dotpot iT will provide a detailed scope of work,
        outlining the project requirements, timeline, and deliverables.
        The client will agree to pay a fixed price for the entire project,
        regardless of any unexpected issues or changes that may arise
        during the project's execution.`,
      illustration: projectscope,
    },
    {
      id: 2,
      title: "Benefits of a Fixed Price",
      description: `👍The client has a clear understanding of the project's cost upfront, enabling them to budget and plan accordingly and client bears minimal risk since they only pay the agreed-upon fixed price, even if unexpected issues or changes arise.`,
      illustration: benifit,
    },
    {
      id: 3,
      title: "Deliverables for Client Satisfaction",
      description: `🚀 Experience the peace of mind that comes with a fixed-price website build tailored to your unique needs. At Dotpot IT, we work closely with our clients to provide a detailed scope of work, outlining project requirements, timeline, and deliverables. 💻`,
      illustration: client,
    },
    {
      id: 4,
      title: "summary",
      description: `👍The Fixed Price Partnership Model is a <a href="https://www.collinsdictionary.com/dictionary/english/collaborative-approach" target="_blank">collaborative
      approach</a> that allows Dotpot iT to provide customized IT solutions that meet the specific needs of the client, with a clear understanding of the project's scope, timeline, and cost. It facilitates certainty of cost, reduced risk, clear project requirements, predictable timeline, and higher quality output`,
      illustration: summuryfix,
    },
  ];
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>
          Fixed Price Partnership Model | Dotpot iT a leading it company
        </title>
        <meta
          name="description"
          content="Learn about Fixed Price Partnership Model Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="keywords"
          content="software development company, partnership model, fixed price model"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/partnership-model/fixed-price-model"
        />
        <meta
          property="og:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Learn about Fixed Price Partnership Model Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/partnership-model/fixed-price-model"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Learn about Fixed Price Partnership Model Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      <Navbar />
      <div className="bg-background-500">
        <div
          className={` md:pt-[15vh] pt-[15vh] ${window.innerWidth > 1280 && "md:pt-[11vh]"
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
                              Fixed Price
                            </h1>
                            <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                              👍In a <a href="https://easternpeak.com/definition/fixed-cost-model/" target="_blank">Fixed Price Partnership Model,</a> Dotpot iT and the client agree upon a fixed price for a specific project or set of services. This model is beneficial for clients who have a clear understanding of their project requirements and want to know the exact cost upfront
                            </p>
                          </div>
                          <img
                            src={coverfix}
                            alt="Cover Image"
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

            {/* Technologies We Use */}
            {/* <div className="bg-primary-100 py-16">
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
                          alt=""
                        />
                        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                          <div className="text-center md:text-center lg:text-left w-full lg:w-1/2 px-3 pb-10">
                            <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-5">
                              We build Using Latest Technologies
                            </h2>
                            <p className="md:text-base text-xs text-gray-400 text-justify">
                              At Dotpot IT, we specialize in creating powerful
                              and user-friendly e-commerce websites that enable
                              businesses to thrive in the digital marketplace.
                              With our expertise in e-commerce development and a
                              deep understanding of consumer behavior, we craft
                              tailored solutions that drive online sales,
                              enhance customer experiences, and boost your
                              bottom line.
                            </p>
                          </div>
                          <div className="lg:w-1/2 w-full flex flex-col items-center justify-center gap-10">
                            <div className="flex gap-10 flex-wrap justify-center">
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                alt="html"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                alt="css"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                alt="tailwind"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                alt="bootstarp"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                alt="js"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                alt="react"
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
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                alt="express"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                alt="node"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                alt="mongo"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                alt="mysql"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                                alt="php"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
                                alt="laravel"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                alt="python"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                                alt="django"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                                alt="wordpress"
                                className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                              />
                              <img
                                src={shopify}
                                alt="shopify"
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
            </div> */}

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
                      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
                        Why Dotpot iT
                      </h2>
                      <img
                        className="w-64 mx-auto"
                        src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                        alt="Separating Line"
                      />
                      <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                        Dotpot iT offers affordable web design services using
                        the latest technologies. With a focus on delivering
                        visually appealing and user-friendly websites, they
                        specialize in e-commerce platforms such as Shopify,
                        WooCommerce, and Magento. Their experienced team is
                        committed to providing high-quality design solutions
                        that exceed clients' expectations and exceptional
                        customer service throughout the process. Choose Dotpot
                        iT for innovative web design that helps your business
                        thrive.
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
      </div>
      <Footer />
    </div>
  );
};

export default FixedPrice;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Fixed Price",
    link: "/partnership-model/fixed-price-model",
  },
];
