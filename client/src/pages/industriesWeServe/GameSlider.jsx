import React from "react";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import { sliderData } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className=" hidden md:block text-6xl absolute right-0 top-1/2 cursor-pointe opacity-30 hover:opacity-100 hover:bg-secondary-300 cursor-pointer transition-all -translate-y-[100%]  p-2 rounded-full translate-x-[20%]"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className="hidden md:block z-10 text-6xl absolute left-0 top-1/2 cursor-pointe opacity-30 hover:opacity-100 hover:bg-secondary-300 cursor-pointer transition-all -translate-y-[100%]  p-2 rounded-full -translate-x-[20%]"
      onClick={onClick}
    />
  );
}

var settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
};


export const SingleSlide = (props) => {

  return (
    <div className="w-full h-full flex items-center justify-center">

      <div className="w-4/5">
        <img src={props.image} alt={props.title} className=" rounded-lg" />
      </div>
    </div>
  );
};

function GameSlider({ gameData: gameData }) {
    
  return (
    <div className=" ">
      <Slider {...settings} className="">
        {gameData &&
          gameData.map(
            (item, index) => <SingleSlide key={index} {...item} />
            // console.log(item)
          )}
      </Slider>
    </div>
  );
}

export default GameSlider;
