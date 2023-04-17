/**
This component is called SocialMedia and it renders a section with social media icons that link to their respective accounts. 
It imports Link from react-router-dom and socialNetworkData from ../../data.


The socialNetworkData array is mapped over and for each item in the array, a Link component is created with a div child. 
The div contains an image element.
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const SocialMedia = () => {
  const [data, setData] = useState(null);

  // Data Fetching
  useEffect(() => {
    axios
      .get("/socialmedia")
      .then((response) => {
        setData(response.data);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "info", message: response });
      });
  }, []);

  return (
    <div className="w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center">
      <div className="p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 justify-between items-center flex-col md:flex-row lg:flex-row">
        <div className="flex-1 backdrop-blur-sm rounded-xl">
          <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold mb-5 ">
            Social Media
          </h1>
          <p className="text-center md:text-left">
            Don’t Miss To Follow Us On Our Social Networks Accounts.
          </p>
        </div>
        <div className="flex-1 gap-5 flex flex-wrap justify-center">
          {data &&
            data.map((item, index) => {
              return (
                <Link to={item.url} key={index} target="_blank">
                  <div
                    key={index}
                    className="md:w-[100px] md:h-[100px] p-2 rounded-full md:rounded-lg shadow flex items-center justify-center hover:border hover: border-purple-500 hover:scale-110 hover:shadow-xl transition-all glassmorphism"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="h-[70px] w-[70px] object-contain"
                    />
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
