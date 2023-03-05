import React from 'react'
import { PartnershipModelsData } from "../../data"


export const Card = (props) => {
    return (
        <div className="mx-5 p-5 rounded-lg shadow-lg flex-1 hover:scale-110 transition-all">
            <div className="text-6xl">
                <img className="img-fluid" src={props.icon} alt="fixed price model" />
            </div>
            <h2 className="text-2xl font-bold my-5">
                {props.title}
            </h2>
            <p className="">
                {props.desc}
            </p>
        </div>
    )
}

const PartnershipModels = () => {
    return (
        <div className='w-full overflow-hidden pt-10 pb-20 md:flex md:flex-col md:justify-center bg-white'>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center">
                <h1 className="mt-10 text-6xl font-bold w-full text-primary-500 mb-5 ">Partnership Models</h1>
                <p className="text-gray-400 text-justify">At DotpotiT, we have a variety of partnership models that are designed to foster long-term relationships with our clients. Our team of experienced professionals work closely with our clients to understand their specific requirements and goals, and then develop customized solutions that deliver results. With our deep expertise in mobile app development, we help our clients stay ahead of the competition and achieve their business objectives. To learn more about how we can help you achieve your goals, contact us today.</p>
            </div>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex flex-col lg:flex-row gap-5 flex-wrap items-center justify-center">
                {
                    PartnershipModelsData.map((item, index) => {
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