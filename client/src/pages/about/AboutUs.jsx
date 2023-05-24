/**
 * This component is the About Us page of a website.
 * It imports several components and data files, including the Navbar, Footer, OurPartnersSlider, AboutHero, PartnershipModels, ProcessWeFollow, WhoWeWorkWith, RecentWorks, SocialMedia, GoogleMap, and ContactForm.
 * It uses the imported data files to render different sections of the page, including the hero section, main section, and several other sections, such as the partnership models, process we follow, recent works, and social media sections.
 * It also sets a hero image and a button link to the Contact Us page.
 */

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import Particle from "../../components/Hero/Particle";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

import ReactVisibilitySensor from "react-visibility-sensor";
import originstory from "../../assets/img/about/originstory.png";
import ourgoal from "../../assets/img/about/ourgoal.png";
import whoweare from "../../assets/img/about/whoweare.png";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import OurDevelopmentJourney from "../../components/OurDevelopmentJourney/OurDevelopmentJourney";

const AboutUs = () => {
  useScrollToTop();

  // const heroImg =
  //   "https://www.hyperlinkinfosystem.com/assets/uploads/banner/1634022694.png";
  // const button = { title: "Contact Us", link: "/contact" };

  return (
    <>
      <Navbar />
      <div className="w-full pt-[15vh]">
        <Helmet>
          <script type="application/ld+json">
            {`
            {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Dotpot iT",
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
          </script>
          <title>About Us | Dotpot iT leading iT company</title>
          <meta
            name="description"
            content="Dotpot iT provides website design, web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
          />
          <link rel="canonical" href="https://dotpotit.com/about" />
          <meta property="og:title" content="About Us | Dotpot iT" />
          <meta
            property="og:description"
            content="Dotpot iT provides website design, web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
          />
          <meta
            name="keywords"
            content="it company, Website, web development, app development, it supports"
          />
          <meta
            property="og:image"
            content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
          />
          <meta property="og:url" content="https://dotpotit.com/about" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="About Us | Dotpot iT" />
          <meta
            name="twitter:description"
            content="Dotpot iT provides website design, web development, AI, game, app, and blockchain development, along with comprehensive IT support services. Contact us now."
          />
          <meta
            name="twitter:image"
            content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
          />
          <meta property="og:type" content="website" />
        </Helmet>
        <Particle />
        <NavigatorComponent navigationData={navigationData} />
        <AboutSection />

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;

const AboutSection = () => {
  const [activeItem, setActiveItem] = useState("about");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      {/* Who We Are? */}
      <div className="">
        <div className="container mx-auto">
          <ReactVisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <>
                <div
                  className={`mt-10 mb-16 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "translate-y-20 opacity-0"
                  } duration-1000 `}
                >
                  <div className="container mx-auto">
                    <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center">
                      <div className="text-center md:text-center lg:text-left w-full md:w-1/2 lg:w-1/2 px-12 backdrop-blur-sm">
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                          About Dotpot iT, A Leading it Company
                        </h1>
                        <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                          Dotpot iT is a leading IT company that offers a wide
                          range of IT products and services. From app
                          development and web development to game development,
                          AI development, and blockchain development, we provide
                          solutions that meet the unique needs of our clients.
                          We also offer contact center support and tech support
                          to help businesses optimize their operations and
                          achieve their goals. With our expertise and commitment
                          to excellence, Dotpot iT is the ideal partner
                          forbusinesses looking to stay ahead in the
                          rapidly-evolving world of technology.
                        </p>
                      </div>
                      <img
                        src={whoweare}
                        alt="Who We Are Image"
                        className="w-full md:w-1/2 lg:w-1/2 p-5"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </ReactVisibilitySensor>
        </div>
      </div>

      {/* Our Goal */}
      <div className="bg-primary-100">
        <div className="container mx-auto">
          <ReactVisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <>
                <div
                  className={`mt-10 mb-16 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "translate-y-20 opacity-0"
                  } duration-1000 `}
                >
                  <div className="container mx-auto">
                    <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center">
                      <img
                        src={ourgoal}
                        alt="Who We Are Image"
                        className="w-full md:w-1/2 lg:w-1/2 p-5"
                      />
                      <div className="text-center md:text-center lg:text-left w-full md:w-1/2 lg:w-1/2 px-12">
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                          Our Goal
                        </h2>
                        <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                          Dotpot iT's goal as an iT company is to provide
                          innovative solutions, drive digital transformation,
                          deliver exceptional user experiences, foster
                          collaborative partnerships, and stay agile and
                          adaptive in a fast-paced industry. By achieving these
                          goals, Dotpot iT aims to make a positive impact,
                          empower businesses, and help clients succeed in the
                          digital era.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </ReactVisibilitySensor>
        </div>
      </div>

      {/* Origin Story */}
      <div className="">
        <div className="container mx-auto">
          <ReactVisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <>
                <div
                  className={`mt-10 mb-16 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "translate-y-20 opacity-0"
                  } duration-1000 `}
                >
                  <div className="container mx-auto">
                    <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center">
                      <div className="text-center md:text-center lg:text-left w-full md:w-1/2 lg:w-1/2 px-12 backdrop-blur-sm">
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                          Origin Story
                        </h2>
                        <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                          Dotpot iT began its journey in January 2023 with a
                          focus on utilizing the latest technology. With over
                          900 satisfied users, the company has quickly
                          established itself as an innovative force in the
                          industry. Its origin story is rooted in passion,
                          expertise, and a commitment to delivering exceptional
                          solutions. By staying ahead of the curve and working
                          with{" "}
                          <a
                            href="https://www.techopedia.com/definition/26589/cutting-edge-technology"
                            target="_blank"
                          >
                            cutting-edge technology,
                          </a>{" "}
                          Dotpot iT has gained recognition and is poised to make
                          a lasting impact in the digital realm.
                        </p>
                      </div>
                      <img
                        src={originstory}
                        alt="Origin Story Image"
                        className="w-full md:w-1/2 lg:w-1/2 p-5"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </ReactVisibilitySensor>
        </div>
      </div>

      {/* Our Journey */}
      <div className="bg-primary-100">
        <OurDevelopmentJourney />
      </div>

      {/* Get in Touch */}
      <div className="">
        <GetAQuote />
      </div>
    </div>

    // <div className="w-full flex items-center justify-center p-2 bg-background-500 rounded-all py-10">
    //   <div className="container p-3 md:p-5 flex flex-col items-center gap-5">
    //     <h1>
    //       <Typed
    //         className="text-center text-3xl md:text-5xl font-bold text-textColor-500"
    //         strings={["Who We Are?"]}
    //         typeSpeed={100}
    //       />
    //     </h1>
    //     {/* <h1 className="text-center text-gray-600 text-3xl md:text-5xl font-bold">Who We Are ? </h1> */}
    //     <p className="w-full md:w-2/3 text-center text-lg md:text-xl text-textColor-500">
    //       Dotpot iT is a leading IT company that offers a wide range of IT
    //       products and services. From app development and web development to
    //       game development, AI development, and blockchain development, we
    //       provide solutions that meet the unique needs of our clients. We also
    //       offer contact center support and tech support to help businesses
    //       optimize their operations and achieve their goals. With our expertise
    //       and commitment to excellence, Dotpot iT is the ideal partner for
    //       businesses looking to stay ahead in the rapidly-evolving world of
    //       technology.
    //     </p>
    //   </div>
    // </div>
  );
};

const navigationData = [{ title: "About Us", link: "/about" }];
