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

const RealEstate = () => {
  const worksData = [
    {
      id: 1,
      title: "Property Comparisons",
      description: ` Enable users to compare multiple properties side by side, facilitating decision-making by highlighting key features, prices, and specifications.`,
      illustration: ecommarceweb,
    },
    {
      id: 2,
      title: "Mortgage Calculator",
      description:
        "Include a mortgage calculator tool that helps users estimate their monthly mortgage payments based on the property price, down payment, interest rate, and loan term. This assists potential buyers in making informed financial decisions.",
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Agent Profiles",
      description:
        "Showcase profiles of real estate agents or brokers, including their experience, certifications, areas of expertise, and contact information. This allows users to connect with the right professionals for their specific needs.",
      illustration: blogweb,
    },
    {
      id: 4,
      title: "Virtual Tours and 3D Floor Plans",
      description: `Offer <a href="https://www.archilogic.com/insights/4-tips-for-creating-virtual-tours-of-3d-floor-plans" target="_blank" rel="nofollow">virtual tours or 3D floor plans</a> of select properties, allowing users to virtually explore the property's layout and visualize the space before scheduling an in-person visit.`,
      illustration: blogweb,
    },
    {
      id: 5,
      title: "Property Management Tools",
      description:
        "If applicable, provide property management tools for landlords or property managers to list and manage their rental properties, handle tenant applications, track rent payments, and manage maintenance requests.",
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
        <title>Real Estate | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Depend on our expertise - Customized real estate solutions that cater to your specific requirements. Trust in our reliable services for success."
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/real-estate"
        />
        <meta property="og:title" content="Real Estate | Dotpot iT" />
        <meta
          property="og:description"
          content="Depend on our expertise - Customized real estate solutions that cater to your specific requirements. Trust in our reliable services for success."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development company, Property listings, Real estate agents."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/real-estate"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Depend on our expertise - Customized real estate solutions that cater to your specific requirements. Trust in our reliable services for success."
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
                            Real Estate
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Depend on our expertise - Customized{" "}
                            <a
                              href="https://inmotionrealestate.com/solutions/web-development/"
                              target="_blank"
                              rel="nofollow"
                            >
                              real estate solutions
                            </a>{" "}
                            that cater to your specific requirements. Trust in
                            our reliable services for success.
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
                      Dotpot IT is the go-to choice for real estate businesses
                      in need of exceptional web design and development
                      solutions. With their deep industry knowledge, they create
                      visually stunning and user-friendly websites that cater
                      specifically to the needs of the real estate market.
                      Dotpot IT offers a range of tailored services, including
                      property listing management systems, advanced search
                      features, virtual tours, and agent profiles. They
                      prioritize seamless user experiences and provide ongoing
                      maintenance and support to ensure optimal website
                      performance. Dotpot IT empowers real estate companies to
                      enhance their online presence and deliver exceptional
                      digital experiences in this dynamic industry.
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

export default RealEstate;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Real-Estate",
    link: "/industries-we-serve/real-estate",
  },
];
