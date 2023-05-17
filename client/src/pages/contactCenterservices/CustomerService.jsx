import React from "react";
import { Helmet } from "react-helmet";
import cs from "../../assets/img/cs.jpeg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const CustomerService = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
          <title>Customer Service | Dotpot iT</title>
          <meta
            name="description"
            content="Dotpot IT CC prioritizes exceptional customer service for strong customer relationships and memorable experiences."
          />
          <meta name="keywords" content="software development company, cc, customer center" />
          <link rel="canonical" href="https://dotpotit.com/contact_center_services/customer-service" />
          <meta property="og:title" content="Customer Service | Dotpot iT" />
          <meta
            property="og:description"
            content="Dotpot IT CC prioritizes exceptional customer service for strong customer relationships and memorable experiences."
          />
          <meta
            property="og:image"
            content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
          />
          <meta property="og:url" content="https://dotpotit.com/contact_center_services/customer-service" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Customer Service | Dotpot iT" />
          <meta
            name="twitter:description"
            content="Dotpot IT CC prioritizes exceptional customer service for strong customer relationships and memorable experiences."
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
          <div className="mb-5 container mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-textColor-500 text-center">
              Customer Service
            </h1>
            <img
              className="md:w-1/2 md:h-[70vh] mx-auto "
              src={cs}
              alt="Customer service"
            />
          </div>
          <div className="text-textColor-500 flex flex-col gap-5 p-5">
            <p className="text-justify">
              Providing excellent customer service is crucial for building and
              enhancing relationships with customers. Regardless of the quality
              of the product or the skills of the staff, customers tend to
              recall their direct interactions with the company the most. At
              Dotpot IT CC, we prioritize delivering top-notch support services
              to ensure our customers receive the exceptional experience they
              deserve.
            </p>
          </div>
          <p className="text-textColor-500 flex flex-col gap-2 px-5">
            Major Features:
          </p>
          <div className="px-5">
            <ul className="list-disc p-5 mb-5 text-textColor-500">
              <li>Multiple channels support mechanism (voice, email, chat)</li>
              <li>Virtual queuing</li>
              <li>Recording of support calls</li>
              <li>CRM integration and flexible IVR configuration</li>
              <li>And many more features</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerService;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Customer Service",
    link: "/contact_center_services/customer-service",
  },
];
