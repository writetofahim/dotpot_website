/**
This component is a slider that displays a list of partners logos. 
It imports React and Slider from the "react-slick" library, as well as the ourPartnersSliderData array from the ../../data file. It sets some options for the slider, including autoplay and breakpoints for responsiveness. 
The OurPartnersSlider function returns the slider component with the settings applied, which includes mapping through the ourPartnersSliderData array to display each partner logo as an image within a div.
 */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ourPartnersSliderData } from "../../data"
import axios from "../../utils/axiosInstance"
import postLogger from "../../utils/postLogger";


var settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: -200,
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

    const [data, setData] = useState(null);
    // console.log("our parterner", data)

    // Data Fetching
    useEffect(() => {
        axios.get('/our_partner')
            .then(response => {
                setData(response.data.ourPartners)
                postLogger({ level: "info", message: response })
            })
            .catch(error =>{ 
                console.error(error)
                postLogger({ level: "error", message: error })
            });
    }, []); 



    return (
        <div className="w-full overflow-x-hidden bg-white">
            <Slider {...settings} className="py-2">
                {
                    data && data.map((item, index) => (
                        <div className="mx-5 p-5 rounded-lg flex items-center justify-center hover:scale-110 transition-all" key={index}>
                            <img src={`${import.meta.env.REACT_APP_SERVER_PATH}/${item.logo}`} alt={item.title} className="h-[100px] max-w-[200px] object-contain" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default OurPartnersSlider;
