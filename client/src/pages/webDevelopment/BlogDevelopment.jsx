import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import blogpagecover from "../../assets/img/blogpagecover.png";
import blogoverview from "../../assets/img/blogoverview.png";
import benifite from "../../assets/img/benifite.png";
import choice from "../../assets/img/choice.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const BlogDevelopment = () => {
  useScrollToTop();
  const worksData = [
    {
      id: 1,
      title: "Overview",
      description:
        "Dotpot IT offers professional blog site development services with a focus on user experience and engagement. We offer customizable packages starting from $1000 to fit every budget and meet unique requirements. Contact us today to start sharing your message with the world.",
      illustration: blogoverview,
    },
    {
      id: 2,
      title: "Benefits of working with Dotpot IT",
      description: `
      Dotpot IT provides custom web solutions, e-commerce integration, and growth services for Retail & E-Commerce businesses.
      <li class="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">
          Customized web solutions
        </strong>
        <br />
      </li>
      <li class="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">
          Enhanced online visibility
        </strong>
        <br />
      </li>
      <li class="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">
          User-friendly websites
        </strong>
        <br />
      
      </li>
      <li class="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">Mobile optimization:</strong>
        <br />
    
      </li>
      <li class="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">
          E-commerce integration:
        </strong>
        <br />
        
      </li>
      <li class="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">
          Search engine optimization (SEO)
        </strong>
        <br />
        
      </li>
      <li class="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">Expert support: </strong>
        <br />
       
      </li>
      <li class="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">
          Increased business growth:
        </strong>
        <br />
        
      </li>
      <li class="text-textColor-500 mb-2 lg:px-10 px-3">
        <strong class="font-semibold">
          E-commerce integration:
        </strong>
        <br />
        
      </li>`,
      illustration: benifite,
    },
    {
      id: 3,
      title: "Why we wil be your best choice?",
      description:
        "Dotpot iT designs custom, user-friendly blog websites optimized for SEO and user experience, helping businesses establish a strong online presence and drive revenue.",
      illustration: choice,
    },
  ];
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Blog Site Development | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Learn about Blog Site Development Dotpot iT, a leading IT company providing innovative solutions for businesses.visit website for details"
        />
        <link
          rel="canonical"
          href="https://www.dotpotit.com/web-development/blog-website"
        />
        <meta
          name="keywords"
          content="Software Development Company, Blog site development, E-commerce integration, User-friendly websites"
        />
        <meta property="og:title" content="Blog Site Development| Dotpot iT" />
        <meta
          property="og:description"
          content="Learn about Blog Site Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/web-development/blog-website"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Learn about Blog Site Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
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
                            Blog Site Development
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            "Developing a successful blog site is not just about
                            creating a platform, it's about creating a
                            community." - Darren Rowse
                          </p>
                        </div>
                        <img
                          src={blogpagecover}
                          alt="Blog Site Development Image"
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

          {/* Get in Touch */}
          <div className="bg-primary-100">
            <GetAQuote />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDevelopment;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Blog Website",
    link: "/web-development/blog-website",
  },
];
