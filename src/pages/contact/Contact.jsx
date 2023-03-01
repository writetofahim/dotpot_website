import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SocialMedia from "../../components/SocialMedia/SocialMedia"
import ContactFormLarge from '../../components/ContactForm/ContactFormLarge'
import { Link } from 'react-router-dom'
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'
import Services from '../../components/Services/Services'
import RecentWorks from '../../components/RecentWorks/RecentWorks'
import WhoWeWorkWith from '../../components/WhoWeWorkWith/WhoWeWorkWith'


const Contact = () => {
    return (
        <div className="w-full">
            <Navbar />

            {/* Contact Form Section */}
            <div className="full flex flex-col items-center justify-center mb-10">
                <h3 className='mt-10 mb-5 text-5xl text-primary-500 font-bold'>Contact Us</h3>
                <p className="mb-5 text-center">We would be happy to hear from you, please fill in the form below or mail us your requirements on <br />
                    <Link to="mailto: help@dotpotit.com" className='text-secondary-500'>
                    help@dotpotit.com
                    </Link>
                </p>
                <div className="container flex flex-col items-center">
                    <ContactFormLarge />   
                </div>
            </div>

            <OurPartnersSlider />
            <Services />
            <WhoWeWorkWith />
            <RecentWorks />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default Contact