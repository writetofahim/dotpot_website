import React from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import collectioncover from "../../assets/img/contactcentersupport/collectioncover.png";
import helpdesk from "../../assets/img/helpdesk.png";
import compliance from "../../assets/img/compliance.png";
import clientcentric from "../../assets/img/clientcentric.png";
import payment from "../../assets/img/payment.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const Collections = () => {
  // Collection Data
  const worksData = [
    {
      id: 1,
      title: "Payment Reminder Notifications",
      description:
        "Dotpot iT can send automated payment reminder notifications to debtors via SMS or email. These reminders help in prompt payment and reduce the chances of accounts becoming delinquent.",
      illustration: payment,
    },
    {
      id: 2,
      title: "Skip Tracing Services",
      description:
        `Dotpot iT offers <a href="https://www.billgosling.com/blog/what-is-skip-tracing" target="_blank" rel="nofollow">skip tracing services</a> to locate debtors who have changed their contact information or gone off the grid. This service helps collection agencies in finding and contacting debtors for repayment.`,
      illustration: helpdesk,
    },
    {
      id: 3,
      title: "Compliance Management",
      description:
        "Dotpot iT ensures compliance with debt collection regulations by providing features such as call monitoring, call scripting, and compliance tracking. This helps collection agencies adhere to legal requirements and maintain ethical collection practices.",
      illustration: compliance,
    },
    {
      id: 4,
      title: "Debtor Communication Management",
      description:
        "Dotpot iT helps manage debtor communications by centralizing and organizing all interactions, including calls, emails, and SMS messages, in a unified platform. This streamlines communication and ensures consistency in debt collection efforts.",
      illustration: clientcentric,
    },
  ];

  useScrollToTop();

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Collection | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Dotpot IT offers automated dialing solutions for efficient debtor contact and increased debt recovery rates."
        />
        <meta
          name="keywords"
          content="software development company, automated dialing,"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact-center-services/collection"
        />
        <meta property="og:title" content="Collection | Dotpot iT" />
        <meta
          property="og:description"
          content="Dotpot IT offers automated dialing solutions for efficient debtor contact and increased debt recovery rates."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact-center-services/collection"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Collection | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Dotpot IT offers automated dialing solutions for efficient debtor contact and increased debt recovery rates."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>

      <Navbar />

      <div
        className={` md:pt-[15vh] pt-[15vh] ${window.innerWidth > 1280 && "md:pt-[11vh]"
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
                            Collections
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Optimize your debt collection efforts with Dotpot IT's automated dialing solutions. Contact more debtors each day and increase recovery rates by connecting with live individuals. Benefit from real-time and historical reporting to determine the best times for contact. Say goodbye to wasted time and resources on <a href="https://go4customer.com/glossary/m/what-is-manual-dialer" target="_blank" rel="nofollow">manual dialing</a> and focus on maximizing live connections for effective debt collection.
                          </p>
                        </div>
                        <img
                          src={collectioncover}
                          alt="Collection Image"
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
                      alt=""
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT delivers cutting-edge solutions for efficient and effective collection services. With our expertise and exceptional support, we provide customized services that integrate perfectly with your business, maximizing productivity and ensuring customer satisfaction. Trust Dotpot iT to provide innovative technology that drives success for your collection service operations.
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

export default Collections;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Collections",
    link: "/contact-center-services/collection",
  },
];
