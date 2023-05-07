import React from "react";
import { Helmet } from "react-helmet";
import onsite_dev from "../../assets/img/onsite_dev.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const OnSiteDevelopment = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>on-site-development-model | Dotpot iT</title>
        <meta
          name="description"
          content="Learn about hire-dedicated-model Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:title"
          content="on-site-development-model | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Learn about hire-dedicated-model Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="	https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/partnership_model/on-site-development-model"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Learn about hire-dedicated-model Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <div className="bg-background-500">
        <div className="container mx-auto pt-[15vh] pb-10">
          <NavigatorComponent navigationData={navigationData} />

          <div className="flex flex-col pt-6 lg:text-justify">
            <div className="w-full h-full flex justify-center items-center">
              <img
                className="max-w-full max-h-full"
                src={onsite_dev}
                alt="Product image"
              />
            </div>
            <div className="my-6 lg:mx-24 mx-6 text-textColor-500">
              <h2 className="lg:text-2xl text-xl font-bold mb-4">
                On Site Development Partnership Model
              </h2>
              <p className="text-lg">
                An on-site partnership model is a collaborative business
                relationship where Dotpot iT provides dedicated IT resources to
                work alongside a client's team at their location. This model is
                beneficial for clients who require more control over their IT
                projects and prefer to work with a team that is physically present
                and accessible.
              </p>
              <p className="text-lg py-2">
                Under this model, Dotpot iT will provide skilled IT professionals
                who will work as an extension of the client's team. The Dotpot iT
                team will be responsible for the development, implementation, and
                maintenance of the client's IT systems, applications, and
                processes. They will work closely with the client's team to ensure
                that the project meets the desired specifications, budget, and
                timeline.
              </p>
              <div className="p-6 my-6">
                <h2 className="lg:text-2xl text-xl font-semibold mb-4">
                  Some of the benefits of an on-site partnership model for Dotpot
                  iT are:
                </h2>
                <ul className="list-disc list-inside">
                  <li className="mb-2 text-lg">
                    <strong className="font-semibold">
                      Enhanced collaboration:
                    </strong>{" "}
                    Working on-site allows for more effective communication and
                    collaboration between the client and Dotpot iT team. This
                    helps to ensure that the project meets the client's specific
                    needs and requirements.
                  </li>
                  <li className="mb-2 text-lg">
                    <strong className="font-semibold">
                      Increased project control:
                    </strong>{" "}
                    The client has more control over the project's progress and
                    can make adjustments and decisions more quickly.
                  </li>
                  <li className="mb-2 text-lg">
                    <strong className="font-semibold">
                      Quick issue resolution:
                    </strong>{" "}
                    The Dotpot iT team is readily available to address any issues
                    that arise, minimizing any downtime or disruption to the
                    project.
                  </li>
                  <li className="mb-2 text-lg">
                    <strong className="font-semibold">Knowledge sharing: </strong>{" "}
                    The Dotpot iT team can share their expertise and knowledge
                    with the client's team, enabling them to learn and grow in
                    their skills and abilities.
                  </li>
                  <li className="mb-2 text-lg">
                    <strong className="font-semibold">
                      Greater flexibility:
                    </strong>{" "}
                    The on-site partnership model allows for greater flexibility
                    in adjusting the scope and requirements of the project as it
                    progresses.
                  </li>
                </ul>
              </div>
              <p className="text-lg">
                In summary, the on-site partnership model is a collaborative
                approach that allows Dotpot iT to provide customized IT solutions
                that meet the specific needs of the client. It facilitates
                enhanced collaboration, increased project control, quick issue
                resolution, knowledge sharing, and greater flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OnSiteDevelopment;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "On site development",
    link: "/partnership_model/on-site-development-model",
  },
];
