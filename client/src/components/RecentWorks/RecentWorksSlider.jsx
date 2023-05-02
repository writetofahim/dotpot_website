/**
This component is a React slider that displays recent works data in the form of slides. 
It uses the following dependencies: @mui/material, @mui/system, and react-slick.

The slider includes two arrow components for navigating to the next and previous slide. 
These components are defined using react-icons/gr and named SampleNextArrow and SamplePrevArrow, respectively. 
The arrow components are passed to the slider component using the nextArrow and prevArrow properties of the settings object.

The settings object defines the behavior of the slider, including the number of slides to show at once, the speed of the slide transitions, and the breakpoints for different screen sizes. 
The recentWorksData array is mapped to generate the individual slides. 
Each slide displays an image, title, and a stack of Chip components representing the technologies used in the project.

Finally, the RecentWorksSlider component wraps the slider component and the individual slides to render the complete slider.
 */

import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className="md:block text-4xl md:text-5xl absolute right-0 top-1/2 cursor-pointer  opacity-30 hover:opacity-100 hover:bg-primary-300 transition-all -translate-y-[100%] p-2 rounded-full translate-x-[30%] md:translate-x-[30%]"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className="md:block z-10 text-4xl md:text-5xl absolute left-0 top-1/2 cursor-pointer  opacity-30 hover:opacity-100 hover:bg-primary-300 transition-all -translate-y-[100%] p-2 rounded-full -translate-x-[30%] md:-translate-x-[30%]"
      onClick={onClick}
    />
  );
}

var settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// export const SingleSlide = (props) => {
//     return (
//         <div className="mx-5 mb-20 rounded-lg relative shadow-xl bg-white">
//             <img src={`${import.meta.env.REACT_APP_SERVER_PATH}/${props.image}`} alt="" className=" rounded-xl aspect-[1.4] object-cover" />
//             <div className="absolute b-0 left-1/2 transform -translate-x-1/2 translate-y-[-50%] bg-white w-[80%] rounded-xl shadow p-5 flex flex-col items-center">
//                 <h3 className="text-xl font-bold text-gray-400 mb-2">{props.title}</h3>
//                 <Stack direction="row" spacing={1} className="flex flex-wrap">
//                     {
//                         props.technologies && props.technologies.map((tech, index) => (
//                             <Chip label={tech} key={index} variant="outlined" className="mb-1" />
//                         ))
//                     }
//                 </Stack>
//             </div>
//         </div>
//     )
// }

export const SingleSlide = (props) => {
  return (
    <div className="mx-5 mb-14 rounded-lg relative shadow-xl hover:shadow-lg bg-bgSecondary-500 border border-border px-5 pt-5 group hover:bg-bgSecondary-200 overflow-hidden duration-200">
      <div className="h-[100px]">
        <h3 className="text-2xl font-bold text-gray-400 mb-2 text-center hover:underline cursor-pointer">
          {props.title}
        </h3>
        <div className="flex gap-2 flex-wrap items-center justify-center mb-5">
          {props.technologies &&
            props.technologies.map((tech, index) => (
              <div
                key={index}
                className={`text-sm rounded-full px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white`}
              >
                {tech}
              </div>
            ))}
        </div>
      </div>
      <div className="mt-0 group-hover:translate-y-3 lg:translate-y-14 translate-y-10 duration-300 custom-shadow lg:h-[250px] ">
        <img
          src={`${import.meta.env.REACT_APP_SERVER_PATH}/${props.image}`}
          alt=""
          className="rounded-tl-xl rounded-tr-xl aspect-[1.4] object-cover "
        />
      </div>
    </div>
  );
};

function RecentWorksSlider() {
  const [data, setData] = useState(null);

  // Data Fetching
  useEffect(() => {
    axios
      .get("/work")
      .then((response) => {
        setData(response.data.works);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, []);

  return (
    <div className="w-full my-10">
      <Slider {...settings} className="py-2 px-5">
        {data &&
          data.map((item, index) => <SingleSlide key={index} {...item} />)}
      </Slider>
    </div>
  );
}

export default RecentWorksSlider;
