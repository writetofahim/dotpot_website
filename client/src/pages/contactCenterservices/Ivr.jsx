import React from "react";
import { Helmet } from "react-helmet";
import ivr from "../../assets/img/ivr.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Ivr = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
          <title>Interactive Voice Response (IVR) | Dotpot iT</title>
          <meta
            name="description"
            content="Interactive Voice Response (IVR) is a technology that enables automated voice-based interactions between computers and humans. With IVR, callers can use their voice or keypad inputs to complete various steps and reach their desired destination without the need for human assistance. "
          />
          <meta name="keywords" content="software development company, ivr, call ivr, interactive voice response" />
          <link rel="canonical" href="https://dotpotit.com/contact_center_services/ivr" />
          <meta property="og:title" content="Interactive Voice Response (IVR) | Dotpot iT" />
          <meta
            property="og:description"
            content="Interactive Voice Response (IVR) is a technology that enables automated voice-based interactions between computers and humans. With IVR, callers can use their voice or keypad inputs to complete various steps and reach their desired destination without the need for human assistance. "
          />
          <meta
            property="og:image"
            content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
          />
          <meta property="og:url" content="https://dotpotit.com/contact_center_services/ivr" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Interactive Voice Response (IVR) | Dotpot iT" />
          <meta
            name="twitter:description"
            content="Interactive Voice Response (IVR) is a technology that enables automated voice-based interactions between computers and humans. With IVR, callers can use their voice or keypad inputs to complete various steps and reach their desired destination without the need for human assistance. "
          />
          <meta
            name="twitter:image"
            content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
          />
        </Helmet>

      <Navbar />
      <div className="px-3 min-h-screen pt-[15vh] pb-10 bg-background-500">
        <NavigatorComponent navigationData={navigationData} />
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-textColor-500 text-center">
            Interactive Voice Response (IVR)
          </h1>
          <div className="text-textColor-500 flex flex-col gap-5 p-5">
            <p className="text-justify">
              Interactive Voice Response (IVR) is a technology that enables
              automated voice-based interactions between computers and humans.
              With IVR, callers can use their voice or keypad inputs to complete
              various steps and reach their desired destination without the need
              for human assistance. IVR is particularly valuable in situations
              where call volumes are high or when live agents are not available
              to handle calls.
            </p>
          </div>
          <div className="mb-5 container mx-auto">
            <img className="md:w-1/2 mx-auto mb-5" src={ivr} alt="IVR Image" />
          </div>
          <div className="md:my-6 block md:flex gap-1 sm:my-5">
            <div className="bg-background-500 rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2 text-textColor-500">
                Easy Edit and Upload
              </h2>
              <p className="text-textColor-500 text-justify">
                With the flexible IVR module of Dotpot IT, you have the ability
                to create and modify voice menus for call routing at any given
                time. The Multiple IVR feature lets you offer multiple services
                to your callers. Plus, various tools within the Dotpot IT
                administrative panel are available to assist you in creating
                your IVR menu.
              </p>
            </div>
            <div className="bg-background-500 rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2 text-textColor-500">
                Design Own IVR
              </h2>
              <p className="text-textColor-500 text-justify">
                Dotpot IT system provides you with the ability to create an IVR
                system that is customized to your business requirements. The
                process is straightforward and user-friendly, allowing you to
                design your IVR with ease.
              </p>
            </div>
            <div className="bg-background-500 rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2 text-textColor-500">
                Responsive IVR
              </h2>
              <p className="text-textColor-500 text-justify">
                IVR systems are now commonly employed for making outbound calls
                to perform various time-sensitive tasks, such as providing or
                collecting information regarding appointments, overdue bills,
                and other important events or activities.
              </p>
            </div>
          </div>
          <div className="text-textColor-500 flex flex-col gap-5 p-5 mb-5">
            <p className="text-justify">
              By offering customers the option to choose between self-service
              and agent-assisted support, an IVR system can significantly lower
              your cost per call. With our IVR software, your agents can
              concentrate on handling more intricate cases while customers can
              easily resolve simple issues like account inquiries or bill
              payments on their own. This dual benefit not only frees up your
              agents but also provides a more efficient and satisfying customer
              experience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ivr;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Customer Service",
    link: "/contact_center_services/ivr",
  },
];
