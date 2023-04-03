import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import coverImg from "../../../assets/img/webDevelopment.jpg";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import WebDevNav from "./WebDevNav";
import { useScrollToTop } from '../../../hooks/useScrollToTop'

const WebsiteDevelopment = () => {
  useScrollToTop()
  return (
    <div className="px-3">
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
          Website Development
        </h1>
        <p className="text-md text-gray-400 text-center mb-10">
          This roadmap outlines the emerging trends and effective strategies for
          web and CMS development.
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
              In today's world, a website is a crucial aspect of any business.
              It serves as a platform to showcase products, skills, and talents.
              At DotpotIt, we understand the importance of websites and provide
              top-notch web and CMS solutions for businesses and startups. As a
              leading custom web development company, we offer tailored services
              to clients worldwide.
            </p>

            <p>
              Our team of talented developers possesses excellent skills and
              expertise in the latest technology and trends. We have
              collaborated with renowned companies to turn their ideas into
              stunning and innovative websites. Our vast experience and
              creativity have enabled us to deliver exceptional website and CMS
              development services to various clients globally. Our developers
              have a unique perspective that allows us to customize web
              development faster and more efficiently. By working with us,
              businesses can improve their functionality, efficiency, and
              overall performance.
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
                  Want to Know How Much Exactly Your Web App Idea Will Cost?
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

          {/* process we follow */}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
              Process We Follow:
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p>How Our Experts Handle The Project Efficiently,</p>
            </div>
          </div>
          {/* 1) Planning */}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
              1) Planning
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p>
                Gather all the information and plan the project, craft the idea
                for the website and CMS development.
              </p>
            </div>
          </div>
          {/* 2) Web Designing*/}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
              2) Web Designing
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p>
                Our team of front-end designers will create a visually appealing
                and responsive website using wireframes and UI/UX design,
                ultimately resulting in a well-crafted prototype.
              </p>
            </div>
          </div>
          {/* 3) Define Content */}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
              3) Define Content
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p>
                Content is an essential aspect of a website, and we understand
                its significance. Our team will provide informative and engaging
                content for your website, ensuring that it is optimized for
                search engines.
              </p>
            </div>
          </div>
          {/* 4) Development */}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
              4) Development
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p>
                Once the website's objectives are established, the development
                process begins, which is a critical pre-final stage of the
                website creation.
              </p>
            </div>
          </div>
          {/* 5) Testing */}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
              5) Testing
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p>
                Before launching the website, testing plays a crucial role in
                identifying any bugs or errors that might affect the user
                experience. It ensures that the website is functioning optimally
                and provides a seamless experience to the users.
              </p>
            </div>
          </div>
          {/* 6) Deployment */}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
              6) Deployment
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p>
                Once all the aspects of website development are complete,
                including design, development, testing, and bug fixing, the
                website is ready for launch. It is time to make the website
                available to the public and start showcasing the business or
                services to the world.
              </p>
            </div>
          </div>
          {/* 7) Post Deployment & Maintenance */}
          <div className="my-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 ">
              7) Post Deployment & Maintenance
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p>
                Post-launch, we offer comprehensive support to ensure that the
                website functions smoothly, and we address any concerns or
                queries that may arise after deployment
              </p>
            </div>
          </div>
          <div>
            <WebDevNav />
            <Outlet />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
