import parse from "html-react-parser";
import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import retail from "../../assets/img/landing_page.png";
import benefites from "../../assets/img/web_development/Zakir_benefites_of_working_with_Dotpot_iT_for_website_developme_04558361-d3e0-49a2-a9a7-84b8946c262e.png";
import overview from "../../assets/img/web_development/Zakir_overview_of_web_landing_page_6d4efaf1-483e-481d-b78a-2f36f37463d3.png";
import whyWe from "../../assets/img/web_development/Zakir_why_we_will_be_your_best_choice_illustration_9b54b4e5-8156-4000-9b52-a82ad73d1fbe.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const LandingPageDevelopment = () => {
  useScrollToTop();
  const worksData = [
    {
      id: 1,
      title: "Overview",
      description:
        "Dotpot iT creates custom landing pages optimized for high conversion rates and lead generation. Their team provides top-notch services using the latest technologies and best practices, from conceptualization to ongoing support. Contact them today to take your online marketing to the next level.",
      illustration: overview,
    },
    {
      id: 2,
      title: "Benefits of working with Dotpot IT",
      description: `
      Dotpot IT provides custom web solutions, e-commerce integration, and growth services for Retail & E-Commerce businesses.


      <li className="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">
          Customized web solutions
        </strong>
        <br />
      </li>
      <li className="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">
          Enhanced online visibility
        </strong>
        <br />
      </li>
      <li className="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">
          User-friendly websites
        </strong>
        <br />
      
      </li>
      <li className="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">Mobile optimization:</strong>
        <br />
    
      </li>
      <li className="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">
          E-commerce integration:
        </strong>
        <br />
        
      </li>
      <li className="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">
          Search engine optimization (SEO)
        </strong>
        <br />
        
      </li>
      <li className="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">Expert support: </strong>
        <br />
       
      </li>
      <li className="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">
          Increased business growth:
        </strong>
        <br />
        
      </li>
      <li className="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">
          E-commerce integration:
        </strong>
        <br />
        
      </li>`,
      illustration: benefites,
    },
    {
      id: 3,
      title: "Why we wil be your best choice?",
      description:
        "Dotpot iT offers custom blog website design solutions for engagement and revenue. Our team creates visually stunning and user-friendly sites optimized for SEO and mobile responsiveness. Trust us for high-quality design and exceptional service.",
      illustration: whyWe,
    },
    {
      id: 4,
      title:
        "Powering Your Landing Page with Smart Technologies: Our Tech Stack at Dotpot iT",
      description: `
      At Dotpot iT, we use the latest technologies to develop high-quality landing pages for our clients.

      <li className="text-gray-400 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">React:</strong>
        <br />
          </li>
          <li className="text-gray-400 mb-2 lg:px-10 px-3">
          <strong className="font-semibold">Tailwind CSS:</strong>
        <br />
        
      </li>
      <li className="text-gray-400 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">Node.js:</strong>
        <br />
        
      </li>
      <li className="text-gray-400 mb-2 lg:px-10 px-3">
        <strong className="font-semibold">Express.js:</strong>
        <br />
      </li>
      <li className="text-gray-400 mb-2 lg:px-10 px-3">
      <strong className="font-semibold">MongoDB:</strong>
      <br />
      </li>  
      <li className="text-gray-400 mb-2 lg:px-10 px-3">
      <strong className="font-semibold">Axios:</strong>
      <br />
      </li>`,
      illustration: retail,
    },
  ];
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Landing Page Development | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Learn about Landing Page Development Dotpot iT, a leading IT company providing innovative solutions for businesses.visit website for details"
        />
        <link
          rel="canonical"
          href="https://www.dotpotit.com/web-development/landing-page"
        />
        <meta
          name="keywords"
          content="Software development Company, custom landing pages, high conversion rates, lead generation, customized web solutions"
        />
        <meta
          property="og:title"
          content="Landing Page Development | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Learn about Landing Page Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="	https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/web-development/landing-page"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Learn about Landing Page Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
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
                            Landing Page Development
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Captivate Your Audience with a Stellar Landing Page
                          </p>
                        </div>
                        <img
                          src={retail}
                          alt="retail image"
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

          {/* Get in Touch  */}
          <div className="bg-primary-100">
            <GetAQuote />
          </div>
        </div>
      </div>

      {/* <div className="pt-[15vh] pb-10 container mx-auto">
        <NavigatorComponent navigationData={navigationData} />
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-textColor-500 text-center">
            Landing Page Development
          </h1>
          <p className="text-lg text-gray-400 text-center mt-3 mb-10">
            Captivate Your Audience with a Stellar Landing Page
          </p>
        </div>
        <div className="flex justify-center p-4">
          <img src={landing_page} alt="Product image" />
        </div>
        <div className="my-12 lg:mx-24 mx-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">Overview</h2>
          <div className="text-gray-400 flex flex-col gap-5 py-2 lg:px-5 text-justify">
            <p>
              Dotpot iT is a company that specializes in providing top-notch
              landing page development services to businesses of all sizes. A
              landing page is a crucial element of any online marketing
              campaign, as it serves as the first point of contact between a
              potential customer and a company's website. A well-designed
              landing page can captivate the audience, generate leads, and
              ultimately lead to higher conversion rates.
            </p>

            <p>
              At Dotpot iT, our team of skilled developers and designers work
              closely with our clients to understand their business goals and
              create landing pages that are customized to meet their specific
              needs. We use the latest technologies and best practices to ensure
              that our landing pages are not only visually appealing but also
              optimized for maximum performance.
            </p>

            <p>
              Our landing page development services include everything from
              conceptualization and design to coding and implementation. We also
              provide ongoing support and optimization to ensure that our
              clients' landing pages continue to perform at their best. With our
              expertise and experience in landing page development, Dotpot iT is
              the perfect partner for businesses looking to improve their online
              presence and increase their bottom line.
            </p>
            <p>
              In conclusion, a well-designed landing page can be the difference
              between a successful online marketing campaign and a wasted
              effort. Dotpot iT understands the importance of landing page
              development and provides top-notch services to businesses looking
              to improve their online presence and generate leads. With a team
              of skilled developers and designers and a commitment to using the
              latest technologies and best practices, Dotpot iT is a reliable
              and effective partner for businesses of all sizes. Contact Dotpot
              iT today to learn more about how we can help you create a
              captivating landing page and take your online marketing to the
              next level.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 ">
              Benefits of working with Dotpot IT
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              When it comes to online marketing, landing pages are an essential
              tool for generating leads and driving conversions. Working with a
              reputable landing page development company like Dotpot iT can
              provide businesses with several benefits, including customized
              landing pages, skilled developers and designers, ongoing support
              and optimization, competitive pricing, and timely delivery. These
              benefits can help businesses effectively engage with their target
              audience, increase ROI, and achieve their online marketing goals.
            </p>
            <ul className="list-disc list-inside">
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                  Customized landing pages:
                </strong>
                <br />
                <p className="px-2">
                  Dotpot iT works closely with each client to understand their
                  unique business goals and create landing pages that are
                  tailored to meet their specific needs. This ensures that each
                  landing page is designed to effectively engage with the target
                  audience and generate leads.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                  Skilled developers and designers:
                </strong>
                <br />
                <p className="px-2">
                  Dotpot iT has a team of skilled developers and designers who
                  are experts in landing page development. They use the latest
                  technologies and best practices to create visually appealing
                  landing pages that are optimized for maximum performance.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                  Ongoing support and optimization:
                </strong>
                <br />
                <p className="px-2">
                  Dotpot iT provides ongoing support and optimization services
                  to ensure that your landing pages continue to perform at their
                  best. This includes regular updates, testing, and optimization
                  to improve conversion rates and increase ROI.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Competitive pricing:</strong>
                <br />
                <p className="px-2">
                  Dotpot iT offers competitive pricing for their landing page
                  development services, making it accessible to businesses of
                  all sizes. They also offer flexible pricing models to suit
                  different budgets and requirements.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Timely delivery:</strong>
                <br />
                <p className="px-2">
                  Dotpot iT is committed to delivering landing pages within the
                  agreed-upon timeframe, without compromising on quality. This
                  ensures that clients can launch their online marketing
                  campaigns on schedule and achieve their business goals.
                </p>
              </li>
            </ul>
          </div>
          <div className="pt-6 flex flex-col gap-5">
            <h2 className="lg:text-2xl text-xl font-bold mb-2">
              Why we wil be your best choice?
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify">
              At Dotpot iT, we understand the importance of a well-designed
              landing page for online marketing campaigns. Our landing page
              development services are designed to help businesses create a
              captivating online presence that engages with their target
              audience and generates leads. Here's why our landing page
              development services are essential for your business:
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
              Our skilled team of developers and designers use the latest
              technologies and best practices to create visually appealing
              landing pages that are optimized for maximum performance. We
              ensure that each landing page is designed to engage with the
              target audience and generate leads.
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
              We work closely with each client to understand their unique
              business goals and create landing pages that are tailored to meet
              their specific needs. This ensures that each landing page is
              designed to effectively engage with the target audience and
              generate leads.
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
              We offer competitive pricing for our landing page development
              services, making it accessible to businesses of all sizes. We also
              offer flexible pricing models to suit different budgets and
              requirements.
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
              Overall, our landing page development services are essential for
              businesses looking to improve their online presence and generate
              leads. With captivating design, customized solutions, ongoing
              support and optimization, and competitive pricing, Dotpot iT is
              the ideal partner for businesses looking to achieve their online
              marketing objectives. Contact us today to learn more about how we
              can help you create a landing page that drives conversions and
              takes your online marketing to the next level.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 ">
              Powering Your Landing Page with Smart Technologies: Our Tech Stack
              at Dotpot iT
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              At Dotpot iT, we are committed to using the latest technologies
              and best practices to develop high-quality landing pages for our
              clients. Here are some of the latest technologies that we use to
              develop landing pages:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">React:</strong>
                <br />
                <p className="px-2">
                  We use React, a popular JavaScript library, to create dynamic
                  and interactive landing pages that provide a seamless user
                  experience. React allows us to build reusable components that
                  can be easily integrated into landing pages, making the
                  development process faster and more efficient.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Tailwind CSS:</strong>
                <br />
                <p className="px-2">
                  We use Tailwind CSS, a utility-first CSS framework, to style
                  and design landing pages. Tailwind CSS provides a set of
                  pre-defined styles and classes that can be easily customized
                  to match the branding and design requirements of each client.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Node.js:</strong>
                <br />
                <p className="px-2">
                  We use Node.js, a JavaScript runtime, to build the backend of
                  landing pages. Node.js allows us to build scalable and
                  high-performance applications that can handle a large volume
                  of traffic and data.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Express.js:</strong>
                <br />
                <p className="px-2">
                  We use Express.js, a popular Node.js framework, to build
                  RESTful APIs that provide the backend functionality for
                  landing pages. Express.js provides a robust set of tools and
                  features that make it easy to build scalable and efficient
                  APIs.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">MongoDB:</strong>
                <br />
                <p className="px-2">
                  We use MongoDB, a popular NoSQL database, to store and manage
                  data for landing pages. MongoDB provides a flexible and
                  scalable data model that can handle large volumes of data and
                  complex queries.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Axios:</strong>
                <br />
                <p className="px-2">
                  We use Axios, a popular JavaScript library, to make HTTP
                  requests and retrieve data from APIs. Axios provides a simple
                  and efficient way to retrieve data from backend services and
                  APIs.
                </p>
              </li>
            </ul>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              Overall, our use of the latest technologies such as React,
              Tailwind CSS, Node.js, Express.js, MongoDB, and Axios allows us to
              develop high-quality landing pages that are scalable, efficient,
              and provide a seamless user experience. Contact us today to learn
              more about how we can help you develop a landing page that
              leverages the latest technologies and best practices.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 ">
              Affordable Landing Page Development Services: Starting Prices at
              Dotpot iT
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              At Dotpot iT, we understand that pricing is a crucial factor when
              choosing a landing page development service. We aim to provide
              affordable pricing options to ensure that our clients get the best
              possible value for their investment. Our starting price for
              landing page development services is $5000, which includes a wide
              range of features and functionalities to create a high-quality end
              product.
            </p>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              Our $5000 package includes everything you need to create a custom
              landing page that stands out and delivers results. Our team of
              experienced designers and developers will work with you closely to
              create a custom landing page that meets your business needs and
              aligns with your branding. The package includes landing page
              design and development using the latest technologies and
              frameworks such as React, Tailwind CSS, Node.js, and Express.js.
              We also provide basic on-page SEO optimization and analytics
              integration to help you track and measure the performance of your
              landing page and make data-driven decisions to improve conversion
              rates. Our $5000 package provides excellent value for businesses
              looking to create a high-quality landing page that is visually
              appealing, performs optimally, and delivers results. Contact us
              today to learn more about our affordable pricing options and how
              we can help you create a landing page that meets your business
              needs and budget.
            </p>
          </div>
          
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default LandingPageDevelopment;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Lading Page",
    link: "/web-development/landing-page",
  },
];
