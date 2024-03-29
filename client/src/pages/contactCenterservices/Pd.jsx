import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import Enterprise_Business_01 from "../../assets/img/Enterprise_Business_01.png";
import Fixed_Price4 from "../../assets/img/Fixed_Price4.png";
import callerpiority from "../../assets/img/contactcentersupport/callerpiority.png";
import pdcover from "../../assets/img/contactcentersupport/pdcover.png";
import proactiveapproach from "../../assets/img/proactiveapproach.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Pd = () => {
  // PD Data
  const worksData = [
    {
      id: 1,
      title: "Limitless Opportunities",
      description:
        "Unlock endless possibilities with Dotpot IT's Predictive Dialer. Say goodbye to costly manual call campaigns as our advanced technology ensures calls are efficiently directed to desired numbers, optimizing agent availability and saving valuable call center time. Embrace the power of predictive dialing for unparalleled productivity in your contact center.",
      illustration: Enterprise_Business_01,
    },
    {
      id: 2,
      title: "Increased Agent Efficiency",
      description: `Boost <a href="https://quiq.com/blog/how-call-centers-can-better-report-agent-efficiency/" target="_blank" rel="nofollow">agent efficiency</a> with Dotpot IT's predictive dialer. Our sophisticated algorithm predicts agent availability, ensuring more time spent interacting with live individuals. By optimizing the dialing process based on factors like wrap-up time and schedules, our system maximizes productivity without compromising customer interactions. Experience increased efficiency and exceptional customer service with our predictive dialer solution.`,
      illustration: Fixed_Price4,
    },
    {
      id: 3,
      title: "Intelligent Call Supperession",
      description:
        "Elevate call center productivity with Dotpot IT's predictive dialer's intelligent call suppression. Our smart dialing algorithm filters out unproductive calls like answering machines and busy tones, enabling agents to focus on live contacts. Experience enhanced efficiency and superior customer experiences with our advanced feature.",
      illustration: callerpiority,
    },
    {
      id: 4,
      title: "Auto Scheduler",
      description:
        "Maximize campaign effectiveness with Dotpot IT's predictive dialer. Our system allows contact center managers to schedule and run multiple campaigns during specific time windows, optimizing outcomes. Effortlessly manage campaigns and increase productivity with our advanced predictive dialer.",
      illustration: proactiveapproach,
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
        <title>Predictive Dialer | Dotpot iT an it company</title>
        <meta
          name="description"
          content="Dotpot IT's Predictive Dialer is a state-of-the-art automated dialing solution that is specifically designed for contact center environments"
        />
        <meta
          name="keywords"
          content="software development company, predictive dialer, automated dialing"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact-center-services/pd"
        />
        <meta
          property="og:title"
          content="Predictive Dialer for Contact center support | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Dotpot IT's Predictive Dialer is a state-of-the-art automated dialing solution that is specifically designed for contact center environments"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact-center-services/pd"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Predictive Dialer for Contact center support | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Dotpot IT's Predictive Dialer is a state-of-the-art automated dialing solution that is specifically designed for contact center environments"
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
                            Predictive Dialer
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Boost contact center efficiency with Dotpot IT's{" "}
                            <a
                              href="https://www.ringcentral.com/predictive-dialer.html#:~:text=A%20predictive%20dialer%20is%20a,lead%20after%20an%20unanswered%20call."
                              target="_blank"
                              rel="nofollow"
                            >
                              Predictive Dialer.
                            </a>{" "}
                            Our state-of-the-art automated dialing solution
                            streamlines outbound call campaigns and lead
                            generation efforts. Featuring a self-learning
                            algorithm and intelligent call screening, it
                            optimizes agent productivity by eliminating
                            unproductive calls. Minimize idle time and maximize
                            results with our advanced Predictive Dialer.
                          </p>
                        </div>
                        <img
                          src={pdcover}
                          alt="PD Image"
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
                      Dotpot iT offers cutting-edge Predictive Dialer solutions
                      for efficient call handling and increased agent
                      productivity. With our expertise and outstanding support,
                      we provide customized Predictive Dialer services that
                      seamlessly integrate with your business, optimizing
                      outcomes and enhancing customer satisfaction. Trust Dotpot
                      iT to deliver innovative Predictive Dialer technology that
                      drives success for your business.
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

export default Pd;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Predictive Dialer",
    link: "/contact-center-services/pd",
  },
];
