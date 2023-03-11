import React, { useEffect, useState } from 'react';
import { customizeYourServiceData } from "../../data"
import { BiCircle } from "react-icons/bi"
import { TiTick } from "react-icons/ti"
import { CiCircleInfo } from "react-icons/ci"
import { AiOutlineDoubleRight } from "react-icons/ai"
import { GrFormClose } from "react-icons/gr"


// Service Card 
const ServicesCard = (props) => {
  const { openService, setOpenService, setOrder, order, ...others } = props;
  const serviceObject = { ...others };
  const [isSelect, setIsSelect] = useState(false);
  const [isExist, setIsExist] = useState(false);


  useEffect(() => {
    // Check if the service is already selected in the order
    const existInTheArray = order.some((obj) => obj.id === serviceObject.id);
    setIsExist(existInTheArray);
  }, [order, serviceObject]);


  const addService = () => {
    // Copy the existing order, add the new service object, and set it as the new order
    setOrder([...order, { id: serviceObject.id, title: serviceObject.title, icon: serviceObject.icon, technologies: [], addons: [] }]);
    setIsSelect(true);
  };

  const removeService = () => {
    setIsSelect(false);
    // Filter out the service object with the matching ID, and set the new order
    const newOrder = order.filter((obj) => obj.id !== serviceObject.id);
    setOrder(newOrder);
  };

  return (
    <div
      // Add the 'bg-primary-100' class if the open service object matches this service object
      className={`w-[30%] md:w-[20%] md:m-1 lg:w-full p-1 lg:p-2 flex flex-col lg:flex-row items-center gap-1 lg:gap-2 rounded-xl border mt-2 hover:scale-105 hover:shadow-xl transition-all relative cursor-pointer ${isExist && "bg-secondary-200 "} ${openService && serviceObject && openService.id === serviceObject.id && "bg-secondary-100 scale-105 shadow-xl"}`}
      onClick={() => props.setOpenService(serviceObject)}
    >
      <img src={props.icon} alt={props.title} className='w-7 lg:w-10 h-7 lg:h-10' />
      <p className="text-center text-sm text-gray-500 font-bold lg:text-left">{props.title}</p>
      {
        // Show the 'add' icon if the service is not already selected, otherwise show the 'remove' icon
        !isExist ?
          <BiCircle className='absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110' onClick={() => addService()} />
          :
          <TiTick className='absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110' onClick={() => removeService()} />
      }
    </div>
  );
}
//End of Service Card 

// Technology Card
const TechnologyCard = (props) => {
  const { openService, setOpenService, order, setOrder, ...others } = props;
  const technologyObject = { ...others };
  const [isSelect, setIsSelect] = useState(false);

  // Ckeck if already selected or not
  useEffect(() => {
    const currentServiceIndex = order.findIndex((obj) => obj.id === openService.id);
    const currentService = order[currentServiceIndex];
    let isExist = false;

    if (currentService) {
      const techArray = currentService.technologies;
      isExist = techArray.find((item) => item.id === technologyObject.id);
    }

    if (isExist) {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  }, [order, openService.id, technologyObject.id]);

  const addTechnologie = () => {
    const currentServiceIndex = order.findIndex((obj) => obj.id === openService.id);

    if (currentServiceIndex >= 0) {
      setIsSelect(!isSelect);
      const newOrder = [...order];
      newOrder[currentServiceIndex].technologies = [...newOrder[currentServiceIndex].technologies, technologyObject];
      setOrder(newOrder);
    } else {
        setOrder([...order, { id: openService.id, title: openService.title, icon: openService.icon, technologies: [], addons: [] }]);
    }
  };

  const removeTechnologie = () => {
    const currentServiceIndex = order.findIndex((obj) => obj.id === openService.id);

    setIsSelect(!isSelect);

    const newOrder = [...order];
    newOrder[currentServiceIndex].technologies = newOrder[currentServiceIndex].technologies.filter((obj) => obj.id !== technologyObject.id);

    setOrder(newOrder);
  };

  return (
    <div className="w-[30%] md:w-[100px] h-[70px] lg:h-[100px] p-1 lg:p-2 border rounded-xl flex flex-col items-center justify-evenly hover:scale-105 hover:shadow-xl transition-all relative overflow-hidden">
      <img src={props.icon} alt={props.title} className="w-2/5 lg:w-3/5 aspect-square" />

      {!isSelect ? (
        <BiCircle className="absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110" onClick={() => addTechnologie()} />
      ) : (
        <TiTick className="absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110" onClick={() => removeTechnologie()} />
      )}

      <abbr
        title={`${props.sdes} Starting from ${props.cost}`}
        className="absolute top-1 left-1 text-gray-400 cursor-pointer hover:scale-110"
      >
        <CiCircleInfo />
      </abbr>

      <h3 className="text-center text-gray-300 text-sm">{props.title}</h3>
    </div>
  );
};
// End of Technology Card


// Addons Card
const AddonsCard = (props) => {
  const [isSelect, setIsSelect] = useState(false);
  const { openService, setOpenService, order, setOrder, ...others } = props;
  const addonObject = others;

  useEffect(() => {
    const currentServiceIndex = order.findIndex((obj) => obj.id === openService.id);
    const currentService = order[currentServiceIndex];
    let isExist = false;

    if (currentService) {
      const addonArray = currentService.addons;
      isExist = addonArray.find((item) => item.id === addonObject.id);
    }

    if (isExist) {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  }, [order, openService.id, addonObject.id]);

  const addAddons = () => {
    const currentServiceIndex = order.findIndex((obj) => obj.id === openService.id);
    const currentService = order[currentServiceIndex];
    if (currentService) {
      setIsSelect(!isSelect);
      const addons = [...currentService.addons, addonObject];
      const newOrder = [...order];
      newOrder[currentServiceIndex] = { ...currentService, addons };
      setOrder(newOrder);
    } else (
      alert("Please select a service first")
    )
  };

  const removeAddons = (id) => {
    setIsSelect(!isSelect);
    const currentServiceIndex = order.findIndex((obj) => obj.id === openService.id);
    const currentService = order[currentServiceIndex];
    const addons = currentService.addons.filter((obj) => obj.id !== id);
    const newOrder = [...order];
    newOrder[currentServiceIndex] = { ...currentService, addons };
    setOrder(newOrder);
  };

  return (
    <div className="w-[30%] md:w-[100px] h-[70px] lg:h-[100px] p-1 lg:p-2 border rounded-xl flex flex-col items-center justify-evenly hover:scale-105 hover:shadow-xl transition-all relative overflow-hidden">
      <img src={props.icon} alt={props.title} className="w-2/5 lg:w-3/5 aspect-square" />
      {!isSelect ? (
        <BiCircle
          className="absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110"
          onClick={() => addAddons()}
        />
      ) : (
        <TiTick
          className="absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110"
          onClick={() => removeAddons(props.id)}
        />
      )}
      <abbr
        title={`${props.sdes} Starting from ${props.cost}`}
        className="absolute top-1 left-1 text-gray-400 cursor-pointer hover:scale-110"
      >
        <CiCircleInfo />
      </abbr>
      <h3 className="text-center text-gray-300 text-sm">{props.title}</h3>
    </div>
  );
};

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

  // Remove technologies from topbar section
  const removeTechnology = (serviceId, techId) => {
    const currentServiceIndex = order.findIndex((obj) => obj.id === serviceId);
    const currentService = order[currentServiceIndex];
    const technologies = currentService.technologies.filter((obj) => obj.id !== techId);
    const newOrder = [...order];
    newOrder[currentServiceIndex] = { ...currentService, technologies };
    setOrder(newOrder);
  }

  // Remove addons from topbar section
  const removeAddons = (serviceId, addonId) => {
    const currentServiceIndex = order.findIndex((obj) => obj.id === serviceId);
    const currentService = order[currentServiceIndex];
    const addons = currentService.addons.filter((obj) => obj.id !== addonId);
    const newOrder = [...order];
    newOrder[currentServiceIndex] = { ...currentService, addons };
    setOrder(newOrder);
  }

  return (
    <div className='w-full  md:p-5 lg:p-10 flex items-center justify-center bg-white' >
      <div className="container">
        <h1 className='text-6xl text-primary-500 font-bold' >Customize Your Services</h1>

        {/* Main Container */}
        <div className="mt-5 flex flex-col lg:flex-row justify-between gap-5 border shadow-xl p-5 rounded-xl">

          {/* Left container */}
          <div className="p-3 border rounded-xl flex-[0.2] shadow-xl">
            <h3 className="text-gray-400 text-xl">Services</h3>
            <hr />
            <div className="w-full flex gap-1 flex-wrap justify-center lg:block">
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
          </div>
          {/* End of Left container */}


          {/* Right container */}
          <div className="p-2 border rounded-xl flex-[0.8] min-h-[40vh] pb-10 shadow-xl relative">

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
                          <div key={index} 
                          className="flex text-sm text-gray-400 items-center gap-1 px-2 py-1 border rounded-full hover:scale-110  transition-all bg-secondary-100">
                            <img key={index} src={tech.icon} alt={tech.title} className="h-5 w-5" />
                            <GrFormClose className='hover:text-secondary-400' onClick={()=>removeTechnology(item.id, tech.id )} />
                          </div>
                        ))
                      }
                      {
                        item.addons.map((addon, index) => (
                          <div key={index} className="flex text-sm text-gray-400 items-center gap-1 px-2 py-1 border rounded-full hover:scale-110  transition-all bg-secondary-100">
                            <img key={index} src={addon.icon} alt={addon.title} className="h-5 w-5" />
                            <GrFormClose className='hover:text-secondary-400' onClick={()=>removeAddons(item.id, addon.id)} />
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
              <p className="text-3xl text-secondary-400 font-bold">{price}$</p>
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
            <button className='flex items-center gap-2 absolute bottom-2 right-2 px-3 py-2 rounded-full hover:shadow text-white bg-secondary-400 hover:bg-secondary-300 hover:scale-105 hover:font-bold transition-all'>
              Confirm
              <AiOutlineDoubleRight />
            </button>
          </div>
          {/* End of Right container */}


        </div>
        {/* End of Main Container */}
      </div>
    </div>
  )
}

export default CustomizeService