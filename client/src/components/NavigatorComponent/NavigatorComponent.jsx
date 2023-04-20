import React from "react";
import { Link } from "react-router-dom";

const NavigatorComponent = ({ navigationData }) => {
  console.log(navigationData);
  return (
    <div className="w-full mx-auto p-5 flex items-center justify-center ">
      <div className="container mx-auto flex text-xl">
        <Link to="/" className="ml-2 hover:text-secondary-400">
          Home
        </Link>
        {navigationData?.map((item, index) => (
          <div className="cursor-pointer ml-1">
            &gt;&gt;
            <Link
              to={item.link}
              key={index}
              className="ml-2 hover:text-secondary-400"
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
