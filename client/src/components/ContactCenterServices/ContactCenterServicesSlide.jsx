/*
This is a React component that displays a slider containing information of hero section.

The component defines a "SingleSlide" component which takes in "title" and "text" props and displays them within a styled div.

The "ContactCenterServicesSlide" component uses the "Slider" component from "react-slick" and passes in settings and "contactCenterServicesData" as props to display a collection of "SingleSlide" components as slides.

The settings object defines the behavior of the slider, including the number of slides to show and scroll, autoplay, and responsiveness. It also includes the arrow components defined earlier.


*/


import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance"
import Slider from "react-slick";
import { contactCenterServicesData } from "../../data"
import { GrNext, GrPrevious } from "react-icons/gr"
import {Link} from 'react-router-dom'
import postLogger from "../../utils/postLogger";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrNext
            className="hidden md:block text-6xl absolute right-0 top-1/2 cursor-pointer opacity-30 hover:opacity-100 hover:bg-secondary-500 transition-all -translate-y-[50%]  p-2 rounded-full translate-x-[30%] "
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrPrevious
            className="hidden md:block z-10 text-6xl absolute left-0 top-1/2 cursor-pointer opacity-30 hover:opacity-100 hover:bg-secondary-500 transition-all -translate-y-[50%]  p-2 rounded-full -translate-x-[30%] "
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
        <Link to={props.link}>
            <div className="z-2 bg-white md:w-[1/8] mx-2 h-[200px] p-3 rounded-xl shadow flex flex-col items-center justify-center hover:border hover:border-primary-500 transition-all">
            {/* <h3 className="text-3xl font-bold italic text-primary-500">{props.title}</h3> */}
            <img src={props.icon} alt={props.title} className="w-[50%]" />
            <p className="mt-5 text-center text-primary-500 text-xl font-bold">{props.title}</p>
        </div>
        </Link>
    )
}

function ContactCenterServicesSlide() {
    const [data, setData] = useState(null)

    // Data Fetching
    useEffect(() => {
        axios.get('/contact_center_service')
            .then(response => {
                setData(response.data)
                postLogger({ level: "info", message: response })
            })
            .catch(error => {
                console.error(error)
                postLogger({ level: "error", message: error })
            });
    }, []);


    return (
        <div className="w-full my-2">
            <Slider {...settings} className="py-2">
                {
                    data && data.map((item, index) => (
                        <SingleSlide key={index} {...item} />
                    ))
                }
            </Slider>
        </div>
    );
}

export default ContactCenterServicesSlide;
