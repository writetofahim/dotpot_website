import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs';
import "./slide.scss"

const Slide = ({ title, subTitle , desc, img, link }) => {

  return (
    <div className="w-full h-full p-5 justify-center items-center slideContainer">
      <div className='w-full flex flex-col-reverse lg:flex-row gap-5 md:max-w[1400px] lg:mag-w[1400px] slide'>
        <div className="left flex-1 h-full flex flex-col justify-center">
            <h1 className="text-6xl text-primary-500 font-bold mb-2">
              {title}
            </h1>
            <p className='mb-5 text-gray-300 text-3xl font-bold'>{subTitle}</p>
            <div className="flex gap-5 items-center mb-5">
                <div className="pr-5 border-r border-gray-300">
                  <h1 className="text-4xl text-secondary-500 font-bold">
                    #1
                  </h1>
                </div>
                <p className="">
                  {desc}
                </p>
            </div>    
        <Link to={link}>
          <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
            Send <BsArrowRight />
          </button>
        </Link>
        </div>
        <div className="right flex-1 flex items-end justify-center ">
          <img src={img} alt={title} /> 
        </div>
      </div>
    </div>
  )
}

export default Slide