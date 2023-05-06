import React from "react";
import { Helmet } from "react-helmet";
import manufacturingCover from "../../assets/img/manufacturing.png";
import mf1 from "../../assets/img/mf-1.png";
import mf2 from "../../assets/img/mf-2.png";
import mf3 from "../../assets/img/mf-3.png";
import mf4 from "../../assets/img/mf-4.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Manufacturing = () => {
  useScrollToTop();
  return (
    <div>
      <div className="">
        <Helmet>
          <title>Manufacturing | Dotpot iT</title>
          <meta
            name="description"
            content="DotpotIT offers custom software solutions for manufacturing to optimize processes, improve productivity, and reduce costs"
          />
          <meta property="og:title" content="Manufacturing | Dotpot iT" />
          <meta
            property="og:description"
            content="DotpotIT offers custom software solutions for manufacturing to optimize processes, improve productivity, and reduce costs"
          />
          <meta
            property="og:image"
            content="https://www.dotpotit.com/assets/logo-492dab11.png"
          />
          <meta
            property="og:url"
            content="https://www.dotpotit.com/industries-we-serve/manufacturing"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Manufacturing | Dotpot iT" />
          <meta
            name="twitter:description"
            content="DotpotIT offers custom software solutions for manufacturing to optimize processes, improve productivity, and reduce costs"
          />
          <meta
            name="twitter:image"
            content="https://www.dotpotit.com/assets/logo-492dab11.png"
          />
        </Helmet>
        <Navbar />
        <div className="">
          <section className="relative w-full overflow-hidden overflow-x-clip bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark1:bg-[#0B1120] dark1:bg-none">
            <div className="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark1:block dark1:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
            <div className="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark1:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
            <div className="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark1:opacity-30 lg:h-32 lg:w-4/5 md:w-[450px] dark1:lg:block xl:h-44 xl:w-[600px]"></div>
            <div className="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark1:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
            <div className="absolute h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark1:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
            <div className="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark1:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
            <div className="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark1:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

            <div className="bg-bgPrimary-500">
              <div className="container mx-auto pt-[15vh]">
                <NavigatorComponent navigationData={navigationData} />
                <div className="my-5">
                  <img
                    className="w-[400px] md:w-1/2 mx-auto px-5"
                    src={manufacturingCover}
                    alt=""
                  />
                </div>
                {/* cover */}
                <div className="w-full mx-auto px-5 h-52">
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center ">
                    Manufacturing
                  </h1>
                  <p className="text-secondary-500 flex flex-col gap-5 p-5 text-center">
                    DotpotIT offers custom software solutions for manufacturing to
                    optimize processes, improve productivity, and reduce costs.
                  </p>
                </div>
                {/* points */}
                <div>
                  <div className="md:flex gap-5 px-5 w-full flex-row-reverse justify-evenly">
                    <div>
                      <img
                        className="w-4/5 md:w-[450px] mx-auto mb-5 rounded-md"
                        src={mf1}
                        alt=""
                      />
                    </div>
                    <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                      <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-primary-500">
                        Tailored Software
                        <span className="text-primary-500"> Solutions</span>
                      </h3>
                      <p className="text-center text-secondary-500">
                        Customized software solutions designed to meet the
                        specific needs of each client.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 md:flex gap-5 px-5 w-full  justify-evenly">
                    <div>
                      <img
                        className="w-4/5 md:w-[450px] mx-auto mb-5 rounded-md"
                        src={mf2}
                        alt=""
                      />
                    </div>
                    <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                      <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-primary-500">
                        Automation for Efficiency and
                        <span className="text-primary-500"> Accuracy </span>
                      </h3>
                      <p className="text-center text-secondary-500">
                        Implementation of automation to reduce labor costs and
                        improve accuracy.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 md:flex gap-5 px-5 w-full flex-row-reverse justify-evenly">
                    <div>
                      <img
                        className="w-4/5 md:w-[450px] mx-auto mb-5 rounded-md"
                        src={mf3}
                        alt=""
                      />
                    </div>
                    <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                      <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-primary-500">
                        Manufacturing Operations
                        <span className="text-primary-500"> Expertise</span>
                      </h3>
                      <p className="text-center text-secondary-500">
                        Expertise in supply chain management, inventory control,
                        and production scheduling.
                      </p>
                    </div>
                  </div>

                  <div className="py-5 md:flex gap-5 px-5 w-full  justify-evenly">
                    <div>
                      <img
                        className="w-4/5 md:w-[450px] mx-auto mb-5 rounded-md"
                        src={mf4}
                        alt=""
                      />
                    </div>
                    <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                      <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-primary-500">
                        Data Analytics for Better
                        <span className="text-primary-500"> Decisions</span>
                      </h3>
                      <p className="text-center text-secondary-500">
                        Integration of data analytics to provide insights for
                        better decision-making.
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

export default Manufacturing;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Manufacturing",
    link: "/industries-we-serve/manufacturing",
  },
];
