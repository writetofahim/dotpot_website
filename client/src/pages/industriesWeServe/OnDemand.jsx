import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'

const OnDemand = () => {
  useScrollToTop();
  return (
    <div className="px-3">
      <Navbar />
      <div className="pt-[15vh] min-h-screen">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
          On Demand Solutions
        </h1>
        <p className="text-lg text-secondary-500 text-center mb-10">
        Instant solutions at your fingertips with On Demand Solutions.
        </p>
        <div className="border-b container mx-auto">
          <img
            className="md:w-1/2 mx-auto "
            src="https://www.ondemandsolutions.net/wp-content/uploads/2021/04/xtelesales-ico.png.pagespeed.ic.ShcmC-prh7.png"
            alt="onDemand-img"
          />
        </div>
        <div className="container  mx-auto flex flex-col mb-10 my-10">
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-5  block text-primary-500">
            Overview
          </h3>
          {/* Overview */}
          <div className="text-gray-400 flex flex-col gap-5 p-5">
            <p>
            As our lives become increasingly busy and fast-paced, we often find ourselves needing solutions that can cater to our immediate needs. This is where on-demand solutions come in. At DotpotiT, we specialize in providing technology-driven on-demand solutions to help individuals and businesses meet their needs quickly and efficiently.
              <br />
              Our on-demand solutions cover a range of services, from transportation and delivery to home services and healthcare. We use the latest technology and innovative methods to ensure that our clients can access these services easily, conveniently, and cost-effectively.
              <br />
              Our focus is on providing flexible, customizable solutions that cater to the specific needs of our clients. Whether you're a busy professional looking for a quick meal delivery or a healthcare provider seeking to streamline patient care, our on-demand solutions can help you achieve your goals.
              <br />
              At DotpotiT, we understand the importance of reliability, security, and quality. That's why we work tirelessly to ensure that our solutions are of the highest standards, offering fast and efficient services that you can rely on. With our technology and expertise, we aim to transform the way people access services, making it easier and more convenient for everyone.
              <br />
              At DotpotiT, we take pride in our ability to provide customized solutions that meet the unique needs of each of our clients. Our team of experienced professionals works closely with you to identify your specific requirements and tailor our services to best suit your business. Whether it's developing a new product or improving an existing one, we are dedicated to delivering innovative solutions that exceed your expectations.
              <br />
              At DotpotiT, we believe that technology should be accessible to everyone. That's why we strive to make our solutions affordable and easy to use, without compromising on quality or functionality. Our goal is to help businesses of all sizes to thrive in today's rapidly changing digital landscape by providing them with the tools and resources they need to succeed. With DotpotiT, you can trust that you're getting the best value for your investment, and that your business is in good hands.
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
                  Want to Know How Much Exactly Your On Demand Solution
                  applications Will Cost?
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
              At DotpotiT, we believe in a collaborative approach to working with our clients to provide customized on-demand solutions tailored to their specific needs. Our team of experienced professionals works closely with clients to understand their goals and objectives, and then utilizes the latest technologies and tools to develop and implement the best solutions.
              </p>
              <p>
              Our process begins with a thorough analysis of the client's requirements, followed by the development of a comprehensive project plan that outlines the scope, timeline, and budget of the project. We then proceed to the design and development phase, where we create and refine the solution until it meets the client's satisfaction.
              </p>
              <p>
              Throughout the entire process, we prioritize communication and transparency, keeping our clients informed every step of the way. We also offer ongoing support and maintenance to ensure that the solution remains up-to-date and continues to meet the client's needs.
              </p>
              <p>
              Our approach is to tailor our solutions to the specific needs of our clients. We take the time to understand your business, your goals, and your challenges, and we work closely with you to create a customized solution that meets your unique requirements. We believe that a one-size-fits-all approach is not effective in the on-demand space, and we strive to provide a personalized service that is tailored to your needs.
              </p>
              <p>
              We pride ourselves on our innovative and cutting-edge technology solutions. Our team of experts are always at the forefront of new developments in the on-demand space, and we continually invest in the latest tools and technologies to ensure that we can deliver the best possible solutions for our clients. We are constantly exploring new and better ways to streamline processes, improve efficiencies, and enhance user experiences.
              </p>
              <p>
              At DotpotiT, we are committed to providing a seamless and hassle-free experience for our clients. Our on-demand solutions are designed to be intuitive and user-friendly, and we provide comprehensive training and support to ensure that you and your team are fully equipped to use our technology effectively. We also offer ongoing support and maintenance services to ensure that your solutions are always up-to-date and working optimally.
              </p>
            </div>
          </div>
          {/* Advantages of Blockchain Technology */}
          <ul className="ml-5">
            <h3 className="text-xl md:text-2xl  my-2 md:mb-1  text-purple-500 ">
              Why you should choose us!
            </h3>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Cutting-edge Technology:</strong> At DotpotiT, we pride ourselves on staying ahead of the curve with the latest and most advanced technology solutions. This means that you can be assured that your on-demand solution will be equipped with the latest and most innovative features available.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Expertise & Experience:</strong> Our team of experts has extensive experience in developing on-demand solutions across a wide range of industries. We have a proven track record of delivering high-quality solutions that meet our clients' unique needs and requirements.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Customized Solutions:</strong> We understand that every business is unique, which is why we take a personalized approach to developing on-demand solutions. We work closely with our clients to understand their specific needs and tailor our solutions to meet those needs precisely.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Fast & Reliable service:</strong>
              We know that when it comes to on-demand solutions, time is of the essence. That's why we offer fast and reliable services that you can depend on, ensuring that your solution is up and running as quickly as possible.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Competitive Pricing:</strong> At DotpotiT, we believe in providing high-quality solutions at an affordable price. We offer competitive pricing packages that are designed to meet the needs of businesses of all sizes, from startups to large corporations.
            </li>
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

export default OnDemand;
