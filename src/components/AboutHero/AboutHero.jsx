import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AboutHero = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className='container py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-5'>

                {/* Left Side */}
                <div className="left flex-1 h-full flex flex-col justify-center p-5">
                    <h1 className="text-3xl md:text-6xl text-primary-500 font-bold mb-2">
                        About DotpotiT
                    </h1>
                    <p className='mb-5 text-gray-300 text-3xl font-bold'>Dotpot iT is a fast Growing It compaly</p>
                    <div className="flex gap-5 items-center mb-5">
                        <div className="pr-5 border-r border-gray-300">
                        <h1 className="text-4xl text-secondary-500 font-bold">
                            #1
                        </h1>
                        </div>
                        <p className="">
                            DotpotiT is a fast Growing It compaly
                        </p>
                    </div>    
                    <Link to="/services">
                        <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
                            Send <BsArrowRight />
                        </button>
                    </Link>
                </div>

                {/* Right Side */}
                <div className="right flex-2 flex items-end justify-center ">
                    <img src="https://www.hyperlinkinfosystem.com/assets/uploads/banner/1634022694.png" alt="About DotpotiT" /> 
                </div>
            </div>
        </div>
    )
}

export default AboutHero