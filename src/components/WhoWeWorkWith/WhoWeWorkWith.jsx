import React from 'react'
import { whoDoWeWorkData } from '../../data'



export const Card = (props) =>{
    return(
        <div className="bg-white w-1/3 flex flex-col items-center justify-center p-5 md:p-10 lg:p-10 rounded-xl">
            <img src={props.icon} alt="" className='w-[50px] h-[50px] mb-3'/>
            <h3 className='text-gray-400 text-l font-bold'>{props.name}</h3>
        </div>
    )
}



const WhoWeWorkWith = () => {
    return (
        <div className='whoWeWorWith w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center md:items-center bg-primary-500 text-white'>
            <div className="mt-5 w-full md:max-w-[1400px]  flex flex-col lg:flex-row md:flex-row gap-5 items-center">
                <div className="left w-1/1 md:w-1/3 lg:2/3 h-max p-5 text-left">
                    <h3 className="text-4xl font-bold mb-5">{whoDoWeWorkData.title}</h3>
                    <p className="">
                        {whoDoWeWorkData.desc}
                    </p>
                </div>
                <div className="right w-1/1 md:w-2/3 lg:2/3 h-max md:p-5 lg:p-5 flex gap-5 md:gap-10 lg:gap-10 flex-wrap items-center justify-center">
                    {
                        whoDoWeWorkData.blocks.map((item, index) =>(
                            <Card key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhoWeWorkWith