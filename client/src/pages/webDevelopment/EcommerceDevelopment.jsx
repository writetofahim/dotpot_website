import React from "react";
import { Helmet } from "react-helmet";
import EC from "../../assets/img/EC.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const EcommerceDevelopment = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>E-Commerce website Development | Dotpot iT</title>
        <meta
          name="description"
          content="Learn about E-Commerce website Development iT, a leading IT company providing innovative solutions for businesses.visit website for details"
        />
        <meta
          property="og:title"
          content="E-Commerce website Development | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Learn about E-Commerce website Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="	https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/web-development/e-commerce-website"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Learn about E-Commerce website Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className="pt-[15vh] pb-10 container mx-auto">
        <NavigatorComponent navigationData={navigationData} />
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-primary-500 text-center">
            E-Commerce website Development
          </h1>
          <p className="text-lg text-gray-400 text-center mb-10">
            At Dotpot IT, we offer end-to-end E-Commerce website development
            services to help take your online business to the next level. Our
            team of experts will work closely with you to create a custom
            solution tailored to your unique needs, from initial design and
            development to ongoing maintenance and support. With Dotpot IT, you
            can focus on growing your business while we take care of the
            technical details.
          </p>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <img src={EC} alt="Product image" />
        </div>
        <div className="my-12 lg:mx-24 mx-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">Overview</h2>
          <div className="text-gray-400 flex flex-col gap-5 py-2 lg:px-5 text-justify">
            <p>
              Welcome to Dotpot IT, your trusted partner for professional
              E-Commerce website development services. Our team of expert
              developers is dedicated to helping you create a high-quality,
              engaging platform that will enable you to sell your products and
              services online.
            </p>

            <p>
              At Dotpot IT, we understand that a successful E-Commerce website
              is more than just a collection of pages. It's a dynamic and
              interactive platform that allows you to showcase your products,
              engage with your customers, and build a loyal following. That's
              why we approach every project with a focus on user experience and
              engagement, leveraging the latest technologies and design trends
              to create a site that's both beautiful and functional.
            </p>

            <p>
              Our E-Commerce website development services are designed to meet
              your specific needs and exceed your expectations. We offer a range
              of packages to fit every budget, starting from just $2500. Our
              team will work closely with you to understand your goals and
              objectives, and create a customized solution that's tailored to
              your unique requirements.
            </p>
            <p>
              Whether you're just starting out or looking to revamp an existing
              site, our team of experts will guide you through the entire
              development process, from initial consultation to post-launch
              support and maintenance. With Dotpot IT, you can rest assured that
              you're in good hands.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 ">
              Benefits of working with Dotpot IT
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              So why choose Dotpot IT for your E-Commerce website development
              needs? Here are just a few reasons:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Expertise:</strong>
                <br />
                <p className="px-2">
                  Our team has years of experience in the field of E-Commerce
                  website development, and we stay up-to-date with the latest
                  trends and technologies to ensure your site is always
                  cutting-edge.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Customization:</strong>
                <br />
                <p className="px-2">
                  We don't believe in one-size-fits-all solutions. Every
                  E-Commerce website we develop is tailored to the specific
                  needs of our clients, so you can be sure you're getting a
                  solution that's uniquely yours.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Support:</strong>
                <br />
                <p className="px-2">
                  We're here to support you every step of the way, from initial
                  consultation to post-launch maintenance and updates. You can
                  count on us to be there when you need us.
                </p>
              </li>
            </ul>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              Ready to take your E-Commerce website to the next level? Contact
              us today to learn more about our E-Commerce website development
              services and how we can help you achieve your goals.
            </p>
          </div>

          {/* <div className=" border-b h-52 w-full md:w-4/5 mx-auto my-5  rounded-xl border flex justify-center items-center shadow-md overflow-hidden relative">
          <div className=" flex justify-center items-center">
            <div className="w-96 absolute">
              <div className="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-52 h-52  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-52 h-52  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-center text-purple-500 font-bold text-xl ">
                Get Your Idea from Here!
              </h3>
              <h3 className="text-center text-purple-500 font-semibold">
                "The Experts Are Just A Click Away. Get A Quote."
              </h3>

              <Link
                to="/services"
                className="  w-52 h-10 flex items-center justify-center rounded-md bg-secondary-500 mx-auto hover:scale-105 transition-all shadow-sm"
              >
                <div className="flex justify-center items-center gap-3">
                  <p className="text-white font-semibold">Contact With Us</p>
                  <BsArrowRightCircleFill className="text-white hover:cursor-pointer" />
                </div>
              </Link>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EcommerceDevelopment;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "E-Commerce Development",
    link: "/web-development/e-commerce-website",
  },
];
