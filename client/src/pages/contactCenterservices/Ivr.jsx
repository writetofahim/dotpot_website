import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import callerpiority from "../../assets/img/contactcentersupport/callerpiority.png";
import ivrcover from "../../assets/img/contactcentersupport/ivrcover.png";
import voiceresponse from "../../assets/img/customersupport/voiceresponse.png";
import pd from "../../assets/img/pd.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Ivr = () => {
  // IVR Data
  const worksData = [
    {
      id: 1,
      title: "Call Routing",
      description: `Dotpot iT's IVR service efficiently <a href="https://www.mitel.com/features-benefits/call-routing#:~:text=Call%20routing%20is%20a%20call,end%20picks%20up%20the%20call." target="_blank" rel="nofollow">routes incoming calls</a> to the appropriate department or agent based on caller input or predefined criteria. This ensures that callers are directed to the most suitable resource, reducing wait times and improving customer satisfaction.`,
      illustration: callerpiority,
    },
    {
      id: 2,
      title: "Customized Call Flows",
      description:
        "Dotpot iT allows businesses to create and customize call flows within the IVR system. This ensures that callers are guided through a personalized sequence of options and prompts based on their specific needs, providing a tailored and efficient customer experience.",
      illustration: pd,
    },
    {
      id: 3,
      title: "Voice Recognition",
      description:
        "Dotpot iT incorporates advanced voice recognition technology into its IVR system. This enables callers to interact with the system using natural speech, enhancing usability and reducing the need for keypad inputs.",
      illustration: voiceresponse,
    },
    {
      id: 4,
      title: "Outbound IVR",
      description:
        "Dotpot iT's IVR service also supports outbound calling, allowing businesses to automate outbound interactions such as appointment reminders, payment reminders, surveys, and notifications. This helps streamline communication and enhances customer engagement.",
      illustration: ivrcover,
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
        <title>
          Interactive Voice Response (IVR) | Dotpot iT a leading it company
        </title>
        <meta
          name="description"
          content="Dotpot iT is providing Interactive Voice Response for our clients. "
        />
        <meta
          name="keywords"
          content="software development company, ivr, call ivr, interactive voice response"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact-center-services/ivr"
        />
        <meta
          property="og:title"
          content="Interactive Voice Response (IVR) | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Dotpot iT is providing Interactive Voice Response for our clients. "
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact-center-services/ivr"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Interactive Voice Response (IVR) | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Dotpot iT is providing Interactive Voice Response for our clients. "
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
                            Interactive Voice Response (IVR) by Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            IVR is an automated voice-based technology that
                            facilitates efficient interactions between computers
                            and humans. With{" "}
                            <a
                              href="https://en.wikipedia.org/wiki/Interactive_voice_response"
                              target="_blank"
                              rel="nofollow"
                            >
                              IVR,
                            </a>{" "}
                            callers can use voice or keypad inputs to navigate
                            through options and reach their desired destination
                            without human intervention. This technology is
                            beneficial for managing high call volumes and
                            situations where live agents are unavailable.
                          </p>
                        </div>
                        <img
                          src={ivrcover}
                          alt="IVR Image"
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
                      alt=""
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT delivers cutting-edge Interactive Voice Response
                      (IVR) solutions for efficient and exceptional customer
                      service. With our expertise and outstanding support, we
                      provide customized IVR services that seamlessly integrate
                      with your business, maximizing productivity and ensuring
                      customer satisfaction. Trust Dotpot iT to provide
                      innovative IVR technology that drives success for your
                      customer service operations.
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

export default Ivr;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Customer Service",
    link: "/contact-center-services/ivr",
  },
];
