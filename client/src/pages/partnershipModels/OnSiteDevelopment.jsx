import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import coveron from "../../assets/img/On_Site_Development_1.png";
import capabilities from "../../assets/img/On_Site_Development_2.png";
import enhence from "../../assets/img/On_Site_Development_3.png";
import quick from "../../assets/img/On_Site_Development_4.png";
import knowledge from "../../assets/img/On_Site_Development_5.png";
import summary from "../../assets/img/On_Site_Development_6 .png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const OnSiteDevelopment = () => {
  const worksData = [
    {
      id: 1,
      title: "Extend Your Team's Capabilities with Dotpot iT",
      description: `Under this model, Dotpot iT will provide a detailed scope of work,
        outlining the project requirements, timeline, and deliverables.
        The client will agree to pay a fixed price for the entire project,
        regardless of any unexpected issues or changes that may arise
        during the project's execution.📋💰💻`,
      illustration: capabilities,
    },
    {
      id: 2,
      title: "Enhanced collaboration",
      description: `👥Working on-site allows for more effective communication and
      collaboration between the client and Dotpot iT team. This
      helps to ensure that the project meets the client's specific
      needs and requirements.`,
      illustration: enhence,
    },
    {
      id: 3,
      title: "Quick issue resolution",
      description: `👨‍💼👩‍💻 The Dotpot iT team is readily available to address any issues
      that arise, minimizing any downtime or disruption to the
      project.`,
      illustration: quick,
    },
    {
      id: 4,
      title: "Knowledge sharing",
      description: `🤝 The Dotpot iT team can share their expertise and knowledge
      with the client's team, enabling them to learn and grow in
      their skills and abilities.`,
      illustration: knowledge,
    },
    {
      id: 5,
      title: "Summary",
      description: `🤝💻 The on-site partnership model is a collaborative
      approach that allows Dotpot iT to provide customized IT solutions
      that meet the specific needs of the client. It facilitates
      enhanced collaboration, increased project control, quick issue
      resolution, knowledge sharing, and greater flexibility.`,
      illustration: summary,
    },
  ];
  useScrollToTop();
  return (
    <div>
    <Helmet>
        <title>On-site-development-model | Dotpot iT</title>
        <meta
          name="description"
          content="Learn about on site development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta name="keywords" content="software development company, it company" />
        <link rel="canonical" href="https://dotpotit.com/partnership_model/on-site-development-model" />
        <meta property="og:title" content="On-site-development-model | Dotpot iT" />
        <meta
          property="og:description"
          content="Learn about on site development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta property="og:url" content="https://dotpotit.com/partnership_model/on-site-development-model" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="On-site-development-model | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Learn about on site development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      <Navbar />
      <div className="bg-background-500">
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
                            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                              On Site Development
                            </h2>
                            <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                              An on-site partnership model is a collaborative
                              business relationship where Dotpot iT provides
                              dedicated IT resources to work alongside a
                              client's team at their location. This model is
                              beneficial for clients who require more control
                              over their IT projects and prefer to work with a
                              team that is physically present and accessible
                            </p>
                          </div>
                          <img
                            src={coveron}
                            alt=""
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
                              alt=""
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
                        alt=""
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

export default OnSiteDevelopment;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "On site development",
    link: "/partnership_model/on-site-development-model",
  },
];
