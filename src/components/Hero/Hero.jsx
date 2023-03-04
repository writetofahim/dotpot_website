import React from 'react'
import HeroSlide from './HeroSlide'
import Particle from './Particle'

const Hero = () => {
    return (
        <div className='w-full h-[90vh] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)] overflow-hidden'>
            <Particle />
            <div className="h-full w-full flex justify-center items-center">
                <HeroSlide />
            </div>
        </div>
    )
}

export default Hero