import React from "react";
import { Helmet } from "react-helmet";
import sn from "../../assets/img/sn.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const SocialNetworking = () => {
  useScrollToTop();
  return (
    <div className="">
      <Helmet>
        <title>Social Networking | Dotpot iT</title>
        <meta
          name="description"
          content="Connect with your audience like never before - with DotpotiT's social networking solutions"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/social-networking"
        />
        <meta property="og:title" content="Social Networking | Dotpot iT" />
        <meta
          property="og:description"
          content="Connect with your audience like never before - with DotpotiT's social networking solutions"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/industries-we-serve/social-networking"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Networking | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Connect with your audience like never before - with DotpotiT's social networking solutions"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className="bg-background-500">
        <div className="pt-[15vh] container min-h-screen mx-auto">
          <NavigatorComponent navigationData={navigationData} />
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-textColor-500 text-center">
            Social Networking
          </h1>
          <p className="text-lg  text-center mb-10 text-textColor-500">
            Connect with your audience like never before - with DotpotiT's
            social networking solutions.
          </p>
          <div className="container mx-auto">
            <img className="md:w-1/2 mx-auto mb-10" src={sn} alt="" />
          </div>
          <div className="container  mx-auto flex flex-col py-10">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-5  block ">
              Overview
            </h3>
            {/* Overview */}
            <div className="text-textColor-500 flex flex-col gap-5 p-5">
              <p>
                Social networking is a rapidly evolving industry that has
                revolutionized the way people connect with each other online. At
                DotpotiT, we understand the importance of social networking in
                today's digital age, and we offer a range of services to help
                businesses and individuals leverage the power of social
                networking to connect with their audiences.
                <br />
                Our team of experts has extensive experience in designing and
                developing social networking sites that are intuitive,
                user-friendly, and visually appealing. We work closely with our
                clients to understand their unique needs and develop customized
                solutions that meet their specific requirements.
                <br />
                Whether you are looking to build a new social networking site
                from scratch or enhance an existing one, we have the expertise
                and resources to deliver results. Our services include website
                design and development, mobile app development, social media
                marketing, and more.
                <br />
                At DotpotiT, we are committed to helping our clients stay ahead
                of the curve in the ever-changing landscape of social
                networking. Contact us today to learn more about our services
                and how we can help you achieve your goals in the social
                networking industry.
              </p>
            </div>

            {/*card for redirect to service quote */}
            {/* <div className="border-b h-52 w-full md:w-4/5 mx-auto my-5 rounded-xl border flex justify-center items-center shadow-md overflow-hidden relative">
            
            <div className="flex justify-center items-center">
              <div className="w-96 absolute">
                <div class="absolute top-0 -left-4 w-52 h-52 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div class="absolute top-0 -right-4 w-52 h-52 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-8 left-20 w-52 h-52 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-center text-purple-500 font-bold text-xl ">
                  Want to Know How Much Exactly Your Social networking
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
          </div> */}

            {/* paragraph */}
            <div className="my-3">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-textColor-500 ">
                How we work?
              </h2>
              <div className="text-textColor-500 flex flex-col gap-5 p-5">
                <p>
                  At DotpotiT, we work with a diverse range of clients to
                  provide top-notch social networking solutions. Our process
                  starts with understanding our clients' unique needs and
                  tailoring our services to match those requirements. We then
                  utilize the latest technologies and development practices to
                  deliver exceptional results. Our team of experts has years of
                  experience in the industry and is committed to delivering
                  excellence on every project. With our dedication to customer
                  satisfaction and a track record of successful project
                  deliveries, we are confident that we are the best choice for
                  all your social networking needs.
                </p>
                <p>
                  At DotpotiT, we pride ourselves on being a one-stop-shop for
                  all your social networking needs. From ideation to
                  development, and from design to launch, we have you covered
                  every step of the way. Our team of experts has extensive
                  experience in building social networking sites that are
                  user-friendly, secure, and scalable. We are passionate about
                  delivering exceptional results and strive to exceed our
                  clients' expectations. When you work with us, you can rest
                  assured that your project is in good hands.
                </p>
                <p>
                  We are a team of passionate and dedicated professionals who
                  understand the importance of delivering on our promises. We
                  work tirelessly to ensure that our clients' social networking
                  sites are of the highest quality, meet their requirements, and
                  exceed their expectations. With our years of experience,
                  cutting-edge technologies, and commitment to customer
                  satisfaction, we are confident that we are the right choice
                  for all your social networking needs.
                </p>
              </div>
            </div>
            {/* Advantages of Blockchain Technology */}
            <ul className="ml-5">
              <h3 className="text-xl md:text-2xl  my-2 md:mb-1  text-textColor-500">
                Why you should choose us!
              </h3>
              <li className=" ml-5 list-disc text-textColor-500 ">
                Highly experienced team of developers who are passionate about
                building innovative solutions.
              </li>
              <li className=" ml-5 list-disc text-textColor-500 ">
                Proven track record of delivering high-quality projects on time
                and within budget.
              </li>
              <li className=" ml-5 list-disc text-textColor-500 ">
                Commitment to providing exceptional customer service and support
                throughout the entire development process and beyond.
              </li>
              <li className=" ml-5 list-disc text-textColor-500 ">
                We prioritize communication and transparency throughout the
                development process, providing regular updates and involving our
                clients in key decision-making processes.
              </li>
              <li className=" ml-5 list-disc text-textColor-500 ">
                Our team stays up-to-date with the latest industry trends and
                technologies, ensuring that our clients receive cutting-edge
                solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default SocialNetworking;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Social Networking",
    link: "/industries-we-serve/social-networking",
  },
];
