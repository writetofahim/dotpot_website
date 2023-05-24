import React from "react";
import { Helmet } from "react-helmet";
import whitePaper from "../../assets/pdfs/whitePaper.pdf";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const WhitePaper = () => {
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
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
        <title>White Paper | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Learn about Portfolio Development iT, a leading IT company providing innovative solutions for businesses.visit website for details"
        />
        <link rel="canonical" href="https://dotpotit.com/white-paper" />
        <meta property="og:title" content="White Paper | Dotpot iT" />
        <meta
          property="og:description"
          content="Learn about Portfolio Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta
          name="keywords"
          content="Software development, business accounts, setting up a limited company, business accounts"
        />
        <meta property="og:url" content="https://dotpotit.com/white-paper" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Paper | Dotpot iT" />
        <meta
          name="twitter:description"
          content="Learn about Portfolio Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
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
          src={whitePaper}
          title="Terms and Conditions"
          className="w-full h-screen"
        />
      </div>

      <Footer />
    </div>
  );
};

export default WhitePaper;
