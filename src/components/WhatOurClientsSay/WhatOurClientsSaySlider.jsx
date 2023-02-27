
import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import {WhatOurClientSayData} from "../../data"


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
    return(
        <div className="h-[60vh] mx-5 mb-20 p-5 md:p-10 rounded-lg flex flex-col justify-between items-center glassmorphism">
            <h1 className="text-lg text-center md:text-left mb-2">{props.text}</h1>
            <div className="">
                <div className="w-full flex flex-col md:flex-row gap-5 items-center text-center md:text-left">
                    <img src={props.img} alt="" className=" rounded-xl pr-5"/>
                    <div className="">
                        <h3 className="text-xl font-bold">{props.name}</h3>
                        <p className="">{props.post}</p>
                        <p className="">{props.country}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WhatOurClientsSaySlider() {
    return (
        <div className="w-full mb-10">
            <Slider {...settings} className="py-2">
                {
                    WhatOurClientSayData.cards.map((item, index) =>(
                        <SingleSlide key={index} {...item}/>
                    ))
                }
            </Slider>
        </div>
    );
}

export default WhatOurClientsSaySlider;
