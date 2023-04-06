import React, { useState } from "react";

const TechnologiesTab = (props) => {
  console.log(props.title);
  const [technologies, setTechnologies] = useState([""]);
  const [selected, setSelected] = useState(1);

  // const handleClick = (option) => {
  //   setTechnologies(option);
  //   setSelected(true);
  // };
  return (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 text-center">
        {props.title}
      </h2>
      <div className="flex gap-5 justify-center text-center border-b mt-5">
        {props.data?.map((option, index) => (
          <div
            onClick={() => {
              setSelected(option.id);
            }}
            className={
              selected === option.id
                ? "px-1 py-2 flex justify-center items-center rounded-t hover:border-t hover:border-x text-primary-400 font-semibold border-x border-t"
                : "px-1 py-2 flex justify-center items-center rounded-t hover:border-t hover:border-x"
            }
            key={index}
          >
            <div className="flex gap-5 ">
              <h2>{option.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 gap-5 flex flex-wrap justify-center">
        {props.data
          ?.find((item) => item.id === selected)
          .technologies.map((obj, index) => (
            <div
              key={index}
              className="mt-10 md:w-[100px] md:h-[100px] p-2 rounded-full md:rounded-lg shadow flex items-center justify-center hover:border hover:border-purple-500 hover:scale-110 hover:shadow-xl transition-all glassmorphism"
            >
              <img
                src={obj.img}
                alt=""
                className="h-[70px] w-[70px] object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TechnologiesTab;
