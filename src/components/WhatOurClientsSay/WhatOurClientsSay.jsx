import React from 'react'
import WhatOurClientsSaySlider from './WhatOurClientsSaySlider'
import {WhatOurClientSayData} from "../../data"



const WhatOurClientSay = () => {
    return (
        <div className='w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center '>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center">
                <h3 className="text-4xl font-extrabold block text-left w-full">{WhatOurClientSayData.title}</h3>
                <p className="text-gray-400 text-left w-full">{WhatOurClientSayData.subTitle}</p>
                <WhatOurClientsSaySlider />
            </div>
        </div>
    )
}

export default WhatOurClientSay