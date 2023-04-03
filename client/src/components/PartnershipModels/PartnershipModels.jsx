/**
This component is a React functional component that displays a section on partnership models. 
It imports data from a data file and exports two components - PartnershipModels and Card.

Card is a sub-component that takes in props and renders a card displaying an image, title, and description.

PartnershipModels is the main component that renders the section, which includes a heading, introductory paragraph, and multiple instances of the Card component. 
It maps through the imported data to create each card. 
The component is responsive for mobile and desktop displays.
The component uses Tailwind css for styling
 */

import React, { useEffect, useState } from 'react'
import { PartnershipModelsData } from "../../data"
import axios from "../../utils/axiosInstance"
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'


export const Card = (props) => {
    return (
        <Link to={props.link} className='md:mx-5 p-4 md:p-5 bg-white rounded-lg shadow-xl flex-1 hover:scale-110 transition-all cursor-pointer '>
            <div className="h-[250px] flex flex-col justify-between">
                <div className="">
                    <img className="img-fluid" src={props.icon} alt={props.title} />
                </div>
                <h2 className="text-2xl font-bold">
                    {props.title}
                </h2>
                <p className="text-justify inline">
                    {
                        props.description?.slice(0,100)
                    }
                    ...
                </p>
                <span className="inline-flex items-center text-secondary-300 hover:text-secondary-500" >Know More <AiOutlineDoubleRight/></span>
            </div>
        </Link>
    )
}

const PartnershipModels = () => {
    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/partnership_model')
            .then(response => setData(response.data.partnershipModels))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='w-full overflow-hidden pt-10 pb-20 md:flex md:flex-col md:justify-center flex-wrap '>
            <div className="p-3 md:p-5 mt-5 w-full md:max-w-[1400px] self-center">
                <h1 className="mt-10 text-4xl md:text-5xl text-center font-bold w-full text-primary-500 mb-5 ">Partnership Models</h1>
                <p className="text-md text-center text-gray-400">Dotpot iT offers partnership models to build long-term relationships with clients.</p>
            </div>
            <div className="p-3 md:p-5 mt-5 w-full md:max-w-[1400px] self-center flex flex-col lg:flex-row gap-5 flex-wrap items-center justify-center">
                {
                    data && data.map((item, index) => {
                        return (
                            <Card key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PartnershipModels