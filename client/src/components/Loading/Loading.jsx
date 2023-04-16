import React from "react";
import Typed from "react-typed";

const Loading = () => {
  return (
    <div className="w-full h-screen fixed z-[999] ring-0 top-0 bg-[#E5EFF1] flex flex-col items-center justify-center">
      {/* <img src={high} alt="" className="w-[60%] md:w-[40%]" /> */}
      <img
        src="https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif"
        alt=""
      />
      <Typed
        className="text-3xl md:text-5xl text-center md:text-left font-bold mb-2  text-gradient bg-gradient-to-r from-[#6e3aff] via-[#26f8ff] to-[#4366ff]"
        strings={["Welcome to Dotpot iT"]}
        typeSpeed={50}
        backSpeed={20}
        loop
      />
    </div>
  );
};

export default Loading;
