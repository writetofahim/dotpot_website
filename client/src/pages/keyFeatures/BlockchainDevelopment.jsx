import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";
import blockchaindevelopment from "../../assets/img/blockchaindevelopment.png";
import blockchainintegration from "../../assets/img/blockchainintegration.png";
import cryptocurrencywallet from "../../assets/img/cryptocurrencywallet.png";
import decentralizedapplication from "../../assets/img/decentralizedapplication.png";
import tokendevelopment from "../../assets/img/tokendevelopment.png";

import blockchain_exchange from "../../assets/img/blockchain/blockchain_exchange.png";
import ethereum_blockchain from "../../assets/img/blockchain/ethereum_blockchain.png";
import smart_contracts from "../../assets/img/blockchain/smart_contracts.png";

import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import parse from "react-html-parser";

const BlockchainDevelopment = () => {
  const worksData = [
    {
      id: 1,
      title: "Blockchain Wallet Development",
      description:
        "Dotpot iT offers professional blockchain wallet development services. We specialize in creating secure, user-friendly wallets for managing digital assets. Our expertise ensures seamless integration with blockchain networks, advanced security measures, and a smooth user experience. Trust us for reliable blockchain wallet solutions.",
      illustration: cryptocurrencywallet,
      sectionId: "wallet",
    },
    {
      id: 2,
      title: "Blockchain Exchange Development",
      description:
        "Dotpot iT specializes in creating secure, efficient, and user-friendly digital asset exchange platforms. Our development services encompass advanced features like order matching, multi-currency support, liquidity management, and KYC/AML compliance. Trust us for reliable exchange development that fosters transparency and innovation in the digital asset ecosystem.",
      illustration: blockchain_exchange,
      sectionId: "exchange",
    },
    {
      id: 3,
      title: "Ethereum Blockchain Development",
      description:
        "Dotpot iT offers expert Ethereum blockchain development services. We specialize in building decentralized applications (DApps) and smart contracts on the Ethereum platform. Our team ensures secure, scalable, and innovative solutions to harness the power of Ethereum for businesses and startups. Trust us for reliable Ethereum development services.",
      illustration: ethereum_blockchain,
      sectionId: "ethereum",
    },
    {
      id: 4,
      title: "Smart Contracts Development",
      description:
        "Unlock the power of smart contracts with Dotpot iT. Our Ethereum blockchain expertise enables automated and secure digital transactions. Enhance efficiency, transparency, and trust in your business processes with our smart contract development services.",
      illustration: smart_contracts,
      sectionId: "smart-contact",
    },
    {
      id: 5,
      title: "Private Blockchain Solutions",
      description:
        "Dotpot iT specializes in delivering private blockchain services tailored to meet your business needs. Our expert team designs and develops secure and customizable private blockchain networks, empowering you with enhanced data privacy, immutability, and decentralized control. Harness the potential of private blockchain technology for your organization's digital transformation.",
      illustration: blockchainintegration,
      sectionId: "private-blockchain",
    },

    {
      id: 6,
      title:
        "NFT Marketplace Development: Empowering Digital Creativity and Collectibles",
      description:
        "Dotpot iT offers professional NFT marketplace development services. We build customized platforms that enable creators to showcase and sell their unique digital assets as non-fungible tokens (NFTs). Our solutions provide seamless buying, selling, and trading experiences, fostering a vibrant ecosystem for digital art, collectibles, and unique virtual assets. Step into the world of NFTs with our reliable and innovative marketplace solutions.",
      illustration: cryptocurrencywallet,
      sectionId: "nft-arketplace",
    },
    {
      id: 7,
      title: "Decentralized Application Development",
      description:
        "Dotpot iT specializes in building custom Decentralized Applications (DApps) that run on blockchain networks, providing increased security and transparency. Our experienced developers use blockchain technologies like Ethereum, Hyperledger, and EOS to create DApps that meet your specific requirements and use cases. Contact us to learn more about how we can help you build a custom DApp that meets your business needs.",
      illustration: decentralizedapplication,
      sectionId: "decentralized",
    },
    {
      id: 8,
      title: "Token Development",
      description:
        "Dotpot iT offers custom Token Development services to create and launch Initial Coin Offerings (ICOs) on various blockchain networks. Our experienced developers use blockchain technologies like Ethereum, EOS, and TRON to create custom tokens that meet your specific business requirements. Contact us to learn more about how we can help you launch a custom token on the blockchain network of your choice.",
      illustration: tokendevelopment,
      sectionId: "token-development",
    },
    {
      id: 9,
      title: "Blockchain Integration ",
      description:
        `Dotpot iT offers <a href="https://medium.com/swlh/blockchain-integration-a-step-by-step-guide-7371f49c72e1" target="_blank" rel="nofollow">Blockchain Integration</a> services to help businesses integrate blockchain technology into their existing systems. Our experienced developers can help you connect your systems to a blockchain network, enabling increased security, transparency, and efficiency. Contact us to learn more about how we can help you integrate blockchain technology into your business processes.`,
      illustration: blockchainintegration,
      sectionId: "blockchain",
    },
  ];

  useScrollToTop();

  const location = useLocation();
  const fragment = location.hash.substring(1);
  console.log("fragment", fragment);

  useEffect(() => {
    if (fragment) {
      const locationElement = document.getElementById(fragment);
      locationElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [fragment]);

  return (
    <div className="bg-background-500">
      <Helmet>
        <title>Blockchain Development | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Hire The Expert Development Team of Blockchain Technology"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/key-features/blockchain-development"
        />
        <meta
          name="keywords"
          content="Software Development Company, Blockchain Wallet Development, Blockchain Exchange Development"
        />
        <meta
          property="og:title"
          content="Blockchain Development | Dotpot iT"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Hire The Expert Development Team of Blockchain Technology"
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
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
                          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                            Blockchain Development with Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Transform the future with Dotpot iT - Your expert
                            partner for custom <a href="https://www.coursera.org/articles/blockchain-developer" target="_blank" rel="nofollow">blockchain solutions.</a> Build
                            secure and transparent systems with our cutting-edge
                            development services.
                          </p>
                        </div>
                        <img
                          src={blockchaindevelopment}
                          alt="blockchain Development"
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
          <div className="container mx-auto w-full overflow-hidden">
            <>
              <div className={`flex flex-col gap-5`}>
                {worksData.map(
                  ({ id, title, description, illustration, sectionId }) => (
                    <div
                      id={sectionId}
                      className={`md:flex justify-center items-center gap-x-20 font-work p-5`}
                      key={id}
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

          {/* Technologies We Use */}
          <div className="bg-primary-100 py-16">
            <div className="container mx-auto ">
              <ReactVisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <>
                    <div
                      className={`${isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                        } duration-1000 p-3 text-textColor-500`}
                    >
                      <h2 className="lg:text-3xl md:text-3xl text-xl font-bold text-center">
                        Technologies We Use
                      </h2>
                      <img
                        className="w-64  mx-auto pb-14"
                        src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                        alt="colored line"
                      />
                      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                        <div className="text-center md:text-center lg:text-left w-full lg:w-1/2 px-3 pb-10">
                          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-5">
                            We build Using Latest Technologies
                          </h2>
                          <p className="md:text-base text-xs text-gray-400 text-justify">
                            Dotpot iT is an innovative company that stays ahead
                            of the curve by utilizing cutting-edge technologies.
                            Our team of experts constantly explores the latest
                            tools and techniques to deliver effective solutions
                            for businesses. By leveraging the power of the
                            latest technologies, we develop transformative
                            solutions that help businesses stay competitive and
                            drive growth. Partnering with Dotpot iT means
                            accessing the most advanced and innovative
                            technologies available today.
                          </p>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center gap-10">
                          <div className="flex gap-10 flex-wrap justify-center">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                              alt="node"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/2048px-Ethereum-icon-purple.svg.png"
                              alt="ethereum"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                            <img
                              src="https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/web-3-icon.svg"
                              alt="ethereum"
                              className="w-24 rounded bg-white px-3 py-6 hover:scale-105 hover:shado xl transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </ReactVisibilitySensor>
            </div>
          </div>

          {/* Why Dotpot iT */}
          <div className="py-16">
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
                      Dotpot iT provides top-notch Blockchain Development
                      services that utilize the latest technologies at an
                      affordable cost. Our focus is on delivering innovative and
                      user-friendly blockchain-based solutions for businesses of
                      all industries. We have a team of experienced developers
                      who are committed to providing high-quality solutions that
                      exceed clients' expectations and offer exceptional
                      customer service throughout the development process.
                      Choose Dotpot iT for cutting-edge blockchain development
                      that helps your business thrive.
                    </p>
                  </div>
                </>
              )}
            </ReactVisibilitySensor>
          </div>

          {/* Get in Touch */}
          <div className="bg-primary-100">
            <GetAQuote />
          </div>
        </div>
      </div>
      <Footer />
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
