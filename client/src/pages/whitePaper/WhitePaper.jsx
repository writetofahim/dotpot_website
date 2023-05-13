import React from "react";
import whitePaper from "../../assets/pdfs/whitePaper.pdf";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const WhitePaper = () => {
  useScrollToTop();
  return (
    <div className="w-full">
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
