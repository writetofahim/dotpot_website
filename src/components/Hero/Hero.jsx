import React from 'react'
import './Hero.scss'
import Particle from './Particle'

const Hero = () => {
    return (
        <div className='w-full flex md:justify-end justify-between items-center h-[70vh] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)] hero '>
            <Particle />
            <div className="container bg-primary-400">
                <div className="row">
                    hello
                </div>
            </div>
        </div>
    )
}

export default Hero