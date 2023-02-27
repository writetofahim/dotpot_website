import React from 'react'
import Card from './Card'
import { informations } from '../../data'

const Information = () => {
    return (
        <div className='bg-white w-full flex justify-center'>
            <div className="w-full md:max-w[1400px] lg:max-w-[1400px] p-10 md:px-5 lg:px-0 flex flex-col md:flex-col lg:flex-row gap-5">
                <div className="left flex-[2]">
                    <h1 className="text-4xl text-primary-500 font-bold mb-5 lg:mt-10 md:mt-10">DotpotiT</h1>
                    <p className="mb-5">Make your business sucess</p>
                    <p className="text-justify">
                        DotpotiT is a leading call center support company that has been providing exceptional services to clients for many years. We take pride in our ability to handle large volumes of customer calls and inquiries, and provide top-notch support to our clients. Our team of experienced professionals is well-versed in customer service and communication, and we utilize the latest technologies to ensure that our clients are provided with the best possible support. <br /><br />

                        In addition to our call center services, DotpotiT also offers a range of technology support services, including SEO, web design, and mobile app development. Our team of experts is dedicated to providing high-quality services that are tailored to meet the specific needs of each client. Whether you need to improve your website's ranking on search engines or develop a cutting-edge mobile app, we have the expertise and resources to help you achieve your goals. <br /><br />

                        At DotpotiT, we understand that every business has unique needs, and we work closely with each of our clients to develop customized solutions that are tailored to meet their specific requirements. We take pride in our ability to provide exceptional customer service and support, and we are committed to ensuring that our clients are satisfied with the services that we provide. With our extensive experience and expertise, we are confident that we can provide you with the support and solutions that you need to achieve your business objectives.
                    </p>
                </div>
                <div className="right flex-[3] flex flex-wrap gap-5 p-10">
                    {
                        informations.map((information, index) => (
                            <Card key={index} {...information} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Information