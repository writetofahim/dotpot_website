import React from 'react'
import Card from './Card'
import information from "../../assets/img/information.png"

const Information = () => {
    const videoUrl = 'https://www.youtube.com/embed/A23jUjVatn4?autoplay=1&loop=1';
    return (
        <div className='bg-white w-full flex justify-center items-center'>
            <div className="w-full md:max-w[1400px] lg:max-w-[1400px] p-10 md:px-5 lg:px-0 flex flex-col items-center md:flex-col lg:flex-row gap-5">
                <div className="left flex-[2] h-full">
                    <h1 className="text-4xl text-primary-500 font-bold mb-5 ">DotpotiT</h1>
                    <p className="mb-5">Make your business sucess</p>
                    <p className="text-justify">
                    DotpotiT offers a range of technology support services, including SEO, web design, and mobile app development. Our team provides tailored high-quality services to meet your specific needs. Whether you need to improve your website's ranking or develop a cutting-edge mobile app, we have the expertise to help you achieve your goals. We are also a leading call center support company, providing top-notch customer service and support. We work closely with each client to develop customized solutions that are tailored to meet their unique requirements. With our extensive experience and expertise, we are confident in providing you with the support and solutions you need to achieve your business objectives.
                    </p>
                </div>
                <div className="right flex-[3] flex items-center justify-center md:p-10 ">
                    {/* {
                        informations.map((information, index) => (
                            <Card key={index} {...information} />
                        ))
                    } */}
                    {/* <img src={information} alt="" className="md:w-3/4 w-full md:p-10" /> */}
                    
                    <iframe 
                        src={videoUrl} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        className='rounded w-full aspect-video mt-5'
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Information