
import React from "react";
import Slider from "react-slick";
import { outKeyFeatures } from "../../data"
import { HiOutlineDesktopComputer } from "react-icons/hi"


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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

export const SingleSlide = ({ id, title, desc }) => {
    return (
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
        <div className="w-full overflow-x-hidden my-10 py-10">
            <Slider {...settings} className="py-2">
                {
                    outKeyFeatures.map((feature, index) => (
                        <SingleSlide key={index} {...feature} />
                    ))
                }
            </Slider>
        </div>
    );
}

export default KeyFeatureSlider;
