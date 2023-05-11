import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import aidevelopment from "../../assets/img/aidevelopment.png"
import machinelearning from "../../assets/img/machinelearning.png"
import NLP from "../../assets/img/NLP.png"
import predictiveanalytics from "../../assets/img/predictiveanalytics.png"
import customizedsolutions from "../../assets/img/customizedsolutions.png"
import intelligentautomation from "../../assets/img/intelligentautomation.png"
import datacience from "../../assets/img/datacience.png"
import ReactVisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";
import GetAQuote from "../../components/GetAQuote/GetAQuote";

const AiDevelopment = () => {
  const worksData = [
    {
      id: 1,
      title: "Machine Learning",
      description:
        "Unlock the power of your data with Dotpot iT's Machine Learning services. Build predictive models, automate processes, and personalize experiences to drive growth with our experts. Optimize resource allocation, improve decision-making, and stay ahead of the competition. Contact us today to learn more. ",
      illustration:
      machinelearning
    },
    {
      id: 2,
      title: "Natural Language Processing (NLP)",
      description:
        "Revolutionize the way you interact with customers using Dotpot iT's NLP services. Build chatbots, automate support, and extract insights with advanced techniques. Improve response times, increase satisfaction, and reduce costs. Contact us to learn more.",
      illustration:
      NLP
    },
    {
      id: 3,
      title: "Predictive Analytics",
      description:
        "Dotpot iT's Predictive Analytics services help you forecast trends, optimize resource allocation, and improve decision-making with advanced machine learning algorithms. Stay ahead of the curve and drive business success with accurate predictions from our team of experts. Contact us today to learn more.",
      illustration:
      predictiveanalytics
    },
    {
      id: 4,
      title: "Custom Solution",
      description:
        "At Dotpot iT, we offer Custom Solutions services to help you meet your specific business requirements. Our experts work closely with you to develop tailored solutions using advanced technologies such as machine learning, artificial intelligence, and data science. Let us help you optimize your business processes, increase efficiency, and drive growth. Contact us today to learn more.",
      illustration:
      customizedsolutions
    },
    {
      id: 5,
      title: "Intelligent Automation",
      description:
        "Dotpot iT's Intelligent Automation services help you automate routine tasks, reduce costs, and increase efficiency using advanced technologies like RPA, ML, and AI. Let us help you transform your business today.",
      illustration:
      intelligentautomation
    },
    {
      id: 6,
      title: "Data Science",
      description:
        "Dotpot iT's Data Science services help you unlock insights from your data, make informed decisions, and drive business growth with advanced techniques and algorithms. Let us help you transform your business with the power of data science.",
      illustration:
      datacience
    },
  ];

  useScrollToTop();
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>AI Development | Dotpot iT</title>
        <meta
          name="description"
          content="Our AI solutions transform businesses with automation and intelligence"
        />
        <meta property="og:title" content="AI Development | Dotpot iT" />
        <meta
          property="og:description"
          content="Our AI solutions transform businesses with automation and intelligence"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/ai-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Development | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Our AI solutions transform businesses with automation and intelligence"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className={` md:pt-[15vh] pt-[15vh] ${window.innerWidth > 1280 && "md:pt-[11vh]"} `}>
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
                          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">AI Development</h2>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                          Transform Your Business with Advanced AI Solutions. Discover the Power of Machine Learning, Natural Language Processing, and More with Dotpot iT. Unlock New Opportunities and Drive Growth Today!
                          </p>
                        </div>
                        <img src={aidevelopment} alt="" className="w-full md:w-1/2 lg:w-1/2" />
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
              <div
                className={`flex flex-col gap-5`}
              >
                {worksData.map(({ id, title, description, illustration }) => (
                  <div className={`md:flex justify-center items-center gap-x-20 font-work p-5`} key={id}>
                    <div className={`w-full md:w-1/2 lg:w-1/2 ${id % 2 === 0 && "order-2"} `}>
                      <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (<div className={` ${isVisible
                          ? "opacity-100 translate-y-0"
                          : "translate-y-20 opacity-0"
                          } duration-1000 `}><h1 className="lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left font-bold mb-5 text-textColor-500">
                            {title}
                          </h1>
                          <p className="lg:text-base md:text-sm text-xs text-gray-400 text-justify">{description}</p></div>)}
                      </ReactVisibilitySensor>

                    </div>
                    <ReactVisibilitySensor partialVisibility>
                      {({ isVisible }) => (<div className={`w-full md:w-1/2 lg:w-1/2 ${id % 2 === 0 && "order-1"} ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                        } duration-1000 `}>
                        <img className="w-4/5 mx-auto" src={illustration} alt="" />
                      </div>)}
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
                          <p className="md:text-base text-xs text-gray-400 text-justify">Dotpot iT is an innovative company that stays ahead of the curve by utilizing cutting-edge technologies. Our team of experts constantly explores the latest tools and techniques to deliver effective solutions for businesses. By leveraging the power of the latest technologies, we develop transformative solutions that help businesses stay competitive and drive growth. Partnering with Dotpot iT means accessing the most advanced and innovative technologies available today.</p>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center gap-10">
                          <div className="flex gap-10 flex-wrap justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="tensorflow"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://icon-icons.com/icons2/2389/PNG/512/keras_logo_icon_145136.png" alt="keras"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://icon-icons.com/icons2/2699/PNG/512/numpy_logo_icon_168071.png" alt="nampy"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
                            <img src="https://vectorseek.com/wp-content/uploads/2023/02/Scikit-learn-Logo-Vector.jpg" alt="scitlearn"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all" />
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
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
                      Why Dotpot iT
                    </h1>
                    <img
                      className="w-64 mx-auto"
                      src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                      alt=""
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                    Dotpot iT offers affordable AI Development services that leverage the latest technologies. With a focus on delivering innovative and user-friendly solutions, we specialize in developing AI-powered applications for businesses across industries. Our experienced team is committed to providing high-quality solutions that exceed clients' expectations, and exceptional customer service throughout the development process. Choose Dotpot iT for cutting-edge AI development that helps your business thrive.
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
