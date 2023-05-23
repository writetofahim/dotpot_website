import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactVisibilitySensor from "react-visibility-sensor";
import aidevelopment from "../../assets/img/aidevelopment.png";
import businessIntelligence from "../../assets/img/aidevelopment/businessintelligence.png";
import dataanalytics from "../../assets/img/aidevelopment/dataanalytics.png";
import dataforcasting from "../../assets/img/aidevelopment/dataforcasting.png";
import naturalLanguageProcessing from "../../assets/img/aidevelopment/naturallanguageprocessing.png";
import objectRecognition from "../../assets/img/aidevelopment/objectRecognition.png";
import recommendationengine from "../../assets/img/aidevelopment/recommendationengine.png";
import textToSpeech from "../../assets/img/aidevelopment/texttospeech.png";
import customizedsolutions from "../../assets/img/customizedsolutions.png";
import datacience from "../../assets/img/datacience.png";
import intelligentautomation from "../../assets/img/intelligentautomation.png";
import machinelearning from "../../assets/img/machinelearning.png";
import predictiveanalytics from "../../assets/img/predictiveanalytics.png";

import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const AiDevelopment = () => {
  const worksData = [
    {
      id: 2,
      title: "Object Recognition",
      description:
        `<a href="https://www.mathworks.com/solutions/image-video-processing/object-recognition.html#:~:text=Object%20recognition%20is%20a%20computer,%2C%20scenes%2C%20and%20visual%20details." target="_blank" rel="nofollow">Object recognition</a> is a computer vision technology that involves identifying and classifying objects within digital images or video streams. It uses machine learning algorithms to analyze visual patterns and features, enabling computers to understand and interpret the content of images. Object recognition has numerous applications, including autonomous vehicles, surveillance systems, augmented reality, and image-based search engines. By accurately detecting and recognizing objects, this technology enables advanced automation, intelligent decision-making, and enhanced user experiences in various domains.`,
      illustration: objectRecognition,
      sectionId: "object-recognition",
    },
    {
      id: 3,
      title: "Text to Speech",
      description:
        "Text-to-speech is a technology that converts written text into spoken words. It enables computers and devices to generate human-like speech, allowing users to listen to text-based content. Text-to-speech systems find applications in accessibility, language learning, voice assistants, and audio narration. By providing a voice to written content, this technology enhances user engagement, convenience, and inclusivity.",
      illustration: textToSpeech,
      sectionId: "text-to-speech",
    },
    {
      id: 4,
      title: "Business Intelligence",
      description:
        "Business intelligence involves the collection, analysis, and presentation of data to support informed decision-making and strategic planning within an organization. It encompasses various techniques, tools, and processes for gathering data from multiple sources, transforming it into meaningful insights, and delivering actionable information to stakeholders. Business intelligence helps businesses gain a competitive edge, optimize operations, identify trends, and make data-driven decisions.",
      illustration: businessIntelligence,
      sectionId: "business-intelligence",
    },
    {
      id: 5,
      title: "Data Forecasting",
      description:
        "Data forecasting is a process of predicting future outcomes based on historical data patterns and statistical models. It involves analyzing past data trends, identifying patterns, and using mathematical algorithms to estimate future values. Data forecasting finds applications in sales forecasting, demand planning, financial projections, and resource optimization. By leveraging data-driven predictions, businesses can make proactive decisions, anticipate market changes, and optimize resource allocation.",
      illustration: dataforcasting,
      sectionId: "data-forecasting",
    },
    {
      id: 6,
      title: "Natural Language Processing",
      description:
        "Natural Language Processing (NLP) is a branch of artificial intelligence that focuses on the interaction between computers and human language. It involves the processing and analysis of text and speech data to understand and derive meaning from human language. NLP enables applications such as chatbots, language translation, sentiment analysis, and text summarization. By enabling computers to comprehend and respond to human language, NLP facilitates enhanced communication and automation.",
      illustration: naturalLanguageProcessing,
      sectionId: "natural-language-processing",
    },
    {
      id: 7,
      title: "Data Analytics",
      description:
        "Data analytics is the process of examining and interpreting data sets to uncover meaningful insights and patterns. It involves applying statistical and mathematical techniques to analyze large volumes of data and extract valuable information. Data analytics provides businesses with the ability to gain actionable insights, make data-driven decisions, and identify opportunities for optimization and growth. It plays a crucial role in various domains, including marketing, finance, healthcare, and operations.",
      illustration: dataanalytics,
      sectionId: "data-analytics",
    },
    {
      id: 8,
      title: "Recommendation Engine",
      description:
        "A recommendation engine is an algorithmic system that analyzes user data and behavior to provide personalized recommendations. It is widely used in e-commerce platforms, streaming services, social media, and content platforms. Recommendation engines leverage machine learning and data mining techniques to understand user preferences, identify similar items or content, and generate tailored recommendations. By suggesting relevant and personalized options, recommendation engines enhance user experiences, engagement, and satisfaction.",
      illustration: recommendationengine,
      sectionId: "recommendation-engine",
    },
    {
      id: 9,
      title: "Machine Learning",
      description:
        "Unlock the power of your data with Dotpot iT's Machine Learning services. Build predictive models, automate processes, and personalize experiences to drive growth with our experts. Optimize resource allocation, improve decision-making, and stay ahead of the competition. Contact us today to learn more. ",
      illustration: machinelearning,
      sectionId: "machine-learning",
    },
    {
      id: 10,
      title: "Predictive Analytics",
      description:
        "Dotpot iT's Predictive Analytics services help you forecast trends, optimize resource allocation, and improve decision-making with advanced machine learning algorithms. Stay ahead of the curve and drive business success with accurate predictions from our team of experts. Contact us today to learn more.",
      illustration: predictiveanalytics,
      sectionId: "predictive-analytics",
    },
    {
      id: 11,
      title: "Custom Solution",
      description:
        "At Dotpot iT, we offer Custom Solutions services to help you meet your specific business requirements. Our experts work closely with you to develop tailored solutions using advanced technologies such as machine learning, artificial intelligence, and data science. Let us help you optimize your business processes, increase efficiency, and drive growth. Contact us today to learn more.",
      illustration: customizedsolutions,
      sectionId: "custom-solution",
    },
    {
      id: 12,
      title: "Intelligent Automation",
      description:
        "Dotpot iT's Intelligent Automation services help you automate routine tasks, reduce costs, and increase efficiency using advanced technologies like RPA, ML, and AI. Let us help you transform your business today.",
      illustration: intelligentautomation,
      sectionId: "intelligent-automation",
    },
    {
      id: 13,
      title: "Data Science",
      description:
        "Dotpot iT's Data Science services help you unlock insights from your data, make informed decisions, and drive business growth with advanced techniques and algorithms. Let us help you transform your business with the power of data science.",
      illustration: datacience,
      sectionId: "data-science",
    },
  ];

  useScrollToTop();

  const location = useLocation();
  const fragment = location.hash.substring(1);

  useEffect(() => {
    if (fragment) {
      const locationElement = document.getElementById(fragment);
      locationElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [fragment]);

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>AI Development | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Our AI solutions transform businesses with automation and intelligence"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/key-features/ai-development"
        />
        <meta property="og:title" content="AI Development | Dotpot iT" />
        <meta
          property="og:description"
          content="Our AI solutions transform businesses with automation and intelligence"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/ai-development"
        />
        <meta
          name="keywords"
          content="Software Development Company, Machine learning development, Unity game development, eCommerce development"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Development | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Our AI solutions transform businesses with automation and intelligence"
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
                            AI Development With Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Transform Your Business with Advanced <a href="https://www.webservio.com/email-management/email-routing-services.html" target="_blank" rel="nofollow">AI</a> Solutions.
                            Discover the Power of Machine Learning, Natural
                            Language Processing, and More with Dotpot iT. Unlock
                            New Opportunities and Drive Growth Today!
                          </p>
                        </div>
                        <img
                          src={aidevelopment}
                          alt="Ai Development"
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
                {worksData.map(
                  ({ id, title, description, illustration, sectionId }) => (
                    <div
                      className={`md:flex justify-center items-center gap-x-20 font-work p-5`}
                      key={id}
                      id={sectionId}
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
                  )
                )}
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
                      className={`${isVisible
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
                        alt="Colored line"
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
                            technologies available today.
                          </p>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center gap-10">
                          <div className="flex gap-10 flex-wrap justify-center">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                              alt="python"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                              alt="tensorflow"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://icon-icons.com/icons2/2389/PNG/512/keras_logo_icon_145136.png"
                              alt="keras"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://icon-icons.com/icons2/2699/PNG/512/numpy_logo_icon_168071.png"
                              alt="nampy"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://vectorseek.com/wp-content/uploads/2023/02/Scikit-learn-Logo-Vector.jpg"
                              alt="scitlearn"
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
                      alt="Colored line"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT offers affordable AI Development services that
                      leverage the latest technologies. With a focus on
                      delivering innovative and user-friendly solutions, we
                      specialize in developing AI-powered applications for
                      businesses across industries. Our experienced team is
                      committed to providing high-quality solutions that exceed
                      clients' expectations, and exceptional customer service
                      throughout the development process. Choose Dotpot iT for
                      cutting-edge AI development that helps your business
                      thrive.
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

export default AiDevelopment;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Ai Development",
    link: "/key-features/ai-development",
  },
];
