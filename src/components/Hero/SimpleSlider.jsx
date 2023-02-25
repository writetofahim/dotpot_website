import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import {sliderData} from '../../data'


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
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
