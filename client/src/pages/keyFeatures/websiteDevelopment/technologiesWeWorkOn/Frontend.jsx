import React from "react";
import html from "../../../../assets/img/icon/webFrontend/html.png";
import css from "../../../../assets/img/icon/webFrontend/css.png";
import bootstrap from "../../../../assets/img/icon/webFrontend/bootstrap.png";
import tailwind from "../../../../assets/img/icon/webFrontend/Tailwind_CSS_Logo.png";
import js from "../../../../assets/img/icon/webFrontend/js-file.png";
import typeScript from "../../../../assets/img/icon/webFrontend/typescript.png";
import nextJS from "../../../../assets/img/icon/webFrontend/nextJS.webp";
import react from "../../../../assets/img/icon/webFrontend/react.png";

const Frontend = () => {
  const data = [
    { icon: html },
    { icon: css },
    { icon: bootstrap },
    { icon: tailwind },
    { icon: js },
    { icon: typeScript },
    { icon: nextJS },
    { icon: react },
  ];
  return (
    <div>
      <div className="flex-1 gap-5 flex flex-wrap justify-center">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="mt-10 md:w-[100px] md:h-[100px] p-2 rounded-full md:rounded-lg shadow flex items-center justify-center hover:border hover:border-purple-500 hover:scale-110 hover:shadow-xl transition-all glassmorphism"
              >
                <img src={item.icon} alt="" className="h-[50px] w-[50px]" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Frontend;
