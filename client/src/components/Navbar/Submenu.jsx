import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Submenu = ({
  service,
  selectedSubmenu,
  setSelectedSubmenu,
  setIsSubmenuOpen,
}) => {
  return (
    <>
      <div
        onMouseEnter={() => setSelectedSubmenu(service._id)}
        className={`w-full ${
          selectedSubmenu === service._id && "text-secondary-400"
        } hover:text-secondary-400 font-[600] flex items-center gap-2 `}
      >
        {service.title} <IoIosArrowForward />
      </div>
      {selectedSubmenu === service._id && (
        <div
          className={`flex h-max duration-500 transition-all  flex-col gap-2 absolute -top-2 lg:left-[285px] bg-bgSecondary-500 p-3 rounded-md shadow-xl`}
        >
          {service?.submenu?.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              onClick={(e) => {
                setIsSubmenuOpen(false);
              }}
              className="w-[200px] hover:text-secondary-400 flex gap-2 items-center"
            >
              {" "}
              <img className="w-4 bg-primary-500" src={item.icon} alt="" /> {item.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Submenu;
