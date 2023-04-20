import React from "react";
import { Helmet } from "react-helmet";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import food from "../../assets/img/food.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const FoodAndRestaurant = () => {
  useScrollToTop();
  return (
    <div className="">
      <Helmet>
        <title>Food & Restaurants | Dotpot iT</title>
        <meta
          name="description"
          content="Satisfy your cravings with our innovative Food & Restaurant solutions, crafted with passion and precision"
        />
        <meta property="og:title" content="Food & Restaurants | Dotpot iT" />
        <meta
          property="og:description"
          content="Satisfy your cravings with our innovative Food & Restaurant solutions, crafted with passion and precision"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/industries-we-serve/food-and-restaurant"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Food & Restaurants | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Satisfy your cravings with our innovative Food & Restaurant solutions, crafted with passion and precision"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className="pt-[15vh] pb-10 container mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
          Food & Restaurants
        </h1>
        <p className="text-lg text-secondary-500 text-center mb-10">
          Satisfy your cravings with our innovative Food & Restaurant solutions,
          crafted with passion and precision.
        </p>
        <div className="border-b container mx-auto">
          <img className="md:w-1/2 mx-auto " src={food} alt="food-img" />
        </div>
        <div className="container  mx-auto flex flex-col mb-10 my-10">
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-5  block text-primary-500">
            Overview
          </h3>
          {/* Overview */}
          <div className="text-gray-400 flex flex-col gap-5 p-5">
            <p>
              DotpotiT is a company that offers technology-driven solutions for
              the food and restaurant industry. Our aim is to provide innovative
              and efficient tools that help businesses in this sector to improve
              their operations, increase revenue, and enhance customer
              experience.
              <br />
              With our expertise and experience, we are able to provide a wide
              range of services to the food and restaurant industry. These
              include online ordering systems, table reservation management,
              menu design, food delivery solutions, and more. We understand that
              the food and restaurant industry is highly competitive, and we
              strive to offer cutting-edge solutions that keep our clients ahead
              of the competition.
              <br />
              Our solutions are designed to be scalable and customizable,
              ensuring that they can be tailored to the specific needs of each
              business. We also place a strong emphasis on customer support,
              ensuring that our clients have access to a dedicated team of
              professionals who are ready to assist them with any issues or
              concerns.
              <br />
              At DotpotiT, we believe that technology can play a significant
              role in the success of the food and restaurant industry. By
              leveraging our expertise and innovative solutions, we help
              businesses in this sector to stay ahead of the curve and thrive in
              an increasingly competitive landscape.
              <br />
              At DotpotiT, we understand that the food and restaurant industry
              is not just about offering delicious cuisine, but also about
              providing an overall memorable experience for customers. That's
              why we work with top-notch restaurants and food establishments to
              help them enhance their customer experience through cutting-edge
              technology solutions. Our goal is to ensure that every diner who
              walks through the doors of our partner restaurants has an
              exceptional experience from the moment they make a reservation to
              the time they leave the establishment.
              <br />
              We believe that food is not just a necessity, but a passion.
              That's why DotpotiT is committed to working with the best in the
              food and restaurant industry. We take pride in providing
              technology solutions that enable our partners to focus on their
              passion for crafting exceptional dishes and providing outstanding
              service. By choosing DotpotiT as your technology partner, you can
              focus on your passion for food and leave the technology to us.
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
                  Want to Know How Much Exactly Your Food & Restaurant
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
                At DotpotiT, we understand that every restaurant is unique and
                has its own requirements when it comes to the digital landscape.
                That’s why we offer tailored solutions that cater to the
                specific needs of each of our clients.
              </p>
              <p>
                Our team of experts begins by working closely with our clients
                to understand their business and goals. We then create a
                customized plan that addresses their unique challenges and helps
                them achieve their objectives. Our approach is collaborative,
                and we work closely with our clients every step of the way to
                ensure that their vision is realized.
              </p>
              <p>
                We pride ourselves on being agile and adaptable, and we
                understand that the digital landscape is constantly evolving.
                That’s why we stay up-to-date with the latest trends and
                technologies in the industry. We are committed to delivering
                innovative and cutting-edge solutions that help our clients stay
                ahead of the competition.
              </p>
              <p>
                At DotpotiT, we believe that communication is key to a
                successful partnership. We provide regular updates to our
                clients throughout the process and are always available to
                answer any questions they may have. Our goal is to create a
                long-term partnership that helps our clients achieve their
                business objectives and grow their brand in the digital world.
              </p>
              <p>
                At DotpotiT, we believe that technology can revolutionize the
                food and restaurant industry. Our team of experts works
                tirelessly to develop innovative solutions that cater to the
                specific needs of our clients. From designing custom websites
                and mobile applications to creating efficient online ordering
                and delivery systems, we pride ourselves on delivering
                cutting-edge technology that streamlines operations and
                increases revenue. With DotpotiT, you can be confident that
                you're partnering with a company that's committed to your
                success.
              </p>
            </div>
          </div>
          {/* Advantages of Blockchain Technology */}
          <ul className="ml-5">
            <h3 className="text-xl md:text-2xl  my-2 md:mb-1  text-purple-500 ">
              Why you should choose us!
            </h3>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Customized Solutions:</strong> At DotpotiT, we understand
              that every restaurant has unique needs and requirements. That’s
              why we provide customized solutions that are tailored to meet the
              specific needs of each restaurant.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Experienced Team:</strong> Our team consists of
              experienced professionals who have worked with various restaurants
              and food businesses in the past. With their expertise, we can
              provide top-notch solutions that are both effective and efficient.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Timely Delivery:</strong> We understand that time is of
              the essence in the food and restaurant industry. That’s why we
              ensure timely delivery of our solutions so that our clients can
              stay ahead of the competition.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>Competitive Pricing: </strong>
              We offer our services at competitive pricing, making sure that our
              clients get the best value for their money. Our aim is to provide
              cost-effective solutions that help our clients achieve their
              goals.
            </li>
            <li className=" ml-5 list-disc text-gray-400 ">
              <strong>24/7 Customer Support:</strong> At DotpotiT, we believe in
              providing exceptional customer support to our clients. We are
              always available to answer any questions and provide support
              whenever needed. Our aim is to build long-term relationships with
              our clients based on trust and reliability.
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

export default FoodAndRestaurant;
