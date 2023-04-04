/**
The KeyFeatureSlider component displays a slider of key features using the Slider component from the react-slick library.
This component receives the no props:
The KeyFeatureSlider component imports the following:
ourKeyFeatures: an array of objects containing information about each key feature to be displayed in the slider.
SingleSlide: a component that displays the information for a single key feature.
SampleNextArrow and SamplePrevArrow: components that display custom Next and Previous arrow icons respectively.
The KeyFeatureSlider component uses the following props with the Slider component:
dots: a boolean indicating whether to display dots below the slider to indicate the current slide.
infinite: a boolean indicating whether the slider should loop back to the first slide after reaching the last slide.
speed: the time in milliseconds for the slider to animate between slides.
slidesToShow: the number of slides to display at once.
slidesToScroll: the number of slides to scroll when the Next or Previous arrow is clicked.
initialSlide: the index of the slide to display first.
autoplay: a boolean indicating whether to automatically advance to the next slide.
autoplaySpeed: the time in milliseconds for the slider to automatically advance to the next slide.
arrows: a boolean indicating whether to display Next and Previous arrow icons.
cssEase: the easing function to use for the slide animation.
nextArrow: a custom Next arrow component.
prevArrow: a custom Previous arrow component.
responsive: an array of breakpoint objects that specify how many slides to display and scroll at different screen sizes.
@returns JSX element
*/
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ourKeyFeatures } from "../../data"
import { GrNext, GrPrevious } from 'react-icons/gr'
import axios from "../../utils/axiosInstance";
import { Link } from "react-router-dom";
import {AiOutlineDoubleRight} from 'react-icons/ai'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrNext
            className=" hidden md:block text-6xl absolute right-0 top-1/2 cursor-pointer opacity-30 hover:opacity-100 hover:bg-secondary-500 transition-all p-2 rounded-full -translate-x-[30%]"
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrPrevious
            className="hidden md:block z-10 text-6xl absolute left-0 top-1/2 cursor-pointer opacity-30 hover:opacity-100 hover:bg-secondary-500 transition-all p-2 rounded-full translate-x-[30%]"
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
    autoplaySpeed: 5000,
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
        <Link to={props.link}>
            <div className="h-[300px] flex flex-col items-center bg-white mx-5 p-5 rounded-lg shadow-lg text-gray-400 cursor-pointer relative">
                <div className="mb-3">
                    <img src={props.icon} alt="" className="w-[50px] h-[50px]" />
                </div>
                <h2 className="text-2xl h-[80px] text-center font-bold">
                    {props.title}
                </h2>
                <p className="text-center">
                    {
                        props.description?.slice(0,100)
                    }
                    ...
                </p>
                <span className="absolute bottom-2 text-gray-400 hover:text-secondary-500 flex items-center" >Know More <AiOutlineDoubleRight/></span>
            </div>
        </Link>
    )
}

function KeyFeatureSlider() {
    const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/key_feature')
            .then(response => setData(response.data.KeyFeatures))
            .catch(error => console.error(error));
    }, []);


    return (
        <div className="w-full overflow-x-hidden mb-10 py-10">
            <Slider {...settings} className="py-2">
                {
                    data && data.map((feature, index) => (
                        <SingleSlide key={index} {...feature} />
                    ))
                }
            </Slider>
        </div>
    );
}

export default KeyFeatureSlider;
