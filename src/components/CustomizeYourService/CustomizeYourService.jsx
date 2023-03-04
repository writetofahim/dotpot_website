import { Divider } from '@mui/material'
import React, { useState } from 'react'
import { customizeYourServiceData } from '../../data'
import { RxCross1 } from "react-icons/rx"
import { TiTickOutline, TiTick } from 'react-icons/ti'
import { AiOutlineInfoCircle } from 'react-icons/ai'


const Technologies = ({ handelTechnology, tech }) => {
    const [select, setSelect] = useState(false);
    const handelClick = (tech) => {
        setSelect(!select)
        handelTechnology(tech)
    }
    return (
        <div className="p-1 md:p-5 md:h-[120px] md:w-[130px] border rounded flex flex-col items-center justify-center md:gap-3 hover:border-primary-500 shadow relative">
            <img src={tech.icon} alt={tech.title} className="w-[20px] md:w-[50px] " />
            <div className="text-sm text-center">{tech.title}</div>
            {
                !select ? (
                    <TiTickOutline className="absolute top-[2px] right-[2px] text-gray-400 hover:border hover:text-xl hover:animate-pulse rounded-full hover:border-black cusor-pointer" onClick={() => handelClick(tech)} />
                ) : (
                    <TiTick className="absolute top-[2px] right-[2px] hover:border hover:text-xl hover:animate-pulse rounded-full border border-blacks text-secondary-500 cusor-pointer" />
                )
            }
            <abbr title={tech.sdes}>
                <AiOutlineInfoCircle className="absolute top-[2px] left-[2px] text-gray-400 cursor-pointer hover:text-secondary-500" />
            </abbr>

        </div>
    )
}


const Addons = ({ item, handelAddons }) => {
    const [select, setSelect] = useState(false);
    const handelClick = (tech) => {
        setSelect(!select)
        handelTechnology(tech)
    }
    return (
        <div onClick={() => handelAddons(item)} className="p-1 md:p-5 md:h-[120px] md:w-[130px] border rounded flex flex-col items-center justify-center md:gap-3 hover:border-primary-500 shadow relative">
            <img src={item.icon} alt={item.title} className="w-[20px] md:w-[50px]" />
            <div className="text-sm">{item.title}</div>
            {
                !select ? (
                    <TiTickOutline className="absolute top-[2px] right-[2px] text-gray-400 hover:border hover:text-xl hover:animate-pulse rounded-full hover:border-black cusor-pointer" onClick={() => handelClick(item)} />
                ) : (
                    <TiTick className="absolute top-[2px] right-[2px] hover:border hover:text-xl hover:animate-pulse rounded-full border border-blacks text-secondary-500 cusor-pointer" />
                )
            }
            <abbr title={item.sdes}>
                <AiOutlineInfoCircle className="absolute top-[2px] left-[2px] text-gray-400 cursor-pointer hover:text-secondary-500" />
            </abbr>
        </div>
    )

}


const CustomizeYourService = () => {

    const [selectedService, setSelectedService] = useState(null)
    const [selectedTechnology, setSelectedTechnology] = useState(null)
    const [price, setPrice] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [cart, setCart] = useState([])



    const handeService = (props) => {
        setSelectedService(props)
        setIsOpen(false)
        setPrice(0)
    }

    const handelTechnology = (props) => {
        setSelectedTechnology(props)
        setCart([props])
        setPrice(props.cost)
        setIsOpen(true)
    }

    const handelAddons = (props) => {
        setPrice(price + props.cost)
        setCart([...cart, props])
    }

    const removeItemFromCart = (title, cost) => {
        console.log(cost)
        const filterCart = cart.filter(item => item.title !== title)
        setCart(filterCart)
        setPrice(price - cost)
    }


    console.log(cart)


    return (
        <div className='w-full h-[100vh] md:h-auto bg-white overflow-hidden py-10 md:flex md:flex-col md:items-center'>
            <div className="container p-0 md:p-5">
                <h1 className="mt-10 text-5xl md:text-6xl font-bold text-primary-500 px-5">Cutomize Your Service</h1>


                {/* Main Section */}
                <div className="maincontent flex md:flex-col lg:flex-row justify-between mt-10 gap-2 md:gap-5 h-full">

                    <div className="left flex-[0.2] border rounded p-1 md:p-5 h-[75vh]">
                        <h3 className="text-lg md:text-3xl font-bold mb-2">Services</h3>
                        <Divider />
                        {
                            customizeYourServiceData.map((item, index) => (
                                <div key={index} className="w-full p-1 md:p-3 border rounded mt-2 md:mt-5 hover:border-primary-500 flex flex-col md:flex-row items-center cursor-pointer gap-1 md:gap-3 shadow" onClick={(e) => handeService(item)}>
                                    <img src={item.icon} alt={item.title} className="w-5 h-5 md:h-[50px] md:w-[50px]" />
                                    <p className="text-sm text-center md:text-left md:text-lg md:font-bold hover:text-primary-500">{item.title}</p>
                                </div>
                            ))
                        }
                    </div>


                    {/* Right Side */}
                    <div className="right flex-[0.8] border rounded p-1 md:p-5 overflow-scrool h-[75vh]">
                        <div className="flex justify-between">
                            <div>
                                {
                                    cart.length > 0 && (
                                        <div className='flex'>
                                            <h1 className="text-sm">Selected services</h1>
                                            <div className="w-full flex items-center gap-3">
                                                {
                                                    cart.map((item, index) => (
                                                        <div key={index} className="flex items-center gap-2 py-1 px-2 border rounded-full cursor-pointer hover:border-secondary-500 hover:text-secondary-500" onClick={() => removeItemFromCart(item.title, item.cost)} >
                                                            <img src={item.icon} alt={item.title} className="w-4 h-4 md:w-7 md:h-7" />
                                                            <RxCross1 />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <p className="text-primary-500  md:text-xl">Starting From <span className="font-bold">{price} Tk</span></p>
                        </div>
                        {
                            selectedService !== null ? (
                                <>
                                    <h3 className="md:mt-5 mt-2 font-bold text-xl">{selectedService.title}</h3>
                                    <div className="w-full mt-5 flex flex-wrap items-center justify-center gap-1 md:gap-5 mb-5">
                                        {
                                            selectedService.technologies.map((tech, index) => (
                                                <Technologies key={index} tech={tech} handelTechnology={handelTechnology} />
                                            ))
                                        }
                                    </div>
                                    <Divider />

                                    {
                                        isOpen && (
                                            <>
                                                <h3 className="text-xl">Addons </h3>
                                                <div className="mt-5 flex flex-wrap items-center justify-center gap-5 mb-5">
                                                    {
                                                        selectedService.addons.map((item, index) => (
                                                            <Addons key={index} handelAddons={handelAddons} item={item} />
                                                        ))
                                                    }
                                                </div>
                                            </>
                                        )
                                    }
                                </>
                            ) :
                                (
                                    <p className='text-secondary-500'>Please Select a service to proceed farther</p>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomizeYourService
