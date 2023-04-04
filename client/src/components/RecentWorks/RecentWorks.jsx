/**
This is a React functional component called RecentWorks which renders a section of recent works. 
It imports the RecentWorksSlider component, which is a slider that displays each work item.
 */

import React from 'react'
import RecentWorksSlider from './RecentWorksSlider'



const RecentWorks = () => {
    return (
        <div className='w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center'>
            <div className="p-3 md:p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block ">Recent Works</h1>
                <RecentWorksSlider />
            </div>
        </div>
    )
}



export default RecentWorks