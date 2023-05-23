import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import Enterprise_Business_01 from "../../assets/img/Enterprise_Business_01.png";
import Enterprise_Business_02 from "../../assets/img/Enterprise_Business_02.png";
import Enterprise_Business_03 from "../../assets/img/Enterprise_Business_03.png";
import Enterprise_Business_04 from "../../assets/img/Enterprise_Business_04.png";
import Enterprise_Business_05 from "../../assets/img/Enterprise_Business_05.png";
import Enterprise_Business_06 from "../../assets/img/Enterprise_Business_06.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const WebsiteDesign = () => {
  const worksData = [
    {
      id: 1,
      title: "Custom software development",
      description:
        "Your IT company can create custom software solutions tailored to meet the specific needs of enterprise businesses. This can help automate processes, improve efficiency, and enhance customer experiences.",
      illustration: Enterprise_Business_02,
    },
    {
      id: 2,
      title: "IT support and maintenance",
      description:
        `By providing comprehensive <a href="https://illumo.digital/software/support/" target="_blank">IT support and maintenance services,</a> your company can ensure that enterprise businesses' systems are always up and running. This can help minimize downtime and prevent costly disruptions.`,
      illustration: Enterprise_Business_03,
    },
    {
      id: 3,
      title: "Data security and compliance",
      description:
        "Your company can help enterprise businesses manage their data and ensure that it is secure and compliant with relevant regulations. This can include implementing strong security measures and providing ongoing monitoring and maintenance.",
      illustration: Enterprise_Business_04,
    },
    {
      id: 4,
      title: "Cloud solutions",
      description:
        "Your IT company can help enterprise businesses transition to cloud-based solutions, which can offer scalability, flexibility, and cost savings. This can include everything from cloud storage to cloud-based software and infrastructure.",
      illustration: Enterprise_Business_05,
    },
    {
      id: 5,
      title: "Emerging technologies",
      description:
        "By staying up-to-date with the latest technologies and trends, your IT company can help enterprise businesses stay ahead of the curve. This can include everything from artificial intelligence and machine learning to blockchain and IoT solutions.",
      illustration: Enterprise_Business_06,
    },
  ];

  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Enterprise Business | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="As an IT company, your software development and IT services can help enterprise businesses improve efficiency, productivity, and security."
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/who-we-works-with/enterprise-business"
        />
        <meta property="og:title" content="Enterprise Business | Dotpot iT" />
        <meta
          property="og:description"
          content="As an IT company, your software development and IT services can help enterprise businesses improve efficiency, productivity, and security."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development, business accounts, Enterprise Business"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/who-we-works-with/enterprise-business"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise Business | Dotpot iT" />
        <meta
          name="twitter:description"
          content="As an IT company, your software development and IT services can help enterprise businesses improve efficiency, productivity, and security."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      <Navbar />
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
                            Enterprise Business
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            As an IT company, your software development and IT services can help <a href="https://www.clearvoice.com/resources/what-is-an-enterprise-business/" target="_blank">enterprise businesses</a> improve efficiency, productivity, and security. By providing cutting-edge solutions and technology, you can help these businesses stay competitive in their markets and achieve their goals.
                          </p>
                        </div>
                        <img
                          src={Enterprise_Business_01}
                          alt="Enterprise Business Image"
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
                      alt="Separator Image"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Company's expertise and customized solutions. With years
                      of experience in software development and IT services,
                      Dotpot IT has the knowledge and resources to help
                      enterprise businesses address their unique challenges and
                      achieve their goals. Additionally, Dotpot IT can create
                      custom software solutions tailored to meet the specific
                      needs of enterprise businesses, whether it's automating
                      processes, improving customer experiences, or ensuring
                      data security and compliance. By partnering with Dotpot
                      IT, enterprise businesses can benefit from the company's
                      expertise and cutting-edge solutions, helping them stay
                      competitive in their markets and achieve success.
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
