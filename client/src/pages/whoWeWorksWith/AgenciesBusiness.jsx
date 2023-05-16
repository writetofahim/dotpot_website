import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import Agencies_01 from "../../assets/img/Agencies_01.png";
import Agencies_02 from "../../assets/img/Agencies_02.png";
import Agencies_03 from "../../assets/img/Agencies_03.png";
import Agencies_04 from "../../assets/img/Agencies_04.png";
import Agencies_05 from "../../assets/img/Agencies_05.png";
import Agencies_06 from "../../assets/img/Agencies_06.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const WebsiteDesign = () => {
  const worksData = [
    {
      id: 1,
      title: "Customized Solutions",
      description:
        "We specialize in creating customized software solutions that are tailored to the specific needs of our clients. This means that agencies and businesses can get software that is designed to meet their unique requirements, which can help them achieve their goals more efficiently.",
      illustration: Agencies_02,
    },
    {
      id: 2,
      title: "Technical Expertise",
      description:
        "Our team of experts has the technical expertise and knowledge to help agencies and businesses leverage technology to their advantage. We stay up-to-date with the latest trends and innovations in the industry, so our clients can be confident that they are receiving cutting-edge solutions.",
      illustration: Agencies_03,
    },
    {
      id: 3,
      title: "Project Management",
      description:
        " We have a proven track record of delivering software projects on time and within budget. Our project management expertise ensures that projects are completed efficiently and effectively, with clear communication throughout the process..",
      illustration: Agencies_04,
    },
    {
      id: 4,
      title: "Ongoing Support",
      description:
        "We provide ongoing maintenance and support services to ensure that software continues to function at optimal levels. This can help agencies and businesses minimize downtime and avoid potential issues that could impact their operations.",
      illustration: Agencies_05,
    },
    {
      id: 5,
      title: "Competitive Edge",
      description:
        "By partnering with our IT company, agencies and businesses can gain a competitive edge in their respective markets. Our solutions can help them increase productivity, reduce costs, and improve customer engagement, which can ultimately drive growth and success.",
      illustration: Agencies_06,
    },
  ];

  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Agencies Business | Dotpot iT</title>
        <meta
          name="description"
          content="We can assist Agencies Business with tailored IT solutions to optimize their operations and boost productivity."
        />
        <link
          rel="canonical"
          href="https://www.dotpotit.com/key-features/website-design"
        />
        <meta property="og:title" content="Agencies Business | Dotpot iT" />
        <meta
          property="og:description"
          content="We can assist Agencies Business with tailored IT solutions to optimize their operations and boost productivity."
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
        <meta name="twitter:title" content="Agencies Business | Dotpot iT" />
        <meta
          name="twitter:description"
          content="We can assist Agencies Business with tailored IT solutions to optimize their operations and boost productivity."
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
                          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                            Agencies Business
                          </h2>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            As an IT company, we can provide a range of services
                            to help agencies and businesses achieve their goals.
                            Our software development expertise allows us to
                            create customized solutions tailored to meet
                            specific needs, such as streamlining operations,
                            increasing efficiency, and improving customer
                            engagement. We can also offer IT consulting services
                            to help identify areas for improvement and make
                            recommendations for technology solutions. Our team
                            of experts can assist with project management,
                            quality assurance, and testing, ensuring that
                            software is delivered on time and within budget.
                            Additionally, we can provide ongoing maintenance and
                            support services to keep software up-to-date and
                            running smoothly. By partnering with us, agencies
                            and businesses can leverage our technical expertise
                            to gain a competitive edge, increase productivity,
                            and drive growth.
                          </p>
                        </div>
                        <img
                          src={Agencies_01}
                          alt=""
                          className="w-full md:w-1/3 lg:w-1/3"
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
                      Agencies and businesses should choose our IT company for
                      our proven track record of delivering high-quality,
                      customized software solutions, as well as our technical
                      expertise and commitment to clear communication and
                      collaboration with our clients. We provide ongoing
                      maintenance and support services to ensure that software
                      continues to function at optimal levels, helping our
                      clients minimize downtime and avoid potential issues that
                      could impact their operations. Overall, we offer a
                      comprehensive range of services that can help agencies and
                      businesses improve their operations, increase efficiency,
                      and drive growth.
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
    title: "Enterprise Business",
    link: "/who-we-works-with/enterprise-business",
  },
];
