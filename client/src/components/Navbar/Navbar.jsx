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
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/axiosInstance";
import CommonModal from "../CommonModal/CommonModal";
import Submenu from "./Submenu";

const Navbar = () => {
  const { user, login, error, logout } = useContext(AuthContext);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);

  const [companyInfo, setCompanyInfo] = useState({});

  const [open, setOpen] = useState(false);

  const serviceButtonRef = useRef(null);
  const serviceSubmenuDiv = useRef(null);

  useEffect(() => {
    axios.get("/info").then((response) => {
      setCompanyInfo(response.data[0]);
    });
    return () => {};
  }, []);

  useEffect(() => {
    function handleDocumentClick(event) {
      // Check if the clicked element is inside the submenu or not
      if (
        isSubmenuOpen &&
        !serviceButtonRef.current.contains(event.target) &&
        !serviceSubmenuDiv.current.contains(event.target)
      ) {
        setIsSubmenuOpen(false);
      }
    }
    // Add event listener for mousedown event
    document.addEventListener("mousedown", handleDocumentClick);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isSubmenuOpen]);

  const services = [
    {
      _id: 1,
      title: "App Development",
      to: "/key-features/mobile-app-development",
      icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",
      submenu: [
        {
          to: "/key-features/mobile-app-development/#android",
          title: "Android App",
          icon: "https://cdn-icons-png.flaticon.com/512/160/160138.png",
        },
        {
          to: "/key-features/mobile-app-development/#ios",
          title: "iPhone App",
          icon: "https://cdn-icons-png.flaticon.com/512/7344/7344131.png",
        },
        {
          to: "/key-features/mobile-app-development/#flutter",
          title: "Flutter App",
          icon: "https://img.icons8.com/ios/256/flutter.png",
        },
        {
          to: "/key-features/mobile-app-development/#kotlin",
          title: "Kotlin",
          icon: "https://img.icons8.com/ios/256/kotlin.png",
        },
        {
          to: "/key-features/mobile-app-development/#iconic",
          title: "Iconic",
          icon: "https://www.shareicon.net/download/2015/08/23/89513_ionic_512x512.png",
        },
        {
          to: "/key-features/mobile-app-development/#swift",
          title: "Swift",
          icon: "https://img.icons8.com/ios/256/swift.png",
        },
      ],
    },
    {
      _id: 2,
      title: "Web Development",
      to: "/key-features/website-development",
      icon: "https://cdn-icons-png.flaticon.com/512/1927/1927656.png",
      submenu: [
        {
          to: "/web-development/landing-page",
          title: "Landing Page",
          icon: "https://cdn-icons-png.flaticon.com/512/4298/4298077.png",
        },
        {
          to: "/web-development/portfolio-website",
          title: "Portfolio",
          icon: "https://cdn-icons-png.flaticon.com/512/943/943329.png",
        },
        {
          to: "/web-development/blog-website",
          title: "Blog website",
          icon: "https://cdn-icons-png.flaticon.com/512/1187/1187595.png",
        },
        {
          to: "/web-development/e-commerce-website",
          title: "E-commerce",
          icon: "https://cdn-icons-png.flaticon.com/512/2991/2991406.png",
        },
        {
          to: "/web-development/custom-website",
          title: "Custom Website",
          icon: "https://cdn-icons-png.flaticon.com/512/9103/9103694.png",
        },
      ],
    },
    {
      _id: 3,
      title: "Blockchain Development",
      to: "/key-features/blockchain-development",
      icon: "https://cdn-icons-png.flaticon.com/512/2152/2152349.png",
      submenu: [
        {
          to: "/key-features/blockchain-development/#wallet",
          title: "Wallet",
          icon: "https://cdn-icons-png.flaticon.com/512/482/482541.png",
        },
        {
          to: "/key-features/blockchain-development/#exchange",
          title: "Exchange",
          icon: "https://cdn-icons-png.flaticon.com/512/152/152371.png",
        },
        {
          to: "/key-features/blockchain-development/#ethereum",
          title: "Ethereum",
          icon: "https://cdn-icons-png.flaticon.com/512/7825/7825880.png",
        },
        {
          to: "/key-features/blockchain-development/#smart-contact",
          title: "Smart Contacts",
          icon: "https://cdn-icons-png.flaticon.com/512/7267/7267609.png",
        },
        {
          to: "/key-features/blockchain-development/#private-blockchain",
          title: "Private Blockchain",
          icon: "https://cdn-icons-png.flaticon.com/512/7020/7020079.png",
        },
        {
          to: "/key-features/blockchain-development/#nft-arketplace",
          title: "NFT Marketplace",
          icon: "https://cdn-icons-png.flaticon.com/512/6615/6615937.png",
        },
      ],
    },
    {
      _id: 4,
      title: "AI & ML",
      to: "/key-features/ai-development",
      icon: "https://cdn-icons-png.flaticon.com/512/1693/1693746.png",
      submenu: [
        {
          to: "/industries-we-serve/ai",
          title: "Object Recognition",
          icon: "https://cdn-icons-png.flaticon.com/512/8654/8654854.png",
        },
        {
          to: "/key-features/ai-development",
          title: "Text to speech",
          icon: "https://cdn-icons-png.flaticon.com/512/6805/6805674.png",
        },
        {
          to: "/industries-we-serve/ai",
          title: "Business Intelligence",
          icon: "https://cdn-icons-png.flaticon.com/512/7458/7458531.png",
        },
        {
          to: "/key-features/ai-development",
          title: "Data Forecasting",
          icon: "https://cdn-icons-png.flaticon.com/512/9299/9299890.png",
        },
        {
          to: "/industries-we-serve/ai",
          title: "Natural Language Processing",
          icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",
        },
        {
          to: "/key-features/ai-development",
          title: "Data Analytics",
          icon: "https://cdn-icons-png.flaticon.com/512/2782/2782058.png",
        },
        {
          to: "/key-features/ai-development",
          title: "Recommendation Engine",
          icon: "https://cdn-icons-png.flaticon.com/512/7766/7766894.png",
        },
      ],
    },
    {
      _id: 5,
      title: "iT Support",
      to: "/key-features/it-support",
      icon: "https://cdn-icons-png.flaticon.com/512/2058/2058768.png",
      submenu: [
        {
          to: "/key-features/it-support/#cloud-computing",
          title: "Cloud Computing",
          icon: "https://cdn-icons-png.flaticon.com/512/2318/2318786.png",
        },
        {
          to: "/key-features/it-support/#database-administration",
          title: "Database Administration",
          icon: "https://cdn-icons-png.flaticon.com/512/3025/3025358.png",
        },
        {
          to: "/key-features/it-support/#cybersecurity",
          title: "Cybersecurity ",
          icon: "https://cdn-icons-png.flaticon.com/512/2273/2273136.png",
        },
        {
          to: "/key-features/it-support/#it-consulting",
          title: "IT Consulting",
          icon: "https://cdn-icons-png.flaticon.com/512/5689/5689422.png",
        },
        {
          to: "/key-features/it-support/#project-management",
          title: "Project Management",
          icon: "https://cdn-icons-png.flaticon.com/512/5956/5956597.png",
        },
        {
          to: "/key-features/it-support/#technical-support",
          title: "Technical Support",
          icon: "https://cdn-icons-png.flaticon.com/512/4233/4233839.png",
        },
      ],
    },
    {
      _id: 6,
      title: "Contact Center",
      to: "/key-features/contact-center-support",
      icon: "https://cdn-icons-png.flaticon.com/512/1687/1687136.png",
      submenu: [
        {
          to: "/contact_center_services/cti",
          title: "CTI",
          icon: "https://cdn-icons-png.flaticon.com/512/2991/2991793.png",
        },
        {
          to: "/contact_center_services/email-marketing",
          title: "Email Marketing",
          icon: "https://cdn-icons-png.flaticon.com/512/10244/10244391.png",
        },
        {
          to: "/contact_center_services/chat",
          title: "Chat",
          icon: "https://cdn-icons-png.flaticon.com/512/589/589708.png",
        },
        {
          to: "/contact_center_services/pd",
          title: "Predictive Dialer",
          icon: "https://img.icons8.com/windows/256/phone-contact.png",
        },
        {
          to: "/contact_center_services/mobile-app",
          title: "Mobile App Module",
          icon: "https://img.icons8.com/ios-glyphs/256/medical-mobile-app.png",
        },
        {
          to: "/contact_center_services/collection",
          title: "Collection",
          icon: "https://cdn-icons-png.flaticon.com/512/2103/2103533.png",
        },
        {
          to: "/contact_center_services/customer-service",
          title: "Customer Service",
          icon: "https://cdn-icons-png.flaticon.com/512/950/950299.png",
        },
        {
          to: "/contact_center_services/ivr",
          title: "IVR",
          icon: "https://cdn-icons-png.flaticon.com/512/1998/1998178.png",
        },
        {
          to: "/contact_center_services/acd",
          title: "ACD",
          icon: "https://img.icons8.com/external-tal-revivo-regular-tal-revivo/256/external-acd-file-extension-is-a-file-format-associated-to-a-sony-music-editing-software-audio-regular-tal-revivo.png",
        },
      ],
    },
    {
      _id: 7,
      title: "Game Development",
      to: "/industries-we-serve/gaming",
      icon: "https://cdn-icons-png.flaticon.com/512/6581/6581049.png",
      submenu: [
        {
          to: "/industries-we-serve/gaming",
          title: "Unity 3D",
          icon: "https://img.icons8.com/ios/256/unity.png",
        },
        {
          to: "/industries-we-serve/gaming",
          title: "Metaverse",
          icon: "https://img.icons8.com/external-ddara-lineal-ddara/256/external-metaverse-metaverse-ddara-lineal-ddara-3.png",
        },
        {
          to: "/industries-we-serve/gaming",
          title: "Unreal Engine",
          icon: "https://img.icons8.com/ios-filled/256/unreal-engine.png",
        },
        {
          to: "/industries-we-serve/gaming",
          title: "Augmented Reality",
          icon: "https://img.icons8.com/cotton/256/augmented-reality-1-1.png",
        },
        {
          to: "/industries-we-serve/gaming",
          title: "Casual Games",
          icon: "https://img.icons8.com/wired/256/games-folder.png",
        },
      ],
    },
  ];

  const [isServiceActive, setIsServiceActive] = useState(false);

  const currentLocation = useLocation();

  useEffect(() => {
    const submenuTo = services.flatMap((service) =>
      service.submenu.map((sub) => sub.to)
    );
    const selectedPagePath = submenuTo
      .map((to) => {
        if (to.indexOf("#") > -1) {
          return to.slice(0, to.indexOf("#"));
        }
        return to;
      })
      .find((to) => to.includes(currentLocation.pathname));
    if (selectedPagePath === currentLocation.pathname) {
      setIsServiceActive(true);
    } else {
      setIsServiceActive(false);
    }
  }, [currentLocation.pathname]);

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
      <div className="w-full flex items-center justify-center fixed z-50 bg-background-500">
        <nav
          className="container flex justify-between items-center p-4 z-999"
          id="nav"
        >
          <div className="lg:flex-[0.5] flex-initial justify-center items-center">
            <Link to="/">
              <img
                src={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                  companyInfo.primary_logo
                }`}
                alt=""
                className="w-60"
              />
            </Link>
            {/* <p className="text-gray-500 hover:text-secondary-400 hidden lg:block italic">
              We make your Business Successful
            </p> */}
          </div>
          <div className="lg:flex hidden list-none flex-row justify-between items-center flex-initial">
            {/* {["home", "about us", "Services", "Contact"].map((item, index) => (
                        <NavBarItem key={item + index} title={item} />
                    ))} */}
            <NavLink to="/">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive
                      ? "lg:text-secondary-400 text-white"
                      : "lg:text-gray-400 "
                  } mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400`}
                >
                  Home
                </span>
              )}
            </NavLink>
            <NavLink to="/about">
              {({ isActive }) => (
                <li
                  className={`${
                    isActive
                      ? "lg:text-secondary-400 text-white"
                      : "lg:text-gray-400 "
                  } mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400`}
                >
                  About Us
                </li>
              )}
            </NavLink>
            <div className={"relative w-max"}>
              <li
                ref={serviceButtonRef}
                className={` mx-4 cursor-pointer uppercase font-bold text-lg hover:scale-110 lg:text-gray-400 hover:text-secondary-400 flex gap-2 items-center ${
                  isServiceActive && "lg:text-secondary-400 text-white"
                }`}
                onClick={() => setIsSubmenuOpen((p) => !p)}
                onMouseEnter={() => setIsSubmenuOpen((p) => !p)}
              >
                Services <IoIosArrowDown />
              </li>
              <div
                ref={serviceSubmenuDiv}
                onMouseLeave={() => {
                  setIsSubmenuOpen((p) => !p);
                  setSelectedSubmenu(null);
                }}
                className={`absolute ${
                  isSubmenuOpen ? "flex" : "hidden"
                } top-6 left-0 w-max flex-col gap-3 py-5 bg-background-500 rounded-md shadow-2xl`}
              >
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="px-5 flex group/item gap-2 items-center w-full hover:scale-105 duration-100 cursor-pointer relative lg:text-gray-400"
                  >
                    <img width={20} src={service.icon} alt="" />
                    <Submenu
                      service={service}
                      selectedSubmenu={selectedSubmenu}
                      setSelectedSubmenu={setSelectedSubmenu}
                      setIsSubmenuOpen={setIsSubmenuOpen}
                      setIsDropDownOpen={setIsDropDownOpen}
                    />
                    {/* <div
                    onClick={() => {
                      navigate(service.to);
                    }}
                    className="w-full hover:text-secondary-400 font-[600] flex items-center gap-2"
                  >
                    {service.title} <IoIosArrowForward />
                  </div>
                  <div className="group-hover/item:flex duration-500 h-0 transition-all group-hover/item:h-max flex-col gap-2 hidden absolute -top-2 lg:left-[285px] bg-background-500 p-3 rounded-md shadow-xl">
                    {service?.submenu?.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        className="w-[200px] hover:text-secondary-400 flex gap-2 items-center"
                      >
                        {" "}
                        <img className="w-4" src={item.icon} alt="" />{" "}
                        {item.title}
                      </Link>
                    ))}
                  </div> */}
                  </div>
                ))}
              </div>
            </div>
            <NavLink to="/contact">
              {({ isActive }) => (
                <li
                  className={`${
                    isActive
                      ? "lg:text-secondary-400 text-white"
                      : "lg:text-gray-400 "
                  } mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400`}
                  onClick={() => setToggleMenu(false)}
                >
                  Contact
                </li>
              )}
            </NavLink>
            <NavLink to="/blog">
              {({ isActive }) => (
                <li
                  className={`${
                    isActive
                      ? "lg:text-secondary-400 text-white"
                      : "lg:text-gray-400 "
                  } mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400`}
                  onClick={() => setToggleMenu(false)}
                >
                  Blog
                </li>
              )}
            </NavLink>

            {/* adding team nav as per asif sir */}

            {/* <li className="mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400 lg:text-gray-400">
                  <a href="#team">Team</a>
                </li> */}

            {!user ? (
              <NavLink to="/login">
                {({ isActive }) => (
                  <li
                    className={`${
                      isActive
                        ? "lg:text-secondary-400 text-white"
                        : "lg:text-gray-400 "
                    } mx-4 cursor-pointer uppercase font-bold  text-lg hover:scale-110 hover:text-secondary-400`}
                    onClick={() => setToggleMenu(false)}
                  >
                    Login
                  </li>
                )}
              </NavLink>
            ) : (
              <li
                className="mx-4 cursor-pointer uppercase text-white font-bold lg:text-gray-400 text-lg hover:scale-110 hover:text-secondary-400"
                onClick={() => setOpen(true)}
              >
                Logout
              </li>
            )}

            <Link to="/apply" target="_blank">
              <li className="bg-secondary-400 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-secondary-500 lg:text-buttonText-500">
                Apply For Jobs
              </li>
            </Link>
          </div>
          <div className="flex relative lg:hidden">
            {!toggleMenu && (
              <HiMenuAlt4
                fontSize={28}
                className="text-gray-500  lg:hidden cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}

            {/* Mobile Menu */}
            {toggleMenu && (
              <ul
                className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl lg:hidden list-none
                    flex flex-col justify-start items-center rounded-lg bg-primary-100/70 backdrop-blur-3xl text-gray-500 animate-slide-in"
              >
                <li className="text-xl w-full my-7 flex justify-end relative">
                  <AiOutlineClose
                    className="absolute top-0 right-4"
                    onClick={() => setToggleMenu(false)}
                  />
                </li>
                <Link to="/">
                  <li
                    className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-xl font-bold mt-3"
                    onClick={() => setToggleMenu(false)}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li
                    className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-xl font-bold mt-3"
                    onClick={() => setToggleMenu(false)}
                  >
                    About Us
                  </li>
                </Link>
                <Link to="/services">
                  <li
                    className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-xl font-bold mt-3 flex gap-2 items-center"
                    onClick={() => setIsDropDownOpen((p) => !p)}
                  >
                    Services <IoIosArrowDown />
                  </li>
                </Link>
                <div
                  className={`relative overflow-hidden ${
                    !isDropDownOpen ? "h-0" : "h-max"
                  } duration-500 transition-all text-center`}
                >
                  {services.map((service, i) => (
                    <div key={i}>
                      <div
                        key={i}
                        className={`mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-base font-bold mt-3 relative`}
                      >
                        <span
                          onClick={() => setSelectedSubmenu(service._id)}
                          className={`${
                            selectedSubmenu === service._id
                              ? "text-blue-700"
                              : ""
                          } flex gap-2 items-center justify-center`}
                        >
                          {service.title} <IoIosArrowDown />
                        </span>
                        <div
                          className={`${
                            selectedSubmenu === service._id
                              ? `h-max`
                              : "max-h-0"
                          } flex flex-col gap-2 overflow-hidden transition-max-h duration-500`}
                        >
                          <div className="h-full flex flex-col gap-2">
                            {service?.submenu?.map((item, index) => (
                              <Link
                                key={i + index}
                                to={item.to}
                                className={`w-max mx-auto hover:text-primary-400 text-sm`}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Link to="/services">
                    <li
                      className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-lg font-bold mt-3"
                      onClick={() => setToggleMenu(false)}
                    >
                      Get A Quote{" "}
                    </li>
                  </Link>
                </div>
                <Link to="/contact">
                  <li
                    className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-xl font-bold mt-3"
                    onClick={() => setToggleMenu(false)}
                  >
                    Contact
                  </li>
                </Link>
                <Link to="/blog">
                  <li
                    className="mx-4 cursor-pointer uppercase text-gray lg:text-gray-400 text-xl font-bold mt-3"
                    onClick={() => setToggleMenu(false)}
                  >
                    Blog
                  </li>
                </Link>
                {!user ? (
                  <Link to="/login">
                    <li className="mx-4 cursor-pointer uppercase lg:text-gray-400 text-lg font-bold hover:scale-110 mt-2">
                      Login
                    </li>
                  </Link>
                ) : (
                  <li
                    className="mx-4 cursor-pointer uppercase font-bold lg:text-gray-400 text-lg hover:scale-110 "
                    onClick={() => setOpen(true)}
                  >
                    Logout
                  </li>
                )}
                <Link to="/apply" target="_blank">
                  <li className="bg-primary-500 py-2 px-7 mx-4 mt-5 rounded-full cursor-pointer text-white">
                    Apply For Jobs
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
