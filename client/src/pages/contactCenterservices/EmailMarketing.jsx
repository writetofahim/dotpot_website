import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import agencyweb from "../../assets/img/agencyweb.png";
import blogweb from "../../assets/img/blogweb.png";
import emailmarketingcover from "../../assets/img/contactcentersupport/emailmarketingcover.png";
import experience from "../../assets/img/experience.png";
import texttospeech from "../../assets/img/texttospeech.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const EmailMarketing = () => {
  // Email Marketing Data
  const worksData = [
    {
      id: 1,
      title: "Facility to add notes to each email",
      description: `Dotpot IT's <a href="https://www.litmus.com/blog/email-modules-and-modular-email/" target="_blank" rel="nofollow">email handling module</a> allows CC agents to add notes to emails at any stage, ensuring effective communication and coordination. Enhance productivity and streamline workflows with the ability to include relevant annotations directly within email threads.`,
      illustration: texttospeech,
    },
    {
      id: 2,
      title: "Reports on mail sent/receive",
      description:
        "Dotpot IT's email module records all sent and received emails, offering detailed reports and filtering tools for easy retrieval of information. Gain insights into email metrics and efficiently manage your email communications.",
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Email filtering",
      description:
        "Dotpot IT's email module offers advanced filtering options for incoming and outgoing emails. Set up filters based on agent groups or policy factors to efficiently manage email routing and adhere to organizational guidelines. Streamline your email workflow with our powerful email filtering feature.",
      illustration: blogweb,
    },
    {
      id: 4,
      title: "Sending/Receiving Emails with attachment",
      description:
        "Agents can attach one or multiple files to any email message, and send it to the recipient. The email module also allows agents to receive incoming mail with attachments.",
      illustration: experience,
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
        <title>Email Marketing | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Dotpot IT CC's email routing module enables incoming emails to be efficiently distributed to the appropriate agents based on the CC admin's policies."
        />
        <meta
          name="keywords"
          content="software development company, email marketing, mail"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact-center-services/email-marketing"
        />
        <meta property="og:title" content="Email Marketing | Dotpot iT" />
        <meta
          property="og:description"
          content="Dotpot IT CC's email routing module enables incoming emails to be efficiently distributed to the appropriate agents based on the CC admin's policies."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact-center-services/email-marketing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Marketing | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Dotpot IT CC's email routing module enables incoming emails to be efficiently distributed to the appropriate agents based on the CC admin's policies."
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
                            Email Marketing by Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Dotpot IT's CC's{" "}
                            <a
                              href="https://www.webservio.com/email-management/email-routing-services.html"
                              target="_blank"
                              rel="nofollow"
                            >
                              email routing module
                            </a>{" "}
                            efficiently directs incoming emails to the
                            appropriate agents based on admin policies,
                            streamlining your email management and enhancing
                            productivity. Customize rules and criteria for
                            routing, minimize response times, and provide
                            exceptional customer service with our innovative
                            solution.
                          </p>
                        </div>
                        <img
                          src={emailmarketingcover}
                          alt="Email Marketing Image"
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
                      Dotpot iT offers cutting-edge Email Marketing services for
                      effective communication and customer engagement. With our
                      expertise and outstanding support, we provide customized
                      Email Marketing solutions that seamlessly integrate with
                      your business, boosting productivity and customer
                      satisfaction. Trust Dotpot iT to deliver innovative Email
                      Marketing technology that drives success for your
                      business.
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

export default EmailMarketing;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Email Marketing",
    link: "/contact-center-services/email-marketing",
  },
];
