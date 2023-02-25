import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";


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
    <Slider {...settings} className="h-full w-full flex items-center justify-center">
      <Slide title={"Tonmoy"} image={"dkfjlsdjfalksfjd"} desc={"Description "} />
      <Slide title={"Tonmoy"} image={"dkfjlsdjfalksfjd"} desc={"Description "} />
      <Slide title={"Tonmoy"} image={"dkfjlsdjfalksfjd"} desc={"Description "} />
    </Slider >
  );
}

export default SimpleSlider;
