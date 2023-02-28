import React from 'react'
import { useParams } from 'react-router-dom';
import { jobPageData, inputFields } from '../../data';
import {BsArrowRight} from "react-icons/bs"


export const InputFields = ({title,placeholder,type,name,required}) => {
    return(
        <div className="mt-1 text-gray-400">
            <label htmlFor={name}>{title}: </label> <br />
            <input className='p-2 rounded border w-full outline-none' type={type} name={name} id={name} placeholder={placeholder} required={required} />
        </div>
    )    
}

const Apply = () => {

    let { id } = useParams();
    const jobPosition = jobPageData.jobs[id];

    return (
        <div className='w-full flex items-center justify-center overflow-x-hidden' >
            <div className="w-full max-w-[1400px] container p-5 flex flex-col items-center">
                <h1 className="text-3xl text-primary-500 font-bold mb-10">Apply Now for {jobPosition.title}</h1>
                <form action="/apply" className='md:w-3/5 border rounded-xl p-5 shadow-lg mb-5'>
                    <h3 className="text-xl text-center mb-3">{jobPosition.title}</h3>
                    {
                        inputFields.map((item, index)=>(
                            <InputFields key={index} {...item} />
                        ))
                    }
                    <div className="mt-1 text-gray-400">
                        <label htmlFor="cover">Cover Latter: </label> <br />
                        <textarea name="cover" id="cover" rows="5" className='p-2 border w-full outline-none'></textarea>
                    </div>

                    <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
                        Submit Now <BsArrowRight />
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Apply