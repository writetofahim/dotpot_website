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
        <title>White Paper | Dotpot iT</title>
        <meta
          name="description"
          content="Learn about Portfolio Development iT, a leading IT company providing innovative solutions for businesses.visit website for details"
        />
        <link rel="canonical" href="https://www.dotpotit.com/white-paper" />
        <meta property="og:title" content="Portfolio Development | Dotpot iT" />
        <meta
          property="og:description"
          content="Learn about Portfolio Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          property="og:image"
          content="	https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/white-paper"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fixed Price Partnership Model | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Learn about Portfolio Development Dotpot iT, a leading IT company providing innovative solutions for businesses."
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
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
