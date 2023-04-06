/**
This component is a navbar that includes a logo, links to different pages, and a button to apply for a job. It uses React, react-router-dom, and some TailwindCSS for styling.

To use it, import the component from its location and place it in the desired location in your app. 
The navbar will automatically display the links to different pages and the logo.

The component has a state hook that toggles a menu when the screen size is small, and displays a dropdown with the same links.

To customize the links or add new ones, simply modify the Link components and their corresponding text inside the ul element.

To apply custom styles, modify the with tailwind css classes and the background style is in index.css file.
 */

import React, { useContext, useEffect, useRef, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png"
import { AuthContext } from "../../contexts/AuthContext";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const { user, login, error, logout } = useContext(AuthContext);
    const [isSubmenuOpen, setIsSubmenuOpen]=useState(false)
    const [selectedSubmenu, setSelectedSubmenu]=useState(null)
    const serviceButtonRef = useRef(null)

    useEffect(() => {
        function handleDocumentClick(event) {
            // Check if the clicked element is inside the submenu or not
            if (isSubmenuOpen && !serviceButtonRef.current.contains(event.target)) {
                setIsSubmenuOpen(false);
            }
        }
        // Add event listener for mousedown event
        document.addEventListener('mousedown', handleDocumentClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, [isSubmenuOpen]);

    const services = [
        {
            _id: 1,
            title: "App Development",
            icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",
            submenu:[
                {to: "/key-features/mobile-app-development", title: "Android App", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/key-features/mobile-app-development", title: "iPhone App", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/key-features/mobile-app-development", title: "Flutter App", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/key-features/mobile-app-development", title: "Kotlin", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/key-features/mobile-app-development", title: "Iconic", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/key-features/mobile-app-development", title: "Swift", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
            ]
        },
        {
            _id:2,
            title: "Web Development",
            icon: "https://cdn-icons-png.flaticon.com/512/1927/1927656.png",
            submenu:[
                {to: "/", title: "React JS", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/", title: "Next JS", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/", title: "PHP", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/", title: "Wordpress", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/", title: "Drupal", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/", title: "Django", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
            ]

        },
        {
            _id:3,
            title: "Blockchain Development",
            icon: "https://cdn-icons-png.flaticon.com/512/2152/2152349.png",
            submenu:[
                {to: "/", title: "Wallet"},
                {to: "/", title: "Exchange"},
                {to: "/", title: "Ethereum"},
                {to: "/", title: "Smart Contacts"},
                {to: "/", title: "Private Blockchain"},
                {to: "/", title: "NFT Marketplace"},
            ]

        },
        {
            _id: 4,
            title: "AI & ML",
            icon: "https://cdn-icons-png.flaticon.com/512/1693/1693746.png",
            submenu: [
                { to: "/", title: "Object Recognition" },
                { to: "/", title: "Text to speech" },
                { to: "/", title: "Business Intelligence" },
                { to: "/", title: "Data Forecasting" },
                { to: "/", title: "Natural Language Processing" },
                { to: "/", title: "Data Analytics" },
                { to: "/", title: "Recommendation Engine" },
            ]
        },
        {
            _id: 5,
            title: "iT Support",
            icon: "https://cdn-icons-png.flaticon.com/512/2058/2058768.png",
            submenu: [
                { to: "/", title: "Cloud Computing" },
                { to: "/", title: "Database Administration" },
                { to: "/", title: "Cybersecurity " },
                { to: "/", title: "IT Consulting" },
                { to: "/", title: "Project Management" },
                { to: "/", title: "Technical Support" },

            ]
        },
        {
            _id: 6,
            title: "Contact Center",
            icon: "https://cdn-icons-png.flaticon.com/512/1687/1687136.png",
            submenu: [
                { to: "/contact_center_services/cti", title: "CTI" },
                { to: "/contact_center_services/email-marketing", title: "Email Marketing" },
                { to: "/contact_center_services/chat", title: "Chat" },
                { to: "/contact_center_services/pd", title: "Predictive Dialer" },
                { to: "/contact_center_services/mobile-app", title: "Mobile App Module" },
                { to: "/contact_center_services/collection", title: "Collection" },
                { to: "/contact_center_services/customer-service", title: "Customer Service" },
                { to: "/contact_center_services/ivr", title: "IVR" },
                { to: "/contact_center_services/acd", title: "ACD" },
            ]

        },
        {
            _id: 7,
            title: "Game Development",
            icon: "https://cdn-icons-png.flaticon.com/512/6581/6581049.png",
            submenu:[
                {to: "/", title: "Unity 3D", },
                {to: "/", title: "Metaverse"},
                {to: "/", title: "Unreal Engine"},
                {to: "/", title: "Augmented Reality"},
                {to: "/", title: "Casual Games"},
            ]
        }
    ]
    

    return (
        <div className="w-full flex items-center justify-center fixed z-50 bg-white">
            <nav className="container flex justify-between items-center p-4 z-999" id="nav">
                <div className="lg:flex-[0.5] flex-initial justify-center items-center">
                    <Link to='/'>
                        <img src={logo} alt="" className="w-60" />
                    </Link>
                    <p className="text-gray-500 hover:text-secondary-400 hidden lg:hidden lg:block italic">We make your Business Successful</p>
                </div>
                <div className="lg:flex hidden list-none flex-row justify-between items-center flex-initial">
                    {/* {["home", "about us", "Services", "Contact"].map((item, index) => (
                        <NavBarItem key={item + index} title={item} />
                    ))} */}
                    <NavLink to="/">
                        {({ isActive }) => (
                            <span className={`${isActive ? "lg:text-secondary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400`}>Home</span>
                        )}
                    </NavLink>
                    <NavLink to="/about">
                        {({ isActive }) => (
                            <li className={`${isActive ? "lg:text-secondary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400`}>About Us</li>
                        )}
                    </NavLink>
                    <div className={"relative w-max"}>
                        <li ref={serviceButtonRef} className={` mx-4 cursor-pointer uppercase font-bold text-lg hover:scale-110 hover:text-secondary-400 flex gap-2 items-center`} onClick={() => setIsSubmenuOpen(p => !p)}>Services <IoIosArrowDown /></li>
                        <div className={`absolute ${isSubmenuOpen ? "flex" : "hidden"} top-6 left-0 w-max flex-col gap-3 py-5 bg-white rounded-md shadow-2xl`}>
                            {services.map((service, i) => <div key={i} className="px-5 flex group/item gap-2 items-center w-full hover:scale-105 duration-100 cursor-pointer relative">
                                <img className="" width={20} src={service.icon} alt="" />
                                <div key={service._id} className="w-full hover:text-secondary-400 font-[600] flex items-center gap-2">{service.title} <IoIosArrowForward />
                                </div>
                                <div className="group-hover/item:flex duration-500 h-0 transition-all group-hover/item:h-max flex-col gap-2 hidden absolute -top-2 lg:left-[285px] bg-white p-3 rounded-md shadow-xl">
                                    {service?.submenu?.map((item, i) => <Link key={i} to={item.to} className="w-[200px] hover:text-secondary-400" >{item.title}</Link>)}
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <NavLink to="/contact">
                        {({ isActive }) => (
                            <li className={`${isActive ? "lg:text-secondary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400`} onClick={() => setToggleMenu(false)}>Contact</li>
                        )}
                    </NavLink>
                    <NavLink to="/blog">
                        {({ isActive }) => (
                            <li className={`${isActive ? "lg:text-secondary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400`} onClick={() => setToggleMenu(false)}>Blog</li>
                        )}
                    </NavLink>

                    {
                        !user ? (
                            <NavLink to="/login">
                                {({ isActive }) => (
                                    <li className={`${isActive ? "lg:text-secondary-400 text-white" : "lg:text-gray-400 "} mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400`} onClick={() => setToggleMenu(false)}>Login</li>)}
                            </NavLink>
                        ) : (
                            <li className="mx-4 cursor-pointer uppercase text-white font-bold lg:text-gray-400 text-lg hover:scale-110 hover:text-secondary-400" onClick={() => logout()}>Logout</li>
                        )
                    }

                    <Link to='/apply' target="_blank">
                        <li className="bg-secondary-400 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-secondary-500 text-white">
                            Apply For Jobs
                        </li>
                    </Link>
                </div>
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
                            <div className={`relative overflow-hidden ${!isDropDownOpen ? "h-0" : "h-max"} duration-500 transition-all text-center`}>
                                {services.map((service, i) => <div key={i} >
                                    <div key={i} className={`mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-base font-bold mt-3 relative` }>
                                        <span onClick={() => setSelectedSubmenu(service._id)} className={`${selectedSubmenu === service._id ? "text-blue-700" : ""} flex gap-2 items-center justify-center`}>{service.title} <IoIosArrowDown /></span>
                                        <div className={`${selectedSubmenu === service._id ? `h-max` : "max-h-0"} flex flex-col gap-2 overflow-hidden transition-max-h duration-500`}>
                                            <div className="h-full" >
                                                {service?.submenu?.map((item, index) => <Link key={i+index} to={item.to} className={`w-max mx-auto hover:text-primary-400 text-sm`} >{item.title}</Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
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

