import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "react-typed/dist/animatedCursor.css";

const GetAQuote = () => {
  return (
    <div className="w-full flex items-center justify-center p-5">
      <div className="w-[1400px] flex flex-col-reverse md:flex-row items-center gap-2">
        <div className="left w-full">
          {/* <Typed
                className="text-xl md:text-3xl font-bold"
                    strings={['Get A Quote']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /> */}
          <h3 className="text-xl text-primary-500 md:text-3xl text-center md:text-left font-bold mb-2 backdrop-blur-sm md:w-max">
            Customize Your Service
          </h3>
          <p className="text-center md:text-left backdrop-blur-sm md:w-max text-secondary-500">
            Customize your desire services and get an estimated quote
          </p>
        </div>
        <div className="right w-full flex items-center justify-center md:justify-start">
          <Link to="/services">
            <button className="flex items-center justify-between gap-3 bg-bgSecondary-300 text-primary-500 text-xl px-3 py-2 rounded-full cursor-pointer hover:bg-bgSecondary-500 hover:scale-105 transition-all">
              Get a Quote
              <AiOutlineDoubleRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
