import React from 'react'

const OurDevelopmentJourney = () => {
    return (
        <div className='container mx-auto pt-10 pb-40'>

            {/* title */}
            <div className='text-center pb-10'>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-bold text-textColor-500'>Our Development Journey</h1>
            </div>

            {/* content */}
            <div className='flex flex-wrap md:gap-y-20 relative'>
                {/* connecting line */}
                <div className='flex items-center justify-center'>
                    <div className='w-1 bg-gray-400 absolute md:top-10 top-5 md:-bottom-10 bottom-10 md:left-1/2 left-5'></div>
                </div>

                {/* connecting divs */}
                <div className='w-full md:w-1/2 flex justify-center pb-5 px-10 relative'>
                    <div className='absolute md:w-10 w-5 h-3 top-1/2  right-0 bg-slate-500 hidden md:block'></div>
                    <div className='absolute md:w-10 w-5 h-3 top-1/2  left-5 bg-slate-500 block md:hidden'></div>
                    <div className='h-auto p-5 w-full border border-border bg-background-500 rounded-lg shadow-lg text-gray-400'>
                        <div className='flex lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left font-bold mb-5 text-textColor-500'>
                            <h2 className='font-bold'>Dotpot iT</h2>
                            <h2 className="ml-auto font-thin">2023</h2>
                        </div>
                        <p className='lg:text-base md:text-sm text-xs text-gray-400 text-justify'>Dotpot iT, established in 2023, offers a wide array of IT services. From software development to cybersecurity, their solutions cater to diverse needs, empowering businesses with innovative technology.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center pb-5 px-10 md:translate-y-1/2 relative'>
                    <div className='absolute md:w-10 w-5 h-3 top-1/2  left-0 bg-slate-500 hidden md:block'></div>
                    <div className='absolute md:w-10 w-5 h-3 top-1/2  left-5 bg-slate-500 block md:hidden'></div>
                    <div className='h-auto p-5 w-full border border-border bg-background-500 rounded-lg shadow-lg text-gray-400'>
                        <div className="flex lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left mb-5 text-textColor-500">
                            <h2 className='font-bold'>Dotpose</h2>
                            <h2 className="ml-auto font-thin">2023</h2>
                        </div>
                        <p className='lg:text-base md:text-sm text-xs text-gray-400 text-justify'>Dotpose: A PHP and Laravel project launched in March 2023. It's a dynamic platform for artists to showcase, connect, and collaborate. Empowering creativity and fostering connections in the art community.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center pb-5 px-10 relative'>
                    <div className='absolute md:w-10 w-5 h-3 top-1/2  right-0 bg-slate-500 hidden md:block'></div>
                    <div className='absolute md:w-10 w-5 h-3 top-1/2  left-5 bg-slate-500 block md:hidden'></div>
                    <div className='h-auto p-5 w-full border border-border bg-background-500 rounded-lg shadow-lg text-gray-400'>
                        <div className='flex lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left font-bold mb-5 text-textColor-500'>
                            <h2 className='font-bold'>SuccessPro</h2>
                            <h2 className="ml-auto font-thin">2023</h2>
                        </div>
                        <p className='lg:text-base md:text-sm text-xs text-gray-400 text-justify'>SuccessPro: Built with MERN in April 2023. A platform for personal and professional growth, offering goal tracking, educational resources, and networking. Empowering users to achieve success through a seamless and interactive experience.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center pb-5 px-10 md:translate-y-1/2 relative'>
                    <div className='absolute md:w-10 w-5 h-3 top-1/2  left-0 bg-slate-500 hidden md:block'></div>
                    <div className='absolute md:w-10 w-5 h-3 top-1/2  left-5 bg-slate-500 block md:hidden'></div>
                    <div className='h-auto p-5 w-full border border-border bg-background-500 rounded-lg shadow-lg text-gray-400'>
                        <div className="flex lg:text-3xl md:text-xl text-xl text-center md:text-center lg:text-left mb-5 text-textColor-500">
                            <h2 className='font-bold'>Human Resource Management</h2>
                            <h2 className="ml-auto font-thin">2023</h2>
                        </div>
                        <p className='lg:text-base md:text-sm text-xs text-gray-400 text-justify'><a href="https://www.adp.com/resources/articles-and-insights/articles/h/human-resource-management.aspx#:~:text=Human%20resource%20management%20is%20the,and%20development%2C%20and%20employee%20relations." target="_blank">Human Resource Management:</a> Built with PHP and Laravel, launching in May 2023. Streamlines HR processes, automates tasks, and enhances employee management. Empowering organizations to optimize human capital and improve operational efficiency.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurDevelopmentJourney