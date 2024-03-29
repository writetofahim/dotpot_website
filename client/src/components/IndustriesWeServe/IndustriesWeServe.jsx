/**
This is a React component that displays "Industries We Serve" section.

It imports IndustriesWeServeData from a file named data.js 
The component also imports another custom component called ProcessCard that receives props such as logo and title to display information about an industry in a card format.

The IndustriesWeServe component renders a div that contains a heading and a list of ProcessCard components. 
The list is generated using the map function that iterates over the IndustriesWeServeData array, passing each item as props to the ProcessCard component.

The component is styled using tailwind CSS classes, with responsive design for different screen sizes.
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

export const ProcessCard = (props) => {
  return (
    <Link
      to={props.link}
      className="bg-background-500 rounded-lg flex flex-col items-stretch justify-between md:justify-center p-3 md:p-10 shadow h-[150px] md:h-[200px] w-[45%] md:w-[18%] md:min-w-[200px] hover:scale-110 transition-all cursor-pointer"
    >
      <div>
        <div className="flex flex-col gap-5 items-center justify-center text-gray-400">
          <img
            src={props.icon}
            alt={props.title}
            className="w-[50px] md:w-[80px] md:h-[80px] h-[50px] object-contain"
          />
          <p className="text-md md:text-xl font-bold text-center">
            {props.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

const IndustriesWeServe = () => {
  const [data, setData] = useState(null);

  // Data Fetching
  useEffect(() => {
    axios
      .get("/industry_we_serve?page=1&limit=13")
      .then((response) => {
        setData(response.data.industryWeServe);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, []);

  // console.log(data)

  return (
    <div className="industriesWeServe w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center bg-primary-100/50 backdrop-blur-sm">
      <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-5 flex-wrap items-center justify-center">
        <h2 className="mt-10 text-3xl md:text-5xl text-center font-bold w-full mb-5 text-textColor-500">
          Industries We Serve
        </h2>
        {data &&
          data.map((item, index) => {
            return <ProcessCard key={index} {...item} />;
          })}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
