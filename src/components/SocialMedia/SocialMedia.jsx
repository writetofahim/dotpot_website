import React from 'react'
import { Link } from 'react-router-dom'
import { socialNetworkData } from '../../data'

const SocialMedia = () => {
    return (
        <div className='w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center bg-white'>
            <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 justify-between items-center flex-col md:flex-row lg:flex-row">
                <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-5 text-primary-500">Social Media</h3>
                    <p>Don’t Miss To Follow Us On Our Social Networks Accounts.</p>
                </div>
                <div className="flex-1 gap-5 flex flex-wrap justify-center">
                    {
                        socialNetworkData.map((item, index) => {
                            return (
                                <Link to={item.link} target="_blank">
                                    <div key={index} className="w-[100px] h-[100px] rounded-lg shadow flex items-center justify-center hover:border hover: border-purple-500">
                                        <img src={item.icon} alt="" className="h-[50px] w-[50px]" />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SocialMedia