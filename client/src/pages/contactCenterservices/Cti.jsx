import React from "react";
import { Helmet } from "react-helmet";
import cti from "../../assets/img/cti.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Cti = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>
          Telephony Integration (CTI) | Dotpot iT a leading it company
        </title>
        <meta
          name="description"
          content="Dotpot IT integrates with various CRMs and offers CTI screen popups to agents, providing them with caller information, such as name and phone number, before connecting to the call. This helps agents personalize calls and improve customer experience."
        />
        <meta
          name="keywords"
          content="software development company, cti, cti screen"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact-center-services/cti"
        />
        <meta
          property="og:title"
          content="Telephony Integration (CTI) | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Dotpot IT integrates with various CRMs and offers CTI screen popups to agents, providing them with caller information, such as name and phone number, before connecting to the call. This helps agents personalize calls and improve customer experience."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact-center-services/cti"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Telephony Integration (CTI) | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Dotpot IT integrates with various CRMs and offers CTI screen popups to agents, providing them with caller information, such as name and phone number, before connecting to the call. This helps agents personalize calls and improve customer experience."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>

      <Navbar />
      <div className="px-3 min-h-screen pt-[15vh] bg-background-500">
        <NavigatorComponent navigationData={navigationData} />
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-textColor-500 text-center">
            Computer Telephony Integration (CTI)
          </h1>
          <div className="text-textColor-500 flex flex-col gap-5 p-5">
            <p className="text-justify">
              Dotpot IT integrates with various CRMs and offers CTI screen
              popups to agents, providing them with caller information, such as
              name and phone number, before connecting to the call. This helps
              agents personalize calls and improve customer experience.
            </p>
          </div>
          <div className="border-b border-border container mx-auto">
            <img
              className="md:w-1/2 mx-auto "
              src={cti}
              alt="Customer service"
            />
          </div>
          <div className="md:my-6 block md:flex gap-1 sm:my-5">
            <div className="bg-background-500 rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2 text-textColor-500">
                Integrated CRM
              </h2>
              <p className="text-textColor-500 text-justify">
                Pop up contacts from CRM or built-in address book with Dotpot
                IT.
              </p>
            </div>
            <div className="bg-background-500 rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2 text-textColor-500">
                Collaborative Screen Pops
              </h2>
              <p className="text-textColor-500 text-justify">
                Popup contacts from your others contacts.
              </p>
            </div>
            <div className="bg-background-500 rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2 text-textColor-500">
                Call Whisper
              </h2>
              <p className="text-textColor-500 text-justify">
                Hear who is calling you, and even decide to take the call or
                not.
              </p>
            </div>
          </div>
          <h2 className="text-textColor-500 flex flex-col gap-2 px-5 font-bold">
            Application of CTI:
          </h2>
          <div className="px-5 text-textColor-500">
            <ul className="list-disc p-5 pb-5">
              <li>
                Screen popups can give agents access to contextual details about
                callers the moment the phone rings.
              </li>
              <li>
                CTI can also authenticate a call, screening its number against a
                database. These prospect and numbers are often stored in
                external CRM tool e.g. Salesforce.
              </li>
              <li>
                CTI tools may be used to route incoming calls to the right
                agent. Calls can be routed based on a variety of factors
                including time-of-day, agent’s skills, and even based on which
                marketing promotion or search keyword triggered a call in the
                first place.
              </li>
              <li>
                It can provide interactive voice response (IVR) to inbound
                callers, enabling them to provide input information on
                self-service basis.
              </li>
              <li>CTIs can log and record calls in third party CRM tools.</li>
              <li>
                It can handle call forwarding and call transferring functions.
              </li>
              <li>It can display waiting live calls in a queue.</li>
              <li>
                CTIs can help outbound reps/sales development reps dial more
                prospects using features like autodialing, click-to-call,
                predictive dialing and more.
              </li>
              <li>
                It can also be used to trigger various applications based on
                inbound calls. This can be used to assist agents and help them
                sell more or provide better customer service based on callers’
                intent.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cti;
const navigationData = [
  { title: "Services", link: "/services" },
  { title: "CTI", link: "/contact-center-services/cti" },
];
