import React from "react";
import aspNet from "../../../../assets/img/icon/webBackend/aspNet.png";
import dj from "../../../../assets/img/icon/webBackend/dj.jpg";
import express from "../../../../assets/img/icon/webBackend/expressJS.png";
import laravel from "../../../../assets/img/icon/webBackend/laravel.png";
import nodeJS from "../../../../assets/img/icon/webBackend/nodejs.png";

const Backend = () => {
  const data = [
    { icon: nodeJS },
    { icon: express },
    { icon: laravel },
    { icon: dj },
    { icon: aspNet },
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
                <img
                  src={item.icon}
                  alt="Technology Name"
                  className="h-[50px] w-[50px]"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Backend;
