import React from "react";
import { Link } from "react-router-dom";

const NavigatorComponent = ({ navigationData }) => {
  // console.log(navigationData);
  return (
    <div className="container pt-4 md:pt-2 lg:pt-2 mx-auto pb-3 md:px-5 px-1 flex items-center">
      <div className="w-max flex text-xl backdrop-blur-lg">
        <Link
          to="/"
          className="ml-2 text-textColor-500 hover:text-secondary-500 md:text-base text-xs"
        >
          Home
        </Link>
        {navigationData?.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer ml-2 md:text-base text-xs text-textColor-500"
          >
            |
            <Link
              to={item.link}
              key={index}
              className="ml-2 hover:text-secondary-500"
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
