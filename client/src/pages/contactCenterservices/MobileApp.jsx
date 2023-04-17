import React from "react";
import ma from "../../assets/img/ma.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const MobileApp = () => {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <div className="px-3 min-h-screen pt-[15vh] pb-10">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">
            Mobile App Module
          </h1>
          <div className="text-gray-400 flex flex-col gap-5 p-5">
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
            <ul className="list-disc p-5 ">
              <li>User authentication through TPIN</li>
              <li>Multiple accounts balance enquiry</li>
              <li>Auto Debit instruction</li>
              <li>Lost/Replace card request</li>
              <li>Fund transfer</li>
              <li>E-Statement request</li>
              <li>Cheque book request</li>
              <li>Stop cheque</li>
              <li>Direct dial to contact center</li>
              <li>Branch/ATM locator</li>
              <li>Utility bill payment</li>
              <li>More customized features</li>
            </ul>
          </div>
          <div className="text-gray-400 flex flex-col gap-5 p-5">
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
