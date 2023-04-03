import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import coverImg from "../../assets/img/aiDev.jpeg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const AiDevelopment = () => {
  useScrollToTop();
  return (
    <div className="px-3">
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
          AI Development
        </h1>
        <p className="text-md text-gray-400 text-center mb-10">
          Our AI solutions transform businesses with automation and
          intelligence.
        </p>
        <div className="border-b container mx-auto">
          <img className="md:w-1/2 mx-auto " src={coverImg} alt="" />
        </div>
        <div className="container  mx-auto flex flex-col mb-10 my-10">
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-5  block text-primary-500">
            Overview
          </h3>
          {/* Overview */}
          <div className="text-gray-400 flex flex-col gap-5 p-5">
            <p>
              AI development involves the use of machine learning algorithms to
              create intelligent computer systems that can perform tasks without
              human intervention. It has revolutionized the way businesses
              operate and has found applications in various industries, such as
              healthcare, finance, and transportation. The development of AI
              requires a thorough understanding of programming, data analysis,
              and statistical modeling. The advancements in hardware, software,
              and cloud computing have facilitated the growth of AI. The
              development of deep learning algorithms, neural networks, and
              natural language processing has enabled machines to perform
              complex tasks, such as recognizing images, translating languages,
              and even driving cars. AI development is an exciting field with
              endless possibilities for innovation and growth.
            </p>
          </div>

          {/*card for redirect to service quote */}
          <div className=" border-b h-52 w-full md:w-4/5 mx-auto my-5  rounded-xl border flex justify-center items-center shadow-md overflow-hidden relative">
            {/* blobs */}
            <div className=" flex justify-center items-center">
              <div className="w-96 absolute">
                <div class="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div class="absolute top-0 -right-4 w-52 h-52  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-8 left-20 w-52 h-52  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-center text-purple-500 font-bold text-xl ">
                  Want to Know How Much Exactly Your AI development Will Cost?
                </h3>
                <h3 className="text-center text-purple-500 font-semibold">
                  "The Experts Are Just A Click Away. Get A Quote."
                </h3>

                <Link
                  to="/services"
                  className="  w-52 h-10 flex items-center justify-center rounded-md bg-secondary-500 mx-auto hover:scale-105 transition-all shadow-sm"
                >
                  <div className="flex justify-center items-center gap-3">
                    <p className="text-white font-semibold">Share your Idea</p>
                    <BsArrowRightCircleFill className="text-white hover:cursor-pointer" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* paragraph */}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
              What Is AI Development?
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p>
                Artificial Intelligence (AI) development involves creating
                intelligent machines that can perform tasks that typically
                require human intelligence, such as visual perception, speech
                recognition, decision-making, and language translation. AI
                development is based on the principle of machine learning, where
                machines learn from data, identify patterns, and make decisions
                without human intervention.
              </p>
              <p>
                The three main types of AI development include narrow or weak
                AI, general or strong AI, and super AI. Narrow AI is programmed
                to perform specific tasks such as recognizing speech or driving
                a car. General AI, on the other hand, has the ability to perform
                any intellectual task that a human can do. Super AI is the most
                advanced form of AI and has the ability to surpass human
                intelligence and capabilities.
              </p>
              <p>
                AI development has various applications across industries,
                including healthcare, finance, manufacturing, and
                transportation. AI-powered technologies can improve efficiency,
                accuracy, and speed of operations, leading to cost savings and
                increased productivity. However, ethical concerns related to AI
                development, such as bias and job displacement, need to be
                addressed.
              </p>
            </div>
          </div>

          {/* Why Choose DotpotiT For Machine Learning? */}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-10  block text-gray-400 ">
              Why Choose DotpotiT For Machine Learning?
            </h2>
            {/*1) Improvised Technologies*/}
            <div className="my-3">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
                1) Improvised Technologies
              </h2>
              <div className="text-gray-400 flex flex-col gap-5 p-5">
                <p>
                  AI and Machine Learning are cutting-edge technologies that
                  have found their way into businesses worldwide. At our
                  company, we offer the latest and most advanced technologies to
                  meet our clients' needs. Our developers have the skills and
                  expertise to implement these technologies with precision,
                  ensuring maximum efficiency.
                </p>
              </div>
            </div>
            {/* 2) Dynamic Solution*/}
            <div className="my-3">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
                2) Dynamic Solution
              </h2>
              <div className="text-gray-400 flex flex-col gap-5 p-5">
                <p>
                  DotpotiT provides top-notch Artificial Intelligence and
                  Machine Learning technology, backed by 10+ years of
                  experience. Our ML and AI data solutions offer a wide range of
                  features and dynamic solutions to help businesses thrive.
                </p>
              </div>
            </div>
            {/* 3) Enhance Productivity */}
            <div className="my-3">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
                3) Enhance Productivity
              </h2>
              <div className="text-gray-400 flex flex-col gap-5 p-5">
                <p>
                  Our AI and ML technology improves business productivity, and
                  our professionals develop effective strategies to meet client
                  needs.
                </p>
              </div>
            </div>
            {/* 4) Deep Insights */}
            <div className="my-3">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
                4) Deep Insights
              </h2>
              <div className="text-gray-400 flex flex-col gap-5 p-5">
                <p>
                  We ensure transparent communication with clients when
                  providing AI and ML insights to help their businesses grow.
                  Our team is open about our process, models, and decisions, and
                  we interact with clients to provide deep insights into their
                  project. We acknowledge their demands and strive to meet their
                  business needs.
                </p>
              </div>
            </div>
          </div>


          {/*card for redirect to service quote */}
          <div className=" border-b h-52 w-full md:w-4/5 mx-auto my-5  rounded-xl border flex justify-center items-center shadow-md overflow-hidden relative">
            {/* blobs */}
            <div className=" flex justify-center items-center">
              <div className="w-96 absolute">
                <div class="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div class="absolute top-0 -right-4 w-52 h-52  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-8 left-20 w-52 h-52  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-center text-purple-500 font-bold text-xl ">
                  Want to Know How Much Exactly Your AI development Will Cost?
                </h3>
                <h3 className="text-center text-purple-500 font-semibold">
                  "The Experts Are Just A Click Away. Get A Quote."
                </h3>

                <Link
                  to="/services"
                  className="  w-52 h-10 flex items-center justify-center rounded-md bg-secondary-500 mx-auto hover:scale-105 transition-all shadow-sm"
                >
                  <div className="flex justify-center items-center gap-3">
                    <p className="text-white font-semibold">Share your Idea</p>
                    <BsArrowRightCircleFill className="text-white hover:cursor-pointer" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default AiDevelopment;
