// This component is a cookie consent banner that is displayed at the bottom left of the screen until the user accepts the use of cookies. It is implemented using React and uses local storage to store the user's cookie acceptance status.

// The component has a state variable isCookieAccept which is initialized from the value stored in local storage. If the user clicks on the Accept button, the handleClick function sets the isCookieAccept state variable to true and stores the value in local storage.

// The component renders a div element with a fixed position at the bottom left of the screen. The div element contains a message and a button. The message explains the use of cookies and provides a link to the privacy policy. The button is used to accept cookies.

// The component uses Tailwind CSS for styling.

import React, {useState } from 'react';
import { Link } from 'react-router-dom';

const AcceptCookies = () => {
    const [isCookieAccept, setIsCookieAccept]=useState(localStorage.getItem('isCookieAccept'));

    const handleClick = () => {
      setIsCookieAccept(true)
      localStorage.setItem('isCookieAccept', true)
    }
    
    return (
        <div className={`${isCookieAccept ? "hidden" : "block" } fixed lg:bottom-5 bottom-0 lg:left-5 left-0 lg:w-[500px] w-screen z-50 lg:p-5 p-3 shadow-lg `}>
            <div className='bg-[#12243b] rounded lg:p-5 p-3 text-white'>
                <h1 className='lg:text-base text-sm '>
                By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
                View our <Link to={"/privacyPolicy"} className='underline'>Privacy Policy</Link> for more information.
                </h1>
                <button onClick={handleClick} className='bg-white px-3 py-1.5 rounded mt-3 text-gray-900'>Accept</button>
            </div>
           
        </div>
    );
};

export default AcceptCookies;