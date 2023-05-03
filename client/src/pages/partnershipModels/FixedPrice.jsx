import React from "react";
import { Helmet } from "react-helmet";
import fixed_price from "../../assets/img/fixed_price.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const FixedPrice = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>Fixed Price Partnership Model | Dotpot iT</title>
        <meta
          name="description"
          content="Learn about Fixed Price Partnership Model Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Learn about Fixed Price Partnership Model Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="	https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/partnership_model/fixed-price-model"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Learn about Fixed Price Partnership Model Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className="bg-bgPrimary-500">
        <div className="container mx-auto pt-[15vh] pb-10">
          <NavigatorComponent navigationData={navigationData} />

          <div className="flex flex-col pt-12 lg:text-justify text-primary-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                className="max-w-full max-h-full"
                src={fixed_price}
                alt="Product image"
              />
            </div>
            <div className="my-12 lg:mx-24 mx-6">
              <h2 className="lg:text-2xl text-xl font-bold mb-4">
                Fixed Price Partnership Model
              </h2>
              <p className="text-lg">
                In a Fixed Price Partnership Model, Dotpot iT and the client agree
                upon a fixed price for a specific project or set of services. This
                model is beneficial for clients who have a clear understanding of
                their project requirements and want to know the exact cost
                upfront.
              </p>
              <p className="text-lg py-2">
                Under this model, Dotpot iT will provide a detailed scope of work,
                outlining the project requirements, timeline, and deliverables.
                The client will agree to pay a fixed price for the entire project,
                regardless of any unexpected issues or changes that may arise
                during the project's execution.
              </p>
              <div className="my-6">
                <h2 className="lg:text-2xl text-xl font-semibold mb-4">
                  Some of the benefits of a Fixed Price Partnership Model for
                  Dotpot iT are:
                </h2>
                <ul className="list-disc list-inside">
                  <li className="mb-2 text-lg">
                    <strong className="font-semibold">Certainty of cost:</strong>{" "}
                    The client has a clear understanding of the project's cost
                    upfront, enabling them to budget and plan accordingly.
                  </li>
                  <li className="mb-2 text-lg">
                    <strong className="font-semibold">Reduced risk:</strong> The
                    client bears minimal risk since they only pay the agreed-upon
                    fixed price, even if unexpected issues or changes arise.
                  </li>
                  <li className="mb-2 text-lg">
                    <strong className="font-semibold">
                      Clear project requirements:
                    </strong>{" "}
                    The project requirements are clearly defined in the scope of
                    work, enabling both parties to have a mutual understanding of
                    the project's objectives.
                  </li>
                  <li className="mb-2 text-lg">
                    <strong className="font-semibold">
                      Predictable timeline:
                    </strong>{" "}
                    The project timeline is also defined in the scope of work,
                    enabling the client to plan their resources and timeline
                    accordingly.
                  </li>
                  <li className="mb-2 text-lg">
                    <strong className="font-semibold">
                      Higher quality output:
                    </strong>{" "}
                    Dotpot iT is incentivized to deliver high-quality output since
                    their compensation is not dependent on the number of hours
                    worked.
                  </li>
                </ul>
              </div>
              <p className="text-lg">
                In summary, the Fixed Price Partnership Model is a collaborative
                approach that allows Dotpot iT to provide customized IT solutions
                that meet the specific needs of the client, with a clear
                understanding of the project's scope, timeline, and cost. It
                facilitates certainty of cost, reduced risk, clear project
                requirements, predictable timeline, and higher quality output.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FixedPrice;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Fixed Price",
    link: "/partnership_model/fixed-price-model",
  },
];
