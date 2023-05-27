import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
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

const education = () => {
  const worksData = [
    {
      id: 1,
      title: "Virtual Classroom Solutions",
      description: `Dotpot IT can develop <a href="https://corp.kaltura.com/blog/what-is-a-virtual-classroom/#:~:text=A%20virtual%20classroom%20is%20a,essential%20to%20a%20learning%20environment." target="_blank" rel="nofollow">virtual classroom</a> solutions that facilitate real-time interactions between educators and learners. These platforms may include video conferencing, chat features, whiteboarding tools, and document sharing capabilities.`,
      illustration: ecommarceweb,
    },
    {
      id: 2,
      title: "Learning Management System (LMS)",
      description:
        "Development: Dotpot IT can create customized learning management systems that allow educational institutions to manage and deliver online courses, track student progress, and generate comprehensive reports.",
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Interactive Multimedia Integration",
      description:
        " Dotpot IT can incorporate interactive multimedia elements such as videos, animations, simulations, and interactive exercises into e-learning platforms to enhance learner engagement and understanding.",
      illustration: blogweb,
    },
    {
      id: 4,
      title: "Mobile Learning Solutions",
      description: `Dotpot IT can develop mobile learning applications or responsive websites that enable learners to access educational content on-the-go, anytime and anywhere, using their smartphones or tablets.`,
      illustration: customappweb,
    },
    {
      id: 5,
      title: "Assessment and Quiz Tools",
      description: `Dotpot IT can develop mobile learning applications or responsive websites that enable learners to access educational content on-the-go, anytime and anywhere, using their smartphones or tablets.`,
      illustration: customappweb,
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
        <title>Education & E-Learning | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Transform your healthcare and fitness business with Dotpot IT's web development services. Revolutionize your online presence for success."
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/education"
        />
        <meta
          property="og:title"
          content="Education & E-Learning | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Transform your healthcare and fitness business with Dotpot IT's web development services."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development company, Education & E-Learning industry, E-Learning website solutions, learning management system integration."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/education"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Education & E-Learning | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Transform your healthcare and fitness business with Dotpot IT's web development services. Revolutionize your online presence for success."
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
                            Education & E-Learning
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Transform your{" "}
                            <a
                              href="https://www.digitalclassworld.com/blog/importance-of-elearning-in-education/"
                              target="_blank"
                              rel="nofollow"
                            >
                              Education & E-Learning
                            </a>{" "}
                            business with Dotpot IT's web development services.
                            Revolutionize your online presence for success.
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
          <div className="bg-primary-100 py-16">
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
                      Dotpot IT is the best choice for businesses in the
                      Education & E-Learning industry. With their expertise,
                      experience, and focus on customized solutions, they create
                      high-quality web designs and developments tailored to meet
                      clients' unique needs. Utilizing cutting-edge technology
                      and a customer-centric approach, they deliver visually
                      appealing, user-friendly, and responsive e-learning
                      websites. Dotpot IT also offers comprehensive services,
                      including maintenance and support, ensuring seamless
                      functionality. With a strong emphasis on user experience
                      and search engine optimization, Dotpot IT helps businesses
                      enhance their online presence and deliver exceptional
                      online learning experiences.
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

export default education;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Education",
    link: "/industries-we-serve/education",
  },
];
