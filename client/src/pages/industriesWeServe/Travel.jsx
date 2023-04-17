import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Travel = () => {
  useScrollToTop();
  return (
    <div className="">
      <Navbar />
      <div className="pt-[15vh] pb-10 container mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
          Travel
        </h1>
        <p className="text-lg text-secondary-500 text-center mb-10">
          Your all-in-one travel companion - DotpotiT's cutting-edge travel app.
        </p>
        <div className="border-b container mx-auto">
          <img
            className="md:w-1/2 mx-auto "
            src="https://appsamurai.com/wp-content/uploads/2017/10/promote-travel-apps.png"
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
              The travel industry has evolved significantly in recent years,
              with more people looking to explore new destinations and
              experiences. In response, DotpotiT has been working to provide
              innovative and comprehensive technological solutions for travel
              applications. Our solutions are aimed at making travel planning
              and booking easier, more efficient, and more enjoyable for
              customers.
              <br />
              At DotpotiT, we understand the importance of personalization when
              it comes to travel planning. We work with our clients to
              understand their unique needs and preferences, and we use this
              information to develop tailored solutions that meet their specific
              requirements. Our aim is to create a seamless and personalized
              travel experience for each and every customer.
              <br />
              We provide a range of technological solutions, including travel
              booking platforms, travel itinerary management systems, and travel
              information databases. Our platforms are designed to be
              user-friendly and intuitive, allowing customers to easily browse
              and book travel options. We also prioritize security and privacy,
              ensuring that all customer data is protected at all times.
              <br />
              Overall, DotpotiT is committed to providing the best technological
              solutions for the travel industry. We believe that technology can
              transform the way people travel, and we are dedicated to making
              this a reality for our clients.
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
                  Want to Know How Much Exactly Your Travel application Will
                  Cost?
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
                At DotpotiT, we understand the unique needs and challenges of
                the travel industry. Our team of experienced developers,
                designers, and project managers work closely with our clients to
                develop custom technology solutions that meet their specific
                needs. Our collaborative approach ensures that we fully
                understand our clients' requirements and can deliver innovative
                solutions that drive success.
              </p>
              <p>
                We follow a streamlined development process that prioritizes
                quality, efficiency, and scalability. Our team works closely
                with clients to gather requirements and create a detailed
                project plan. We then utilize agile methodologies to develop and
                test the solution in iterative sprints, ensuring that we stay on
                track and deliver on time.
              </p>
              <p>
                Our technology solutions for the travel industry are designed to
                be flexible and scalable, allowing them to adapt to the changing
                needs of our clients' businesses. We prioritize the use of the
                latest technologies and development frameworks, ensuring that
                our solutions are always up-to-date and at the forefront of
                industry trends.
              </p>
              <p>
                At DotpotiT, we believe in providing personalized solutions that
                cater to the unique needs of our clients. Our team of experts
                takes the time to understand your business requirements and
                goals, and we work collaboratively with you to develop a
                solution that meets your specific needs. We also understand that
                technology can be complex, which is why we make it a priority to
                communicate clearly and transparently with our clients every
                step of the way.
              </p>
              <p>
                To ensure the success of our clients, we also provide ongoing
                support and maintenance for our solutions. Our team of dedicated
                professionals is available around the clock to answer any
                questions or concerns you may have and to provide technical
                assistance whenever you need it. We also stay up-to-date with
                the latest industry trends and innovations, so you can be sure
                that your travel application solution is always cutting-edge and
                competitive in the market.
              </p>
            </div>
          </div>
          {/* Advantages of Blockchain Technology */}
          <ul className="ml-5">
            <h3 className="text-xl md:text-2xl  my-2 md:mb-1  text-purple-500 ">
              Why you should choose us!
            </h3>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Industry Experience:</strong> Our team has years of
              experience in developing technology solutions for the travel
              industry, giving us a deep understanding of the unique challenges
              and opportunities that it presents.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Expert Travel Advice:</strong> Our team of travel experts
              has years of experience in the industry, and we use that knowledge
              to provide you with expert travel advice. We'll help you plan your
              trip from start to finish, making sure that every aspect of your
              travel experience is top-notch.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Customized Solutions:</strong> We work closely with
              clients to develop custom solutions that are tailored to their
              specific needs and requirements. Our collaborative approach
              ensures that we deliver solutions that truly meet our clients'
              needs.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Quality and Scalability: </strong>
              Our solutions are designed to be of the highest quality and are
              built with scalability in mind. This ensures that our clients'
              businesses can grow and adapt to changing market conditions.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Cutting-Edge Technology:</strong> We prioritize the use of
              the latest technologies and development frameworks, ensuring that
              our solutions are always at the forefront of industry trends and
              can provide a competitive advantage.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>24/7 Customer Support:</strong> Our team is committed to
              providing exceptional customer support throughout the development
              process and beyond. We work closely with clients to ensure that
              their needs are met and that their technology solutions are
              running smoothly.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Sustainable Tourism:</strong> We believe in responsible
              and sustainable tourism, and we're committed to working with
              partners who share our values. We strive to minimize the
              environmental impact of travel and promote cultural preservation
              and conservation.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Innovations:</strong> We are constantly pushing the
              boundaries of what is possible with technology to provide
              innovative solutions that deliver real value to our clients. Our
              approach is to stay ahead of the curve by investing in the latest
              technologies and tools, so that we can continue to provide
              cutting-edge solutions that keep our clients ahead of their
              competition.
            </li>
          </ul>
        </div>
      </div>
      {/* <OurPartnersSlider /> */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Travel;
