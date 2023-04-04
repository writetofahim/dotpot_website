import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'

const RealEstate = () => {
  useScrollToTop();
  return (
    <div className="px-3">
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
          Real Estate
        </h1>
        <p className="text-lg text-secondary-500 text-center mb-10">
          Expertise you can rely on - Real estate solutions tailored to your
          needs.
        </p>
        <div className="border-b container mx-auto">
          <img
            className="md:w-1/2 mx-auto "
            src="https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031_960_720.jpg"
            alt=""
          />
        </div>
        <div className="container  mx-auto flex flex-col mb-10 my-10">
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-5  block text-primary-500">
            Overview
          </h3>
          {/* Overview */}
          <div className="text-gray-400 flex flex-col gap-5 p-5">
            <p>
              At DotpotiT, we understand the unique challenges that come with
              the real estate industry. With our expertise in technology and
              digital marketing, we are well-equipped to help real estate
              companies stay ahead of the competition and reach their full
              potential.
              <br />
              We offer a range of services tailored specifically for the real
              estate industry, including website design and development, search
              engine optimization, social media marketing, and more. Whether
              you're a small real estate agency or a large brokerage, we have
              the experience and tools necessary to help you succeed.
              <br />
              Our team of experts has a deep understanding of the real estate
              industry and the technology landscape, and we stay up-to-date with
              the latest trends and developments. We work closely with our
              clients to understand their unique needs and goals, and we develop
              customized solutions that deliver real results.
              <br />
              At DotpotiT, we are committed to providing our clients with the
              highest level of service and support. We take pride in our work
              and are passionate about helping real estate companies achieve
              their goals. So if you're looking for a partner to help you take
              your real estate business to the next level, look no further than
              DotpotiT.
            </p>
          </div>

          {/*card for redirect to service quote */}
          <div className="border-b h-52 w-full md:w-4/5 mx-auto my-5 rounded-xl border flex justify-center items-center shadow-md overflow-hidden relative">
            {/* blobs */}
            <div className="flex justify-center items-center">
              <div className="w-96 absolute">
                <div class="absolute top-0 -left-4 w-52 h-52 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div class="absolute top-0 -right-4 w-52 h-52 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-8 left-20 w-52 h-52 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-center text-purple-500 font-bold text-xl ">
                  Want to Know How Much Exactly Your Real estate
                  application Will Cost?
                </h3>
                <h3 className="text-center text-purple-500 font-semibold">
                  "The Experts Are Just A Click Away. Get A Quote."
                </h3>

                <Link
                  to="/services"
                  className="w-52 h-10 flex items-center justify-center rounded-md bg-indigo-500 mx-auto hover:scale-105 transition-all shadow-sm"
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
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-purple-500 ">
              How we work?
            </h2>
            <div className="text-gray-400 flex flex-col gap-5 p-5">
              <p>
              At DotpotiT, we believe that transparency and collaboration are key to creating successful real estate projects. We work closely with our clients to understand their needs and goals, and to ensure that every project is tailored to their specific requirements. Our team of experienced real estate professionals has a deep understanding of the market, and we leverage this expertise to deliver innovative and effective solutions for our clients.
              </p>
              <p>
              Our process begins with a comprehensive consultation, during which we take the time to fully understand our client's vision and objectives. From there, we work closely with our team of architects, designers, and contractors to develop a detailed project plan that encompasses every aspect of the project, from site selection to design and construction.
              </p>
              <p>
              Throughout the project lifecycle, we maintain a high level of communication with our clients, providing regular updates and progress reports to ensure that they are fully informed every step of the way. We pride ourselves on our attention to detail and our ability to navigate complex regulatory environments, and we work tirelessly to ensure that every project is completed on time, on budget, and to the highest possible standard.
              </p>
              <p>
              At DotpotiT, we are committed to delivering exceptional results for our clients, and we approach every project with the same level of dedication and attention to detail. Whether you are looking to develop a new commercial property, a residential development, or a mixed-use project, we have the experience, expertise, and resources to help you achieve your goals.
              </p>
            </div>
          </div>
          {/* Advantages of Blockchain Technology */}
          <ul className="ml-5">
            <h3 className="text-xl md:text-2xl  my-2 md:mb-1  text-purple-500 ">
              Why you should choose us!
            </h3>
            <li className=" ml-5 list-disc text-gray-400 ">
            Our team of experienced professionals has extensive knowledge and expertise in the real estate industry. We stay up to date with the latest market trends and changes to ensure that we provide you with the best advice and service possible.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
            Our top priority is always our clients. We take the time to understand your unique needs and work closely with you to provide customized solutions that meet your specific goals and objectives.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
            At DotpotiT, we believe in being transparent and honest with our clients at all times. We keep you informed throughout the entire process, providing regular updates and communicating clearly and openly.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
            We are committed to upholding the highest standards of integrity and professionalism in everything we do. You can trust that we will always act in your best interests, with honesty, fairness, and respect.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
            We offer competitive pricing for all of our real estate services. We work hard to ensure that you get the best value for your money, without compromising on the quality of our service.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">We are always looking for new and innovative ways to help our clients achieve their goals. We use the latest technologies and tools to provide efficient and effective solutions that are tailored to your specific needs.</li>
          </ul>
        </div>
      </div>
      <OurPartnersSlider />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default RealEstate;
