/**
This component is a navbar that includes a logo, links to different pages, and a button to apply for a job. It uses React, react-router-dom, and some TailwindCSS for styling.

To use it, import the component from its location and place it in the desired location in your app. 
The navbar will automatically display the links to different pages and the logo.

The component has a state hook that toggles a menu when the screen size is small, and displays a dropdown with the same links.

To customize the links or add new ones, simply modify the Link components and their corresponding text inside the ul element.

To apply custom styles, modify the with tailwind css classes and the background style is in index.css file.
 */

import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { AuthContext } from "../../contexts/AuthContext";


const Navbar = () => {
    const { user, login, error, logout } = useContext(AuthContext);
    
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen]=useState(false)
    const [selectedSubmenu, setSelectedSubmenu]=useState(null)

    const serviceButtonRef = useRef(null)
    const serviceSubmenuDiv = useRef(null)

    const navigate = useNavigate()

    useEffect(() => {
        function handleDocumentClick(event) {
            // Check if the clicked element is inside the submenu or not
            if (isSubmenuOpen && !serviceButtonRef.current.contains(event.target) && !serviceSubmenuDiv.current.contains(event.target)) {
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
            to:"/key-features/mobile-app-development",
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
            to: "/key-features/website-development",
            icon: "https://cdn-icons-png.flaticon.com/512/1927/1927656.png",
            submenu:[
                {to: "/key-features/website-development", title: "React JS", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/key-features/website-development", title: "Next JS", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/key-features/website-development", title: "PHP", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/key-features/website-development", title: "Wordpress", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/key-features/website-development", title: "Drupal", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
                {to: "/key-features/website-development", title: "Django", icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",},
            ]

        },
        {
            _id:3,
            title: "Blockchain Development",
            to: "/key-features/blockchain-development",
            icon: "https://cdn-icons-png.flaticon.com/512/2152/2152349.png",
            submenu:[
                {to: "/key-features/blockchain-development", title: "Wallet"},
                {to: "/key-features/blockchain-development", title: "Exchange"},
                {to: "/key-features/blockchain-development", title: "Ethereum"},
                {to: "/key-features/blockchain-development", title: "Smart Contacts"},
                {to: "/key-features/blockchain-development", title: "Private Blockchain"},
                {to: "/key-features/blockchain-development", title: "NFT Marketplace"},
            ]

        },
        {
            _id: 4,
            title: "AI & ML",
            to:"/key-features/ai-development",
            icon: "https://cdn-icons-png.flaticon.com/512/1693/1693746.png",
            submenu: [
                { to: "/key-features/ai-development", title: "Object Recognition" },
                { to: "/key-features/ai-development", title: "Text to speech" },
                { to: "/key-features/ai-development", title: "Business Intelligence" },
                { to: "/key-features/ai-development", title: "Data Forecasting" },
                { to: "/key-features/ai-development", title: "Natural Language Processing" },
                { to: "/key-features/ai-development", title: "Data Analytics" },
                { to: "/key-features/ai-development", title: "Recommendation Engine" },
            ]
        },
        {
            _id: 5,
            title: "iT Support",
            to:"/key-features/it-support",
            icon: "https://cdn-icons-png.flaticon.com/512/2058/2058768.png",
            submenu: [
                { to: "/key-features/it-support", title: "Cloud Computing" },
                { to: "/key-features/it-support", title: "Database Administration" },
                { to: "/key-features/it-support", title: "Cybersecurity " },
                { to: "/key-features/it-support", title: "IT Consulting" },
                { to: "/key-features/it-support", title: "Project Management" },
                { to: "/key-features/it-support", title: "Technical Support" },

            ]
        },
        {
            _id: 6,
            title: "Contact Center",
            to:"/key-features/contact-center-support",
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
            to:"/industries-we-serve/gaming",
            icon: "https://cdn-icons-png.flaticon.com/512/6581/6581049.png",
            submenu:[
                {to: "/industries-we-serve/gaming", title: "Unity 3D", },
                {to: "/industries-we-serve/gaming", title: "Metaverse"},
                {to: "/industries-we-serve/gaming", title: "Unreal Engine"},
                {to: "/industries-we-serve/gaming", title: "Augmented Reality"},
                {to: "/industries-we-serve/gaming", title: "Casual Games"},
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
                        <div ref={serviceSubmenuDiv} className={`absolute ${isSubmenuOpen ? "flex" : "hidden"} top-6 left-0 w-max flex-col gap-3 py-5 bg-white rounded-md shadow-2xl`}>
                            {services.map((service, i) => <div key={i} className="px-5 flex group/item gap-2 items-center w-full hover:scale-105 duration-100 cursor-pointer relative">
                                <img className="" width={20} src={service.icon} alt="" />
                                <div onClick={() => { navigate(service.to) }} className="w-full hover:text-secondary-400 font-[600] flex items-center gap-2">{service.title} <IoIosArrowForward />
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
                                            <div className="h-full flex flex-col gap-2" >
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

