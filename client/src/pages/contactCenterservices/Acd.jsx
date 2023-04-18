import React from "react";
import { Helmet } from "react-helmet";
import acd from "../../assets/img/acd.webp";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Acd = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>Automatic Call Distribution (ACD)</title>
        <meta
          name="description"
          content="Get in touch with us for your IT needs. Contact us for website development, mobile app development, and more."
        />
        <meta property="og:title" content="Contact Us | Dotpot iT" />
        <meta
          property="og:description"
          content="Get in touch with us for your IT needs. Contact us for website development, mobile app development, and more."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/images/contact.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact_center_services/acd"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Get in touch with us for your IT needs. Contact us for website development, mobile app development, and more."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/images/contact.png"
        />
      </Helmet>
      <Navbar />
      <div className="px-3 min-h-screen pt-[15vh] pb-10">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
            Automatic Call Distribution (ACD)
          </h1>
          <div className="text-gray-400 flex flex-col gap-5 p-5">
            <p className="text-justify">
              Dotpot IT Automatic Call Distribution (ACD) is a technology that
              allows contact centers to distribute inbound calls, emails and
              chat messages to agents based on call arrival time, priority,
              customer needs, and agent skill set. Instead of simply sending
              inbound requests to an available agent, ACD system categorizes
              calls/messages and then automatically and intelligently routes the
              same to appropriate agent with relevant skillset to help the
              customer.
            </p>
          </div>
          <div className="mb-5 container mx-auto">
            <img className="md:w-1/2 mx-auto " src={acd} alt="ACD Image" />
          </div>
          <div className="md:my-6 block md:flex gap-10 sm:my-5">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2">Skills-Based Routing</h2>
              <p className="text-gray-700 text-justify">
                An agent can be assigned to receive calls from multiple
                skills/companies. Dotpot IT contact center system allows
                categorization of agents based on skills or length of service.
                The system finds available high priority agents to pass the
                calls.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2">Caller Priority</h2>
              <p className="text-gray-700 text-justify">
                While every customer is important, certain instances may require
                the need to prioritize specific incoming calls based on status,
                size, and urgency. gPlex system allows setting call priorities
                to ensure your contact center’s most valued calls are always
                answered first.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2">Find Last Call Agent</h2>
              <p className="text-gray-700 text-justify">
                If a caller calls for the second time the ACD engine attempts to
                transfer the call to the agent who had handled the caller’s
                previous call.
              </p>
            </div>
          </div>
          <div className="md:my-6 block md:flex gap-10">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2">Round Robin</h2>
              <p className="text-gray-700 text-justify">
                The Round Robin feature ensures that the incoming calls to your
                call center are distributed to the agents on the basis of
                covering all agents on duty in a cyclic order.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2">Longest Idle Agent</h2>
              <p className="text-gray-700 text-justify">
                Longest Idle Agent feature is designed to ensure that incoming
                calls are routed to the agent (among the set of appropriate type
                of agent for that caller) who has been idle for the longest
                time.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
              <h2 className="text-lg font-bold mb-2">Random</h2>
              <p className="text-gray-700 text-justify">
                Random call distribution is the most basic form of ACD. This
                type of call distribution may only be applicable where
                sufficient agents are available on duty compared to the rate of
                call flow i.e. there is hardly call waiting in the queue.
              </p>
            </div>
          </div>
          <div className="text-gray-400 flex flex-col gap-5 p-5 mb-5">
            <p className="text-justify">
              Dotpot IT skill-based ACD quickly matches callers in the queue to
              the agents who can best help them. That means efficient call
              resolution, happy customers, and money saved for your
              multi-channel contact center. The ACD system is the “core” of the
              Dotpot IT platform.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Acd;
