import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import SEO from "../../assets/img/SEO.png";
import customwebdd from "../../assets/img/customwebdd.png";
import cuttingedge from "../../assets/img/cuttingedge.png";
import ongoingsupport from "../../assets/img/ongoingsupport.png";
import prioritizeresponsive from "../../assets/img/prioritizeresponsive.png";
import stunningwebsites from "../../assets/img/stunningwebsites.png";
import tailoredweb from "../../assets/img/tailoredweb.png";
import userexperience from "../../assets/img/userexperience.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const CustomDevelopment = () => {
  const worksData = [
    {
      id: 1,
      title: "Tailored Solutions",
      description:
        "At Dotpot iT, we offer tailored web solutions that match your unique vision and goals. 🎯 Our team of experts works closely with you to create a custom website that captures your brand identity and engages your target audience. 🌟 From layout to visuals, functionality to user experience, we meticulously craft every element to reflect your business values and objectives. 💡 Stand out from the competition and make a lasting impression with a website that's as unique as your business. Let's bring your vision to life! 💻✨",
      illustration: tailoredweb,
    },
    {
      id: 2,
      title: "Stunning Visuals",
      description:
        "At Dotpot iT, we create visually stunning websites that leave a lasting impression. 🌟 Our talented team combines creativity and technical expertise to craft captivating web solutions that align with your brand. 🎨 Elevate your online presence with a website that grabs attention and communicates your message effectively. Let's wow your audience with stunning visuals! 💻✨",
      illustration: stunningwebsites,
    },
    {
      id: 3,
      title: "User-Friendly Experience",
      description:
        "At Dotpot iT, we're all about user-friendly experiences. 🙌 With intuitive navigation, seamless interactions, and responsive designs, we ensure a smooth journey for your visitors. 💡 We prioritize accessibility and optimization for all devices, enhancing user satisfaction and engagement. 🚀🌈 Let's create a website that keeps them coming back for more!",
      illustration: userexperience,
    },
    {
      id: 4,
      title: "Responsive Design",
      description:
        "At Dotpot iT, we prioritize responsive design. 📱💻 Your website will look great and work seamlessly on any device. From smartphones to desktops, we ensure an optimal user experience. Let's create a responsive website that leaves a lasting impression!",
      illustration: prioritizeresponsive,
    },
    {
      id: 5,
      title: "Cutting-Edge Technologies",
      description:
        "At Dotpot iT, we stay ahead with cutting-edge technologies. ⚡🚀 Our team of experts is well-versed in the latest tools and frameworks to bring your website to life. We harness the power of technology to deliver a modern and innovative web experience. Let's build your website with the latest tech trends and elevate your online presence!",
      illustration: cuttingedge,
    },
    {
      id: 6,
      title: "SEO Optimization",
      description:
        "At Dotpot iT, we ensure your website gets noticed. 🔍✨ Our SEO optimization strategies will help your website rank higher in search engine results, attracting more organic traffic and potential customers. We implement the best practices in keyword research, on-page optimization, and metadata optimization to improve your website's visibility. Let us optimize your website for search engines and drive targeted traffic to your business!",
      illustration: SEO,
    },
    {
      id: 7,
      title: "Ongoing Support",
      description:
        "At Dotpot iT, we're with you every step of the way! 🤝 Our support doesn't end after your website launch. We provide ongoing assistance, updates, and maintenance to keep your site running smoothly. With us, you'll have peace of mind knowing that our team is here to support you whenever you need it. Let us handle the technicalities while you focus on growing your business! 💪",
      illustration: ongoingsupport,
    },
  ];

  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Custom Development | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Learn about Custom DevelopmentDotpot iT, a leading IT company providing innovative solutions for businesses.visit website for details"
        />
        <link
          rel="canonical"
          href="https://www.dotpotit.com/web-development/blog-website"
        />
        <meta
          name="keywords"
          content="Software development Company Tailored web solutions, Stunning visuals, User-friendly experience, Cutting-edge technologies"
        />
        <meta property="og:title" content="Custom Development | Dotpot iT" />
        <meta
          property="og:description"
          content="Learn about Custom Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/web-development/custom-website"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Learn about Custom Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta property="og:type" content="website" />
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
                            Custom Web Design & Development
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Dotpot iT has you covered! Our talented team of
                            designers and developers will bring your vision to
                            life with stunning visuals and a user-friendly
                            interface. Whether it's a portfolio site or an
                            e-commerce platform, we'll deliver impressive
                            results. Let's create something extraordinary
                            together! 💪🌐
                          </p>
                        </div>
                        <img
                          src={customwebdd}
                          alt="custom website design"
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
                              {description}
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
          {/* <div className="bg-primary-100 py-16">
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
                          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-5">
                            We build Using Latest Technologies
                          </h2>
                          <p className="md:text-base text-xs text-gray-400 text-justify">
                            At Dotpot IT, we specialize in creating powerful and
                            user-friendly e-commerce websites that enable
                            businesses to thrive in the digital marketplace.
                            With our expertise in e-commerce development and a
                            deep understanding of consumer behavior, we craft
                            tailored solutions that drive online sales, enhance
                            customer experiences, and boost your bottom line.
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
          </div> */}

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
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
                      Why Dotpot iT
                    </h1>
                    <img
                      className="w-64 mx-auto"
                      src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                      alt=""
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT offers affordable web design services using the
                      latest technologies. With a focus on delivering visually
                      appealing and user-friendly websites, they specialize in
                      e-commerce platforms such as Shopify, WooCommerce, and
                      Magento. Their experienced team is committed to providing
                      high-quality design solutions that exceed clients'
                      expectations and exceptional customer service throughout
                      the process. Choose Dotpot iT for innovative web design
                      that helps your business thrive.
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

export default CustomDevelopment;

const navigationData = [
  { title: "Services", link: "/services" },
  { title: "Custom-Web-Development", link: "/web-development/custom-website" },
];
