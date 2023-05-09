import React from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";
import NavigatorComponent from "../../../components/NavigatorComponent/NavigatorComponent";
import coverweb from "../../../assets/img/coverweb.png"
import ecommarceweb from "../../../assets/img/ecommarceweb.png"
import agencyweb from "../../../assets/img/agencyweb.png"
import blogweb from "../../../assets/img/blogweb.png"
import customappweb from "../../../assets/img/customappweb.png"
import hello from "../../../assets/img/hello.png"
import ReactVisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";
import GetAQuote from "../../../components/GetAQuote/GetAQuote";

const WebsiteDevelopment = () => {
  const worksData = [
    {
      id: 1,
      title: "E-Commerce Website Development",
      description:
        "Dotpot iT is a tech company that developments e-commerce websites for businesses worldwide. Our custom strategies optimize sales and revenue by creating visually appealing and user-friendly websites. We specialize in Shopify, WooCommerce, and Magento platforms and provide exceptional customer service and support. Contact us to learn how we can help your e-commerce business thrive.",
      illustration:
        ecommarceweb
    },
    {
      id: 2,
      title: "Agency Website Development",
      description:
        "Dotpot iT is a leading tech company that specializes in cutting-edge website development solutions for businesses. Our custom-made developments help businesses establish a unique online presence, drive engagement, and generate revenue. With years of experience, our talented team of developmenters and developers craft highly functional and visually appealing websites that exceed our clients' expectations. Trust us to transform your online presence and take your business to the next level.",
      illustration:
        agencyweb
    },
    {
      id: 3,
      title: "Blog Website Development",
      description:
        "Dotpot iT offers world-class blog website development solutions that drive engagement and revenue. Our experienced team creates custom, visually stunning, and user-friendly blog websites optimized for search engine rankings, mobile responsiveness, and user experience. Trust us to exceed your expectations with high-quality Development solutions and exceptional customer service. Let Dotpot iT help you establish a strong online presence with a professional blog website development.",
      illustration:
        blogweb
    },
    {
      id: 4,
      title: "Custom Web App Development",
      description:
        "Dotpot iT offers cutting-edge custom web app Development solutions to streamline operations and improve productivity. Our experienced team crafts highly functional, visually appealing, and scalable web apps using the latest technologies and frameworks. We work closely with clients to understand their requirements and deliver exceptional results that exceed expectations. Trust us to provide reliable and secure development solutions that protect your data. Contact us to take your business to the next level with a custom web app Development.",
      illustration:
        customappweb
    },
  ];

  useScrollToTop();
  return (
    <>
      <Helmet>
        <title>Website Development | Dotpot iT</title>
        <meta
          name="description"
          content="This roadmap outlines the emerging trends and effective strategies for web and CMS development"
        />
        <meta property="og:title" content="Website Development | Dotpot iT" />
        <meta
          property="og:description"
          content="This roadmap outlines the emerging trends and effective strategies for web and CMS development"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/website-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Development | Dotpot iT" />
        <meta
          name="twitter:description"
          content="This roadmap outlines the emerging trends and effective strategies for web and CMS development"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className="pt-[15vh]">
        <NavigatorComponent navigationData={navigationData} />
        <div>
          {/* Banner */}
          <div className="bg-primary-100 py-16">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={`mt-10 ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "translate-y-20 opacity-0"
                      } duration-1000 `}
                  >
                    <div className="container mx-auto">
                      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                        <div className="text-center md:text-center lg:text-left w-full md:w-1/2 lg:w-1/2 px-3 pb-10">
                          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">Website Development</h2>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 pt-5">
                            We provide web development services for our clients around the world
                          </p>
                        </div>
                        <img src={coverweb} alt="" className="w-full md:w-1/2 lg:w-1/2" />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </ReactVisibilitySensor>
          </div>

          {/* body */}
          <div className="container mx-auto w-full overflow-hidden">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={`mt-10 ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "translate-y-20 opacity-0"
                      } duration-1000 `}
                  >
                    {worksData.map(({ id, title, description, illustration }) => (
                      <div className="md:flex justify-center items-center gap-x-20 font-work p-5">
                        <div className={`w-full md:w-1/2 lg:w-1/2 ${id % 2 === 0 && "order-2"}`}>
                          <h1 className="lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left font-bold mb-5">
                            {title}
                          </h1>
                          <p className="lg:text-base md:text-sm text-xs text-gray-400 text-justify">{description}</p>
                        </div>
                        <div className={`w-full md:w-1/2 lg:w-1/2 ${id % 2 === 0 && "order-1"} `}>
                          <img className="w-full mx-auto" src={illustration} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </ReactVisibilitySensor>
          </div>

          {/* Technologies We Use */}
          <div className="bg-primary-100 py-16">
            <div className="container mx-auto ">
              <ReactVisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <>
                    <div
                      className={`${isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                        } duration-1000 p-3`}
                    >
                      <h1 className="lg:text-3xl md:text-3xl text-xl font-bold text-center">
                        Technologies We Use
                      </h1>
                      <img
                        className="w-64  mx-auto pb-14"
                        src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                        alt=""
                      />
                      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                        <div className="text-center md:text-center lg:text-left w-full lg:w-1/2 px-3 pb-10">
                          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-5">We build Using Latest Technologies</h2>
                          <p className="md:text-base text-xs text-gray-400 text-justify">At Dotpot IT, we specialize in creating powerful and user-friendly e-commerce websites that enable businesses to thrive in the digital marketplace. With our expertise in e-commerce development and a deep understanding of consumer behavior, we craft tailored solutions that drive online sales, enhance customer experiences, and boost your bottom line.</p>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center gap-10">
                          <div className="flex gap-10 flex-wrap justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js" className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongo" className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" alt="laravel" className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
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
                    className={`${isVisible
                      ? "opacity-100 translate-y-0"
                      : "translate-y-20 opacity-0"
                      } duration-1000 p-3`}
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
                      Dotpot iT offers affordable web Development services using the latest technologies. With a focus on delivering visually appealing and user-friendly websites, they specialize in e-commerce platforms such as Shopify, WooCommerce, and Magento. Their experienced team is committed to providing high-quality development solutions that exceed clients' expectations and exceptional customer service throughout the process. Choose Dotpot iT for innovative web development that helps your business thrive.
                    </p>
                  </div>
                </>
              )}
            </ReactVisibilitySensor>
          </div>

          {/* Get in Touch */}
          <div className="bg-primary-100">
            {/* <div className="container mx-auto flex flex-col md:flex-col lg:flex-row justify-evenly items-center">
              <div className="">
                <img src={hello} alt="" className="mx-auto lg:mx-0 lg:self-center w-20 h-20" />
                <h3 className="lg:text-3xl md:text-2xl text-xl lg:text-left md:text-center text-center font-bold">Get in Touch</h3>
                <p className="lg:text-base md:text-base text-xs text-gray-400 text-justify pt-3">If you have any questions or queries don’t hesitate to reach out to us</p>
              </div>
              <div className="text-center md:text-right pt-3">
                <Link to="/contact">
                  <button className="bg-secondary-500 px-6 py-2 rounded-lg text-white">Contact Us</button>
                </Link>
              </div>
            </div> */}
            <GetAQuote/>
          </div>

        </div>
      </div>
      <Footer />
    </>
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
