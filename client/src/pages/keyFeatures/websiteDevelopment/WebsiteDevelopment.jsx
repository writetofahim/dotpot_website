import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import agencyweb from "../../../assets/img/agencyweb.png";
import blogweb from "../../../assets/img/blogweb.png";
import coverweb from "../../../assets/img/coverweb.png";
import customappweb from "../../../assets/img/customappweb.png";
import ecommarceweb from "../../../assets/img/ecommarceweb.png";
import shopify from "../../../assets/img/shopify.png";
import Footer from "../../../components/Footer/Footer";
import GetAQuote from "../../../components/GetAQuote/GetAQuote";
import Navbar from "../../../components/Navbar/Navbar";
import NavigatorComponent from "../../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../../hooks/useScrollToTop";

const WebsiteDevelopment = () => {
  const worksData = [
    {
      id: 1,
      title: "E-Commerce Website Development",
      description: `Dotpot iT is a tech company that <a href="https://www.bigcommerce.com/articles/ecommerce-website-development/" target="_blank" rel="nofollow">developments e-commerce websites</a> for businesses worldwide. Our custom strategies optimize sales and revenue by creating visually appealing and user-friendly websites. We specialize in Shopify, WooCommerce, and Magento platforms and provide exceptional customer service and support. Contact us to learn how we can help your e-commerce business thrive.`,
      illustration: ecommarceweb,
    },
    {
      id: 2,
      title: "Agency Website Development",
      description:
        "Dotpot iT is a leading tech company that specializes in cutting-edge website development solutions for businesses. Our custom-made developments help businesses establish a unique online presence, drive engagement, and generate revenue. With years of experience, our talented team of developmenters and developers craft highly functional and visually appealing websites that exceed our clients' expectations. Trust us to transform your online presence and take your business to the next level.",
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Blog Website Development",
      description:
        "Dotpot iT offers world-class blog website development solutions that drive engagement and revenue. Our experienced team creates custom, visually stunning, and user-friendly blog websites optimized for search engine rankings, mobile responsiveness, and user experience. Trust us to exceed your expectations with high-quality development solutions and exceptional customer service. Let Dotpot iT help you establish a strong online presence with a professional blog website development.",
      illustration: blogweb,
    },
    {
      id: 4,
      title: "Custom Web App Development",
      description:
        "Dotpot iT offers cutting-edge custom web app development solutions to streamline operations and improve productivity. Our experienced team crafts highly functional, visually appealing, and scalable web apps using the latest technologies and frameworks. We work closely with clients to understand their requirements and deliver exceptional results that exceed expectations. Trust us to provide reliable and secure development solutions that protect your data. Contact us to take your business to the next level with a custom web app development.",
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
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
        <title>Website Development | Dotpot iT</title>
        <meta
          name="description"
          content="Dtpot iT provides Custom, responsive website designs & website Development to improve user experience"
        />
        <meta property="og:title" content="Website Development | Dotpot iT" />
        <meta
          name="keywords"
          content="Software Development Company, E-Commerce Website Development, Agency Website Development"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/key-features/website-development"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Dtpot iT provides Custom, responsive website designs & website Development to improve user experience"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/website-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Development | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Dtpot iT provides Custom, responsive website designs & website Development to improve user experience"
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
                            Website Development Service By Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            <a
                              href="https://www.wix.com/blog/2023/01/website-development/?utm_source=google&utm_medium=cpc&utm_campaign=15541610090^134848741670&experiment_id=^^568798457213^^_DSA&gclid=Cj0KCQjwyLGjBhDKARIsAFRNgW-T68-ChtjboTwn3I3sPHBQWNwzhkukMHu_Y6_5xUiZIl1PFPQ9BdwaArAOEALw_wcB"
                              target="_blank"
                              rel="nofollow"
                            >
                              Website development
                            </a>{" "}
                            is the process of building interactive and
                            functional websites using technical skills and
                            programming expertise. It includes creating user
                            interfaces, managing web content, and ensuring
                            websites are optimized for different platforms.
                            Developers must collaborate with designers and
                            stakeholders to achieve business objectives and user
                            needs.
                          </p>
                        </div>
                        <img
                          src={coverweb}
                          alt="website design"
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

          {/* Technologies We Use */}
          <div className="bg-primary-100 py-16">
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
                      <h2 className="lg:text-3xl md:text-3xl text-xl font-bold text-center">
                        Technologies We Use
                      </h2>
                      <img
                        className="w-64  mx-auto pb-14"
                        src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                        alt="colored line"
                      />
                      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                        <div className="text-center md:text-center lg:text-left w-full lg:w-1/2 px-3 pb-10">
                          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-5">
                            We build Using Latest Technologies
                          </h2>
                          <p className="md:text-base text-xs text-gray-400 text-justify">
                            Dotpot iT is an innovative company that stays ahead
                            of the curve by utilizing cutting-edge technologies.
                            Our team of experts constantly explores the latest
                            tools and techniques to deliver effective solutions
                            for businesses. By leveraging the power of the
                            latest technologies, we develop transformative
                            solutions that help businesses stay competitive and
                            drive growth. Partnering with Dotpot iT means
                            accessing the most advanced and innovative
                            technologies available today..
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
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
                      Why Dotpot iT
                    </h2>
                    <img
                      className="w-64 mx-auto"
                      src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                      alt="Separator Image"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT specializes in affordable web development
                      services that utilize the latest technologies. They focus
                      on building websites that are functional and easy to use,
                      with expertise in developing e-commerce platforms such as
                      Shopify, WooCommerce, and Magento. Their experienced team
                      is dedicated to delivering high-quality development
                      solutions that exceed clients' expectations, ensuring
                      exceptional customer service throughout the process. With
                      innovative web development services from Dotpot iT, your
                      business can thrive and achieve its goals.
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
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Website Development",
    link: "/key-features/website-development",
  },
];
