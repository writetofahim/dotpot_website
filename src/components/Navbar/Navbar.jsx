import React, { useContext, useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png"

const NavBarItem = ({ title, classprops, setToggleMenu }) => (
    <Link to={`/${title}`}>
        <li className={`mx-4 cursor-pointer uppercase text-gray-700 hover:text-primary-400 ${classprops}`} onClick={() => setToggleMenu(false)}>{title}</li>
    </Link>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    const logout = () => {
        localStorage.removeItem("isAdmin")
        setIsAdmin(false);
    }

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4 z-999 sticky top-0 bg-white">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <Link to='/'>
                    <img src={logo} alt="" className="w-60" />
                </Link>
                <p className="text-gray-500 hover:text-primary-400 hidden md:hidden lg:block italic">We make your Business Successfull</p>
            </div>
            <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["home", "about us", "Services", "Contact"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}
                <Link to='/login'>
                    <li className="bg-primary-500 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-primary-400 text-white">
                        Aplly For Job
                    </li>
                </Link>
            </ul>
            <div className="flex relative">
                {!toggleMenu && (
                    <HiMenuAlt4 fontSize={28} className="text-gray-500 hover:text-primary-400 md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                )}
                {/* {toggleMenu && (
            <AiOutlineClose fontSize={28} className="text-gray-500 hover:text-primary-400 md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            )} */}
                {toggleMenu && (
                    <ul
                        className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                flex flex-col justify-start items-center rounded-md glassmorphism text-gray-500 hover:text-primary-400 animate-slide-in"
                    >
                        <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
                        {["home", "about us", "Services", "Contact"].map(
                            (item, index) => <NavBarItem key={item + index} title={item} setToggleMenu={setToggleMenu} classprops="my-2 text-lg" />,
                        )}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;