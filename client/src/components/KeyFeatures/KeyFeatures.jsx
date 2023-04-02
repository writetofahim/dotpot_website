/**
    KeyFeatures Component
    This component displays a section containing the key features of the company.
    It renders the @KeyFeaturesSlider component
    returns JSX.Element
 */

import React from 'react'
import KeyFeatureSlider from './KeyFeatureSlider'

const KeyFeatures = () => {
    return (
        <div className='md:p-5 bg-primary-400 w-full flex flex-col items-center text-white KeyFeartures'>
            <div className="w-full mt-10 md:max-w[1400px] lg:max-w-[1400px] p-3 md:p-10 md:px-5 lg:px-0">
                <h1 className="text-4xl md:text-6xl font-extrabold block text-center">Our Key Features</h1>
            </div>
            <div className="w-full">
                <KeyFeatureSlider />
            </div>
        </div>
    )
}

export default KeyFeatures