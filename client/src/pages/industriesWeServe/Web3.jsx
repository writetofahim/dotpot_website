import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";
import ReactVisibilitySensor from "react-visibility-sensor";
import agencyweb from "../../assets/img/agencyweb.png";
import coverweb from "../../assets/img/coverweb.png";
import ecommarceweb from "../../assets/img/ecommarceweb.png";
import Footer from "../../components/Footer/Footer";
import GetAQuote from "../../components/GetAQuote/GetAQuote";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Web3 = () => {
  const worksData = [
    {
      id: 1,
      title: "Customized web3 solutions",
      description: `Dotpot IT offers customized Web3 solutions tailored to meet your specific needs. Our expertise includes decentralized applications, smart contracts, tokenization, DeFi integration, and blockchain consulting. We leverage the power of Web3 technologies to provide transparent, secure, and innovative solutions for your business.`,
      illustration: ecommarceweb,
    },
    {
      id: 2,
      title: "Blockchain for Security and Transparency",
      description: `Dotpot IT utilizes blockchain technology to enhance <a href="https://hashstudioz.com/blog/how-does-blockchain-technology-ensure-transparency-in-cryptocurrency-trade/" target="_blank" rel="nofollow">security and transparency.</a> With immutable data storage, secure transactions, decentralization, and smart contracts, we provide solutions that ensure data integrity, eliminate fraud risks, and promote transparent processes.`,
      illustration: agencyweb,
    },
    {
      id: 3,
      title: "Efficient Apps and Smart Contracts",
      description:
        "Dotpot IT specializes in developing efficient Apps and smart contracts. Our expertise lies in automating processes, improving efficiency, and promoting transparency. With our solutions, businesses can streamline operations, reduce costs, and enhance trust in their transactions.",
      illustration: agencyweb,
    },
    {
      id: 4,
      title: "NFT Integration",
      description:
        "Dotpot IT specializes in the integration of NFTs for digital art, collectibles, and gaming. We help artists tokenize their artwork, businesses create NFT-based collectibles, and game developers incorporate NFTs into their gaming ecosystems. Our solutions enhance authenticity, ownership, and trading opportunities in these industries.",
      illustration: agencyweb,
    },
  ];

  useScrollToTop();

  return (
    <div className="bg-background-500">
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
        <title>Web3 Development | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Experience the future with DotpotIT's innovative web3 solutions. Harness the power of blockchain and decentralized technologies for your business success. "
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/industries-we-serve/web3"
        />
        <meta property="og:title" content="Web3 Development | Dotpot iT" />
        <meta
          property="og:description"
          content="Experience the future with DotpotIT's innovative web3 solutions. Harness the power of blockchain and decentralized technologies for your business success. "
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development company, Blockchain development, Decentralized applications (dApps)."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dotpotit.com/industries-we-serve/web3"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web3 Development | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Experience the future with DotpotIT's innovative web3 solutions. Harness the power of blockchain and decentralized technologies for your business success. "
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      <Navbar />
      <div
        className={` md:pt-[15vh] pt-[15vh] ${
          window.innerWidth > 1280 && "md:pt-[11vh]"
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
                    className={`mt-10 mb-16 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "translate-y-20 opacity-0"
                    } duration-1000 `}
                  >
                    <div className="container mx-auto">
                      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center">
                        <div className="text-center md:text-center lg:text-left w-full md:w-1/2 lg:w-1/2 px-3 pb-10 ">
                          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500">
                            Web3 Development by Dotpot iT
                          </h1>
                          <p className="text-center md:text-center lg:text-left text-xs md:text-base text-gray-400 mt-2">
                            Experience the future with DotpotIT's innovative{" "}
                            <a
                              href="https://www.novel.com/web3-solutions"
                              target="_blank"
                              rel="nofollow"
                            >
                              web3 solutions.
                            </a>{" "}
                            Harness the power of blockchain and decentralized
                            technologies for your business success.
                          </p>
                        </div>
                        <img
                          src={coverweb}
                          alt="web development"
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
                {worksData.map(({ id, title, description, illustration }) => (
                  <div
                    className={`md:flex justify-center items-center gap-x-20 font-work p-5`}
                    key={id}
                  >
                    <div
                      className={`w-full md:w-1/2 lg:w-1/2 ${
                        id % 2 === 0 && "order-2"
                      } `}
                    >
                      <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                          <div
                            className={` ${
                              isVisible
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
                          className={`w-full md:w-1/2 lg:w-1/2 ${
                            id % 2 === 0 && "order-1"
                          } ${
                            isVisible
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
                ))}
              </div>
            </>
          </div>

          {/* Why Dotpot iT */}
          <div className="bg-primary-100 py-16">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={`${
                      isVisible
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
                      alt="Separator Image"
                    />
                    <p className="md:w-2/5 w-full mx-auto text-center my-5 text-gray-400">
                      Dotpot IT is at the forefront of web design and
                      development solutions for the travel industry in the era
                      of Web 3. With our deep expertise in this emerging
                      technology, we create visually captivating and immersive
                      websites that cater to the unique needs of the travel
                      market. Dotpot IT offers a range of cutting-edge services,
                      including decentralized itinerary management systems,
                      AI-powered advanced search functionalities, virtual
                      reality experiences, and blockchain-based travel agent
                      profiles. By prioritizing seamless user experiences and
                      leveraging the power of Web 3 technologies, we provide
                      ongoing maintenance and support to ensure optimal website
                      performance. Dotpot IT empowers travel companies to
                      embrace the decentralized web, elevate their online
                      presence, and deliver exceptional digital experiences in
                      this dynamic industry.
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

export default Web3;
const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Web 3",
    link: "/industries-we-serve/web3",
  },
];
