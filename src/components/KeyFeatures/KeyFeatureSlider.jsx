
import React from "react";
import Slider from "react-slick";
import { ourKeyFeatures } from "../../data"
import {GrNext,GrPrevious} from 'react-icons/gr'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
        return (
        <GrNext
            className="text-6xl absolute right-0 top-1/2 cursor-pointer text-secondary-500 opacity-20 hover:opacity-100 hover:bg-secondary-500 border p-2 rounded-full -translate-x-[30%] shadow"
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
        );
    }
    
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <GrPrevious
        className="z-10 text-6xl absolute left-0 top-1/2 cursor-pointer text-secondary-500 opacity-20 hover:opacity-100 hover:bg-secondary-500 border p-2 rounded-full translate-x-[30%] shadow"
        style={{ ...style, display: "block", }}
        onClick={onClick}
    />
    );
}

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
            <div className="text-6xl border p-3 max-w-max rounded-full bg-white hover:bg-secondary-500 hover:border-black cursor-pointer">
                <img src={props.icon} alt="" className="w-[40px] h-[40px]" />
            </div>
            <h2 className="text-2xl font-bold mb-5">
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
