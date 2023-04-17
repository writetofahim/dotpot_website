import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const OnSiteDevelopment = () => {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-[5vh] pb-10">
        <div className="flex flex-col pt-6 lg:text-justify">
          <div className="w-full h-full flex justify-center items-center">
            <img
              className="max-w-full max-h-full"
              src="https://alcor-bpo.com/wp-content/uploads/2021/04/12-1.png"
              alt="Product image"
            />
          </div>
          <div className="my-6 lg:mx-24 mx-6">
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
      <Footer />
    </div>
  );
};

export default OnSiteDevelopment;
