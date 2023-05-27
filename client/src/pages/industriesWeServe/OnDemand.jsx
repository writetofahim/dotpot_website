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

const OnDemand = () => {
  const worksData = [
    {
      id: 1,
      title: "Overview",
      description: `DotpotiT: Your on-demand solution provider for quick, reliable, and customizable services. Transforming accessibility, delivering innovation, and empowering businesses to thrive in the digital landscape. Trust us for high-quality, affordable solutions that exceed expectations.`,
      illustration: ecommarceweb,
    },
    {
      id: 2,
      title: "How we work?",
      description:
        "Collaborative, customized on-demand solutions tailored to your needs. We analyze, develop, and implement using the latest technologies. Transparent communication, ongoing support, and maintenance. Personalized service for effective results. Innovative technology solutions for seamless experiences. Streamlined processes, improved efficiencies, and enhanced user experiences. Hassle-free experience with intuitive, user-friendly interfaces. Comprehensive training and support for optimal utilization.",
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Inventory Management",
      description:
        "Develop an inventory management system that allows businesses to track stock levels, manage SKU information, and generate reports on inventory status. Provide alerts for low stock levels and seamless integration with e-commerce platforms.",
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
        <title>On Demand Solutions | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Unlock instant solutions at your fingertips with On Demand Solutions. Seamlessly streamline tasks and access services anytime, anywhere for ultimate convenience. "
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/on-demand-solution"
        />
        <meta property="og:title" content="On Demand Solutions | Dotpot iT" />
        <meta
          property="og:description"
          content="Unlock instant solutions at your fingertips with On Demand Solutions. Seamlessly streamline tasks and access services anytime, anywhere for ultimate convenience. "
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development company, On-demand services, Instant solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/on-demand-solution"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="On Demand Solutions | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Unlock instant solutions at your fingertips with On Demand Solutions. Seamlessly streamline tasks and access services anytime, anywhere for ultimate convenience. "
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
                            On Demand Solutions
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Unlock instant solutions at your fingertips with{" "}
                            <a
                              href="https://www.experian.co.uk/business/glossary/on-demand-software/#:~:text=On%2DDemand%20Software%2C%20often%20referred,your%20customers%20and%20application%20partners."
                              target="_blank"
                              rel="nofollow"
                            >
                              On Demand Solutions
                            </a>
                            . Seamlessly streamline tasks and access services
                            anytime, anywhere for ultimate convenience.
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
                      Dotpot IT is the leading choice for on-demand service
                      businesses in need of top-quality web design and
                      development solutions. With their extensive expertise in
                      this industry, they create visually captivating and
                      user-friendly websites tailored to meet the specific needs
                      of on-demand services. Dotpot IT offers a wide range of
                      specialized services, including real-time order management
                      systems, seamless payment integration, dynamic service
                      scheduling, and customer feedback functionalities. They
                      prioritize exceptional user experiences and provide
                      ongoing maintenance and support to ensure optimal website
                      performance. Dotpot IT empowers on-demand service
                      providers to enhance their online presence and deliver
                      outstanding digital experiences in this rapidly evolving
                      sector.
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

export default OnDemand;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "On-demand Services",
    link: "/industries-we-serve/on-demand-solution",
  },
];
