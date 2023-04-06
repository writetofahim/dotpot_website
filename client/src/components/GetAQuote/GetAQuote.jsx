import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineDoubleRight} from "react-icons/ai"
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css'


const GetAQuote = () => {
  return (
    <div className="w-full flex items-center justify-center p-5">
        <div className="container flex flex-col-reverse md:flex-row items-center gap-2">
            <div className="left w-full">
                {/* <Typed
                className="text-xl md:text-3xl font-bold"
                    strings={['Get A Quote']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /> */}
                <h3 className="text-xl md:text-3xl text-center md:text-left font-bold mb-2">Customize Your Service</h3>
                <p className="text-center md:text-left">Customize your desire services and get an estimated quote</p>
            </div>
            <div className="right w-full flex items-center justify-center md:justify-start">
                <Link to="/services">
                    <button className="flex items-center justify-between gap-3 bg-secondary-400 text-white text-xl px-3 py-2 rounded-full cursor-pointer hover:bg-secondary-500 hover:scale-105 transition-all">
                        Get a Quote
                        <AiOutlineDoubleRight />
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default GetAQuote