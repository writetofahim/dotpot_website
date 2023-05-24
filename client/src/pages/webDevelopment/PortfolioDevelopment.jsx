import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import engaging from "../../assets/img/engaging.svg";
import portfolio from "../../assets/img/portfolio.svg";
import overview from "../../assets/img/portfolio/overview.png";
import professional from "../../assets/img/professional.svg";
import userFriendly from "../../assets/img/userFriendly.svg";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const PortfolioDevelopment = () => {
  useScrollToTop();
  const worksData = [
    {
      id: 1,
      title: "Overview",
      description:
        `Dotpot iT offers <a href="https://mamoonaghaffar862.medium.com/what-is-the-purpose-of-portfolio-development-98d07c0564c9" target="_blank" rel="nofollow">Portfolio Web Development</a> services to help individuals and businesses create custom portfolios that showcase their skills and accomplishments. With a focus on user experience and functionality, we build visually appealing portfolios optimized for search engines. Contact us to learn more.`,
      illustration: overview,
    },
    {
      id: 2,
      title: "User-friendly Portfolio Navigation",
      description: `User-friendly portfolio navigation is organizing a portfolio website to be easy to navigate and improve user experience by quickly finding information.`,
      illustration: userFriendly,
    },
    {
      id: 3,
      title: "Professional Portfolio Development",
      description:
        "Professional portfolio development involves creating a high-quality collection of work samples and showcasing them in a visually appealing and organized manner.",
      illustration: professional,
    },
    {
      id: 4,
      title: "Engaging Portfolio Design",
      description:
        "Engaging portfolio design involves creating a visually attractive and interactive layout for showcasing work samples that captivates and retains the viewer's attention.",
      illustration: engaging,
    },
  ];
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Portfolio Development| Dotpot iT a leading it Company</title>
        <meta
          name="description"
          content="Dotpot iT provides modern and attractive Portfolio web development service to showcase your skills "
        />
        <link
          rel="canonical"
          href="https://www.dotpotit.com/web-development/portfolio-website"
        />
        <meta
          name="keywords"
          content="Software development Company Tailored web solutions, Stunning visuals, User-friendly experience, Cutting-edge technologies"
        />
        <meta property="og:title" content="Portfolio Development | Dotpot iT" />
        <meta
          property="og:description"
          content="Learn about Portfolio Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="	https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/web-development/portfolio-website"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Learn about Portfolio Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      <div
        className={` pt-[15vh] ${window.innerWidth > 1280 ? "md:pt-[11vh]" : "md:pt-[15vh]"
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
                            Portfolio Development With Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Showcasing Your Skills: Building a Strong Portfolio
                            by Us
                          </p>
                        </div>
                        <img
                          src={portfolio}
                          alt={"portfolio image"}
                          className="w-[90%] md:w-1/2 lg:w-1/2"
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

          {/* Get in Touch */}
          <div className="bg-primary-100">
            <GetAQuote />
          </div>
        </div>
      </div>

      {/* <div className="pt-[15vh] pb-10 container mx-auto">
        <NavigatorComponent navigationData={navigationData} />
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-textColor-500 text-center">
            Portfolio Development
          </h2>
          <p className="text-lg text-gray-400 text-center mt-3 mb-10">
            Showcasing Your Skills: Building a Strong Portfolio by Us
          </p>
        </div>
        <div className="flex justify-center p-4">
          <img src={retail} alt="Product image" />
        </div>
        <div className="my-12 lg:mx-24 mx-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">Overview</h2>
          <div className="text-gray-400 flex flex-col gap-5 py-2 lg:px-5 text-justify">
            <p>
              Dotpot iT is a leading provider of Portfolio Web Development
              services that help individuals and businesses showcase their
              skills and accomplishments in an engaging and professional manner.
              Our team of experienced developers and designers work closely with
              clients to create custom portfolios that effectively communicate
              their brand and message to potential employers or clients.
            </p>

            <p>
              With a strong focus on user experience and functionality, we build
              portfolios that are easy to navigate, visually appealing, and
              optimized for search engines. Our services include everything from
              concept development and design to coding, testing, and deployment.
              We also offer ongoing maintenance and support to ensure that
              portfolios remain up-to-date and relevant.
            </p>

            <p>
              Whether you're a freelancer, entrepreneur, or creative
              professional looking to stand out in a competitive market, Dotpot
              iT can help you build a strong online presence with a custom
              portfolio that reflects your unique style and expertise. Contact
              us today to learn more about our Portfolio Web Development
              services and how we can help you achieve your goals.
            </p>
            <p>
              In conclusion, Dotpot iT provides top-notch Portfolio Web
              Development services that help individuals and businesses create a
              strong online presence and showcase their skills and
              accomplishments in an effective way. With a team of experienced
              developers and designers, we ensure that each portfolio is
              tailored to the client's unique needs and goals. If you're looking
              to enhance your online presence and stand out in your industry,
              contact Dotpot iT today to learn more about how we can help you
              build a powerful and professional portfolio.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 ">
              Benefits of working with Dotpot IT
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              Working with Dotpot iT for Portfolio Web Development offers
              numerous benefits to clients looking to create a strong online
              presence. Here are some of the key benefits of working with Dotpot
              iT:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Customized Approach:</strong>
                <br />
                <p className="px-2">
                  Our team takes a customized approach to Portfolio Web
                  Development, ensuring that each portfolio is tailored to the
                  specific needs and goals of the client.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Experienced Team:</strong>
                <br />
                <p className="px-2">
                  Our team of experienced developers and designers have a deep
                  understanding of the latest web development trends and
                  technologies, and are committed to delivering high-quality
                  portfolios that meet our clients' expectations.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">User Experience:</strong>
                <br />
                <p className="px-2">
                  We prioritize user experience in our portfolio designs,
                  ensuring that each portfolio is easy to navigate, visually
                  appealing, and optimized for search engines.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Ongoing Support:</strong>
                <br />
                <p className="px-2">
                  We offer ongoing support and maintenance to ensure that our
                  clients' portfolios remain up-to-date and relevant.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Competitive Pricing:</strong>
                <br />
                <p className="px-2">
                  We offer competitive pricing for our Portfolio Web Development
                  services, making it accessible to a wide range of clients.
                </p>
              </li>
            </ul>
          </div>
          <div className="pt-6 flex flex-col gap-5">
            <h2 className="lg:text-2xl text-xl font-bold mb-2">
              Why Choose Dotpot iT for Portfolio Web Development?
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify">
              At Dotpot iT, we specialize in creating powerful and professional
              portfolios that help individuals and businesses showcase their
              skills and accomplishments. Here's why you should choose us for
              your Portfolio Web Development needs:
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
              Our team of experienced developers and designers takes a
              customized approach to portfolio development, ensuring that each
              portfolio is tailored to the specific needs and goals of the
              client. This ensures that each portfolio effectively communicates
              the client's brand and message to potential employers or clients.
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
              We prioritize user experience in our portfolio designs, ensuring
              that each portfolio is easy to navigate, visually appealing, and
              optimized for search engines. This helps clients stand out in a
              competitive market and attract potential employers or clients.
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
              We offer ongoing support and maintenance to ensure that our
              clients' portfolios remain up-to-date and relevant. This ensures
              that clients can continue to showcase their skills and
              accomplishments with a portfolio that reflects their current
              expertise and experience.
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
              We offer competitive pricing for our Portfolio Web Development
              services, making it accessible to individuals and businesses of
              all sizes. We also offer flexible pricing models to suit different
              budgets and requirements.
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
              Overall, working with Dotpot iT for Portfolio Web Development
              offers clients a customized approach, an experienced team, a focus
              on user experience, ongoing support, competitive pricing, and
              quick turnaround times. Contact us today to learn more about how
              we can help you build a powerful and professional portfolio that
              showcases your skills and accomplishments to potential employers
              or clients.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 ">
              Powering Your Portfolio with Smart Technologies: Our Tech Stack at
              Dotpot iT
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
              Affordable Portfolio Web Development Services: Starting Prices at
              Dotpot iT
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              At Dotpot iT, we understand that pricing is an important
              consideration when choosing a portfolio web development service.
              We aim to provide affordable pricing options to ensure that our
              clients get the best possible value for their investment. Our
              starting price for portfolio web development services is $5000,
              which includes a wide range of features and functionalities to
              create a high-quality end product.
            </p>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              Our $5000 package includes everything you need to create a custom
              portfolio website that showcases your skills, experience, and
              achievements. Our team of experienced designers and developers
              will work with you closely to create a custom portfolio website
              that meets your unique needs and aligns with your personal brand.
              The package includes website design and development using the
              latest technologies and frameworks such as React, Tailwind CSS,
              Node.js, and Express.js. We also provide basic on-page SEO
              optimization and analytics integration to help you track and
              measure the performance of your portfolio website and make
              data-driven decisions to improve your online presence. Our $5000
              package provides excellent value for professionals looking to
              create a high-quality portfolio website that is visually
              appealing, performs optimally, and showcases their work
              effectively. Contact us today to learn more about our affordable
              pricing options and how we can help you create a portfolio website
              that meets your needs and budget.
            </p>
          </div>
         
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default PortfolioDevelopment;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Portfolio Website",
    link: "/web-development/portfolio-website",
  },
];
