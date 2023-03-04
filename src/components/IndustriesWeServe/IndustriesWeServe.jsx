import React from 'react'
import {IndustriesWeServeData} from "../../data"

export const ProcessCard = (props) => {
    return(
        <div className="bg-white rounded-lg flex flex-col items-stretch justify-center p-10 shadow h-[200px] w-[100%] md:w-[18%] md:min-w-[200px]">
            <div className="flex flex-col gap-5 items-center justify-center">
            <img src={props.logo} alt={props.title} className="w-[50px] h-[50px]" />
                <p className="text-xl font-bold text-center text-primary-500">{props.title}</p>
            </div>
        </div>
    )
}

const IndustriesWeServe = () => {
    return (
        <div className='industriesWeServe w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center bg-primary-100'>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-5 flex-wrap items-center justify-center">
            <h1 className="mt-10 text-6xl text-secondary-500 font-bold w-full mb-5 ">Industries We Serve</h1>
                {
                    IndustriesWeServeData.map((item, index) => {
                        return (
                            <ProcessCard key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default IndustriesWeServe