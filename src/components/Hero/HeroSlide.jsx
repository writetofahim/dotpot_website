import React from "react";
import Slider from "react-slick";
import { GrNext, GrPrevious } from 'react-icons/gr'
import { BsArrowRight } from 'react-icons/bs'
import { sliderData } from '../../data'
import { Link } from "react-router-dom";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className="text-6xl absolute right-0 top-1/2 cursor-pointer text-secondary-500 opacity-20 hover:opacity-100 hover:bg-secondary-500 -translate-y-[100%] border p-2 rounded-full translate-x-[20%] shadow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className="z-10 text-6xl absolute left-0 top-1/2 cursor-pointer text-secondary-500 opacity-20 hover:opacity-100 hover:bg-secondary-500 -translate-y-[100%] border p-2 rounded-full -translate-x-[20%] shadow"
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const SingleSlide = (props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="md:max-w-[1200px] lg:container container flex justify-between items-center">
        <div className="left flex-1 h-full flex flex-col justify-center">
          <h1 className="text-6xl text-primary-500 font-bold mb-2">
            {props.title}
          </h1>
          <p className='mb-5 text-gray-300 text-3xl font-bold'>{props.subTitle}</p>
          <div className="flex gap-5 items-center mb-5">
            {/* <div className="pr-5 border-r border-gray-300">
                  <h1 className="text-4xl text-secondary-500 font-bold">
                    #1
                  </h1>
                </div> */}
            <p className="md:w-2/3 w-4/5">
              {props.desc}
            </p>
          </div>
          <Link to={props.link}>
            <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
              Send <BsArrowRight />
            </button>
          </Link>
        </div>
        <div className="right flex-1 flex items-end justify-center ">
          <img src={props.img} alt={props.title} className="max-h-[50vh]" />
        </div>
      </div>
    </div>
  )
}

function HeroSlide() {
  return (
    <div className="w-full p-3">
      <Slider {...settings} className="py-2">
        {
          sliderData.map((item, index) => (
            <SingleSlide key={index} {...item} />
          ))
        }
      </Slider>
    </div>
  );
}

export default HeroSlide;
