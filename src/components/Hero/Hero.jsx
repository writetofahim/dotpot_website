import React from 'react'
import './Hero.scss'
import Particle from './Particle'

const Hero = () => {
    return (
        <div className='w-full flex md:justify-center justify-between items-center p-4 h-[70vh] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)] hero'>

            <Particle />
            <div className="container">
                <div className="row">
                    hello
                </div>
            </div>
        </div>
    )
}

export default Hero