import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useContext, useEffect, useState } from "react";
import { BiCircle } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Service Card
const ServicesCard = (props) => {
  const { openService, setOpenService, setOrder, order, ...others } = props;
  const serviceObject = { ...others };
  const [isSelect, setIsSelect] = useState(false);
  const [isExist, setIsExist] = useState(false);

  useEffect(() => {
    // Check if the service is already selected in the order
    const existInTheArray = order.some((obj) => obj._id === serviceObject._id);
    setIsExist(existInTheArray);
  }, [order, serviceObject]);

  const addService = () => {
    // Copy the existing order, add the new service object, and set it as the new order
    setOrder([
      ...order,
      {
        _id: serviceObject._id,
        title: serviceObject.title,
        icon: serviceObject.icon,
        technologies: [],
        addons: [],
      },
    ]);
    setIsSelect(true);
  };

  const removeService = () => {
    setIsSelect(false);
    // Filter out the service object with the matching ID, and set the new order
    const newOrder = order.filter((obj) => obj._id !== serviceObject._id);
    setOrder(newOrder);
  };

  return (
    <div
      // Add the 'bg-primary-100' class if the open service object matches this service object
      className={`w-[30%] md:w-[20%] md:m-1 lg:w-full p-1 lg:p-2 flex flex-col lg:flex-row items-center gap-1 lg:gap-2 rounded-xl border border-border mt-2 hover:scale-105 hover:shadow-xl transition-all relative cursor-pointer bg-background-500  ${
        isExist && "bg-secondary-200 "
      } ${
        openService &&
        serviceObject &&
        openService._id === serviceObject._id &&
        "bg-secondary-100 scale-105 shadow-xl"
      }`}
      onClick={() => props.setOpenService(serviceObject)}
    >
      <img
        src={props.icon}
        alt={props.title}
        className="w-7 lg:w-10 h-7 lg:h-10"
      />
      <p className="text-center text-[10px] md:text-sm text-textColor-500 font-bold lg:text-left">
        {props.title}
      </p>
      {
        // Show the 'add' icon if the service is not already selected, otherwise show the 'remove' icon
        !isExist ? (
          <BiCircle
            className="absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110"
            onClick={() => addService()}
          />
        ) : (
          <BsCheckCircleFill
            className="absolute top-1 right-1 text-primary-500 cursor-pointer hover:scale-110"
            onClick={() => removeService()}
          />
        )
      }
    </div>
  );
};
//End of Service Card

// Technology Card
const TechnologyCard = (props) => {
  const { openService, setOpenService, order, setOrder, ...others } = props;
  const technologyObject = { ...others };
  const [isSelect, setIsSelect] = useState(false);

  // Ckeck if already selected or not
  useEffect(() => {
    const currentServiceIndex = order.findIndex(
      (obj) => obj._id === openService._id
    );
    const currentService = order[currentServiceIndex];
    let isExist = false;

    if (currentService) {
      const techArray = currentService.technologies;
      isExist = techArray.find((item) => item._id === technologyObject._id);
    }

    if (isExist) {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  }, [order, openService._id, technologyObject._id]);

  const addTechnologie = () => {
    const currentServiceIndex = order.findIndex(
      (obj) => obj._id === openService._id
    );

    if (currentServiceIndex >= 0) {
      setIsSelect(!isSelect);
      const newOrder = [...order];
      newOrder[currentServiceIndex].technologies = [
        ...newOrder[currentServiceIndex].technologies,
        technologyObject,
      ];
      setOrder(newOrder);
    } else {
      setOrder([
        ...order,
        {
          _id: openService._id,
          title: openService.title,
          icon: openService.icon,
          technologies: [{ ...props }],
          addons: [],
        },
      ]);
      setIsSelect(!isSelect);
    }
  };

  const removeTechnologie = () => {
    const currentServiceIndex = order.findIndex(
      (obj) => obj._id === openService._id
    );

    setIsSelect(!isSelect);

    const newOrder = [...order];
    newOrder[currentServiceIndex].technologies = newOrder[
      currentServiceIndex
    ].technologies.filter((obj) => obj._id !== technologyObject._id);

    setOrder(newOrder);
  };

  return (
    <div
      className="w-[30%] md:w-[120px] h-[90px] lg:h-[100px] p-1 lg:p-2 border border-border rounded-xl flex flex-col items-center justify-evenly hover:scale-105 hover:shadow-xl transition-all relative overflow-hidden bg-background-500 cursor-pointer"
      onClick={() => {
        !isSelect ? addTechnologie() : removeTechnologie();
      }}
    >
      <img
        src={props.icon}
        alt="Technology Image"
        className="w-[25px] h-[25px] object-contain"
      />

      {!isSelect ? (
        <BiCircle className="absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110" />
      ) : (
        // <BiCircle
        //   className="absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110"
        //   onClick={() => addTechnologie()}
        // />
        <BsCheckCircleFill className="absolute top-1 right-1 text-primary-500 cursor-pointer hover:scale-110" />
        // <BsCheckCircleFill
        //   className="absolute top-1 right-1 text-textColor-500 cursor-pointer hover:scale-110"
        //   onClick={() => removeTechnologie()}
        // />
      )}

      <abbr
        title={`${props.sdes} Starting from ${props.cost}`}
        className="absolute top-1 left-1 text-textColor-500 cursor-pointer hover:scale-110"
      >
        <FiInfo />
      </abbr>

      <h3 className="text-center text-gray-300 text-sm">{props.title}</h3>
      {/* <h3 className="text-center text-gray-300 text-sm">${props.cost}</h3> */}
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
    const currentServiceIndex = order.findIndex(
      (obj) => obj._id === openService._id
    );
    const currentService = order[currentServiceIndex];
    let isExist = false;

    if (currentService) {
      const addonArray = currentService.addons;
      isExist = addonArray.find((item) => item._id === addonObject._id);
    }

    if (isExist) {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  }, [order, openService._id, addonObject._id]);

  const addAddons = () => {
    const currentServiceIndex = order.findIndex(
      (obj) => obj._id === openService._id
    );
    const currentService = order[currentServiceIndex];
    if (currentService) {
      setIsSelect(!isSelect);
      const addons = [...currentService.addons, addonObject];
      const newOrder = [...order];
      newOrder[currentServiceIndex] = { ...currentService, addons };
      setOrder(newOrder);
    } else {
      setIsSelect(true);
      props.setOrder([
        ...order,
        {
          _id: openService._id,
          title: openService.title,
          icon: openService.icon,
          technologies: [],
          addons: [{ ...props }],
        },
      ]);
    }
  };

  const removeAddons = (_id) => {
    setIsSelect(!isSelect);
    const currentServiceIndex = order.findIndex(
      (obj) => obj._id === openService._id
    );
    const currentService = order[currentServiceIndex];
    const addons = currentService.addons.filter((obj) => obj._id !== _id);
    const newOrder = [...order];
    newOrder[currentServiceIndex] = { ...currentService, addons };
    setOrder(newOrder);
  };

  return (
    <div
      className="w-[30%] md:w-[100px] h-[90px] lg:h-[100px] p-1 lg:p-2 border border-border rounded-xl flex flex-col items-center justify-evenly hover:scale-105 hover:shadow-xl transition-all relative overflow-hidden bg-background-500 cursor-pointer "
      onClick={() => {
        !isSelect ? addAddons() : removeAddons(props._id);
      }}
    >
      <img
        src={props.icon}
        alt="Addon Service Image"
        className="w-[25px] h-[25px] object-contain"
      />
      {!isSelect ? (
        <BiCircle className="absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110" />
      ) : (
        // <BiCircle
        //   className="absolute top-1 right-1 text-gray-400 cursor-pointer hover:scale-110"
        //   onClick={() => addAddons()}
        // />
        <BsCheckCircleFill className="absolute top-1 right-1 text-primary-500 cursor-pointer hover:scale-110" />
        // <BsCheckCircleFill
        //   className="absolute top-1 right-1 text-textColor-500 cursor-pointer hover:scale-110"
        //   onClick={() => removeAddons(props._id)}
        // />
      )}
      <abbr
        title={`${props.sdes} Starting from ${props.cost}`}
        className="absolute top-1 left-1 text-textColor-500 cursor-pointer hover:scale-110"
      >
        <FiInfo />
      </abbr>
      <h3 className="text-center text-textColor-500 text-sm">{props.title}</h3>
      {/* <h3 className="text-center text-textColor-500 text-sm">${props.cost}</h3> */}
    </div>
  );
};

// End of Addons Card

const CustomizeService = () => {
  const { user, setIsChatPopupOpen, setRandomValue, order, setOrder } =
    useContext(AuthContext);
  const [openService, setOpenService] = useState(null);
  const [selectedServices, setSelectedServices] = useState({});
  // const [order, setOrder] = useState([]);
  const [price, setPrice] = useState(0);
  const [customizeYourService, setCustomizeYourService] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/service").then((data) => {
      setCustomizeYourService(data.data.services);
      setOpenService(data.data.services[0]);
      postLogger({ level: "info", message: data });
    });
  }, []);
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
    setPrice(totalCost);
  }, [order]);

  // Remove technologies from topbar section
  const removeTechnology = (serviceId, techId) => {
    const currentServiceIndex = order.findIndex((obj) => obj._id === serviceId);
    const currentService = order[currentServiceIndex];
    const technologies = currentService.technologies.filter(
      (obj) => obj._id !== techId
    );
    const newOrder = [...order];
    newOrder[currentServiceIndex] = { ...currentService, technologies };
    setOrder(newOrder);
  };

  // Remove addons from topbar section
  const removeAddons = (serviceId, addonId) => {
    const currentServiceIndex = order.findIndex((obj) => obj._id === serviceId);
    const currentService = order[currentServiceIndex];
    const addons = currentService.addons.filter((obj) => obj._id !== addonId);
    const newOrder = [...order];
    newOrder[currentServiceIndex] = { ...currentService, addons };
    setOrder(newOrder);
  };

  const handlePlaceOrder = async () => {
    if (price === 0) return;
    const clientId = JSON.parse(localStorage.getItem("user"))?._id;

    if (!clientId) return navigate("/login");

    setIsSubmitting(true);
    setIsError(false);
    const newOrder = {
      client_id: user._id,
      total_cost: price,
      selected_items: order,
    };
    try {
      const { data } = await axios.post("/order", newOrder);

      postLogger({ level: "info", message: data });

      const conversationId = localStorage.getItem("conversation_id");

      let orderMessage = "I need ";
      order.forEach((item) => {
        orderMessage += item.title + " with ";
        const techTitles = item.technologies.map((tech) => tech.title);
        orderMessage += techTitles.join(", ");
        const addonTitles = item.addons.map((addon) => addon.title);
        addonTitles
          ? (orderMessage += "\n and addon " + addonTitles.join(", "))
          : null;
        orderMessage += "\n";
      });
      orderMessage += "Total estimated price is: $" + price;
      console.log(orderMessage);

      const msgResponse = await axios.post(
        `/chats/${conversationId}/messages`,
        {
          text: orderMessage,
          isOrder: true,
        }
      );
      setIsChatPopupOpen(true);
      setRandomValue(Math.random());
      setIsSubmitting(false);
      setIsSuccess(true);
      setOrder([]);
    } catch (error) {
      setIsSubmitting(false);
      setIsError(true);
      console.log(error);
      postLogger({ level: "error", message: error });
    }
  };

  return (
    <div className="w-full py-10 px-3  md:p-5 lg:p-10 flex items-center justify-center ">
      {/* success snackbar start */}
      {isSuccess && (
        <Snackbar
          open={isSuccess}
          autoHideDuration={6000}
          onClose={() => setIsSuccess(false)}
        >
          <Alert
            onClose={() => setIsSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Order placed successfully!
          </Alert>
        </Snackbar>
      )}
      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={6000}
          onClose={() => setIsError(false)}
        >
          <Alert
            onClose={() => setIsError(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            Somethings went wrong!
          </Alert>
        </Snackbar>
      )}
      {/* success snackbar end*/}

      <div className="container">
        <div className="backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl text-center  font-bold text-textColor-500">
            Customize Your Services
          </h2>
          <p className="text-center text-lg font-bold text-gray-400 my-5">
            Use our tool to select your desired product and services and receive
            an estimated quote.
          </p>
        </div>

        {/* Main Container */}
        <div
          className="mt-5 flex flex-col lg:flex-row justify-between gap-5 rounded-xl md:min-h-[70vh]"
          // style={{
          //   background: `url(${customizeServiceBg})`,
          //   backgroundSize: "cover",
          // }}
        >
          {/* Left container */}
          <div className="p-3 md:px-3 md:py-5 border border-border rounded-xl flex-[0.2] shadow-xl customizeServiceLeft bg-primary-100/50 backdrop-blur-sm">
            <h3 className="text-textColor-500 text-xl uppercase font-bold">
              Services
            </h3>
            <div className="w-full flex gap-1 flex-wrap justify-center lg:block">
              {customizeYourService.map((item, index) => (
                <ServicesCard
                  key={index}
                  {...item}
                  openService={openService}
                  setOpenService={setOpenService}
                  selectedServices={selectedServices}
                  setSelectedServices={setSelectedServices}
                  order={order}
                  setOrder={setOrder}
                />
              ))}
            </div>
          </div>
          {/* End of Left container */}

          {/* Right container */}
          <div className="pt-10 p-3 md:p-5 border border-border rounded-xl flex-[0.8] min-h-[40vh] pb-10 shadow-xl relative  customizeServiceRight bg-primary-100/50 backdrop-blur-sm">
            {/* Top Section */}
            <div className="">
              <p className=" text-textColor-500 ">Selected items: </p>
              {order.map(
                (item, index) =>
                  (item?.technologies?.length > 0 ||
                    item?.addons?.length > 0) && (
                    <div key={index} className="flex items-center gap-2 mt-1">
                      <img
                        src={item.icon}
                        alt="custom img"
                        className="w-7 h-7"
                      />
                      <p className="text-textColor-500">:</p>
                      <div className="border-r-gray-500 flex flex-wrap items-center gap-2 cursor-pointer">
                        {item.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="flex text-sm text-gray-400 items-center gap-1 px-2 py-1 rounded-full hover:scale-110  transition-all bg-secondary-200"
                          >
                            <img
                              key={index}
                              src={tech.icon}
                              alt={tech.title}
                              className="h-5 w-5"
                            />
                            {/* <p className="text-textColor-500">{tech.cost}$</p> */}
                            <GrFormClose
                              className="hover:text-textColor-500"
                              onClick={() =>
                                removeTechnology(item._id, tech._id)
                              }
                            />
                          </div>
                        ))}
                        {item.addons.map((addon, index) => (
                          <div
                            key={index}
                            className="flex text-sm text-gray-400 items-center gap-1 px-2 py-1 border border-border rounded-full hover:scale-110  transition-all bg-secondary-200"
                          >
                            <img
                              key={index}
                              src={addon.icon}
                              alt={addon.title}
                              className="h-5 w-5"
                            />
                            {/* <p className="text-textColor-500">{addon.cost}$</p> */}
                            <GrFormClose
                              className="hover:text-secondary-400"
                              onClick={() => removeAddons(item._id, addon._id)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>

            {/* <div className="absolute top-1 right-1 flex flex-col items-center text-gradient bg-gradient-to-r from-[#6e3aff] via-[#26f8ff] to-[#4366ff]">
              <p className="text-sm lg:text-textColor-500">Estimated Cost</p>
              <p className="text-3xl  font-bold lg:text-textColor-500">
                {price}$
              </p>
            </div> */}
            {/* End of Top Section */}

            {/* Show technology section */}
            {openService !== null && (
              <div className="w-full">
                <p className="text-textColor-500 mt-3">Technologies:</p>
                <div className="w-full p-2 my-2 flex gap-3 flex-wrap">
                  {openService.technologies.map((item, index) => (
                    <TechnologyCard
                      key={index}
                      order={order}
                      setOrder={setOrder}
                      openService={openService}
                      {...item}
                    />
                  ))}
                </div>
              </div>
            )}
            {/* End of Show technology section */}

            {/* Show Addons section */}
            {openService !== null && (
              <div className="w-full">
                <p className="text-gray-300">Addons :</p>
                <div className="w-full p-2 my-2 flex gap-3 flex-wrap">
                  {openService.addons.map((item, index) => (
                    <AddonsCard
                      key={index}
                      order={order}
                      setOrder={setOrder}
                      openService={openService}
                      {...item}
                    />
                  ))}
                </div>
              </div>
            )}
            {/* End of Show Addons section */}
            {/* {user ? (
              <button
                disabled={isSubmitting}
                onClick={handlePlaceOrder}
                className={`flex items-center gap-2 absolute bottom-2 right-2 px-3 py-2 rounded-full hover:shadow text-white bg-secondary-400 hover:bg-secondary-300 hover:scale-105 hover:font-bold transition-all disabled:secondary-100 ${
                  isSubmitting && "cursor-not-allowed"
                }`}
              >
                Confirm
                {isSubmitting ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  <AiOutlineDoubleRight />
                )}
              </button>
            ) : (
              <button
                disabled={isSubmitting}
                onClick={() => navigate("/login")}
                className={`flex items-center gap-2 absolute bottom-2 right-2 px-3 py-2 rounded-full hover:shadow text-white bg-secondary-400 hover:bg-secondary-300 hover:scale-105 hover:font-bold transition-all disabled:secondary-100 ${
                  isSubmitting && "cursor-not-allowed"
                }`}
              >
                Login To Confirm
                {isSubmitting ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  <AiOutlineDoubleRight />
                )}
              </button>
              
            )} */}
            <button
              disabled={isSubmitting}
              onClick={() => navigate("/confirmation")}
              className={`flex items-center gap-2 absolute bottom-2 right-2 px-3 py-2 rounded-full hover:shadow text-white bg-secondary-400 hover:bg-secondary-300 hover:scale-105 hover:font-bold transition-all disabled:secondary-100 ${
                isSubmitting && "cursor-not-allowed"
              }`}
            >
              Order Now
            </button>

            <Typed
              className="text-xl md:text-2xl text-center md:text-lef absolute bottom-1 hidden md:block text-gray-400"
              strings={[
                "Create you own Packages",
                "Customize Service to Serve Your Need",
                "Get Quote on Your Desire Services ",
                "Help Business Successful Online",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </div>
          {/* End of Right container */}
        </div>
        {/* End of Main Container */}
      </div>
    </div>
  );
};

export default CustomizeService;
