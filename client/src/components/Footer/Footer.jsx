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
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../../data';
import { BsLinkedin, BsPlusLg, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { FaTiktok } from "react-icons/fa"
import { BiMinus } from "react-icons/bi"
import logo from "../../assets/img/logo.png"
import axios from "../../utils/axiosInstance"
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs"
import postLogger from '../../utils/postLogger';

// Mobaile Menu
export const MobileMenu = (props) => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <div className="md:hidden mt-8">
            <button
                className="font-bold text-lg w-full text-left flex gap-5 items-center"
                onClick={toggleLinks}
            >
                {props.title} {!showLinks ? <BsPlusLg /> : <BiMinus />}
            </button>
            {/* Show links if toggleLinks is true */}
            {showLinks && (
                <div className="mt-4">
                    <ul className="space-y-2">
                        {
                            props.links.map((item, index) => (
                                <li className='hover:text-secondary-500'>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    )
}

const Footer = () => {

    const links = footerData.columns
    const [socialLinks, setSocialLinks] = useState([]);
    const socialIcons = [<BsTwitter />, <BsFacebook />, <BsWhatsapp />, <BsLinkedin />, <BsYoutube />, <FaTiktok />, <BsInstagram />]

    useEffect(() => {
        const fetchLinks = async () => {
            const { data } = await axios.get('/socialmedia')
            setSocialLinks(data)
            // console.log("social Links", data)
            postLogger({ level: "info", message: data })
        }
        fetchLinks();
    }, [])

    return (
        <footer className="bg-gray-800 text-white pt-10">
            <div className="container mx-auto py-8 px-4">
                {/* Three columns */}
                <div className="md:grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-4 hidden">

                    <div className="md:col-span-2 lg:col-span-1 w-full">
                        <Link to="/">
                            <img src={logo} alt="" className='w-[250px]' />
                        </Link>
                        <p className='mb-3 ml-3'>
                            Help Business Successful Online
                        </p>
                        <p className='text-gray-200'>
                            Dotpot iT, House-1, Road-3, Block-A, Mirpur-10, Dhaka, Bangladesh
                        </p>
                        <br />
                        <p className='text-gray-200'><strong>Phone:</strong> +880 1817 176 192</p>
                        <p className='text-gray-200'><strong>Email:</strong> help@dotpotit.com</p>
                        <p className='text-gray-200 ml-12'><strong></strong> hr@dotpotit.com</p>
                        <p className='text-gray-200 ml-12'><strong></strong> sales@dotpotit.com</p>
                        <p className='text-gray-200 ml-12'><strong></strong> marketing@dotpotit.com</p>
                        <p className='text-gray-200 ml-12'><strong></strong> career@dotpotit.com</p>
                        <div className='flex gap-4 mt-5 items-center'>
                            {socialLinks.map((link, i) => <a key={i} href={link.url} target='_blank' className='text-white hover:text-primary-400 cursor-pointer duration-300 text-xl'>{socialIcons[i]}</a>)}
                        </div>
                    </div>

                    {/* Columns */}
                    {
                        links.map((item, index) => (
                            <div className="md:col-span-1" key={index}>
                                <h2 className="font-bold text-lg mb-2">{item.title}</h2>
                                {/* Links */}
                                <ul className="space-y-2">
                                    {
                                        item.links.map((link, index) => (
                                            <li key={index} className="hover:text-secondary-500 text-gray-200">
                                                <Link to={link.link}>
                                                    {link.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>

                {/* Mobile accordion */}
                <div className="md:hidden block w-full ">
                    <Link to="/">
                        <img src={logo} alt="" className='w-4/5' />
                    </Link>
                    <p>
                        Make your Business Success Online
                    </p>
                    <br />
                    <p>
                        Dotpot iT, House-1, Road-3, Block-A, Mirpur-10, Dhaka, Bangladesh
                    </p>
                    <p><strong>Phone:</strong> +880 1817 176 192</p>
                    <p><strong>Email:</strong> help@dotpotit.com</p>
                    <div className='flex gap-4 mt-5 items-center'>
                        {socialLinks.map((link, i) => <a key={i} href={link.url} target='_blank' className='text-white hover:text-primary-400 cursor-pointer duration-300 text-xl'>{socialIcons[i]}</a>)}
                    </div>
                </div>
                {
                    links.map((item, index) => (
                        <MobileMenu key={index} {...item} />
                    ))
                }
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
