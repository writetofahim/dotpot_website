import React from "react";
import { Helmet } from "react-helmet";
import collections from "../../assets/img/collections.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Collections = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>Collection | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Dotpot IT offers automated dialing solutions for efficient debtor contact and increased debt recovery rates."
        />
        <meta
          name="keywords"
          content="software development company, automated dialing,"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact-center-services/collection"
        />
        <meta property="og:title" content="Collection | Dotpot iT" />
        <meta
          property="og:description"
          content="Dotpot IT offers automated dialing solutions for efficient debtor contact and increased debt recovery rates."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact-center-services/collection"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Collection | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Dotpot IT offers automated dialing solutions for efficient debtor contact and increased debt recovery rates."
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
            Collections
          </h1>
          <div className="text-textColor-500 flex flex-col gap-5 p-5">
            <p className="text-justify">
              Dotpot IT offers automated dialing solutions that ensure your
              agents only receive calls that are answered by debtors. This
              feature enables you to contact a larger number of debtors each
              day. With our real-time and historical reporting, you can identify
              the best times to reach out to debtors and increase your chances
              of recovering debts. Manually calling debtors can waste your
              agents' time and resources, as they often end up leaving
              voicemails and rarely get connected to live individuals. By
              utilizing Dotpot IT, you can eliminate these unnecessary costs and
              allow your agents to focus on maximizing the effectiveness of
              their live connections.
            </p>
          </div>
          <div className="mb-5 container mx-auto">
            <img
              className="md:w-1/2 mx-auto "
              src={collections}
              alt="Customer service"
            />
          </div>
          <div className="text-textColor-500 flex flex-col gap-5 p-5">
            <p className="text-justify">
              We offers a telemarketing module that is suitable for businesses
              and call centers of all sizes. Our module is designed to enhance
              the speed and efficiency of telemarketing companies by drastically
              improving speed-to-contact, daily call volume, agents'
              productivity, and customer satisfaction. With our solution, your
              business can achieve incredible results and make the most out of
              your telemarketing efforts.
            </p>
          </div>
          <h2 className="text-textColor-500 flex flex-col gap-2 px-5 3xl md:5xl font-bold">
            Overview:
          </h2>
          <div className="px-5 text-textColor-500">
            <ul className="list-disc p-5 mb-5">
              <li>Quickly implement new collections programs.</li>
              <li>Automated messaging with live agent connect.</li>
              <li>Keep costs in-line with collection opportunities.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Collections",
    link: "/contact-center-services/collection",
  },
];
