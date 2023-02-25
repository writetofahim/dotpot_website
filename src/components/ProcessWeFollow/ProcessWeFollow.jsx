import React from 'react'
import {processWeFollowData} from "../../data"

export const ProcessCard = (props) => {
    return(
        <div className="bg-white rounded-lg flex flex-col items-stretch justify-center p-10 shadow h-[350px] w-[100%] md:w-[22%] md:min-w-[200px]">
            <div className="flex flex-col gap-5 items-center justify-center">
            <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/about/app-development-ab.png" alt="app downloads" />
                <p className="text-xl font-bold text-center text-primary-500">{props.title}</p>
                <p className="text-center">{props.desc}</p>
            </div>
        </div>
    )
}

const ProcessWeFollow = () => {
    return (
        <div className='w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center bg-primary-100'>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center">
            <h1 className="mt-10 text-6xl font-bold w-full mb-5 ">Process We Follow</h1>
                {
                    processWeFollowData.map((item, index) => {
                        return (
                            <ProcessCard key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProcessWeFollow