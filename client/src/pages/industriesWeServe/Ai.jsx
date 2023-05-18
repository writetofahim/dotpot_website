import React from "react";
import { Helmet } from "react-helmet";
import ai from "../../assets/img/ai.png";
import aib from "../../assets/img/aib.png";
import air from "../../assets/img/air.png";
import ais from "../../assets/img/ais.png";
import aiImg from "../../assets/img/heroAI.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Ai = () => {
  useScrollToTop();
  return (
    <div>
      <div className="">
        <Helmet>
          <title>AI Development | Dotpot iT a leading it company</title>
          <meta
            name="description"
            content="Leverage DotpotIT's AI solutions for business growth. Automate operations, analyze data, and elevate customer experiences with chatbots and virtual assistants. "
          />
          <link
            rel="canonical"
            href="https://dotpotit.com/industries-we-serve/ai"
          />
          <meta property="og:title" content="AI Development | Dotpot iT" />
          <meta
            property="og:description"
            content="Leverage DotpotIT's AI solutions for business growth. Automate operations, analyze data, and elevate customer experiences with chatbots and virtual assistants. "
          />
          <meta
            property="og:image"
            content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
          />
          <meta
            name="keywords"
            content="Software development company, Artificial intelligence solutions, AI development services."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://dotpotit.com/industries-we-serve/ai"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AI Development | Dotpot iT" />
          <meta
            name="twitter:description"
            content="Leverage DotpotIT's AI solutions for business growth. Automate operations, analyze data, and elevate customer experiences with chatbots and virtual assistants. "
          />
          <meta
            name="twitter:image"
            content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
          />
        </Helmet>
        <Navbar />
        <div className="">
          <section className="relative w-full overflow-hidden overflow-x-clip bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark1:bg-[#0B1120] dark1:bg-none">
            <div className="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark1:block dark1:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
            <div className="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark1:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
            <div className="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark1:opacity-30 lg:h-32 lg:w-[450px] dark1:lg:block xl:h-44 xl:w-[600px]"></div>
            <div className="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark1:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
            <div className="absolute h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark1:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
            <div className="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark1:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
            <div className="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark1:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

            <div className="bg-background-500">
              <div className="container mx-auto pt-[15vh]">
                <NavigatorComponent navigationData={navigationData} />
                <div className="">
                  <img
                    className="w-[400px] md:w-1/2 mx-auto px-5"
                    src={aiImg}
                    alt="AI Development Image"
                  />
                </div>
                {/* cover */}
                <div className="w-full mx-auto px-5 h-52">
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-textColor-500 text-center ">
                    AI Development
                  </h1>
                  <h2 className="text-gray-400 flex flex-col gap-5 p-5 items-center">
                    Leverage DotpotIT's AI solutions for business growth.
                    Automate operations, analyze data, and elevate customer
                    experiences with chatbots and virtual assistants.
                  </h2>
                </div>
                {/* points */}
                <div>
                  <div className="md:flex gap-5 px-5 w-full flex-row-reverse justify-evenly">
                    <div>
                      <img
                        className="w-[450px] mx-auto mb-5 rounded-md"
                        src={ai}
                        alt="Customized AI solutions Image"
                      />
                    </div>
                    <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                      <h2 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-textColor-500">
                        Customized AI{" "}
                        <span className="text-textColor-500">solutions</span>
                      </h2>
                      <p className="text-center text-textColor-500">
                        We provide personalized AI solutions to match the
                        specific needs of our clients.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 md:flex gap-5 px-5 w-full  justify-evenly">
                    <div>
                      <img
                        className="w-[450px] mx-auto mb-5 rounded-md"
                        src={air}
                        alt="Integration of AI Image"
                      />
                    </div>
                    <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                      <h2 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-textColor-500">
                        Integration of
                        <span className="text-textColor-500"> AI </span>
                      </h2>
                      <p className="text-center text-textColor-500">
                        Seamless integration of AI into current processes and
                        systems for enhanced efficiency.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 md:flex gap-5 px-5 w-full flex-row-reverse justify-evenly">
                    <div>
                      <img
                        className="w-[450px] mx-auto mb-5 rounded-md"
                        src={ais}
                        alt="Machine Learning for Predictive Analytics Image"
                      />
                    </div>
                    <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                      <h2 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-textColor-500">
                        Machine Learning for Predictive
                        <span className="text-textColor-500"> Analytics</span>
                      </h2>
                      <p className="text-center text-textColor-500">
                        Use of machine learning algorithms for data analysis and
                        prediction.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 md:flex gap-5 px-5 w-full  justify-evenly">
                    <div>
                      <img
                        className="w-[450px] mx-auto mb-5 rounded-md"
                        src={aib}
                        alt="Rapid AI Deployment Image"
                      />
                    </div>
                    <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                      <h2 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-textColor-500">
                        Rapid AI
                        <span className="text-textColor-500"> Deployment</span>
                      </h2>
                      <p className="text-center text-textColor-500">
                        Fast and efficient deployment of tailored AI solutions
                        to meet unique client needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ai;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "AI",
    link: "/industries-we-serve/ai",
  },
];
