import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Service from '../../components/Services/Service'
import CustomizeYourService from '../../components/CustomizeYourService/CustomizeYourService'
import RecentWorks from '../../components/RecentWorks/RecentWorks'
import WhoWeWorkWith from '../../components/WhoWeWorkWith/WhoWeWorkWith'

const Services = () => {
    return (
        <div className="full">
            <Navbar />
            <Service />
            <CustomizeYourService />
            <RecentWorks />
            <WhoWeWorkWith />
            <Footer />
        </div>
    )
}

export default Services