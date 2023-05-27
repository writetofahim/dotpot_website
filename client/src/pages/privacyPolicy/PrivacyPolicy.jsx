import React from "react";
import { Helmet } from "react-helmet";
import privacy from "../../assets/pdfs/privacy.pdf";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const PrivacyPolicy = () => {
  useScrollToTop();
  return (
    <div className="w-full">
      <Helmet>
        <script type="application/ld+json">
          {`
             {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Dotpot iT",
              "address":"House-1, Road-3, Block-A, Mirpur-10, Dhaka, Bangladesh",
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
        <title>Privacy Policy | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Learn about privacyPolicy Dotpot iT, a leading IT company providing innovative solutions for businesses.visit website for details"
        />
        <link rel="canonical" href="https://dotpotit.com/privacyPolicy" />
        <meta property="og:title" content="Privacy Policy | Dotpot iT" />
        <meta
          property="og:description"
          content="Learn about privacyPolicy Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Data protection, GDPR (General Data Protection Regulation), Software development"
        />
        <meta property="og:url" content="https://dotpotit.com/privacyPolicy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Learn about privacyPolicy Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      <Navbar />

      {/* Main Div */}
      <div className="pt-24 w-full min-h-[100vh] flex items-center justify-center">
        <iframe
          src={privacy}
          title="Terms and Conditions"
          className="w-full h-screen"
        />
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
