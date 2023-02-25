import { Container } from '@mui/system'
import React from 'react'
import './Hero.scss'
import Particle from './Particle'
import SimpleSlider from './SimpleSlider'

const Hero = () => {
    return (
        <div className='w-full flex md:justify-end justify-between items-center h-[70vh] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)] hero '>
            <Particle />
            <div className="container h-full full">
                <SimpleSlider />
            </div>
        </div>
    )
}

export default Hero