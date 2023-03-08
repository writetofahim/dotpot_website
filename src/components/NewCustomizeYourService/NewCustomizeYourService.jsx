import React, { useState } from 'react'
import { customizeYourServiceData } from "../../data"


const NewCustomizeYourService = () => {
  const [openService, setOpenService] = useState(null)
  return (
    <div className='wifull p-10 flex items-center justify-center bg-white' >
      <div className="container">
        <h1 className='text-6xl text-primary-500 font-bold' >Customize Your Services</h1>

        {/* Main Container */}
        <div className="mt-5 flex justify-between gap-5 border shadow-xl p-5 rounded-xl">

          {/* Left container */}
          <div className="p-3 border rounded-xl flex-[0.2] shadow-xl">
            <h3 className="text-gray-400 text-xl">Services</h3>
            <hr />
            {
              customizeYourServiceData.map((service) => (
                <div
                  className={`p-2 flex items-center gap-2 rounded-xl border mt-2 hover:scale-105 hover:shadow-xl transition-all relative cursor-pointer ${openService && openService.id && openService.id === service.id && "bg-primary-100 scale-105 shadow-xl"}
                  `}
                  onClick={() => setOpenService(service)}
                >
                  <img src={service.icon} alt={service.title} className='w-10 h-10' />
                  <p className="">{service.title}</p>
                  {
                    !isSelect ?
                      <BiCircle className='absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110' />
                      :
                      <TiTick className='absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110' />
                  }
                </ div>
              ))
            }
          </div>
          {/* End of Left container */}


          {/* Right container */}
          <div className="p-2 border rounded-xl flex-[0.8] shadow-xl relative">

            {/* Top Section */}
            <div className="">
              <p className="text-sm text-gray-300">Selected items: </p>

            </div>

            <div className="absolute top-1 right-1 flex flex-col items-center">
              <p className="text-sm text-gray-300">Total Cost</p>
              <p className="text-3xl text-secondary-300 font-bold">1000$</p>
            </div>
            {/* End of Top Section */}

            {/* Show technology section */}
            {
              openService !== null && (
                <div className="w-full">
                  <p className="text-gray-300">Technologies:</p>
                  <div className="w-full p-2 my-2 flex gap-3 flex-wrap">

                  </div>
                  <hr />
                </div>
              )
            }
            {/* End of Show technology section */}

            {/* Show Addons section */}
            {
              openService !== null && (
                <div className="w-full">
                  <p className="text-gray-300">Addons :</p>
                  <div className="w-full p-2 my-2 flex gap-3 flex-wrap">

                  </div>
                </div>
              )
            }
            {/* End of Show Addons section */}
          </div>
          {/* End of Right container */}


        </div>
        {/* End of Main Container */}
      </div>
    </div>
  )
}

export default NewCustomizeYourService