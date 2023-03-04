
import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import { recentWorksData } from "../../data"


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
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
                slidesToScroll: 1,
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
        <div className="mx-5 mb-20 rounded-lg relative">
            <img src={props.img} alt="" className=" rounded-xl" />
            <div className="absolute b-0 left-1/2 transform -translate-x-1/2 translate-y-[-50%] bg-white w-[80%] rounded-xl shadow p-5 flex flex-col items-center">
                <h1 className="text-xl font-bold text-gray-400 mb-2">{props.title}</h1>
                <Stack direction="row" spacing={1}>
                    {
                        props.tech.map((tech, index) => (
                            <Chip label={tech} key={index} variant="outlined" />
                        ))
                    }
                </Stack>
            </div>
        </div>
    )
}

function RecentWorksSlider() {
    return (
        <div className="w-full my-10">
            <Slider {...settings} className="py-2">
                {
                    recentWorksData.map((item, index) => (
                        <SingleSlide key={index} {...item} />
                    ))
                }
            </Slider>
        </div>
    );
}

export default RecentWorksSlider;
