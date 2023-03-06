/**
This component is a slider that displays a list of partners logos. 
It imports React and Slider from the "react-slick" library, as well as the ourPartnersSliderData array from the ../../data file. It sets some options for the slider, including autoplay and breakpoints for responsiveness. 
The OurPartnersSlider function returns the slider component with the settings applied, which includes mapping through the ourPartnersSliderData array to display each partner logo as an image within a div.
 */
import React from "react";
import Slider from "react-slick";
import { ourPartnersSliderData } from "../../data"


var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
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


function OurPartnersSlider() {
    return (
        <div className="w-full overflow-x-hidden bg-white">
            <Slider {...settings} className="py-2">
                {
                    ourPartnersSliderData.map((item, index) => (
                        <div className="mx-5 p-5 rounded-lg flex items-center justify-center hover:scale-110 transition-all" key={index}>
                            <img src={ourPartnersSliderData[index]} className="h-[100px]" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default OurPartnersSlider;
