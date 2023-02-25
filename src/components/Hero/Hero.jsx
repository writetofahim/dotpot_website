import { Container } from '@mui/system'
import React from 'react'
import './Hero.scss'
import Particle from './Particle'
import SimpleSlider from './SimpleSlider'

const Hero = () => {
    return (
        <div className='w-full h-[90vh] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)] overflow-hidden'>
            <Particle />
            <div className="h-full w-full flex justify-center items-center">
                <SimpleSlider />
            </div>
        </div>
    )
}

export default Hero