/**
This is a React component that renders a full-page hero slider. 
It uses the react-slick library for the slider functionality and custom arrow components for navigation. 
The slider data is imported from an external data file and mapped to the SingleSlide component, which renders a single slide with an image, title, subtitle, description, and a button that links to a specified URL. 
The HeroSlide component maps all the slide data to SingleSlide and renders them within the Slider component with the custom arrow components. 
The HeroSlide component is then used within the Hero component to display the hero slider with a particle animation in the background. 
The Hero component is intended to be used as the hero section of a landing page or a website homepage.
 */

import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import Typed from "react-typed";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <GrNext
//       className=" md:block text-4xl md:text-6xl absolute right-0 top-1/2 cursor-pointe opacity-30 hover:opacity-100 hover:bg-secondary-300 cursor-pointer transition-all -translate-y-[100%]  p-2 rounded-full translate-x-[20%]"
//       onClick={onClick}
//     />
//   );
// }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className="md:block text-4xl md:text-5xl absolute right-0 top-1/2 cursor-pointe opacity-30 hover:opacity-100 hover:bg-primary-300 hover:text-white cursor-pointer transition-all -translate-y-[100%] p-2 translate-x-[20%] rounded-full"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className="md:block z-10 text-4xl md:text-5xl absolute left-0 top-1/2 cursor-pointe opacity-30 hover:opacity-100 hover:bg-primary-300 hover:text-white cursor-pointer transition-all -translate-y-[100%]  p-2 -translate-x-[20%] rounded-full"
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
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const SingleSlide = (props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="md:max-w-[1200px] lg:container flex flex-col-reverse md:flex-row justify-evenly items-center">
        <div className="left mt-5 md:mt-0 flex-1 h-full flex flex-col items-center md:items-start justify-center pl-0 md:pl-10 backdrop-blur-sm">
          {/* <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold mb-2">
            {props.title}
          </h1> */}
          <Typed
            className="text-3xl md:text-5xl text-center md:text-left font-bold mb-2"
            strings={[props.title]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
          <p className="mb-5 text-gray-300 text-xl text-center md:text-left md:text-2xl font-bold">
            {props.subtitle}
          </p>
          <div className="flex justify-center md:justify-start gap-5 items-center mb-5">
            {/* <div className="pr-5 border-r border-gray-300">
                  <h1 className="text-4xl text-secondary-500 font-bold">
                    #1
                  </h1>
                </div> */}
            <p className="md:w-2/3 w-4/5 text-sm md:text-xl text-center md:text-left">
              {props.description}
            </p>
          </div>
          {/* {
            props.button_link && (
              <Link to={props.button_link}>
                <button className='bg-secondary-400 hover:bg-secondary-300 px-10 py-3 text-white rounded-sm hover:scale-110 transition-all font-bold mt-2 flex items-center gap-3'>
                  {props.button_text} <BsArrowRight />
                </button>
              </Link>
            )
          } */}
        </div>
        <div className="right flex-1 flex items-end justify-center ">
          <img
            src={`${import.meta.env.REACT_APP_SERVER_PATH}/${props.image}`}
            alt={props.title}
            className="max-h-[50vh]"
          />
        </div>
      </div>
    </div>
  );
};

function HeroSlide({ heroData }) {
  return (
    <div className="w-full p-3">
      <Slider {...settings} className="py-2">
        {/* {
          sliderData.map((item, index) => (
            <SingleSlide key={index} {...item} />
          ))
        } */}
        {heroData &&
          heroData.map((item, index) => <SingleSlide key={index} {...item} />)}
      </Slider>
    </div>
  );
}

export default HeroSlide;
