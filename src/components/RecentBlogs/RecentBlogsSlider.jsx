
import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import { blogData } from "../../data"
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import {GrNext,GrPrevious} from "react-icons/gr"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
        return (
        <GrNext
            className="text-6xl absolute right-0 top-1/2 cursor-pointer text-secondary-500 opacity-5 hover:opacity-100 hover:bg-secondary-500 -translate-y-[100%] border p-2 rounded-full translate-x-[30%] shadow"
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
        );
    }
    
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
        <GrPrevious
            className="z-10 text-6xl absolute left-0 top-1/2 cursor-pointer text-secondary-500 opacity-5 hover:opacity-100 hover:bg-secondary-500 -translate-y-[100%] border p-2 rounded-full -translate-x-[30%] shadow"
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
        );
    }


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
        <div className="mx-5 mb-20 rounded-lg">
            <img src={props.img} alt="" className="rounded-tl-xl rounded-tr-xl w-full aspect-video" />
            <div className=" bg-white rounded-bl-xl rounded-br-xl shadow p-5 flex flex-col">
                <Stack direction="row" className="flex flex-wrap gap-1">
                    {
                        props.categories.map((tech, index) => (
                            <Chip label={tech} key={index} variant="outlined" className="hover:border-primary-500 cursor-pointer" />
                        ))
                    }
                </Stack>
                <p className="mt-2 text-gray-400">{props.date}</p>
                <h1 className="text-xl font-bold text-gray-400 my-2">{props.title}</h1>
                <Link to={`/blog/${props.id}`} className="hover:text-secondary-500 flex items-center gap-2">Read More <BsArrowRight /></Link> 
            </div>
        </div>
    )
}

function RecentWorksSlider() {
    return (
        <div className="w-full my-2">
            <Slider {...settings} className="py-2">
                {
                    blogData.map((item, index) => (
                        <SingleSlide key={index} {...item} />
                    ))
                }
            </Slider>
        </div>
    );
}

export default RecentWorksSlider;