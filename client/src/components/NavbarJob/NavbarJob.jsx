/**
This is a React component for the jobportal navbar that renders a responsive navigation bar with a logo, links, and a mobile menu icon.

The component imports the following dependencies from React: useContext and useEffect. Additionally, it imports icon from the react-icons library and the Link component from the react-router-dom library. It also imports an image file that used as the logo.

The component contains a state variable toggleMenu that toggles between showing and hiding the mobile menu.

The component returns a navigation bar with a logo and links.

The component uses Tailwind CSS classes for styling..

To use this component, import it into a parent component using import NavbarJob from "./NavbarJob" and place it where desired in the JSX of the parent component. Additionally, make sure to have the dependencies installed and imported in the parent component as well.
*/

import React, { useContext, useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import CommonModal from "../CommonModal/CommonModal";

const NavbarJob = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [open, setOpen] = useState(false);
  const { user, login, error, logout } = useContext(AuthContext);

  return (
    <>
      {open && (
        <CommonModal
          message={"Are you sure to logout!"}
          open={open}
          setOpen={setOpen}
          handler={logout}
          buttonTitle="Logout"
          title={"Confirm logout"}
        />
      )}
      <nav
        className="container w-full mx-auto flex justify-between items-center p-4 z-999 bg-background-500"
        id="nav"
      >
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-60" />
          </Link>
          {/* <p className="text-gray-500 hover:text-primary-400 hidden md:hidden lg:block italic">We make your Business Successfull</p> */}
        </div>
        <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <Link to="/apply">
            <li
              className="cursor-pointer  text-xl hover:text-primary-400 uppercase text-textColor-500 px-3 py-1 rounded-sm"
              onClick={() => setToggleMenu(false)}
            >
              All Jobs
            </li>
          </Link>
          <Link to="/">
            <li className="  text-xl hover:text-primary-400 uppercase text-textColor-500 px-3 py-1 rounded-sm">
              Home
            </li>
          </Link>
          {!user ? (
            <Link to="/login" target="_blank">
              <li className="cursor-pointer  text-xl hover:text-primary-400 uppercase text-textColor-500 px-3 py-1 rounded-sm">
                Login
              </li>
            </Link>
          ) : (
            <li
              className="cursor-pointer  text-xl hover:text-primary-400 uppercase text-textColor-500 px-3 py-1 rounded-sm"
              onClick={() => setOpen(true)}
            >
              Logout
            </li>
          )}
        </ul>
        <div className="flex relative md:hidden">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-gray-500 hover:text-primary-400 md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl lg:hidden list-none
                        flex flex-col justify-start items-center rounded-lg bg-primary-100/70 backdrop-blur-3xl text-gray-500 animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <Link to="/">
                <li
                  className="mx-4 cursor-pointer uppercase text-gray md:text-gray-400 text-xl hover:text-primary-400 mt-3"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </li>
              </Link>
              <Link to="/apply">
                <li
                  className="mx-4 cursor-pointer uppercase text-gray md:text-gray-400 text-xl hover:text-primary-400 mt-3"
                  onClick={() => setToggleMenu(false)}
                >
                  All Jobs
                </li>
              </Link>
              {!user ? (
            <Link to="/login" target="_blank">
              <li className="cursor-pointer  text-xl hover:text-primary-400 uppercase text-textColor-500 px-3 py-1 rounded-sm">
                Login
              </li>
            </Link>
          ) : (
            <li
              className="cursor-pointer  text-xl hover:text-primary-400 uppercase text-textColor-500 px-3 py-1 rounded-sm"
              onClick={() => setOpen(true)}
            >
              Logout
            </li>
          )}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavbarJob;
