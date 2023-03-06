/*
This is a React component that displays a slider containing information of hero section.

The component defines a "SingleSlide" component which takes in "title" and "text" props and displays them within a styled div.

The "ContactCenterServicesSlide" component uses the "Slider" component from "react-slick" and passes in settings and "contactCenterServicesData" as props to display a collection of "SingleSlide" components as slides.

The settings object defines the behavior of the slider, including the number of slides to show and scroll, autoplay, and responsiveness. It also includes the arrow components defined earlier.


*/


import React from "react";
import Slider from "react-slick";
import { contactCenterServicesData } from "../../data"
import { GrNext, GrPrevious } from "react-icons/gr"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrNext
            className="text-6xl absolute right-0 top-1/2 cursor-pointer text-secondary-500 opacity-5 hover:opacity-100 hover:bg-secondary-500 -translate-y-[50%] border p-2 rounded-full translate-x-[30%] shadow"
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrPrevious
            className="z-10 text-6xl absolute left-0 top-1/2 cursor-pointer text-secondary-500 opacity-5 hover:opacity-100 hover:bg-secondary-500 -translate-y-[50%] border p-2 rounded-full -translate-x-[30%] shadow"
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}


var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

export const SingleSlide = (props) => {
    return (
        <div className="bg-white md:w-[1/8] mx-2 h-[150px] p-3 rounded-xl shadow flex flex-col items-center justify-center hover:border hover:border-primary-500 transition-all">
            <h1 className="text-3xl font-bold italic text-primary-500">{props.title}</h1>
            <p className="mt-5 text-center">{props.text}</p>
        </div>
    )
}

function ContactCenterServicesSlide() {
    return (
        <div className="w-full my-2">
            <Slider {...settings} className="py-2">
                {
                    contactCenterServicesData.map((item, index) => (
                        <SingleSlide key={index} {...item} />
                    ))
                }
            </Slider>
        </div>
    );
}

export default ContactCenterServicesSlide;
