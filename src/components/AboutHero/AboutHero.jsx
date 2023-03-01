import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AboutHero = (props) => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className='container flex flex-col-reverse md:flex-row items-center justify-center gap-5'>

                {/* Left Side */}
                <div className="left flex-1 h-full flex flex-col justify-center p-5">
                    <h1 className="text-3xl md:text-5xl text-primary-500 font-bold mb-2">
                        {props.heading}
                    </h1>
                    <p className='mb-5 text-gray-300 text-2xl text-secondary-500'>{props.text}</p>   
                    <Link to={props.button.link}>
                        <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
                            {props.button.title} <BsArrowRight />
                        </button>
                    </Link>
                </div>

                {/* Right Side */}
                <div className="right flex-2 flex items-end justify-center ">
                    <img src={props.heroImg} /> 
                </div>
            </div>
        </div>
    )
}

export default AboutHero