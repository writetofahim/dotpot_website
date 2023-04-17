import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import blog_site from "../../assets/img/blog_site.png"

const BlogDevelopment = () => {
  useScrollToTop();
  return (
    <div>
    <Navbar />
    <div className="pt-[15vh] pb-10 container mx-auto">
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-primary-500 text-center">
        Blog Site Development
        </h1>
        <p className="text-lg text-gray-400 text-center mb-10">
        "Developing a successful blog site is not just about creating a platform, it's about creating a community." - Darren Rowse
        </p>
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <img
          src={blog_site}
          alt="Product image"
        />
      </div>
      <div className="my-12 lg:mx-24 mx-6">
        <h2 className="lg:text-2xl text-xl font-bold mb-4">Overview</h2>
        <div className="text-gray-400 flex flex-col gap-5 py-2 lg:px-5 text-justify">
          <p>
          Welcome to Dotpot IT, your one-stop-shop for professional blog site development services. Our team of expert developers is dedicated to helping you create a robust and engaging platform that will enable you to share your message with the world.
          </p>

          <p>
          At Dotpot IT, we believe that a successful blog site is more than just a collection of pages. It's a dynamic and interactive community that allows you to connect with your readers and build a loyal following. That's why we approach each project with a focus on user experience and engagement, leveraging the latest technologies and design trends to create a site that's both beautiful and functional.
          </p>

          <p>
          Our blog site development services are designed to meet your specific needs, whether you're just starting out or looking to revamp an existing site. We offer a range of packages to fit every budget, starting from just $1000. Our team will work closely with you to understand your goals and objectives, and tailor our services to meet your unique requirements.
          </p>
        </div>
        <div className="pt-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4 ">
            Benefits of working with Dotpot IT
          </h2>
          <p className="text-gray-400 lg:px-5 text-justify pb-2">
          So why choose Dotpot IT for your blog site development needs? Here are just a few reasons:
          </p>
          <ul className="list-disc list-inside">
            <li className="text-gray-400 mb-2 lg:px-10 px-3">
              <strong className="font-semibold">
              Expertise: 
              </strong>
              <br />
              <p className="px-2">
              Our team has years of experience in the field of web development, and we stay up-to-date with the latest trends and technologies to ensure your site is always cutting-edge.
              </p>
            </li>
            <li className="text-gray-400 mb-2 lg:px-10 px-3">
              <strong className="font-semibold">
              Customization: 
              </strong>
              <br />
              <p className="px-2">
              We don't believe in cookie-cutter solutions. Every site we develop is tailored to the specific needs of our clients, so you can be sure you're getting a solution that's uniquely yours.
              </p>
            </li>
            <li className="text-gray-400 mb-2 lg:px-10 px-3">
              <strong className="font-semibold">
              Support:
              </strong>
              <br />
              <p className="px-2">
              We're here to support you every step of the way, from initial consultation to post-launch maintenance and updates. You can count on us to be there when you need us.
              </p>
            </li>
          </ul>
          <p className="text-gray-400 lg:px-5 text-justify pb-2">Ready to take your blog site to the next level? Contact us today to learn more about our blog site development services and how we can help you achieve your goals.</p>
        </div>
        
        <div className=" border-b h-52 w-full md:w-4/5 mx-auto my-5  rounded-xl border flex justify-center items-center shadow-md overflow-hidden relative">
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
        </div>
      </div>
    </div>
    <Footer />
  </div>
    );
};

export default BlogDevelopment;
