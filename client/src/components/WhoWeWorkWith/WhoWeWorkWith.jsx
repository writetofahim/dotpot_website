/**
 * This is a React component named WhoWeWorkWith that displays a section about the clients that the company works with. 
 * It imports Card component from a local file and whoDoWeWorkData object from ../../data which contains the data to be displayed.

The WhoWeWorkWith component returns a section that contains two div elements, one on the left and one on the right. 
The left div displays the title and description of the section. 
The right div contains multiple instances of the Card component, each of which displays an icon and a name of the client.

To use this component, you can import it in another file and include it in your JSX code. 
You can also customize the data to be displayed by modifying the whoDoWeWorkData object in ../../data file or pass in different props to the Card component.

Tailwind css is used for styling
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import { whoDoWeWorkData } from "../../data";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

export const Card = (props) => {
  return (
    <Link
      to={props.link}
      className="bg-background-500 rounded-lg flex flex-col items-stretch justify-between md:justify-center p-3 md:p-10 shadow h-[150px] md:h-[200px] w-[45%] md:w-[40%] md:min-w-[200px] hover:scale-110 transition-all cursor-pointer"
    >
      <div className="flex flex-col gap-5 items-center justify-center">
        <img
          src={props.icon}
          alt="icon"
          className="w-[50px] md:w-[80px] md:h-[80px] h-[50px] object-contain"
        />
        <h3 className="text-md md:text-xl font-bold text-center text-gray-400">
          {props.title}
        </h3>
      </div>
    </Link>
  );
};

const WhoWeWorkWith = () => {
  const [data, setData] = useState(null);

  // Data Fetching
  useEffect(() => {
    axios
      .get("/who_we_work_with")
      .then((response) => {
        setData(response.data.data);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, []);

  return (
    <div className="whoWeWorWith w-full min-h-[60vh] overflow-hidden py-10 md:flex md:flex-col md:justify-center md:items-center bg-primary-100 ">
      <div className="mt-5 w-full md:max-w-[1400px]  flex flex-col lg:flex-row md:flex-row gap-5 items-center">
        <div className="left w-1/1 md:w-1/3 lg:2/3 h-max p-5 text-left">
          <h2 className="text-3xl md:text-5xl text-center md:text-left font-bold mb-5 text-textColor-500">
            <Typed
              className="text-3xl md:text-4xl text-center md:text-left font-bold mb-2"
              strings={[whoDoWeWorkData.title]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </h2>
          <p className="text-justify text-md md:text-lg text-textColor-500">
            {whoDoWeWorkData.desc}
          </p>
        </div>
        <div className="right w-1/1 md:w-2/3 lg:2/3 h-max md:p-5 lg:p-5 flex gap-5 md:gap-10 lg:gap-10 flex-wrap items-center justify-center">
          {data && data.map((item, index) => <Card key={index} {...item} />)}
        </div>
      </div>
    </div>
  );
};

export default WhoWeWorkWith;
