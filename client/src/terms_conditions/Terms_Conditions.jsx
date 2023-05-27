import React from "react";
import { Helmet } from "react-helmet";
import terms from "../assets/pdfs/terms.pdf";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useScrollToTop } from "../hooks/useScrollToTop";

const Terms_Conditions = () => {
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
        <title>Terms and Condition | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Learn about Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <link rel="canonical" href="https://www.dotpotit.com/privacyPolicy" />
        <meta property="og:title" content="About Us | Dotpot iT" />
        <meta
          property="og:description"
          content="Learn about Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/logo_primary-1683973589433.png"
        />
        <meta property="og:url" content="https://dotpotit.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Learn about Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/logo_primary-1683973589433.png"
        />
      </Helmet>
      <Navbar />
      {/* Main Div */}
      <div className="pt-24 w-full min-h-[100vh] flex items-center justify-center">
        <iframe
          src={terms}
          title="Terms and Conditions"
          className="w-full h-screen"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Terms_Conditions;
