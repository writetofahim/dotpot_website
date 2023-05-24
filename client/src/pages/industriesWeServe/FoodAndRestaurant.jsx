import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import agencyweb from "../../assets/img/agencyweb.png";
import blogweb from "../../assets/img/blogweb.png";
import coverweb from "../../assets/img/coverweb.png";
import customappweb from "../../assets/img/customappweb.png";
import ecommarceweb from "../../assets/img/ecommarceweb.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const FoodAndRestaurant = () => {
  const worksData = [
    {
      id: 1,
      title: "Online Ordering and Delivery Systems",
      description:
        `Dotpot IT can develop customized <a href="https://codecanyon.net/item/woofood-online-delivery-for-woocommerce/20404478?gclid=Cj0KCQjwyLGjBhDKARIsAFRNgW86lRXN4Yy_A7Xn-rwfpHGf0vxYdc9MpWzcA3_enm0ZcVr-5dKxEuYaArn5EALw_wcB" target="_blank" rel="nofollow">online ordering systems</a> that allow customers to browse menus, place orders, and choose delivery or pickup options. Integration with payment gateways and delivery tracking features can streamline the ordering and delivery process.`,
      illustration: ecommarceweb,
    },
    {
      id: 2,
      title: "Menu Management",
      description:
        "Dotpot IT can provide menu management solutions that enable restaurants to easily update menus, add seasonal specials, and make changes in real-time. This ensures that customers have access to the most up-to-date menu offerings.",
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Table Reservation Systems",
      description:
        "Dotpot IT can develop table reservation systems that allow customers to book tables online, select preferred dining times, and receive confirmation notifications. This improves the customer experience and helps restaurants manage their reservations more efficiently.",
      illustration: blogweb,
    },
    {
      id: 4,
      title: "Online Reviews and Ratings Integration",
      description:
        `Dotpot IT can integrate online review and rating platforms into restaurant websites, enabling customers to leave feedback and share their dining experiences. This helps restaurants build trust, improve their reputation, and engage with their customers.`,
      illustration: customappweb,
    },
    {
      id: 5,
      title: "Website Maintenance and Support",
      description:
        `Dotpot IT offers ongoing website maintenance and support services to ensure that restaurant websites are up-to-date, secure, and fully functional. This includes regular updates, performance monitoring, and technical support to provide a smooth online experience for customers.`,
      illustration: customappweb,
    },
  ];

  useScrollToTop();

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Food & Restaurants | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Indulge in our innovative Food & Restaurant solutions, crafted with passion and precision to satisfy your cravings. Elevate your dining experience today. "
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/food-and-restaurant"
        />
        <meta property="og:title" content="Food & Restaurants | Dotpot iT" />
        <meta
          property="og:description"
          content="Indulge in our innovative Food & Restaurant solutions, crafted with passion and precision to satisfy your cravings. Elevate your dining experience today. "
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development company, Fine dining experiences, Culinary delights."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/food-and-restaurant"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Food & Restaurants | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Indulge in our innovative Food & Restaurant solutions, crafted with passion and precision to satisfy your cravings. Elevate your dining experience today. "
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      <Navbar />
      <div className={` md:pt-[15vh] pt-[15vh] ${window.innerWidth > 1280 && "md:pt-[11vh]"
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
                            Food & Restaurants
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Indulge in our innovative <a href="https://www.adalot.com/en/guide-restaurant-website-development/" target="_blank" rel="nofollow">Food & Restaurant solutions,</a> crafted with passion and precision to satisfy your cravings. Elevate your dining experience today.
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

          {/* Why Dotpot iT */}
          <div className="bg-primary-100 py-16">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={`${isVisible
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
                      Dotpot IT is the top choice for Food & Restaurants businesses. With their expertise in web design and development, they create visually appealing and user-friendly websites. They offer online ordering systems, menu management solutions, table reservation systems, and more. Dotpot IT focuses on user experience and provides ongoing maintenance and support. They help businesses enhance their online presence and deliver exceptional digital experiences.
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
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default FoodAndRestaurant;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Food-and-Restaurant",
    link: "/industries-we-serve/food-and-restaurant",
  },
];
