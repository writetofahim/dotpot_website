import React from "react";
import { NavLink } from "react-router-dom";

const WebDevNav = () => {
  return (
    <div>
      <div className="box-border">
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-1  block text-gray-400 text-center">
          Technologies We Work On
        </h2>
        <div>
          <ul className="box-border border-b mt-5  flex justify-center gap-3">

            <li className="box-border px-1 py-2 flex justify-center items-center rounded-t hover:border-t hover:border-x  ">
              <NavLink
                to="/key-features/website-development/frontend"
                className={({ isActive }) =>
                  isActive ? "text-primary-300 border-b-4" : "text-gray-400"
                }
              >
                Frontend
              </NavLink>
            </li>
            <li className="box-border px-1 py-2 flex justify-center items-center rounded-t hover:border-t hover:border-x">
              <NavLink
                to="/key-features/website-development/backend"
                className={({ isActive }) =>
                  isActive ? "text-primary-300 border-b-4" : "text-gray-400"
                }
              >
                Backend
              </NavLink>
            </li>
            <li className="box-border px-1 py-2 flex justify-center items-center rounded-t hover:border-t hover:border-x  ">
              <NavLink
                to="/key-features/website-development/cms"
                className={({ isActive }) =>
                  isActive ? "text-primary-300 border-b-4" : "text-gray-400"
                }
              >
                CMS
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebDevNav;
