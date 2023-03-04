import React, { useContext, useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png"


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);


    return (
        <div className="w-full flex items-center justify-center">
            <nav className="container flex justify-between items-center p-4 z-999 bg-white" id="nav">
                <div className="md:flex-[0.5] flex-initial justify-center items-center">
                    <Link to='/'>
                        <img src={logo} alt="" className="w-60" />
                    </Link>
                    <p className="text-gray-500 hover:text-primary-400 hidden md:hidden lg:block italic">We make your Business Successfull</p>
                </div>
                <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
                    {/* {["home", "about us", "Services", "Contact"].map((item, index) => (
                        <NavBarItem key={item + index} title={item} />
                    ))} */}
                    <Link to="/">
                        <li className="mx-4 cursor-pointer uppercase text-white md:text-gray-400 text-xl hover:text-primary-400" onClick={() => setToggleMenu(false)}>Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="mx-4 cursor-pointer uppercase text-white md:text-gray-400 text-xl hover:text-primary-400" onClick={() => setToggleMenu(false)}>About Us</li>
                    </Link>
                    <Link to="/services">
                        <li className="mx-4 cursor-pointer uppercase text-white md:text-gray-400 text-xl hover:text-primary-400" onClick={() => setToggleMenu(false)}>Services</li>
                    </Link>
                    <Link to="/contact">
                        <li className="mx-4 cursor-pointer uppercase text-white md:text-gray-400 text-xl hover:text-primary-400" onClick={() => setToggleMenu(false)}>Contact</li>
                    </Link>
                    <Link to='/apply' target="_blank">
                        <li className="bg-primary-500 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-primary-400 text-white">
                            Aplly For Job
                        </li>
                    </Link>
                </ul>
                <div className="flex relative md:hidden">
                    {!toggleMenu && (
                        <HiMenuAlt4 fontSize={28} className="text-gray-500 hover:text-primary-400 md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                    )}
                    
                    {toggleMenu && (
                        <ul
                            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                    flex flex-col justify-start items-center rounded-md glassmorphism text-gray-500 hover:text-primary-400 animate-slide-in"
                        >
                            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
                            <Link to="/">
                                <li className="mx-4 cursor-pointer uppercase text-gray md:text-gray-400 text-xl hover:text-primary-400 mt-3" onClick={() => setToggleMenu(false)}>Home</li>
                            </Link>
                            <Link to="/about">
                                <li className="mx-4 cursor-pointer uppercase text-gray md:text-gray-400 text-xl hover:text-primary-400 mt-3" onClick={() => setToggleMenu(false)}>About Us</li>
                            </Link>
                            <Link to="/services">
                                <li className="mx-4 cursor-pointer uppercase text-gray md:text-gray-400 text-xl hover:text-primary-400 mt-3" onClick={() => setToggleMenu(false)}>Services</li>
                            </Link>
                            <Link to="/contact">
                                <li className="mx-4 cursor-pointer uppercase text-gray md:text-gray-400 text-xl hover:text-primary-400 mt-3" onClick={() => setToggleMenu(false)}>Contact</li>
                            </Link>
                            <Link to='/apply' target="_blank">
                                <li className="bg-primary-500 py-2 px-7 mx-4 mt-5 rounded-full cursor-pointer hover:bg-primary-400 text-white">
                                    Aplly For Job
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