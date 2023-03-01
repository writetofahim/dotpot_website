import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import {MdPerson,MdMail,MdPhone,MdMessage} from "react-icons/md"
import { Link } from 'react-router-dom'

const ContactForm = () => {
    return (
        <div className="shadow w-full p-5 rounded-xl">
            <p className="text-xl text-primary-500 font-bold">
                Contact With Us
            </p>
            <div className="border-b w-full flex items-center mt-5">
                <MdPerson className='text-primary-500 text-2xl'/>
                <input type="text" placeholder="Your Full Name*" className="w-full p-2 text-gray-400 outline-none" required/>
            </div>
            <div className="border-b w-full flex items-center mt-5">
                <MdMail className='text-primary-500 text-2xl'/>
                <input type="email" placeholder="Your Email*" className="w-full p-2 text-gray-400 outline-none" required/>
            </div>
            <div className="border-b w-full flex items-center mt-5">
                <MdPhone className='text-primary-500 text-2xl'/>
                <input type="text" placeholder="Contact Number*" className="w-full p-2 text-gray-400 outline-none" required/>
            </div>
            <div className="border-b w-full flex items-start mt-5 mb-10">
                <MdMessage className='text-primary-500 text-2xl mt-3'/>
                <textarea type="text" placeholder="Your Message*" rows="5" className="w-full p-2 text-gray-400 outline-none">
                </textarea>
            </div>
            <Link to="/contact">
                <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
                    Send <BsArrowRight />
                </button>
            </Link>
        </div>
    )
}

export default ContactForm