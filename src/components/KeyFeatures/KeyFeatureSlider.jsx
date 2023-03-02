
import React from "react";
import Slider from "react-slick";
import { ourKeyFeatures } from "../../data"


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const SingleSlide = (props) => {
    return (
        <div className="w-300px h-[300px] bg-primary-600 mx-5 p-5 rounded-lg shadow-lg">
            <div className="text-6xl">
                <img src={props.icon} alt="" className="w-[50px] h-[50px]" />
            </div>
            <h2 className="text-2xl font-bold my-5">
                {props.title}
            </h2>
            <p className="">
                {props.desc}
            </p>
        </div>
    )
}

function KeyFeatureSlider() {
    return (
        <div className="w-full overflow-x-hidden my-10 py-10">
            <Slider {...settings} className="py-2">
                {
                    ourKeyFeatures.map((feature, index) => (
                        <SingleSlide key={index} {...feature} />
                    ))
                }
            </Slider>
        </div>
    );
}

export default KeyFeatureSlider;
