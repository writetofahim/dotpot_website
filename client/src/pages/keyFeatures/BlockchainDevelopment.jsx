import React from "react";
import { Helmet } from "react-helmet";
import coverImg from "../../assets/img/blockchainDev.jpg";
import ethereum from "../../assets/img/icon/blockchain/crypto.png";
import kotlin from "../../assets/img/icon/blockchain/kotlin.webp";
import solidity from "../../assets/img/icon/blockchain/solidity.png";
import stellar from "../../assets/img/icon/blockchain/stellar.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import TechnologiesTab from "../../components/technologiesTab/TechnologiesTab";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const BlockchainDevelopment = () => {
  const data = [
    {
      title: "Platforms",
      id: 1,
      technologies: [
        {
          img: ethereum,
          name: "Ethereum",
        },
        {
          img: stellar,
          name: "Stellar",
        },
      ],
    },
    {
      title: "Languages",
      id: 2,
      technologies: [
        {
          img: solidity,
          name: "Solidity",
        },
        {
          img: kotlin,
          name: "Kotlin",
        },
      ],
    },
  ];

  useScrollToTop();
  return (
    <div className="">
      <Helmet>
        <title>Blockchain Development | Dotpot iT</title>
        <meta
          name="description"
          content="Hire The Expert Development Team of Blockchain Technology"
        />
        <meta
          property="og:title"
          content="Blockchain Development | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Hire The Expert Development Team of Blockchain Technology"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/blockchain-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blockchain Development | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Hire The Expert Development Team of Blockchain Technology"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className="bg-bgPrimary-500">
        <div className="pt-[15vh] container mx-auto pb-10 min-h-screen p-3">
          <NavigatorComponent navigationData={navigationData} />

          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
            Blockchain Development
          </h1>
          <p className="text-md text-secondary-500 text-center mb-10">
            Hire The Expert Development Team of Blockchain Technology!
          </p>
          <div className="mb-5 container mx-auto">
            <img className="md:w-1/2 mx-auto " src={coverImg} alt="" />
          </div>
          <div className="container  mx-auto flex flex-col mb-10 my-10">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-5  block text-primary-500">
              Overview
            </h3>
            {/* Overview */}
            <div className="text-primary-500 flex flex-col gap-5 p-5">
              <p className="text-justify">
                Blockchain technology has become a hot topic among businesses,
                particularly in the IT industry. It has paved the way for secure
                payment gateways and is an excellent form of database storage.
                Using records or blocks, blockchain technology stores data and
                automatically copies it with the mechanism of cryptography,
                providing a more secure data storage platform. As a result, data
                is stored securely in multiple areas, reducing the overall cost of
                data storage. This technology supports cryptocurrencies and
                digital currencies, making it a game-changer in the finance
                industry. With a significant amount of big data, businesses can
                hire blockchain developers to create new and more efficient
                business processes.
              </p>
            </div>

            {/*card for redirect to service quote */}
            {/* <div className=" border-b h-52 w-full md:w-4/5 mx-auto my-5  rounded-xl border flex justify-center items-center shadow-md overflow-hidden relative">
            
            <div className=" flex justify-center items-center">
              <div className="w-96 absolute">
                <div className="absolute top-0 -left-4 w-52 h-52  bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-52 h-52  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-52 h-52  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-center text-purple-500 font-bold text-xl ">
                  Want to Know How Much Exactly Your Blockchain development Will
                  Cost?
                </h3>
                <h3 className="text-center text-purple-500 font-semibold">
                  "The Experts Are Just A Click Away. Get A Quote."
                </h3>

                <Link
                  to="/services"
                  className="  w-52 h-10 flex items-center justify-center rounded-md bg-secondary-500 mx-auto hover:scale-105 transition-all shadow-sm"
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
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-primary-500 ">
                What is Blockchain?
              </h2>
              <div className="text-primary-500 flex flex-col gap-5 p-5">
                <p className="text-justify">
                  Blockchain is a distributed digital ledger that securely stores
                  data and ensures its integrity through cryptography. It is not
                  limited to currency transactions but extends to any domain where
                  valuable assets are transacted, including contracts, personal
                  information, health records, and business data.
                </p>
                <p className="text-justify">
                  With its unique features, such as decentralization,
                  transparency, and immutability, blockchain technology offers
                  many benefits to businesses, including increased security,
                  efficiency, and cost savings. As a result, many industries are
                  exploring the use of blockchain, including finance, healthcare,
                  supply chain management, and more. As the technology continues
                  to evolve and mature, it has the potential to transform the way
                  businesses operate and interact with each other.
                </p>
              </div>
            </div>
            {/* Advantages of Blockchain Technology */}
            <ul className="ml-5">
              <h3 className="text-xl md:text-2xl  my-2 md:mb-1  text-primary-500 font-bold">
                Advantages of Blockchain Technology
              </h3>
              <li className=" ml-5 list-disc text-primary-500 pl-2">Efficiency</li>
              <li className=" ml-5 list-disc text-primary-500 pl-2">Transparency</li>
              <li className=" ml-5 list-disc text-primary-500 pl-2">Trust</li>
              <li className=" ml-5 list-disc text-primary-500 pl-2">Flexibility</li>
            </ul>
          </div>

          <TechnologiesTab
            title="Platforms and technologies we use"
            data={data}
          />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default BlockchainDevelopment;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Blockchain Development",
    link: "/key-features/blockchain-development",
  },
];
