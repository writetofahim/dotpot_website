import React from "react";
import { Helmet } from "react-helmet";
import eaGame from "../../assets/img/eaGame.png";
import gameHero from "../../assets/img/gameHero.jpg";
import gameSoft from "../../assets/img/gameSoft.jpg";
import teamwork from "../../assets/img/teamwork.png";
import unreal from "../../assets/img/unreal.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import GameSlider from "./GameSlider";

const Gaming = () => {
  useScrollToTop();
  const gameData = [
    { image: gameSoft, title: "game soft" },
    { image: eaGame, title: "ea" },
  ];

  return (
    <div>
      <Helmet>
        <title>Gaming | Dotpot iT</title>
        <meta
          name="description"
          content="Revolutionizing Gaming Experience: The Development of DotPot IT"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/gaming"
        />
        <meta property="og:title" content="Gaming | Dotpot iT" />
        <meta
          property="og:description"
          content="Revolutionizing Gaming Experience: The Development of DotPot IT"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/industries-we-serve/gaming"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gaming | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Revolutionizing Gaming Experience: The Development of DotPot IT"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />

      {/* <div>
          <div className="relative">
            <div class="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className=" bg-slate-400 w-72 h-32 bg-transparent  "></div>
          </div>
        </div>  */}

      <div className="">
        <section className="relative w-full overflow-hidden overflow-x-clip bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark1:bg-[#0B1120] dark1:bg-none">
          <div className="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark1:block dark1:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
          <div className="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark1:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
          <div className="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark1:opacity-30 lg:h-32 lg:w-[450px] dark1:lg:block xl:h-44 xl:w-[600px]"></div>
          <div className="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark1:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
          <div className="absolute h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark1:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
          <div className="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark1:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
          <div className="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark1:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

          {/* main container */}
          <div className="bg-background-500">
            <div className="pt-[15vh] pb-10 container mx-auto">
              <NavigatorComponent navigationData={navigationData} />
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-textColor-500 text-center ">
                Game Development
              </h1>
              <p className="text-center text-textColor-500">
                Revolutionizing Gaming Experience: The Development of DotPot IT
              </p>
              {/* slider */}
              <div className="md:flex gap-5  justify-center border-b border-border pb-5">
                <div className=" w-full md:w-2/5 h-82 mx-auto m-10">
                  <GameSlider gameData={gameData} />
                </div>

                <div className="md:w-2/5 h-82 mx-auto rounded-lg  mt-10 p-5 flex flex-col justify-center items-center">
                  <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-textColor-500">
                    Our Game Development{" "}
                    <span className="text-textColor-500">Service</span>
                  </h3>
                  <p className="text-center text-textColor-500">
                    Dotpot provides game development services, handling
                    everything from game design to programming and testing. They
                    focus on user engagement and offer ongoing support.
                  </p>
                </div>
              </div>

              <div className="mt-5 md:flex gap-5 px-5 w-full flex-row-reverse justify-evenly">
                <div>
                  <img
                    className="w-[450px] mx-auto mb-5 rounded-md"
                    src={teamwork}
                    alt=""
                  />
                </div>
                <div className="rounded-lg w-full md:w-[590px] border border-border bordwe p-5 flex flex-col justify-center items-center">
                  <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-textColor-500">
                    Experienced <span className="text-textColor-500">team</span>
                  </h3>
                  <p className="text-center text-textColor-500">
                    Our team consists of skilled game developers and designers
                    with vast experience.
                  </p>
                </div>
              </div>

              <div className="mt-5 md:flex gap-5 px-5 w-full  justify-evenly">
                <div>
                  <img
                    className="w-[450px] mx-auto mb-5 rounded-md"
                    src={unreal}
                    alt=""
                  />
                </div>
                <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                  <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-textColor-500">
                    Cutting-edge game{" "}
                    <span className="text-textColor-500">development </span>
                  </h3>
                  <p className="text-center text-textColor-500">
                    We use innovative technologies and tools for advanced game
                    development.
                  </p>
                </div>
              </div>

              <div className="mt-5 md:flex gap-5 px-5 w-full flex-row-reverse justify-evenly">
                <div>
                  <img
                    className="w-[450px] mx-auto mb-5 rounded-md"
                    src={
                      "https://www.xfire.com/wp-content/uploads/2021/10/Netflix-Twitter-Facebook-Outage-Squid-Game-Meme-Guns.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                  <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-textColor-500">
                    Across different{" "}
                    <span className="text-textColor-500">platforms</span>
                  </h3>
                  <p className="text-center text-textColor-500">
                    We develop games for mobile, PC, and consoles, across
                    multiple platforms.
                  </p>
                </div>
              </div>

              <div className="py-5 md:flex gap-5 px-5 w-full  justify-evenly">
                <div>
                  <img
                    className="w-[450px] mx-auto mb-5 rounded-md"
                    src={gameHero}
                    alt=""
                  />
                </div>
                <div className="rounded-lg w-full md:w-[590px] border border-border p-5 flex flex-col justify-center items-center">
                  <h3 className="text-xl text-center md:text-2xl font-bold mb-2 md:mb-5  block text-textColor-500">
                    Customized game{" "}
                    <span className="text-textColor-500">design</span>
                  </h3>
                  <p className="text-center text-textColor-500">
                    Tailored games to fit client requirements with personalized
                    design and development.
                  </p>
                </div>
              </div>

              {/* <div className="w-96 absolute top-32">
              <div class="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute top-0 -right-4 w-52 h-52  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="absolute -bottom-8 left-20 w-52 h-52  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="w-96 absolute right-0 top-32">
              <div class="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute top-0 -right-4 w-52 h-52  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="absolute -bottom-8 left-20 w-52 h-52  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="w-96 absolute right-0 bottom-32">
              <div class="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute top-0 -right-4 w-52 h-52  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="absolute -bottom-8 left-20 w-52 h-52  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="w-96 absolute ">
              <div class="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute top-0 -right-4 w-52 h-52  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="absolute -bottom-8 left-20 w-52 h-52  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div> */}
            </div>
          </div>
        </section>
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
