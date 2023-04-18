import React from "react";
import aiImg from "../../assets/img/heroAI.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";

const Ai = () => {
  useScrollToTop();
  return (
    <div>
      <div className="">
      <Helmet>
        <title>AI Development | Dotpot iT</title>
        <meta
          name="description"
          content="DotpotIT offers AI solutions to automate operations, analyze data, and drive business growth with chatbots, virtual assistants, and more"
        />
        <meta property="og:title" content="AI Development | Dotpot iT" />
        <meta
          property="og:description"
          content="DotpotIT offers AI solutions to automate operations, analyze data, and drive business growth with chatbots, virtual assistants, and more"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta property="og:url" content="https://www.dotpotit.com/industries-we-serve/ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Development | Dotpot iT" />
        <meta
          name="twitter:description"
          content="DotpotIT offers AI solutions to automate operations, analyze data, and drive business growth with chatbots, virtual assistants, and more"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
        <Navbar />
        <div className="">
          <section className="pt-[9vh]    relative w-full overflow-hidden overflow-x-clip bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark1:bg-[#0B1120] dark1:bg-none">
            <div className="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark1:block dark1:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
            <div className="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark1:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
            <div className="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark1:opacity-30 lg:h-32 lg:w-[450px] dark1:lg:block xl:h-44 xl:w-[600px]"></div>
            <div className="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark1:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
            <div className="absolute h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark1:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
            <div className="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark1:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
            <div className="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark1:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

            <div className="container mx-auto">
              <div className="">
                <img
                  className="w-[400px] md:w-1/2 mx-auto px-5"
                  src={aiImg}
                  alt=""
                />
              </div>
              {/* cover */}
              <div className="w-full mx-auto px-5 h-52">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center ">
                  AI Development
                </h1>
                <p className="text-gray-400 flex flex-col gap-5 p-5">
                  DotpotIT offers AI solutions to automate operations, analyze
                  data, and drive business growth with chatbots, virtual
                  assistants, and more.
                </p>
              </div>
              {/* points */}
              <div>
                <div className="md:flex gap-5 px-5 w-full flex-row-reverse justify-evenly">
                  <div>
                    <img
                      className="w-[450px] mx-auto mb-5 rounded-md"
                      src="https://assets.entrepreneur.com/content/3x2/2000/20200316170356-GettyImages-1145585734.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg w-full md:w-[590px] border p-5 flex flex-col justify-center items-center">
                    <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-gray-400">
                      Customized AI{" "}
                      <span className="text-primary-500">solutions</span>
                    </h3>
                    <p className="text-center">
                      We provide personalized AI solutions to match the specific
                      needs of our clients.
                    </p>
                  </div>
                </div>

                <div className="mt-5 md:flex gap-5 px-5 w-full  justify-evenly">
                  <div>
                    <img
                      className="w-[450px] mx-auto mb-5 rounded-md"
                      src="https://www.sysbunny.com/blog/wp-content/uploads/2021/01/Artificial-Intelligence-Solutions-2.png"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg w-full md:w-[590px] border p-5 flex flex-col justify-center items-center">
                    <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-gray-400">
                      Integration of
                      <span className="text-primary-500"> AI </span>
                    </h3>
                    <p className="text-center">
                      Seamless integration of AI into current processes and
                      systems for enhanced efficiency.
                    </p>
                  </div>
                </div>

                <div className="mt-5 md:flex gap-5 px-5 w-full flex-row-reverse justify-evenly">
                  <div>
                    <img
                      className="w-[450px] mx-auto mb-5 rounded-md"
                      src="https://cdn-gcp.new.marutitech.com/robot_humanoid_using_tablet_computer_big_data_analytic_1_94eab7101e.jpg"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg w-full md:w-[590px] border p-5 flex flex-col justify-center items-center">
                    <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-gray-400">
                      Machine Learning for Predictive
                      <span className="text-primary-500"> Analytics</span>
                    </h3>
                    <p className="text-center">
                      Use of machine learning algorithms for data analysis and
                      prediction.
                    </p>
                  </div>
                </div>

                <div className="my-5 md:flex gap-5 px-5 w-full  justify-evenly">
                  <div>
                    <img
                      className="w-[450px] mx-auto mb-5 rounded-md"
                      src="https://images.theconversation.com/files/374303/original/file-20201210-18-elk4m.jpg?ixlib=rb-1.1.0&rect=0%2C22%2C7500%2C5591&q=45&auto=format&w=926&fit=clip"
                      alt=""
                    />
                  </div>
                  <div className="rounded-lg w-full md:w-[590px] border p-5 flex flex-col justify-center items-center">
                    <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-gray-400">
                      Rapid AI
                      <span className="text-primary-500"> Deployment</span>
                    </h3>
                    <p className="text-center">
                      Fast and efficient deployment of tailored AI solutions to
                      meet unique client needs.
                    </p>
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
