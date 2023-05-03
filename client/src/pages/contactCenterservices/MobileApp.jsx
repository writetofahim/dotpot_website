import React from "react";
import { Helmet } from "react-helmet";
import ma from "../../assets/img/ma.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const MobileApp = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>Mobile App for Contact center support | Dotpot iT</title>
        <meta
          name="description"
          content="Get in touch with us for your IT needs. Mobile App support your business, mobile app, and more."
        />
        <meta property="og:title" content="Mobile App support | Dotpot iT" />
        <meta
          property="og:description"
          content="Get in touch with us for your IT needs. Mobile App support your business, mobile app, and more."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="http://dotpotit.com/contact_center_services/mobile-app"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App support | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Get in touch with us for your IT needs. Mobile App support your business, mobile app, and more."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>

      <Navbar />
      <div className="px-3 min-h-screen pt-[15vh] pb-10 bg-bgPrimary-500">
        <NavigatorComponent navigationData={navigationData} />
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
            Mobile App Module
          </h1>
          <div className="text-primary-500 flex flex-col gap-5 p-5">
            <p className="text-justify">
              Dotpot IT's contact center system enables contact center agents to
              be mobile through the use of a mobile application. This feature is
              particularly useful for enterprise customers as it provides them
              with access to customized services. With our mobile apps, agents
              can easily access the features they need to serve customers
              efficiently.
            </p>
          </div>
          <div className="mb-5 container mx-auto">
            <img
              className="md:w-1/6 md:h-50 mx-auto mb-6"
              src={ma}
              alt="Customer service"
            />
          </div>
          <p className="text-gray-700 flex flex-col gap-2 px-5">
            Major Features:
          </p>
          <div className="px-5">
            <ul className="list-disc p-5 text-primary-500">
              <li className="ml-2">User authentication through TPIN</li>
              <li className="ml-2">Multiple accounts balance enquiry</li>
              <li className="ml-2">Auto Debit instruction</li>
              <li className="ml-2">Lost/Replace card request</li>
              <li className="ml-2">Fund transfer</li>
              <li className="ml-2">E-Statement request</li>
              <li className="ml-2">Cheque book request</li>
              <li className="ml-2">Stop cheque</li>
              <li className="ml-2">Direct dial to contact center</li>
              <li className="ml-2">Branch/ATM locator</li>
              <li className="ml-2">Utility bill payment</li>
              <li className="ml-2">More customized features</li>
            </ul>
          </div>
          <div className="text-primary-500 flex flex-col gap-5 p-5">
            <p className="text-justify mb-5">
              The banking industry has been rapidly evolving with the help of
              technology, and several services have been introduced to
              facilitate customer convenience. With the increasing need for
              secure and easy access to banking services, user authentication
              through TPIN has become a popular method of verification.
              Customers can also check the balances of their multiple accounts,
              set up auto-debit instructions, request for lost or replacement
              cards, and transfer funds effortlessly. Additionally, they can
              request e-statements, cheque books, stop cheques, and easily
              locate nearby branches and ATMs. The utility bill payment feature
              has also made it easy for customers to pay their bills from the
              comfort of their homes. With the ability to provide more
              customized features, the banking industry is making it easier for
              customers to manage their finances with ease.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileApp;

const navigationData = [
  { title: "Services", link: "/services" },
  { title: "Mobile App Development", link: "/contact_center_services/cti" },
];
