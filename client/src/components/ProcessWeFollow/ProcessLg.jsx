import React, { useEffect, useRef, useState } from 'react';
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs"

const ProcessLg = () => {
    const [currentDiv, setCurrentDiv] = useState(0);
    const [showBorder, setShowBorder] = useState(false);
    const spinRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDiv((prevDiv) => (prevDiv + 1) % 8);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setShowBorder(true);
        const timeout = setTimeout(() => {
            setShowBorder(false);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [currentDiv]);


    return (
        <div className='container mx-auto px-4'>
            <div className='w-full flex flex-row'>
                {/* Requirement Gathering */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center relative">
                    <div className={`absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 rounded-full ${currentDiv != 0 ? "border-8" : "border-b-8 border-t-8 animate-spin"}`}></div>

                    <img
                        src="https://i.ibb.co/XSRGRLd/requirements.gif"
                        alt="Requirements Gathering Image"
                        className="w-12 h-12"
                    />

                    <h2 className={`text-center text-sm text-textColor-500 ${currentDiv != 0 ? "" : "animate-pulse"}`}>Requirements Gathering</h2>

                    {currentDiv === 0 && (
                        <div className="absolute -right-4 -bottom-1 animate-bounce font-extrabold text-xl text-secondary-500">
                            <BsArrowDownRight />
                        </div>
                    )}
                </div>

                {/* UI/UX Design */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center translate-y-full relative">
                    <div className={`absolute -top-2 -left-2 -right-2 -bottom-2 border-secondary-500 rounded-full ${currentDiv != 1 ? "border-8" : "border-b-8 border-t-8 animate-spin"}`}></div>

                    <img
                        src="https://i.ibb.co/NnmnPyB/uiux.gif"
                        alt="UI/UX Design Image"
                        className="w-12 h-12"
                    />

                    <h2 className={`text-center text-sm text-textColor-500 ${currentDiv != 1 ? "" : "animate-pulse"}`}>UI/UX Design</h2>

                    {currentDiv === 1 && (
                        <div className="absolute -right-4 -top-1 animate-bounce font-extrabold text-xl text-primary-500">
                            <BsArrowUpRight />
                        </div>
                    )}
                </div>

                {/* Prototype Build */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center relative">
                    <div className={`absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 rounded-full ${currentDiv != 2 ? "border-8" : "border-b-8 border-t-8 animate-spin"}`}></div>

                    <img
                        src="https://i.ibb.co/QQ2TRbM/prototype.gif"
                        alt="Prototype Build Image"
                        className="w-12 h-12"
                    />

                    <h2 className={`text-center text-sm text-textColor-500 ${currentDiv != 2 ? "" : "animate-pulse"}`}>Prototype <br></br> Build</h2>

                    {currentDiv === 2 && (
                        <div className="absolute -right-4 -bottom-1 animate-bounce font-extrabold text-xl text-secondary-500">
                            <BsArrowDownRight />
                        </div>
                    )}
                </div>

                {/*Development */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center  translate-y-full relative">
                    <div className={`absolute -top-2 -left-2 -right-2 -bottom-2 border-secondary-500 rounded-full ${currentDiv != 3 ? "border-8" : "border-b-8 border-t-8 animate-spin"}`}></div>

                    <img
                        src="https://i.ibb.co/HKnL97G/responsive.gif"
                        alt="Web/Mobile App Development Image"
                        className="w-12 h-12"
                    />

                    <h2 className={`text-center text-sm text-textColor-500 ${currentDiv != 3 ? "" : "animate-pulse"}`}>Development</h2>

                    {currentDiv === 3 && (
                        <div className="absolute -right-4 -top-1 animate-bounce font-extrabold text-xl text-primary-500">
                            <BsArrowUpRight />
                        </div>
                    )}
                </div>

                {/* Quality Assurance */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center relative">
                    <div className={`absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 rounded-full ${currentDiv != 4 ? "border-8" : "border-b-8 border-t-8 animate-spin"}`}></div>

                    <img
                        src="https://i.ibb.co/xhnt5Bq/quality.gif"
                        alt="Quality Assurance Image"
                        className="w-12 h-12"
                    />

                    <h2 className={`text-center text-sm text-textColor-500 ${currentDiv != 4 ? "" : "animate-pulse"}`}>Quality <br></br> Assurance</h2>

                    {currentDiv === 4 && (
                        <div className="absolute -right-4 -bottom-1 animate-bounce font-extrabold text-xl text-secondary-500">
                            <BsArrowDownRight />
                        </div>
                    )}
                </div>

                {/* Testing */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center  translate-y-full relative">
                    <div className={`absolute -top-2 -left-2 -right-2 -bottom-2 border-secondary-500 rounded-full ${currentDiv != 5 ? "border-8" : "border-b-8 border-t-8 animate-spin"}`}></div>

                    <img
                        src="https://i.ibb.co/xs4yH3J/testing.gif"
                        alt="Testing Image"
                        className="w-12 h-12"
                    />

                    <h2 className={`text-center text-sm text-textColor-500 ${currentDiv != 5 ? "" : "animate-pulse"}`}>Testing</h2>

                    {currentDiv === 5 && (
                        <div className="absolute -right-4 -top-1 animate-bounce font-extrabold text-xl text-primary-500">
                            <BsArrowUpRight />
                        </div>
                    )}
                </div>

                {/* Deployment */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center relative">
                    <div className={`absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 rounded-full ${currentDiv != 6 ? "border-8" : "border-b-8 border-t-8 animate-spin"}`}></div>

                    <img
                        src="https://i.ibb.co/M90d1PF/deployment.gif"
                        alt="Deployment Image"
                        className="w-12 h-12"
                    />

                    <h2 className={`text-center text-sm text-textColor-500 ${currentDiv != 6 ? "" : "animate-pulse"}`}>Deployment</h2>

                    {currentDiv === 6 && (
                        <div className="absolute -right-4 -bottom-1 animate-bounce font-extrabold text-xl text-secondary-500">
                            <BsArrowDownRight />
                        </div>
                    )}
                </div>

                {/* Support & Maintenance */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center  translate-y-full relative">
                    <div className={`absolute -top-2 -left-2 -right-2 -bottom-2 border-secondary-500 rounded-full ${currentDiv != 7 ? "border-8" : "border-b-8 border-t-8 animate-spin"}`}></div>

                    <img
                        src="https://i.ibb.co/LCjSQLR/support.gif"
                        alt="Support & Maintenance Image"
                        className="w-12 h-12"
                    />
                    <h2 className={`text-center text-sm text-textColor-500 ${currentDiv != 7 ? "" : "animate-pulse"}`}>Support & Maintenance</h2>
                </div>
            </div>
        </div>
    )
}

export default ProcessLg