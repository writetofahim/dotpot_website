import React from 'react'
import { Link } from 'react-router-dom'
import ContactCenterServicesSlide from './ContactCenterServicesSlide'



const ContactCenterServices = () => {
    return (
        <div className='w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center bg-primary-100'>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center">
                <h3 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-2 block text-primary-500">Contact Center Services</h3>
                <ContactCenterServicesSlide />
            </div>
        </div>
    )
}

export default ContactCenterServices