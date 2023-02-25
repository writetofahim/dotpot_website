
import React from "react";
import Slider from "react-slick";
import {outKeyFeatures} from "../../data"
import {HiOutlineDesktopComputer} from "react-icons/hi"


let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
};

if(window.screen.width < 1200){
    settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
}

export const SingleSlide = ({id,title,desc}) => {
    return(
        <div className="w-300px h-[300px] bg-primary-600 mx-5 p-5 rounded-lg shadow-lg">
            <div className="text-6xl">
                <HiOutlineDesktopComputer />
            </div>
            <h2 className="text-2xl font-bold my-5">
                {title}
            </h2>
            <p className="">
                {desc}
            </p>
        </div>
    )
}

function KeyFeatureSlider() {
    return (
        <div className="overflow-hidden w-full my-10">
            <Slider {...settings} className="py-2">
                {
                    outKeyFeatures.map((feature, index) =>(
                        <SingleSlide key={index} {...feature}/>
                    ))
                }
            </Slider>
        </div>
    );
}

export default KeyFeatureSlider;
