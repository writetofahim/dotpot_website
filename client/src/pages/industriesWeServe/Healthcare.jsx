import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import agencyweb from "../../assets/img/agencyweb.png";
import blogweb from "../../assets/img/blogweb.png";
import coverweb from "../../assets/img/coverweb.png";
import ecommarceweb from "../../assets/img/ecommarceweb.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Healthcare = () => {
  const worksData = [
    {
      id: 1,
      title: "Fitness Tracking and Progress Monitoring",
      description: `Integrate <a href="https://www.pcmag.com/encyclopedia/term/fitness-tracker" target="_blank" rel="nofollow">fitness tracking</a> capabilities, allowing users to record and monitor their workouts, steps, calories burned, and other relevant metrics. Provide visualizations and progress reports to keep users motivated.`,
      illustration: ecommarceweb,
    },
    {
      id: 2,
      title: "Exercise Library and Workout Plans",
      description:
        "Create an extensive library of exercises with detailed instructions, images, and videos. Users should be able to customize and follow workout plans based on their fitness level, goals, and preferences.",
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Nutritional Guidance",
      description:
        "Offer personalized nutritional guidance, including meal plans, dietary recommendations, and calorie tracking. Provide a database of healthy recipes and tools for users to track their food intake.",
      illustration: blogweb,
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
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
        <title>Healthcare & Fitness | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Revolutionize your healthcare and fitness business with Dotpot IT's cutting-edge web development services. Boost your online presence for unparalleled success and growth."
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/healthcare"
        />
        <meta property="og:title" content="Healthcare & Fitness | Dotpot iT" />
        <meta
          property="og:description"
          content="Revolutionize your healthcare and fitness business with Dotpot IT's cutting-edge web development services. Boost your online presence for unparalleled success and growth."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development company, Wellness, Health management."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/healthcare"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare & Fitness | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Revolutionize your healthcare and fitness business with Dotpot IT's cutting-edge web development services. Boost your online presence for unparalleled success and growth."
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
                            Healthcare & Fitness
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Revolutionize Your{" "}
                            <a
                              href="https://opt.net.au/optimum-life/difference-fitness-and-health/#:~:text=Fitness%20involves%20activity%20of%20some,a%20lifestyle%20that%20supports%20health."
                              target="_blank"
                              rel="nofollow"
                            >
                              Healthcare and Fitness,
                            </a>{" "}
                            Business with Dotpot IT's Web Development Services
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
                      Dotpot IT is the leading choice for businesses in the
                      Healthcare & Fitness industry. With their expertise in web
                      design and development, they create visually captivating
                      and user-friendly websites. They offer tailored solutions
                      such as appointment scheduling systems, patient management
                      portals, fitness tracking applications, and more. Dotpot
                      IT prioritizes user experience and provides continuous
                      maintenance and support. They assist businesses in
                      improving their online presence and delivering exceptional
                      digital experiences in the healthcare and fitness sectors.
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

export default Healthcare;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Health-Care",
    link: "/industries-we-serve/healthcare",
  },
];
