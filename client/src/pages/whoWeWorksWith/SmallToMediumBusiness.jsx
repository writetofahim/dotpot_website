import React from "react";
import stmb from "../../assets/img/stmb.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Small and Medium Business",
    link: "/who-we-works-with/small-and-medium-business",
  },
];

const SmallToMediumBusiness = () => {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <div className="pt-[15vh] pb-10 container mx-auto">
        <NavigatorComponent navigationData={navigationData} />
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-primary-500 text-center">
            Small & Medium Business
          </h1>
          <p className="text-lg text-gray-400 text-center mb-10">
            Empowering Small & Medium small and mediums: How DotPot IT Can Help
            Your Business Grow
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img src={stmb} alt="image" />
        </div>
        <div className="my-12 lg:mx-24 mx-6">
          <h2 className="lg:text-2xl text-xl font-bold mb-4">Overview</h2>
          <div className="text-gray-400 flex flex-col gap-5 py-2 lg:px-5 text-justify">
            <p>
              Small and Medium-sized (SMEs) are critical components of the
              global economy. These businesses have fewer than 500 employees and
              are essential contributors to job creation, innovation, and
              economic growth. SMEs face numerous challenges, including limited
              access to resources, funding, and expertise. However, with the
              right support, these businesses can thrive and succeed.
            </p>

            <p>
              At Dotpot IT, we understand the unique needs of small and
              medium-sized businesses. We provide a range of services designed
              to help SMEs overcome their challenges and grow their businesses.
              Our team of experts has extensive experience working with SMEs
              across a range of industries, providing them with the tools and
              resources they need to succeed. Whether it's developing a
              marketing strategy, building a website, or implementing new
              technologies, we are here to help SMEs achieve their goals.
            </p>

            <p>
              In this rapidly changing business landscape, SMEs must stay agile
              and adapt to new challenges. With our support, SMEs can enhance
              their competitiveness, increase their market share, and create a
              solid foundation for future growth. Our solutions are tailored to
              meet the unique needs of each SME we work with, ensuring that they
              receive the support they need to succeed.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 ">
              What is the definition of a small and medium-sized business (SME)?
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify">
              An SME is a business that has fewer than 500 employees. This
              definition may vary depending on the industry or country.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 ">
              What are some of the challenges faced by small and medium-sized
              businesses?
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify">
              SMEs face numerous challenges, including limited access to funding
              and resources, a lack of expertise, and difficulty competing with
              larger businesses.
            </p>
            <ul className="list-disc list-inside">
              <h4 className="text-gray-400 lg:px-5 mt-2 font-semibold">
                Common Challenges of Small & Medium Businesses:
              </h4>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                  Limited Access to Funding:
                </strong>
                SMEs may have difficulty accessing financing, especially in the
                early stages of their business. Banks and other lenders may be
                hesitant to provide loans to small businesses, making it
                challenging to raise the necessary capital.
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Limited Resources:</strong>
                Small and medium-sized businesses may not have the same level of
                resources as larger businesses. This can make it difficult to
                compete in the market, as they may not be able to invest in the
                same technology, marketing, or other resources.
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Limited Expertise:</strong>
                SMEs may not have the same level of expertise in all areas of
                their business, which can make it challenging to manage and grow
                their business effectively. They may need to seek outside help
                to fill in these gaps.
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Difficulty Competing:</strong>
                Small and medium-sized businesses may find it challenging to
                compete with larger businesses due to their limited resources
                and market share. They may need to find innovative ways to
                differentiate themselves and compete effectively.
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                  Regulatory Compliance:
                </strong>
                SMEs may face challenges complying with regulations and laws,
                which can be complex and costly to navigate. This can be
                especially challenging for businesses in highly regulated
                industries.
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">
                  Recruiting and Retaining Talent:
                </strong>
                SMEs may struggle to attract and retain talent, as they may not
                be able to offer the same level of benefits and compensation as
                larger businesses. This can make it challenging to build a
                strong team and grow the business.
              </li>
            </ul>
          </div>
          <div className="pt-6">
            <h2 className="lg:text-2xl text-xl font-bold mb-4">
              How can Dotpot iT support small and medium businesses?
            </h2>
            <p className="text-gray-400 lg:px-5 text-justify">
              Dotpot IT can provide small and medium businesses with a range of
              services to help them leverage technology and achieve their goals.
              This may include IT consulting, software development, network
              security, cloud solutions, and more. By working with DotPot IT,
              small and medium businesses can stay ahead of the curve and
              achieve long-term success.
            </p>
            <ul className="list-disc list-inside">
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">IT consulting:</strong>Dotpot
                IT can provide small and medium businesses with expert advice
                and guidance on technology strategy, software selection, and
                system architecture to ensure that their technology invebents
                align with their business goals.
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Software development:</strong>
                Dotpot IT can develop custom software solutions to meet the
                unique needs of small and medium businesses, including web and
                mobile applications, small and medium resource planning (ERP)
                systems, and more.
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Network security:</strong>
                Dotpot IT can help small and medium businesses protect their
                networks from cyber threats by implementing firewalls, intrusion
                detection systems, and other security measures. They can also
                conduct regular security audits to identify vulnerabilities and
                ensure compliance with regulatory requirements.
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Cloud solutions:</strong>
                Dotpot IT can help small and medium businesses leverage cloud
                computing to reduce costs, increase scalability, and improve
                flexibility. This may include cloud migration services, cloud
                infrastructure management, and cloud application development.
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Data analytics:</strong>Dotpot
                IT can help small and medium businesses gain insights from large
                amounts of data through advanced analytics techniques such as
                machine learning, data mining, and predictive analytics. This
                can help them make data-driven decisions and improve business
                performance.
              </li>
              <li className="text-gray-400 mb-2 lg:px-10 px-3">
                <strong className="font-semibold">Digital marketing:</strong>
                Dotpot IT can help small and medium businesses build their
                online presence and reach a wider audience through digital
                marketing techniques such as search engine optimization (SEO),
                social media marketing, and email marketing.
              </li>
            </ul>
          </div>
          <div className="pt-6">
            <p className="text-gray-400 lg:px-5 text-justify">
              By providing these and other services, Dotpot IT can support small
              and medium businesses in achieving their goals, improving
              efficiency, and gaining a competitive advantage in their
              respective industries.
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
                  If you want to run a small and medium business, Dotpot iT is
                  always with you!
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

export default SmallToMediumBusiness;
