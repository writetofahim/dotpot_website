import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import customImg from "../../assets/img/custom-software-development.jpg"

const CustomDevelopment = () => {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] pb-10 container mx-auto">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-primary-500 text-center">
            Coustom Development
          </h1>
          <p className="text-lg text-gray-400 text-center mb-10">
          custom web design and development service 
          </p>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <img
            src={customImg}
            alt="Product image"
          />
        </div>
        <div className="my-12 lg:mx-24 mx-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">Overview</h2>
          <div className="text-gray-400 flex flex-col gap-5 py-2 lg:px-5 text-justify">
            <p>
            Custom web development involves the creation of unique, bespoke websites and web applications that are specifically designed to meet the needs and requirements of a particular business or organization. This is in contrast to off-the-shelf website templates or platforms that are designed to be used by a wide range of businesses.
            </p>

            <p>
            One of the primary benefits of custom web development is that it allows businesses to create a website that is tailored to their specific needs and requirements. This can help businesses achieve their goals more effectively and differentiate themselves from their competitors.
            </p>

            
          </div>
          <div className="pt-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 ">
              Benefits of working with Dotpot IT
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify pb-2">
              Working with Dotpot IT for web design and development services
              offers businesses in the Custom web development industry a range of
              benefits, including customized web solutions, improved online
              visibility, user-friendly websites, e-commerce integration, expert
              support, and increased business growth.
            </p>
            <ul className="list-disc list-inside">
            <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                Tailored to business needs:
                </strong>
                <br />
                <p className="px-2">
                 One of the biggest advantages of custom web design and development is that the website is designed and developed specifically to meet the unique needs and requirements of the business. This ensures that the website is optimized for the business's goals and objectives, and can help to differentiate the business from its competitors.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                Unique design:
                </strong>
                <br />
                <p className="px-2">
                Custom web design allows businesses to create a unique and memorable online presence that reflects their branding and values. This can help to establish the business's identity and build brand recognition, which can be critical in today's crowded digital landscape.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                Responsive design: 
                </strong>
                <br />
                <p className="px-2">
               Custom web development allows businesses to create websites that are optimized for all devices, including desktops, laptops, tablets, and smartphones. This ensures that the website looks and functions well across all devices, providing a seamless user experience for visitors.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                Scalability:{" "}
                </strong>
                <br />
                <p className="px-2">
                Custom web development allows businesses to create websites that can easily scale as their needs grow and evolve. This can help to future-proof the website and ensure that it remains effective in the long term.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold"> Search engine optimization (SEO):</strong>
                <br />
                <p className="px-2">
                Custom web development can include optimized content and design elements that help to improve search engine rankings. This can help to increase visibility and drive more traffic to the website, which can ultimately result in more leads and conversions.
                </p>
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                Security:
                </strong>
                <br />
                <p className="px-2">
                 Custom web development allows businesses to implement robust security measures that protect against cyber threats and safeguard sensitive information. This is especially important for businesses that collect and store customer data, such as ecommerce businesses.
                </p>
              </li>
              
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Expert support: </strong>
                <br />
                <p className="px-2">
                  Dotpot provides expert website maintenance and support
                  services, ensuring that our clients' websites remain
                  up-to-date, secure, and fully functional.
                </p>
              </li>
              
            </ul>
          </div>
          <div className="pt-6 flex flex-col gap-5">
            <h2 className="lg:text-2xl text-xl font-bold mb-2">
              Why we wil be your best choice?
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify">
              Dotpot IT is a top choice for businesses in the custom web design and development service  industry looking for web design and development
              services. With years of experience and expertise in this industry,
              Dotpot IT offers customized web solutions that cater to the unique
              needs of each client. Our team of web developers and designers
              uses cutting-edge technology and modern design trends to create
              visually appealing, user-friendly, and responsive websites that
              are optimized for search engines. We also offer e-commerce website
              development services that help businesses in this industry sell
              their products and services online. Our web design and Development websites/application are
              secure, easy to use 
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
              What sets Dotpot IT apart is its commitment to providing
              high-quality, customer-focused web solutions. We work closely with
              our clients to understand their goals and objectives and provide
              customized solutions that help them achieve their business
              objectives and grow their online presence. Our expert support team
              also provides website maintenance and support services to ensure
              that our clients' websites remain up-to-date, secure, and fully
              functional. By partnering with Dotpot IT, user
              experience, and customer engagement, leading to increased business
              growth and revenue.
            </p>
            <p className="text-gray-400 lg:px-5 text-justify">
            custom software development can provide a range of benefits for businesses, helping them to improve their efficiency, productivity, and competitive advantage. Choosing the right custom software development services provider can ensure that you achieve your business goals and objectives effectively and efficiently.
            </p>
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

export default CustomDevelopment;
