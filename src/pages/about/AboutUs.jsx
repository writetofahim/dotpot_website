import React from 'react'
import AboutHero from '../../components/AboutHero/AboutHero'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import OurPartnersSlider from '../../components/OurPartnersSlider/OurPartnersSlider'
import PartnershipModels from '../../components/PartnershipModels/PartnershipModels'
import ProcessWeFollow from '../../components/ProcessWeFollow/ProcessWeFollow'
import RecentWorks from '../../components/RecentWorks/RecentWorks'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import WhoWeWorkWith from '../../components/WhoWeWorkWith/WhoWeWorkWith'
import { aboutPageContent, PartnershipModelsData } from '../../data'

const AboutUs = () => {
    const heroImg = "https://www.hyperlinkinfosystem.com/assets/uploads/banner/1634022694.png"
    const button = { title: "Contact Us", link: "/contact"}
    return (
        <div className="w-full">
            <Navbar />
            <AboutHero heading="About DotpotiT" text="A fast growing IT complay" heroImg={heroImg} button={button}/>
            <OurPartnersSlider />

            {/* Main Section */}
            <div className="w-full flex items-center justify-center my-10">
                <div className="container flex gap-5 p-5">
                    <div className="left md:w-2/3 w-full">
                        {
                            aboutPageContent.map((item,idex)=>(
                                <p className={`mt-3 text-justify ${item.classes}`}>{item.text}</p>
                            ))
                        }
                    </div>
                    <div className="right hidden md:flex-1 md:block p-5">
                        <ContactForm />
                    </div>
                </div>
            </div>


            <ProcessWeFollow />
            <PartnershipModels />
            <WhoWeWorkWith />
            <RecentWorks />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default AboutUs