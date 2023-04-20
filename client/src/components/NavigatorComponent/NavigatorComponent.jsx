import React from "react";
import { Link } from "react-router-dom";

const NavigatorComponent = ({ navigationData }) => {
  console.log(navigationData);
  return (
    <div className="container mx-auto pb-5 md:px-5 px-1 flex items-center ">
      <div className="w-max flex text-xl backdrop-blur-lg">
        <Link
          to="/"
          className="ml-2 hover:text-secondary-400 md:text-base text-xs"
        >
          Home
        </Link>
        {navigationData?.map((item, index) => (
          <div key={index} className="cursor-pointer ml-1 md:text-base text-xs">
            &gt;&gt;
            <Link
              to={item.link}
              key={index}
              className="ml-2 hover:text-secondary-400 "
            >
              {item.title}
            </Link>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigatorComponent;