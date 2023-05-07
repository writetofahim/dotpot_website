/**
This is a React component that exports a RecentWorksSlider function. 
The component uses MUI's Chip and Stack components, as well as the react-slick library to create a slider with recent blog posts. 
It also uses icons from react-icons/gr and react-icons/bs.

The component includes two helper functions, SampleNextArrow and SamplePrevArrow, that define the appearance and behavior of the slider's previous and next arrows.

The blogData array contains objects that represent each blog post's data, including the post's img, categories, date, title, and id.

The component includes a SingleSlide function that creates a single slide for the slider based on the data provided through its props. 
Finally, the RecentWorksSlider function maps over the blogData array to create a slider with multiple SingleSlide components.
 */

import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className="md:block text-4xl md:text-5xl absolute right-0 top-1/2 cursor-pointer opacity-30 hover:opacity-100 hover:bg-primary-300 transition-all -translate-y-[100%] p-2 rounded-full translate-x-[30%]"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className="md:block z-10 text-4xl md:text-5xl absolute left-0 top-1/2 cursor-pointer opacity-30 hover:opacity-100 hover:bg-primary-300 transition-all -translate-y-[100%] p-2 rounded-full -translate-x-[30%]"
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

export const SingleSlide = (props) => {
  return (
    <div className="mx-5 mb-20 rounded-lg shadow-xl ">
      <img
        src={`${import.meta.env.REACT_APP_SERVER_PATH}/${props.image}`}
        alt=""
        className="rounded-tl-xl rounded-tr-xl w-full aspect-video object-cover"
      />
      <div className=" bg-background-500 rounded-bl-xl rounded-br-xl shadow p-5 flex flex-col">
        <Stack direction="row" className="flex flex-wrap gap-1">
          {props.tags.map((tag, index) => (
            <Chip
              label={tag}
              key={index}
              variant="outlined"
              className="hover:border cursor-pointer"
            />

            // <div key={index} className="border  rounded-full px-2 ">
            //   <p className="text-textColor-500">{tag}</p>
            // </div>
          ))}
        </Stack>
        <p className="mt-2 text-white">{props.date}</p>
        <h3 className="text-xl font-bold text-gray-400 my-2 h-[80px]">
          {props.title.slice(0, 45)}...
        </h3>
        <Link
          to={`/blog/${props._id}`}
          className=" font-bold hover:text-secondary-500 text-gray-400 flex items-center gap-2"
        >
          Read More <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

function RecentBlogsSlider() {
  const [data, setData] = useState(null);

  // Data Fetching
  useEffect(() => {
    axios
      .get("/blog")
      .then((response) => {
        setData(response.data.blogs);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, []);

  return (
    <div className="w-full my-2">
      <Slider {...settings} className="py-2 px-5">
        {data &&
          data.map((item, index) => <SingleSlide key={index} {...item} />)}
      </Slider>
    </div>
  );
}

export default RecentBlogsSlider;
