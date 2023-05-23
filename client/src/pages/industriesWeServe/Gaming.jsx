import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";
import augmentedreality from "../../assets/img/gamedevelopment/augmentedreality.png";
import casualgame from "../../assets/img/gamedevelopment/casualgame.png";
import gamingcover from "../../assets/img/gamedevelopment/gamingcover.png";
import metaverse from "../../assets/img/gamedevelopment/metaverse.png";
import unity3d from "../../assets/img/gamedevelopment/unity3d.png";
import unrealengine from "../../assets/img/gamedevelopment/unrealengine.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const Gaming = () => {
  const worksData = [
    {
      id: 2,
      title: "Unity 3D",
      description:
        "Dotpot iT is a company specializing in Unity 3D game development. They offer services such as game design consultation, programming, 3D modeling, testing, and post-release support. With their expertise, Dotpot helps developers create immersive and engaging games for multiple platforms.",
      illustration: unity3d,
      sectionId: "unity-3D",
    },
    {
      id: 3,
      title: "Metaverse",
      description:
        "Dotpot iT specializes in metaverse game development, offering services that encompass game design consultation, programming, VR/AR integration, user-generated content, quality assurance, and post-release support. They assist developers in creating immersive and interconnected virtual worlds for players to explore and interact with.",
      illustration: metaverse,
      sectionId: "metaverse",
    },
    {
      id: 4,
      title: "Unreal Engine",
      description:
        `Dotpot iT specializes in <a href="https://www.unrealengine.com/en-US" target="_blank" rel="nofollow">Unreal Engine game development,</a> providing services such as game design consultation, programming, 3D modeling, quality assurance, and post-release support. Their expertise helps developers create visually stunning and immersive games using the power of Unreal Engine.`,
      illustration: unrealengine,
      sectionId: "unreal-engine",
    },
    {
      id: 5,
      title: "Augmented Reality",
      description:
        "Dotpot iT specializes in augmented reality (AR) development, offering services such as consultation, programming, asset creation, quality assurance, and post-release support. Their expertise helps developers create immersive and interactive AR experiences that push the boundaries of reality and virtual content integration.",
      illustration: augmentedreality,
      sectionId: "augmented-reality",
    },
    {
      id: 6,
      title: "Casual Games",
      description:
        "Dotpot iT specializes in casual game development, offering services such as game design consultation, programming, visual design, quality assurance, and post-release support. Their expertise helps developers create engaging and visually appealing casual games that cater to a wide audience.",
      illustration: casualgame,
      sectionId: "casual-games",
    },
  ];

  useScrollToTop();

  const location = useLocation();
  const fragment = location.hash.substring(1);

  useEffect(() => {
    if (fragment) {
      const locationElement = document.getElementById(fragment);
      locationElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [fragment]);
  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Game Development | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Dotpot iT provide cutting edge game development service for it's customers."
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/gaming"
        />
        <meta property="og:title" content="Game Development | Dotpot iT" />
        <meta
          property="og:description"
          content="Dotpot iT provide cutting edge game development service for it's customers."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Game Development, Software Development, it company"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/gaming"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Game Development | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Dotpot iT provide cutting edge game development service for it's customers."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>

      <Navbar />
      <div
        className={` md:pt-[15vh] pt-[15vh] ${window.innerWidth > 1280 && "md:pt-[11vh]"
          } `}
      >
        <NavigatorComponent navigationData={navigationData} />
        <div>
          {/* Banner */}
          <div className="bg-primary-100 py-16">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={`mt-10 mb-16 ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                      } duration-1000 `}
                  >
                    <div className="container mx-auto">
                      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center">
                        <div className="text-center md:text-center lg:text-left w-full md:w-1/2 lg:w-1/2 px-3 pb-10 ">
                          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500 mt-5">
                            Game Development
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Revolutionize <a href="https://www.freecodecamp.org/news/what-is-game-development/" target="_blank" rel="nofollow">gaming</a> experience with Dotpot IT's
                            cutting-edge development. Elevate gameplay and
                            immerse yourself in a new era of gaming innovation.
                          </p>
                        </div>
                        <img
                          src={gamingcover}
                          alt="Game Development Image"
                          className="w-full md:w-1/2 lg:w-1/2"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </ReactVisibilitySensor>
          </div>

          {/* body */}
          <div className="container mx-auto w-full overflow-hidden mt-24">
            <>
              <div className={`flex flex-col gap-5`}>
                {worksData.map(
                  ({ id, title, description, illustration, sectionId }) => (
                    <div
                      className={`md:flex justify-center items-center gap-x-20 font-work p-5`}
                      key={id}
                      id={sectionId}
                    >
                      <div
                        className={`w-full md:w-1/2 lg:w-1/2 ${id % 2 === 0 && "order-2"
                          } `}
                      >
                        <ReactVisibilitySensor partialVisibility>
                          {({ isVisible }) => (
                            <div
                              className={` ${isVisible
                                  ? "opacity-100 translate-y-0"
                                  : "translate-y-20 opacity-0"
                                } duration-1000 `}
                            >
                              <h2 className="lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left font-bold mb-5 text-textColor-500">
                                {title}
                              </h2>
                              <p className="lg:text-base md:text-sm text-xs text-gray-400 text-justify">
                                {parse(description)}
                              </p>
                            </div>
                          )}
                        </ReactVisibilitySensor>
                      </div>
                      <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                          <div
                            className={`w-full md:w-1/2 lg:w-1/2 ${id % 2 === 0 && "order-1"
                              } ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "translate-y-20 opacity-0"
                              } duration-1000 `}
                          >
                            <img
                              className="w-4/5 mx-auto"
                              src={illustration}
                              alt={title}
                            />
                          </div>
                        )}
                      </ReactVisibilitySensor>
                    </div>
                  )
                )}
              </div>
            </>
          </div>

          {/* Why Dotpot iT */}
          <div className="py-16 bg-primary-100">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={`${isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                      } duration-1000 p-3 text-textColor-500`}
                  >
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
                      Why Dotpot iT
                    </h2>
                    <img
                      className="w-64 mx-auto"
                      src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                      alt="colored line"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot iT is an excellent choice for game development due
                      to their expertise in IT support services and commitment
                      to delivering innovative solutions. With a dedicated team,
                      they provide comprehensive support throughout the
                      development process, ensuring seamless operations and
                      exceptional customer service. Choose Dotpot iT to leverage
                      their knowledge and experience for successful game
                      development.
                    </p>
                  </div>
                </>
              )}
            </ReactVisibilitySensor>
          </div>

          {/* Get in Touch */}
          <div className="">
            <GetAQuote />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gaming;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Gaming",
    link: "/industries-we-serve/gaming",
  },
];
