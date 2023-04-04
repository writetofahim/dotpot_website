import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineDoubleRight} from "react-icons/ai"

const GetAQuote = () => {
  return (
    <div className="w-full flex items-center justify-center px-5">
        <div className="container flex items-center">
            <div className="left w-full">
                <h3 className="text-xl md:text-3xl font-bold">Get A Quote</h3>
                <p className="">Customize your desire services and get an estimated quote</p>
            </div>
            <div className="right w-full flex items-center justify-end">
                <Link to="/services">
                    <button className="flex items-center gap-3 bg-primary-500 text-white text-xl px-3 py-2 rounded-full cursor-pointer hover:bg-secondary-500 scale-105 transition-all">Get Quote <AiOutlineDoubleRight /></button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default GetAQuote