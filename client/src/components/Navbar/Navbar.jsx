/**
This component is a navbar that includes a logo, links to different pages, and a button to apply for a job. It uses React, react-router-dom, and some TailwindCSS for styling.

To use it, import the component from its location and place it in the desired location in your app. 
The navbar will automatically display the links to different pages and the logo.

The component has a state hook that toggles a menu when the screen size is small, and displays a dropdown with the same links.

To customize the links or add new ones, simply modify the Link components and their corresponding text inside the ul element.

To apply custom styles, modify the with tailwind css classes and the background style is in index.css file.
 */

import React, { useContext, useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png"
import { AuthContext } from "../../contexts/AuthContext";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const { user, login, error, logout } = useContext(AuthContext);

    const services = [
        {
            _id: "64154c0fa6d33ade2d34b7c4",
            to: "/",
            title: "App Development",
            icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",
        },
        {
            _id: "64154c31a6d33ade2d34b7cb",
            to: "/",
            title: "Web Development",
            icon: "https://cdn-icons-png.flaticon.com/512/1927/1927656.png",

        },
        {
            _id: "64154c54a6d33ade2d34b7f0",
            to: "/",
            title: "iT Support",
            icon: "https://cdn-icons-png.flaticon.com/512/2058/2058768.png",

        },
        {
            _id: "64154c6fa6d33ade2d34b81f",
            to: "/",
            title: "Contact Center",
            icon: "https://cdn-icons-png.flaticon.com/512/1687/1687136.png",

        },
        {
            _id: "641ad843606377b65fcb8639",
            to: "/",
            title: "Game Development",
            icon: "https://cdn-icons-png.flaticon.com/512/6581/6581049.png",
        }
    ]

    return (
        <div className="w-full flex items-center justify-center fixed z-10 bg-white">
            <nav className="container flex justify-between items-center p-4 z-999" id="nav">
                <div className="lg:flex-[0.5] flex-initial justify-center items-center">
                    <Link to='/'>
                        <img src={logo} alt="" className="w-60" />
                    </Link>
                    <p className="text-gray-500 hover:text-primary-400 hidden lg:hidden lg:block italic">We make your Business Successful</p>
                </div>
                <ul className="lg:flex hidden list-none flex-row justify-between items-center flex-initial">
                    {/* {["home", "about us", "Services", "Contact"].map((item, index) => (
                        <NavBarItem key={item + index} title={item} />
                    ))} */}
                    <NavLink to="/">
                        {({ isActive }) => (
                            <li className={`${isActive ? "lg:text-primary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-primary-400`}>Home</li>
                        )}
                    </NavLink>
                    <NavLink to="/about">
                        {({ isActive }) => (
                            <li className={`${isActive ? "lg:text-primary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-primary-400`}>About Us</li>
                        )}
                    </NavLink>
                    <NavLink to="/services" className={"relative group "}>
                        {({ isActive }) => (
                            <>
                                <li className={`${isActive ? "lg:text-primary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-primary-400 flex gap-2 items-center`}>Services <IoIosArrowDown /></li>
                                <div className="absolute hidden group-hover:flex top-6 left-0  flex-col gap-3 py-5 bg-white px-5 rounded-md shadow-2xl">
                                    {services.map(service => <Link to={service.to} className="flex gap-2 items-center w-max hover:scale-105 duration-100"><img width={20} src={service.icon} alt="" /><span key={service._id} className="w-full hover:text-primary-400 font-[600]">{service.title}</span></Link>)}
                                </div>
                            </>
                        )}

                    </NavLink>
                    <NavLink to="/contact">
                        {({ isActive }) => (
                            <li className={`${isActive ? "lg:text-primary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-primary-400`} onClick={() => setToggleMenu(false)}>Contact</li>
                        )}
                    </NavLink>
                    <NavLink to="/blog">
                        {({ isActive }) => (
                            <li className={`${isActive ? "lg:text-primary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-primary-400`} onClick={() => setToggleMenu(false)}>Blog</li>
                        )}
                    </NavLink>

                    {
                        !user ? (
                            <NavLink to="/login">
                                {({ isActive }) => (
                                    <li className={`${isActive ? "lg:text-primary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-primary-400`} onClick={() => setToggleMenu(false)}>Login</li>)}
                            </NavLink>
                        ) : (
                            <li className="mx-4 cursor-pointer uppercase text-white font-bold lg:text-gray-400 text-lg hover:scale-110 hover:text-primary-400" onClick={() => logout()}>Logout</li>
                        )
                    }

                    <Link to='/apply' target="_blank">
                        <li className="bg-primary-500 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-primary-400 text-white">
                            Apply For Jobs
                        </li>
                    </Link>
                </ul>
                <div className="flex relative lg:hidden">
                    {!toggleMenu && (
                        <HiMenuAlt4 fontSize={28} className="text-gray-500  lg:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                    )}

                    {toggleMenu && (
                        <ul
                            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl lg:hidden list-none
                    flex flex-col justify-start items-center rounded-lg glassmorphism text-gray-500 animate-slide-in"
                        >
                            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
                            <Link to="/">
                                <li className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-xl font-bold mt-3" onClick={() => setToggleMenu(false)}>Home</li>
                            </Link>
                            <Link to="/about">
                                <li className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-xl font-bold mt-3" onClick={() => setToggleMenu(false)}>About Us</li>
                            </Link>
                            <Link to="/services">
                                <li className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-xl font-bold mt-3 flex gap-2 items-center" onClick={() => setIsDropDownOpen(p => !p)}>Services <IoIosArrowDown /></li>
                            </Link>
                            <div className={`relative overflow-hidden ${!isDropDownOpen ? "h-0" : "h-[250px]"} duration-500 transition-all text-center`}>
                                {services.map(service => <Link key={service._id} to={service.to}>
                                    <li className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-lg font-bold mt-3" onClick={() => setToggleMenu(false)}>{service.title} </li>
                                </Link>)}
                                <Link to="/services">
                                    <li className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-lg font-bold mt-3" onClick={() => setToggleMenu(false)}>Get A Quote </li>
                                </Link>
                            </div>
                            <Link to="/contact">
                                <li className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-xl font-bold mt-3" onClick={() => setToggleMenu(false)}>Contact</li>
                            </Link>
                            <Link to="/blog">
                                <li className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-xl font-bold mt-3" onClick={() => setToggleMenu(false)}>Blog</li>
                            </Link>
                            {
                                !user ? (
                                    <Link to="/login"><li className="mx-4 cursor-pointer uppercase lg:text-gray-400 text-lg font-bold hover:scale-110 mt-2" >Login</li></Link>
                                ) : (
                                    <li className="mx-4 cursor-pointer uppercase text-white lg:text-gray-400 text-lg hover:scale-110 " onClick={() => logout()}>Logout</li>
                                )
                            }
                            <Link to='/apply' target="_blank">
                                <li className="bg-primary-500 py-2 px-7 mx-4 mt-5 rounded-full cursor-pointer text-white">
                                    Apply For Jobs
                                </li>
                            </Link>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;