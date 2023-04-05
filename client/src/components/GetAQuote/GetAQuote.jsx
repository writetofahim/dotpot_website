import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineDoubleRight} from "react-icons/ai"
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css'


const GetAQuote = () => {
  return (
    <div className="w-full flex items-center justify-center px-5">
        <div className="container flex items-center">
            <div className="left w-full">
                {/* <Typed
                className="text-xl md:text-3xl font-bold"
                    strings={['Get A Quote']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /> */}
                <h3 className="text-xl md:text-3xl font-bold">Get A Quote</h3>
                <p className="">Customize your desire services and get an estimated quote</p>
            </div>
            <div className="right w-full flex items-center justify-start">
                <Link to="/services">
                    <button className="w-[170px] flex items-center justify-between gap-3 bg-primary-500 text-white text-xl px-3 py-2 rounded-full cursor-pointer hover:bg-secondary-500 hover:scale-105 transition-all">
                        <Typed
                            strings={[`Get Quote`]}
                            typeSpeed={100}
                            backSpeed={50}
                            loop
                        />
                        <AiOutlineDoubleRight />
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default GetAQuote