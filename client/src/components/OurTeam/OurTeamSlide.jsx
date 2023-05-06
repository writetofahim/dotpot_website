/**
This is a React component that exports a RecentWorksSlider function. 
The component uses MUI's Chip and Stack components, as well as the react-slick library to create a slider with recent blog posts. 
It also uses icons from react-icons/gr and react-icons/bs.

The component includes two helper functions, SampleNextArrow and SamplePrevArrow, that define the appearance and behavior of the slider's previous and next arrows.

The blogData array contains objects that represent each blog post's data, including the post's img, categories, date, title, and id.

The component includes a SingleSlide function that creates a single slide for the slider based on the data provided through its props. 
Finally, the RecentWorksSlider function maps over the blogData array to create a slider with multiple SingleSlide components.
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
      className="md:block text-4xl md:text-5xl absolute right-0 top-1/2 cursor-pointer opacity-30 hover:opacity-100 hover:bg-primary-300 bg-primary-500 transition-all -translate-y-[150%] p-2 rounded-full translate-x-[30%]"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className="md:block z-10 text-4xl md:text-5xl absolute left-0 top-1/2 cursor-pointer opacity-30 hover:opacity-100 hover:bg-primary-300 bg-primary-500 transition-all -translate-y-[150%] p-2 rounded-full -translate-x-[30%]"
      onClick={onClick}
    />
  );
}

var settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
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
  // console.log(props)
  return (
    <a href={props.link} target="_blank">
      <div className="mx-5 mb-20 rounded-lg p-5 bg-bgSecondary-500 border border-border flex items-center flex-col shadow-xl cursor-pointer hover:border hover:border-primary-400 hover:scale-x-105 transition-all">
        <img
          src={`${import.meta.env.REACT_APP_SERVER_PATH}/${props.image}`}
          alt=""
          className=" w-2/5 aspect-square object-contain rounded-full"
        />

        <h3 className="mt-2 text-xl text-center font-bold text-primary-500">
          {props.name}
        </h3>
        <p className="font-bold text-center text-secondary-500">
          {props.title}
        </p>
      </div>
    </a>
  );
};

function OurTeamSlide() {
  const [data, setData] = useState(null);

  // Data Fetching
  useEffect(() => {
    axios
      .get("/team_member?limit=20")
      .then((response) => {
        setData(response.data.teamMembers);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, []);

  // console.log(data)

  return (
    <div className="w-full my-2">
      <Slider {...settings} className="py-2 px-3">
        {data &&
          data.map((item, index) => <SingleSlide key={index} {...item} />)}
      </Slider>
    </div>
  );
}

export default OurTeamSlide;
