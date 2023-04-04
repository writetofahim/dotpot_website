import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import aiImg from "../../assets/img/heroAI.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Ai = () => {
  return (
    <div>
      <div className="">
        <Navbar />
        <div className="">
          <section className="pt-[9vh]    relative w-full overflow-hidden overflow-x-clip bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[#0B1120] dark:bg-none">
            <div className="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
            <div className="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
            <div className="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
            <div className="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
            <div className="absolute h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
            <div className="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
            <div className="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

            <div className="">
              <img className="w-[400px] mx-auto px-5" src={aiImg} alt="" />
            </div>
            <div className="w-full mx-auto px-5 h-52">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center ">
                AI Development
              </h1>
              <p>
                AI development involves the use of machine learning algorithms
                to create intelligent computer systems that can perform tasks
                without human intervention. It has revolutionized the way
                businesses operate and has found applications in various
                industries, such as healthcare, finance, and transportation. The
                development of AI requires a thorough understanding of
                programming, data analysis, and statistical modeling. The
                advancements in hardware, software, and cloud computing have
                facilitated the growth of AI. The development of deep learning
                algorithms, neural networks, and natural language processing has
                enabled machines to perform complex tasks, such as recognizing
                images, translating languages, and even driving cars. AI
                development is an exciting field with endless possibilities for
                innovation and growth.
              </p>
              
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ai;
