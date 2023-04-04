/**
This component is a section that displays a slider of quotes from clients. 
It imports a slider component named WhatOurClientsSaySlider and client data from WhatOurClientSayData. 
It renders the section with a title, subtitle, and the slider component.
 */

import React from 'react'
import WhatOurClientsSaySlider from './WhatOurClientsSaySlider'
import { WhatOurClientSayData } from "../../data"



const WhatOurClientSay = () => {
    return (
        <div className='w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center '>
            <div className="p-3 md:p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center">
                <div className="">
                    <h1 className="text-3xl md:text-5xl text-center font-extrabold block w-full">{WhatOurClientSayData.title}</h1>
                    <p className="text-gray-400 text-left font-bold w-full mt-2">{WhatOurClientSayData.subTitle}</p>
                </div>
                <WhatOurClientsSaySlider />
            </div>
        </div>
    )
}

export default WhatOurClientSay