/* This is a component thats render CyberSecurity page
 */

import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

import { Helmet } from "react-helmet";
import cyberSecurity from "../../assets/img/cyberSecurity.png";
import keras from "../../assets/img/icon/ai/keras.png";
import numPy from "../../assets/img/icon/ai/numPy.png";
import pandas from "../../assets/img/icon/ai/pandas.jpg";
import tensorFlow from "../../assets/img/icon/ai/tensorFlow.png";

const CyberSecurity = () => {
  const data = [
    {
      title: "Machine Learning",
      id: 1,
      technologies: [
        {
          img: tensorFlow,
          name: "TensorFlow",
        },
        {
          img: numPy,
          name: "NumPy",
        },
        {
          img: keras,
          name: "Keras",
        },
        {
          img: pandas,
          name: "Pandas",
        },
      ],
    },
    {
      title: "Machine Learning",
      id: 2,
      technologies: [
        {
          img: tensorFlow,
          name: "TensorFlow",
        },
        {
          img: numPy,
          name: "NumPy",
        },
        {
          img: keras,
          name: "Keras",
        },
        {
          img: pandas,
          name: "Pandas",
        },
      ],
    },
    {
      title: "Neural Networks ",
      id: 3,
      technologies: [
        {
          img: tensorFlow,
          name: "TensorFlow",
        },
        {
          img: numPy,
          name: "NumPy",
        },
        {
          img: keras,
          name: "Keras",
        },
        {
          img: pandas,
          name: "Pandas",
        },
      ],
    },
  ];
  useScrollToTop();
  return (
    <div className="">
      <Helmet>
        <title>Cyber Security | Dotpot iT</title>
        <meta
          name="description"
          content="Our Cyber Security provides the state of the earth security services for our customer's data"
        />
        <meta property="og:title" content="Cyber Security | Dotpot iT" />
        <meta
          property="og:description"
          content="Our Cyber Security provides the state of the earth security services for our customer's data"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/cyber-security"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cyber Security | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Our Cyber Security provides the state of the earth security services for our customer's data"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      {/* Navbar */}
      <Navbar />
      <div className="min-h-screen container mx-auto px-3 lg:px-5 pt-[15vh] pb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
          Cyber Security
        </h1>
        <p className="text-md text-gray-400 text-center mb-10">
          Our Cyber Security provides the state of the earth security services
          for our customer's data.
        </p>
        <div className="mb-5 container mx-auto">
          <img className="md:w-1/2 mx-auto " src={cyberSecurity} alt="" />
        </div>
        <div className="container  mx-auto flex flex-col mb-10 my-10">
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-5  block">
            Overview
          </h3>
          {/* Overview */}
          <div className="text-gray-400 flex flex-col gap-5 p-5">
            <p className="text-justify">
              In today’s digital age, cybersecurity threats are becoming more
              frequent and sophisticated, making it crucial for businesses to
              ensure they are protected from cyber attacks. Cybersecurity is not
              just a technical issue, it is a business issue, and ignoring it
              can result in devastating consequences such as data breaches,
              financial losses, and reputational damage. At our cybersecurity
              service, we offer comprehensive solutions to help protect your
              business from cyber threats. Our team of experienced cybersecurity
              professionals have the expertise and tools needed to identify,
              prevent, and respond to security breaches. Here are some of the
              key benefits of our cybersecurity service:
            </p>
          </div>

          {/*card for redirect to service quote */}
          <div className=" border-b h-52 w-full md:w-4/5 mx-auto my-5  rounded-xl border flex justify-center items-center shadow-md overflow-hidden relative">
            {/* blobs */}
            <div className=" flex justify-center items-center">
              <div className="w-96 absolute">
                <div className="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-52 h-52  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-52 h-52  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-center text-purple-500 font-bold text-xl ">
                  Want to Know How Much Your Cyber Security Will Cost?
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

          {/* <TechnologiesTab title="Technologies We Work On" data={data} /> */}

          {/* paragraph */}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
              Threat Intelligence:
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p className="text-justify">
                Our service offers real-time threat intelligence, which involves
                monitoring and analyzing threats to your systems and networks.
                This enables us to identify vulnerabilities and proactively
                address them before they can be exploited by attackers.
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
                <p className="text-justify">
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
                <p className="text-justify">
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
                <p className="text-justify">
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
                <div className="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-52 h-52  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-52 h-52  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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

export default CyberSecurity;
