/**
This component is called ContactFormLarge and it's a larger version of a contact form. 
Input fields for the user to fill out including full name, email, contact number, Whatsapp number, Skype, and file upload. 
RangeSlider component and a message input field. 
Bottom of the form, there's a button to submit the form that includes an arrow icon. 
The component also includes a message stating that NDA is signed for all projects.
 */
import React from 'react'
import { BsArrowRight,BsSkype } from 'react-icons/bs'
import {MdPerson,MdMail,MdPhone,MdMessage} from "react-icons/md"
import {RiWhatsappFill} from "react-icons/ri"
import { Link } from 'react-router-dom'
import RangeSlider from '../Range/RangeSlider'

const ContactFormLarge = () => {
    return (
        <div className="shadow w-full p-5 rounded-xl max-w-[1200px]">
            
            <div className="w-full flex flex-col md:flex-row items-center md:gap-5">
                <div className="border-b w-full flex items-center mt-5">
                    <MdPerson className='text-primary-500 text-2xl'/>
                    <input type="text" placeholder="Your Full Name*" className="w-full p-2 text-gray-400 outline-none" required/>
                </div>
                <div className="border-b w-full flex items-center mt-5">
                    <MdMail className='text-primary-500 text-2xl'/>
                    <input type="email" placeholder="Your Email*" className="w-full p-2 text-gray-400 outline-none" required/>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center md:gap-5">
                <div className="border-b w-full flex items-center mt-5">
                    <MdPhone className='text-primary-500 text-2xl'/>
                    <input type="text" placeholder="Contact Number*" className="w-full p-2 text-gray-400 outline-none" required/>
                </div>
                <div className="border-b w-full flex items-center mt-5">
                    <RiWhatsappFill className='text-primary-500 text-2xl'/>
                    <input type="text" placeholder="Whatsapp Number" className="w-full p-2 text-gray-400 outline-none" required/>
                </div>
                <div className="border-b w-full flex items-center mt-5">
                    <BsSkype className='text-primary-500 text-2xl'/>
                    <input type="text" placeholder="Skype" className="w-full p-2 text-gray-400 outline-none" required/>
                </div>
            </div>
            <div className="border-b w-full flex items-center mt-5">
                <input type="file" placeholder="Skype" className="w-full p-2 text-gray-400 outline-none" required/>
            </div>
            <div className="border-b w-full flex items-center mt-5">
                <RangeSlider />
            </div>
            <div className="border-b w-full flex items-start mt-5 mb-10">
                <MdMessage className='text-primary-500 text-2xl mt-3'/>
                <textarea type="text" placeholder="Your Message*" rows="5" className="w-full p-2 text-gray-400 outline-none">
                </textarea>
            </div>
            <p className='text-gray-400 mb-10'>We sign NDA for all our projects.</p>
            <Link to="/contact">
                <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
                    Send <BsArrowRight />
                </button>
            </Link>
        </div>
    )
}

export default ContactFormLarge