import React, { useEffect, useState } from 'react';
import { customizeYourServiceData } from "../../data"
import { BiCircle } from "react-icons/bi"
import { TiTick } from "react-icons/ti"
import { CiCircleInfo } from "react-icons/ci"


// Left sidebars Service Card 
const ServicesCard = (props) => {
  const { openService, setOpenService, setOrder, order, ...others } = props
  const serviceObject = { ...others }
  const [isSelect, setIsSelect] = useState(false)

  const addService = () => {
    setOrder([...order, { id: serviceObject.id, title: serviceObject.title, icon: serviceObject.icon, technologies: [], addons: [] }])
    setIsSelect(!isSelect)
  }

  const removeService = () => {
    setIsSelect(!isSelect)
    const newOrder = order.filter((obj) => obj.id !== serviceObject.id);
    setOrder(newOrder);
  }

  return (
    <div
      className={`p-2 flex items-center gap-2 rounded-xl border mt-2 hover:scale-105 hover:shadow-xl transition-all relative cursor-pointer ${openService && serviceObject && openService.id === serviceObject.id && "bg-primary-100 scale-105 shadow-xl"}
      `}
      onClick={() => props.setOpenService(serviceObject)}
    >
      <img src={props.icon} alt={props.title} className='w-10 h-10' />
      <p className="">{props.title}</p>
      {
        !isSelect ?
          <BiCircle className='absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110' onClick={() => addService()} />
          :
          <TiTick className='absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110' onClick={() => removeService()} />
      }
    </ div>
  )
}
//End of Left sidebars Service Card 

// Technology Card
const TechnologyCard = (props) => {
  const { openService, setOpenService, order, setOrder, ...others } = props
  const technologyObject = { ...others }
  const [isSelect, setIsSelect] = useState(false)

  const addTechnologie = () => {
    setIsSelect(!isSelect)
    const currentService = order.find((obj) => obj.id === openService.id)
    const newOrder = order;
    newOrder.map((service) => {
      if (service.id === openService.id) {
        service.technologies = [...service.technologies, technologyObject]
      }
    })
    setOrder(newOrder);
  }

  const removeTechnologie = (id) => {
    setIsSelect(!isSelect)
    const newOrder = order;
    newOrder.map((service) => {
      if (service.id === openService.id) {
        service.technologies = service.technologies.filter(obj => obj.id !== id);
      }
    })
    setOrder(newOrder);
  }
  return (
    <div className="w-[100px] h-[100px] p-2 border rounded-xl flex flex-col items-center justify-evenly hover:scale-105 hover:shadow-xl transition-all relative overflow-hidden">
      <img src={props.icon} alt={props.title} className="w-3/5 aspact-square" />
      {
        !isSelect ?
          <BiCircle className='absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110' onClick={() => addTechnologie()} />
          :
          <TiTick className='absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110' onClick={() => removeTechnologie(props.id)} />
      }
      <abbr title={props.sdes + 'Starting from ' + props.cost} className="absolute top-1 left-1 text-gray-400 cursor-pointer hover:scale-110"><CiCircleInfo /></abbr>
      <h3 className="text-center text-gray-300 text-sm">{props.title}</h3>
    </div>
  )
}
// End of Technology Card


// Addons Card
const AddonsCard = (props) => {
  const [isSelect, setIsSelect] = useState(false)
  const { openService, setOpenService, order, setOrder, ...others } = props
  const addonObject = others

  const addAddons = () => {
    setIsSelect(!isSelect)
    const currentService = order.find((obj) => obj.id === openService.id)
    const addons = [...currentService.addons, addonObject]
    const newOrder = order;
    newOrder.map((service) => {
      if (service.id === openService.id) {
        service.addons = [...service.addons, addonObject]
      }
    })
    // newOrder[1].technologies = technologies
    setOrder(newOrder);
  }


  const removeAddons = (id) => {
    setIsSelect(!isSelect)
    const newOrder = order;
    newOrder.map((service) => {
      if (service.id === openService.id) {
        service.addons = service.addons.filter(obj => obj.id !== id);
      }
    })
    // newOrder[1].technologies = technologies
    setOrder(newOrder);
  }
  return (
    <div className="w-[100px] h-[100px] p-2 border rounded-xl flex flex-col items-center justify-evenly hover:scale-105 hover:shadow-xl transition-all relative overflow-hidden">
      <img src={props.icon} alt={props.title} className="w-3/5 aspact-square" />
      {
        !isSelect ?
          <BiCircle className='absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110' onClick={() => addAddons()} />
          :
          <TiTick className='absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110' onClick={() => removeAddons(props.id)} />
      }
      <abbr title={props.sdes + 'Starting from ' + props.cost} className="absolute top-1 left-1 text-gray-400 cursor-pointer hover:scale-110"><CiCircleInfo /></abbr>
      <h3 className="text-center text-gray-300 text-sm">{props.title}</h3>
    </div>
  )
}
// End of Addons Card

const CustomizeService = () => {

  const [openService, setOpenService] = useState(null)
  const [selectedServices, setSelectedServices] = useState({})
  const [order, setOrder] = useState([]);
  const [price, setPrice] = useState(0)


  useEffect(() => {
    let totalCost = 0;

    order.forEach((service) => {
      service.technologies.forEach((item) => {
        totalCost += item.cost;
      });
    });

    order.forEach((service) => {
      service.addons.forEach((item) => {
        totalCost += item.cost;
      });
    });

    setPrice(totalCost)
  }, [order])

  console.log(order)

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
              customizeYourServiceData.map((item, index) => (
                <ServicesCard
                  key={index} {...item}
                  openService={openService}
                  setOpenService={setOpenService}
                  selectedServices={selectedServices}
                  setSelectedServices={setSelectedServices}
                  order={order}
                  setOrder={setOrder}
                />
              ))
            }
          </div>
          {/* End of Left container */}


          {/* Right container */}
          <div className="p-2 border rounded-xl flex-[0.8] shadow-xl relative">

            {/* Top Section */}
            <div className="">
              <p className="text-sm text-gray-300">Selected items: </p>
              {
                order.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={item.icon} alt="" className="w-7 h-7 mt-2" />
                    <p className="">:</p>
                    <div className="border-r-gray-500 flex items-center gap-2 cursor-pointer">
                      {
                        item.technologies.map((tech, index) => (
                          <div key={index} className="">
                            <img key={index} src={tech.icon} alt={tech.title} className="h-5 w-5" />
                          </div>
                        ))
                      }
                      {
                        item.addons.map((tech, index) => (
                          <div key={index} className="">
                            <img key={index} src={tech.icon} alt={tech.title} className="h-5 w-5" />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="absolute top-1 right-1 flex flex-col items-center">
              <p className="text-sm text-gray-300">Total Cost</p>
              <p className="text-3xl text-secondary-300 font-bold">{price}$</p>
            </div>
            {/* End of Top Section */}

            {/* Show technology section */}
            {
              openService !== null && (
                <div className="w-full">
                  <p className="text-gray-300">Technologies:</p>
                  <div className="w-full p-2 my-2 flex gap-3 flex-wrap">
                    {
                      openService.technologies.map((item, index) => (
                        <TechnologyCard
                          key={index}
                          order={order}
                          setOrder={setOrder}
                          openService={openService}
                          {...item}
                        />
                      ))
                    }
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
                    {
                      openService.addons.map((item, index) => (
                        <AddonsCard
                          key={index}
                          order={order}
                          setOrder={setOrder}
                          openService={openService}
                          {...item}
                        />
                      ))
                    }
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

export default CustomizeService