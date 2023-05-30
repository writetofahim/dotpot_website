/**
The component Footer renders the footer section of a web page. It consists of three main parts:

Desktop Footer:
It shows the footer with three columns (two on the left and one on the right).
The left columns show the company logo, address, and contact information.
The right column shows links to different sections of the website divided into different categories.
It is hidden in mobile view.
Mobile Footer:
It shows the company logo, address, and contact information.
It also shows a button to toggle links to different sections of the website.
It is visible in mobile view.
MobileMenu:
It is a helper component to show the links when the toggle button is clicked in mobile view.
 */
import { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPlusLg,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { footerData } from "../../data";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

// Mobaile Menu
export const MobileMenu = (props) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="md:hidden mt-8">
      <button
        className="font-bold text-lg w-full text-left flex gap-5 items-center text-buttonText-500"
        onClick={toggleLinks}
      >
        {props.title} {!showLinks ? <BsPlusLg /> : <BiMinus />}
      </button>
      {/* Show links if toggleLinks is true */}
      {showLinks && (
        <div className="mt-4">
          <ul className="space-y-2">
            {props.links.map((item, index) => (
              <li
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-secondary-500 text-buttonText-500"
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  const links = footerData.columns;
  const [socialLinks, setSocialLinks] = useState([]);
  const socialIcons = [
    <BsTwitter />,
    <BsFacebook />,
    <BsWhatsapp />,
    <BsLinkedin />,
    <BsYoutube />,
    <FaTiktok />,
    <BsInstagram />,
  ];

  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    axios.get("/info").then((response) => {
      setCompanyInfo(response.data[0]);
      // console.log(response.data[0]);
    });
    return () => { };
  }, []);

  useEffect(() => {
    const fetchLinks = async () => {
      const { data } = await axios.get("/socialmedia");
      setSocialLinks(data);
      // console.log("social Links", data)
      postLogger({ level: "info", message: data });
    };
    fetchLinks();
  }, []);

  return (
    <footer className="bg-gray-800 pt-10">
      <div className="container mx-auto py-8 px-4">
        {/* Three columns */}
        <div className="md:grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-4 hidden">
          <div className="md:col-span-2 lg:col-span-1 w-full text-gray-200">
            <Link to="/">
              <img
                src={`${import.meta.env.REACT_APP_SERVER_PATH}/${companyInfo.secondary_logo
                  }`}
                alt="Dotpot iT Logo"
                className="w-[250px]"
              />
            </Link>
            {/* <p className="mb-3 ml-3">Help Business Successful Online</p> */}
            <h2>Dotpot iT</h2>
            <a href="https://www.google.com/maps/search/House-1,+Road-3,+Block-A,+Mirpur-10,+Dhaka,+Bangladesh/@23.8089482,90.3534604,15z/data=!3m1!4b1?entry=ttu" target="_blank">House-1, Road-3, Block-A, <br></br> Mirpur-10, Dhaka, Bangladesh</a>
            <br />
            <br />
            <p>
              <strong>Phone:</strong>
            </p>
            <a href="tel:+8801817176192">+880 1817 176 192</a>
            <br />
            <br />
            <p>
              <strong>Emails:</strong>{" "}
            </p>
            <a href="mailto:help@dotpotit.com">help@dotpotit.com</a><br />
            <a href="mailto:hr@dotpotit.com">hr@dotpotit.com</a><br />
            <a href="mailto:marketing@dotpotit.com">marketing@dotpotit.com</a>
            {/* <a href="mailto:sales@dotpotit.com">sales@dotpotit.com</a> */}
            {/* <a href="mailto:career@dotpotit.com">career@dotpotit.com</a> */}
            <div className="flex gap-4 mt-5 items-center">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  className="text-buttonColor-500 hover:text-primary-500 cursor-pointer duration-300 text-xl"
                >
                  {socialIcons[i]}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {links.map((item, index) => (
            <div className="md:col-span-1" key={index}>
              <h2 className="font-bold text-lg mb-2 text-buttonText-500">
                {item.title}
              </h2>
              {/* Links */}
              <ul className="space-y-2">
                {item.links.map((link, index) => (
                  <li
                    key={index}
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-secondary-500 text-gray-200"
                  >
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden block w-full text-buttonText-500">
          <Link to="/">
            <img
              src={`${import.meta.env.REACT_APP_SERVER_PATH}/${companyInfo.secondary_logo
                }`}
              alt="Dotpot iT Logo"
              className="w-4/5"
            />
          </Link>
          {/* <p>Make your Business Success Online</p> */}
          <br />
          <p>Dotpot iT</p>
          <p>House-1, Road-3, Block-A</p>
          <p>Mirpur-10, Dhaka, Bangladesh</p>
          <br />
          <p>
            <strong>Phone:</strong>
          </p>
          <p> +880 1817 176 192</p>
          <br />
          <p>
            <strong>Emails:</strong>{" "}
          </p>
          <p>help@dotpotit.com</p>
          <p> hr@dotpotit.com</p>
          {/* <p className=""> sales@dotpotit.com</p> */}
          <p> marketing@dotpotit.com</p>
          {/* <p className=""> career@dotpotit.com</p> */}
          <div className="flex gap-4 mt-5 items-center">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                className="text-buttonText-500 hover:text-secondary-500 cursor-pointer duration-300 text-xl"
              >
                {socialIcons[i]}
              </a>
            ))}
          </div>
        </div>
        {links.map((item, index) => (
          <MobileMenu key={index} {...item} />
        ))}
        {/* Bottom row */}
        <div className="mt-8">
          <p className="text-sm text-secondary-500">
            © 2023 Dotpot iT, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
