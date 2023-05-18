import React from "react";
import { Helmet } from "react-helmet";
import cc from "../../assets/img/cc.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const ChatContact = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>Web Chat Support | Dotpot iT</title>
        <meta
          name="description"
          content="The Dotpot IT contact center system integrates a powerful web chat module, empowering businesses with exceptional customer service."
        />
        <meta
          name="keywords"
          content="software development company, Chat, Contact "
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact_center_services/chat"
        />
        <meta property="og:title" content="Web Chat Support | Dotpot iT" />
        <meta
          property="og:description"
          content="The Dotpot IT contact center system integrates a powerful web chat module, empowering businesses with exceptional customer service."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact_center_services/chat"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Chat Support | Dotpot iT" />
        <meta
          name="twitter:description"
          content="The Dotpot IT contact center system integrates a powerful web chat module, empowering businesses with exceptional customer service."
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
            Web Chat Support
          </h1>
          <div className="text-textColor-500 flex flex-col gap-5 p-5">
            <p className="text-justify">
              The Dotpot IT contact center system features a robust web chat
              module that meets the evolving needs of customers. By integrating
              this module with the contact center solution, businesses can
              achieve a healthy return on investment. The Dotpot IT Chat module
              enables businesses to offer more than just basic call center
              services to their online visitors, providing a seamless customer
              experience across multiple channels. With the Dotpot IT contact
              center system, businesses can stay ahead of the curve and deliver
              exceptional customer service, no matter how customers choose to
              engage.
            </p>
            <p className="text-justify">
              The rise of digital consumers has fueled demand for real-time
              online interaction channels. The Dotpot IT Chat module delivers a
              sophisticated interaction platform that meets the needs of today's
              online customers, enabling businesses to deliver exceptional
              customer experiences in real-time. With the Dotpot IT Chat module,
              businesses can stay ahead of the curve and meet the evolving
              demands of their customers, no matter how they choose to engage.
            </p>
          </div>
          <div className="container mx-auto p-5">
            <img
              className="md:w-1/2 mx-auto "
              src={cc}
              alt="Customer service"
            />
          </div>
          <div className="md:my-6 block md:flex gap-10 sm:my-5">
            <div className="bg-background-500 rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5 text-textColor-500">
              <h2 className="text-lg font-bold mb-2">
                Improve customer experience
              </h2>
              <p className="text-justify">
                The Dotpot IT Chat module enables personalized chat experiences
                by providing access to multichannel customer interactions.
              </p>
            </div>
            <div className="bg-background-500 rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5 text-textColor-500">
              <h2 className="text-lg font-bold mb-2">Increase revenue</h2>
              <p className=" text-justify">
                Just-in-time online engagement with the Dotpot IT Chat module
                can increase sales and reduce non-sale calls.
              </p>
            </div>
            <div className="bg-background-500 rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5 text-textColor-500">
              <h2 className="text-lg font-bold mb-2">
                Deliver fast and accurate
              </h2>
              <p className="text-justify">
                Ensure chat sessions are delivered to the right agent with
                queue-specific and skill-based routing using the Dotpot IT Chat
                module.
              </p>
            </div>
          </div>
          <div className="text-textColor-500 flex flex-col gap-5 p-5">
            <p className="font-bold">ACD Based Web Chat Routing</p>
            <p className="text-gray-700 text-justify">
              Dotpot IT CC's Web Chat module uses the same ACD system as the CC
              solution for routing chat sessions. Chat sessions are treated as
              calls and distributed to agents based on admin policy, making
              monitoring and analysis simple.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChatContact;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Chat",
    link: "/contact_center_services/chat",
  },
];
