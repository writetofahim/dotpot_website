import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import {sliderData} from '../../data'
import {GrNext, GrPrevious} from "react-icons/gr"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
      return (
      <GrNext
          className="text-6xl absolute right-0 top-1/2 cursor-pointer text-secondary-500 opacity-20 hover:opacity-100 hover:bg-secondary-500 -translate-y-[100%] border p-2 rounded-full shadow"
          style={{ ...style, display: "block"}}
          onClick={onClick}
      />
      );
  }
  
  function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
      <GrPrevious
          className="z-10 text-6xl absolute left-0 top-1/2 cursor-pointer text-secondary-500 opacity-20 hover:opacity-100 hover:bg-secondary-500 -translate-y-[100%] border p-2 rounded-full md:-translate-x-12 shadow"
          style={{ ...style, display: "block", }}
          onClick={onClick}
      />
      );
  }

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SimpleSlider() {
  return (
    <Slider {...settings} className="container h-full w-full flex items-center justify-center">
      {
        sliderData.map((slide, index) => {
          return <Slide key={slide.id} {...slide}/>
        })
      }
    </Slider >
  );
}

export default SimpleSlider;
