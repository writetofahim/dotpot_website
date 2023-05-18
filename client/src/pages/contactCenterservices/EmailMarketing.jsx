import React from "react";
import { Helmet } from "react-helmet";
import em from "../../assets/img/em.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavigatorComponent from "../../components/NavigatorComponent/NavigatorComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const EmailMarketing = () => {
  useScrollToTop();
  return (
    <div>
      <Helmet>
        <title>Email Marketing | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Dotpot IT CC's email routing module enables incoming emails to be efficiently distributed to the appropriate agents based on the CC admin's policies."
        />
        <meta
          name="keywords"
          content="software development company, email marketing, mail"
        />
        <link
          rel="canonical"
          href="https://dotpotit.com/contact_center_services/email-marketing"
        />
        <meta property="og:title" content="Email Marketing | Dotpot iT" />
        <meta
          property="og:description"
          content="Dotpot IT CC's email routing module enables incoming emails to be efficiently distributed to the appropriate agents based on the CC admin's policies."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          property="og:url"
          content="https://dotpotit.com/contact_center_services/email-marketing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Marketing | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Dotpot IT CC's email routing module enables incoming emails to be efficiently distributed to the appropriate agents based on the CC admin's policies."
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
            Email Marketing
          </h1>
          <div className="text-textColor-500 flex flex-col gap-5 p-5">
            <p className="text-center">
              Dotpot IT CC's email routing module enables incoming emails to be
              efficiently distributed to the appropriate agents based on the CC
              admin's policies.
            </p>
          </div>
          <div className="container mx-auto">
            <img
              className="md:w-1/2 mx-auto "
              src={em}
              alt="Customer service"
            />
          </div>
          <div className="text-textColor-500 flex flex-col gap-5 p-5">
            <h2 className="font-bold">Facility to add notes to each email</h2>
            <p className="text-justify text-textColor-500">
              CC agents can add notes to emails at any stage, including while
              it's being sent or queued, using Dotpot IT's email handling
              module.
            </p>
            <h2 className="font-bold">Reports on mail sent/receive</h2>
            <p className="text-justify text-textColor-500">
              The email module records all sent/received emails, with statistics
              and filtering tools for easy retrieval of information in the
              future.
            </p>
            <p className="font-bold">Email filtering</p>
            <p className="text-justify text-textColor-500">
              Incoming and outgoing mails may be filtered based on agent groups
              or other policy factors.
            </p>
            <h2 className="font-bold">
              Sending/Receiving Emails with attachment
            </h2>
            <p className="text-justify pb-5 text-textColor-500">
              Agents can attach one or multiple files to any email message, and
              send it to the recipient. The email module also allows agents to
              receive incoming mail with attachments.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmailMarketing;

const navigationData = [
  { title: "Services", link: "/services" },
  {
    title: "Email Marketing",
    link: "/contact_center_services/email-marketing",
  },
];
