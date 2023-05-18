import parse from "html-react-parser";
import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import retail from "../../assets/img/ecommarceweb.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Retail = () => {
  const worksData = [
    {
      id: 1,
      title: "Overview",
      description:
        "Dotpot is a web design and development agency specializing in Retail & E-Commerce businesses. They offer customized web solutions, including design, development, e-commerce development, and maintenance. Their team uses modern technology to create visually appealing, user-friendly, and responsive websites optimized for search engines. Dotpot aims to enhance online visibility, user experience, and customer engagement for their clients.",
      illustration: retail,
    },
    {
      id: 2,
      title: "Benefits of working with Dotpot IT",
      description: `
      Dotpot IT provides Retail & E-Commerce businesses with custom web solutions, better online visibility, user-friendly sites, e-commerce integration, expert support, and growth.
  

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
          Search engine optimization (SEO):
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
        
      </li>
`,
      illustration: retail,
    },
    {
      id: 3,
      title: "Why we wil be your best choice?",
      description:
        "Dotpot iT offers world-class blog website design solutions that drive engagement and revenue. Our experienced team creates custom, visually stunning, and user-friendly blog websites optimized for search engine rankings, mobile responsiveness, and user experience. Trust us to exceed your expectations with high-quality design solutions and exceptional customer service. Let Dotpot iT help you establish a strong online presence with a professional blog website design.",
      illustration: retail,
    },
  ];
  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Retail, Ecommerce | Dotpot iT</title>
        <meta
          name="description"
          content="Dotpot is a web design and development agency focused on Retail & E-Commerce. They provide tailored web solutions, from design and development to e-commerce and maintenance. With modern tech, they create visually appealing, user-friendly, and SEO-optimized sites, aiming to boost online visibility, engagement, and user experience."
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/retail-ecommerce"
        />
        <meta property="og:title" content="Retail, Ecommerce | Dotpot iT" />
        <meta
          property="og:description"
          content="Dotpot is a web design and development agency focused on Retail & E-Commerce. They provide tailored web solutions, from design and development to e-commerce and maintenance. With modern tech, they create visually appealing, user-friendly, and SEO-optimized sites, aiming to boost online visibility, engagement, and user experience."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development company, Retail & E-Commerce businesses, e-commerce development."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/retail-ecommerce"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Retail, Ecommerce | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Dotpot is a web design and development agency focused on Retail & E-Commerce. They provide tailored web solutions, from design and development to e-commerce and maintenance. With modern tech, they create visually appealing, user-friendly, and SEO-optimized sites, aiming to boost online visibility, engagement, and user experience."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
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
                            Retail & E-Commerce
                          </h1>
                          <h2 className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Dotpot is a web design and development agency
                            focused on Retail & E-Commerce. They provide
                            tailored web solutions, from design and development
                            to e-commerce and maintenance. With modern tech,
                            they create visually appealing, user-friendly, and
                            SEO-optimized sites, aiming to boost online
                            visibility, engagement, and user experience.
                          </h2>
                        </div>
                        <img
                          src={retail}
                          alt="Retail & E-Commerce Image"
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
          {/* <div className="bg-primary-100 py-16">
            <div className="container mx-auto ">
              <ReactVisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <>
                    <div
                      className={`${isVisible
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
                          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-5">We build Using Latest Technologies</h2>
                          <p className="md:text-base text-xs text-gray-400 text-justify">At Dotpot IT, we specialize in creating powerful and user-friendly e-commerce websites that enable businesses to thrive in the digital marketplace. With our expertise in e-commerce development and a deep understanding of consumer behavior, we craft tailored solutions that drive online sales, enhance customer experiences, and boost your bottom line.</p>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center gap-10">
                        <div className="flex gap-10 flex-wrap justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstarp" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" alt="next" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="vue" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="angular" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongo" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="php" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" alt="laravel" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="django" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="wordpress" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src={shopify} alt="shopify" 
                            className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
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
          {/* <div className="py-16">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={`${isVisible
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
                      Dotpot iT offers affordable web design services using the latest technologies. With a focus on delivering visually appealing and user-friendly websites, they specialize in e-commerce platforms such as Shopify, WooCommerce, and Magento. Their experienced team is committed to providing high-quality design solutions that exceed clients' expectations and exceptional customer service throughout the process. Choose Dotpot iT for innovative web design that helps your business thrive.
                    </p>
                  </div>
                </>
              )}
            </ReactVisibilitySensor>
          </div> */}

          {/* Get in Touch */}
          <div className="bg-primary-100">
            <GetAQuote />
          </div>
        </div>
      </div>

      {/* <div className="bg-background-500">
        <div className="pt-[15vh] pb-10 container mx-auto">
          <NavigatorComponent navigationData={navigationData} />
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-textColor-500 text-center">
              Retail & E-Commerce
            </h1>
            <p className="text-lg text-secondary-400 text-center mb-10">
              Empowering Retail & E-Commerce through Dynamic Web Development
              Solutions
            </p>
          </div>
          <div className="max-w-4xl mx-auto p-4">
            <img src={retail} alt="Product image" />
          </div>
          <div className="my-12 lg:mx-24 mx-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 text-textColor-500">Overview</h2>
            <div className="text-textColor-500 flex flex-col gap-5 py-2 lg:px-5 text-justify">
              <p>
                Dotpot is a leading web design and development agency that offers
                dynamic web solutions to clients in the Retail & E-Commerce
                industry. With years of experience and expertise in this sector,
                Dotpot IT is capable of providing customized web design and
                development services that cater to the specific needs of
                businesses in this industry.
              </p>

              <p>
                At Dotpot, we understand that having a strong online presence is
                crucial for the success of any Retail & E-Commerce business.
                Therefore, we offer a wide range of web design and development
                services that are aimed at enhancing the online visibility, user
                experience, and customer engagement of our clients.
              </p>

              <p>
                Our team of experienced web developers and designers use
                cutting-edge technology and modern design trends to create
                visually appealing, user-friendly, and responsive websites that
                are optimized for search engines. We ensure that our websites are
                fast-loading, easy to navigate, and compatible with different
                devices and platforms.
              </p>
              <p>
                We also offer e-commerce website development services that are
                designed to help businesses in the Retail & E-Commerce industry to
                sell their products and services online. Our e-commerce websites
                are secure, easy to use, and come with features such as shopping
                cart integration, payment gateway integration, inventory
                management, and order tracking.
              </p>
              <p>
                In addition to web design and development services, we also offer
                website maintenance and support services to ensure that our
                clients' websites remain up-to-date, secure, and fully functional.
              </p>
            </div>
            <div className="pt-6">
              <h2 className="lg:text-2xl text-xl font-bold mb-4 text-textColor-500">
                Benefits of working with Dotpot IT
              </h2>
              <p className="text-textColor-500 lg:px-5 text-justify pb-2">
                Working with Dotpot IT for web design and development services
                offers businesses in the Retail & E-Commerce industry a range of
                benefits, including customized web solutions, improved online
                visibility, user-friendly websites, e-commerce integration, expert
                support, and increased business growth.
              </p>
              <ul className="list-disc list-inside">
                <li className="text-textColor-500 mb-2 lg:px-10 px-3">
                  <strong className="font-semibold">
                    Customized web solutions:
                  </strong>
                  <br />
                  <p className="px-2">
                    Dotpot offers customized web design and development solutions
                    tailored to the specific needs of businesses in the Retail &
                    E-Commerce industry.
                  </p>
                </li>
                <li className="text-textColor-500 mb-2 lg:px-10 px-3">
                  <strong className="font-semibold">
                    Enhanced online visibility:
                  </strong>
                  <br />
                  <p className="px-2">
                    Our web solutions are designed to improve the online
                    visibility and customer engagement of businesses in this
                    industry.
                  </p>
                </li>
                <li className="text-textColor-500 mb-2 lg:px-10 px-3">
                  <strong className="font-semibold">
                    User-friendly websites:{" "}
                  </strong>
                  <br />
                  <p className="px-2">
                    We create visually appealing and easy-to-use websites that
                    enhance the user experience and increase the chances of
                    customer conversions.
                  </p>
                </li>
                <li className="text-textColor-500 mb-2 lg:px-10 px-3">
                  <strong className="font-semibold">Mobile optimization:</strong>
                  <br />
                  <p className="px-2">
                    Our websites are optimized for mobile devices, ensuring that
                    they look great and function well on different screen sizes.
                  </p>
                </li>
                <li className="text-textColor-500 mb-2 lg:px-10 px-3">
                  <strong className="font-semibold">
                    E-commerce integration:
                  </strong>
                  <br />
                  <p className="px-2">
                    Dotpot offers e-commerce website development services that
                    help businesses in the Retail & E-Commerce industry to sell
                    their products and services online.
                  </p>
                </li>
                <li className="text-textColor-500 mb-2 lg:px-10 px-3">
                  <strong className="font-semibold">
                    Search engine optimization (SEO):
                  </strong>
                  <br />
                  <p className="px-2">
                    We optimize our websites for search engines, making it easier
                    for potential customers to find our clients' businesses
                    online.
                  </p>
                </li>
                <li className="text-textColor-500 mb-2 lg:px-10 px-3">
                  <strong className="font-semibold">Expert support: </strong>
                  <br />
                  <p className="px-2">
                    Dotpot provides expert website maintenance and support
                    services, ensuring that our clients' websites remain
                    up-to-date, secure, and fully functional.
                  </p>
                </li>
                <li className="text-textColor-500 mb-2 lg:px-10 px-3">
                  <strong className="font-semibold">
                    Increased business growth:
                  </strong>
                  <br />
                  <p className="px-2">
                    By improving online visibility, user experience, and customer
                    engagement, Dotpot's web solutions can help businesses in the
                    Retail & E-Commerce industry to grow their business and
                    increase their revenue
                  </p>
                </li>
                <li className="text-textColor-500 mb-2 lg:px-10 px-3">
                  <strong className="font-semibold">
                    E-commerce integration:
                  </strong>
                  <br />
                  <p className="px-2">
                    Dotpot offers e-commerce website development services that
                    help businesses in the Retail & E-Commerce industry to sell
                    their products and services online.
                  </p>
                </li>
              </ul>
            </div>
            <div className="pt-6 flex flex-col gap-5">
              <h2 className="lg:text-2xl text-xl font-bold mb-2 text-textColor-500">
                Why we wil be your best choice?
              </h2>
              <p className="text-textColor-500 lg:px-5 text-justify">
                Dotpot IT is a top choice for businesses in the Retail &
                E-Commerce industry looking for web design and development
                services. With years of experience and expertise in this industry,
                Dotpot IT offers customized web solutions that cater to the unique
                needs of each client. Our team of web developers and designers
                uses cutting-edge technology and modern design trends to create
                visually appealing, user-friendly, and responsive websites that
                are optimized for search engines. We also offer e-commerce website
                development services that help businesses in this industry sell
                their products and services online. Our e-commerce websites are
                secure, easy to use, and come with features such as shopping cart
                integration, payment gateway integration, inventory management,
                and order tracking.
              </p>
              <p className="text-textColor-500 lg:px-5 text-justify">
                What sets Dotpot IT apart is its commitment to providing
                high-quality, customer-focused web solutions. We work closely with
                our clients to understand their goals and objectives and provide
                customized solutions that help them achieve their business
                objectives and grow their online presence. Our expert support team
                also provides website maintenance and support services to ensure
                that our clients' websites remain up-to-date, secure, and fully
                functional. By partnering with Dotpot IT, businesses in the Retail
                & E-Commerce industry can enhance their online visibility, user
                experience, and customer engagement, leading to increased business
                growth and revenue.
              </p>
              <p className="text-textColor-500 lg:px-5 text-justify">
                Overall, Dotpot IT is considered the best choice for web design
                and development services in the Retail & E-Commerce industry due
                to its years of experience, expertise, and customer-centric
                approach. With our customized web solutions, e-commerce website
                development services, and expert support, businesses can trust us
                to deliver high-quality, results-driven solutions that help them
                achieve their business goals.
              </p>
            </div>
            <div className="pt-6">
              <p className="text-textColor-500 lg:px-5 text-justify">
                Take your Retail & E-Commerce business to the next level with
                Dotpot IT. Our customized web solutions, e-commerce website
                development services, and expert support can help you enhance your
                online visibility, user experience, and customer engagement,
                leading to increased business growth and revenue. Trust us to
                deliver high-quality, results-driven web solutions for your
                business.
              </p>
            </div>
            
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Retail;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Retail & E-commerce",
    link: "/industries-we-serve/retail-ecommerce",
  },
];
