import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineArrowDown } from "react-icons/ai"

const ProcessSm = () => {
    const [currentDiv, setCurrentDiv] = useState(0);
    const [showBorder, setShowBorder] = useState(false);
    const spinRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDiv((prevDiv) => (prevDiv + 1) % 8);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setShowBorder(true);
        const timeout = setTimeout(() => {
            setShowBorder(false);
        }, 10000);

        return () => {
            clearTimeout(timeout);
        };
    }, [currentDiv]);

    return (
        <div className='container mx-auto'>
            <div className="flex flex-row gap-16 pb-16">
                {/* Requirement Gathering */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center relative">
                    {currentDiv != 0 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 border-2 rounded-full"
                        ></div>
                    )}

                    {currentDiv === 0 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 border-b-4 rounded-full animate-spin"
                            ref={spinRef}
                        ></div>
                    )}
                    <img
                        src="https://i.ibb.co/XSRGRLd/requirements.gif"
                        alt="Requirements Gathering Image"
                        className="w-12 h-12"
                    />
                    <h2 className="text-center text-sm text-textColor-500">Requirements Gathering</h2>
                    {currentDiv === 0 && (
                        <div className="absolute -right-12 top-1/2 animate-bounce font-extrabold text-xl text-secondary-500">
                            <AiOutlineArrowRight />
                        </div>
                    )}
                </div>

                {/* UI/UX Design */}
                <div
                    className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center relative">
                    {currentDiv != 1 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-secondary-500 border-2 rounded-full"
                        ></div>
                    )}

                    {currentDiv === 1 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-secondary-500 border-b-4 rounded-full animate-spin"
                            ref={spinRef}
                        ></div>
                    )}
                    <img
                        src="https://i.ibb.co/NnmnPyB/uiux.gif"
                        alt="UI/UX Design Image"
                        className="w-12 h-12"
                    />
                    <h2 className="text-center text-sm text-textColor-500">UI/UX Design</h2>
                    {currentDiv === 1 && (
                        <div className="absolute -bottom-12 left-1/2 animate-bounce font-extrabold text-xl text-primary-500">
                            <AiOutlineArrowDown />
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-row gap-16 pb-16">
                {/*Development */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center  relative">
                    {currentDiv != 3 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-secondary-500 border-2 rounded-full"
                        ></div>
                    )}

                    {currentDiv === 3 && (
                        <div
                            className="absolute -top-4 -left-4 -right-4 -bottom-4 border-secondary-500 border-b-4 rounded-full animate-spin"
                            ref={spinRef}
                        ></div>
                    )}
                    <img
                        src="https://i.ibb.co/HKnL97G/responsive.gif"
                        alt="Web/Mobile App Development Image"
                        className="w-12 h-12"
                    />
                    <h2 className="text-center text-sm text-textColor-500">Development</h2>
                    {currentDiv === 3 && (
                        <div className="absolute -bottom-12 left-1/2 animate-bounce font-extrabold text-xl text-primary-500">
                            <AiOutlineArrowDown />
                        </div>
                    )}
                </div>

                {/* Prototype Build */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center relative">
                    {currentDiv != 2 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 border-2 rounded-full"
                        ></div>
                    )}

                    {currentDiv === 2 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 border-b-4 rounded-full animate-spin"
                            ref={spinRef}
                        ></div>
                    )}
                    <img
                        src="https://i.ibb.co/QQ2TRbM/prototype.gif"
                        alt="Prototype Build Image"
                        className="w-12 h-12"
                    />
                    <h2 className="text-center text-sm text-textColor-500">Prototype <br></br> Build</h2>
                    {currentDiv === 2 && (
                        <div className="absolute -left-12 top-1/2 animate-bounce font-extrabold text-xl text-secondary-500">
                            <AiOutlineArrowLeft />
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-row gap-16 pb-16">
                {/* Quality Assurance */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center relative">
                    {currentDiv != 4 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 border-2 rounded-full"
                        ></div>
                    )}

                    {currentDiv === 4 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 border-b-4 rounded-full animate-spin"
                            ref={spinRef}
                        ></div>
                    )}
                    <img
                        src="https://i.ibb.co/xhnt5Bq/quality.gif"
                        alt="Quality Assurance Image"
                        className="w-12 h-12"
                    />
                    <h2 className="text-center text-sm text-textColor-500">Quality <br></br> Assurance</h2>
                    {currentDiv === 4 && (
                        <div className="absolute -right-12 top-1/2 animate-bounce font-extrabold text-xl text-secondary-500">
                            <AiOutlineArrowRight />
                        </div>
                    )}
                </div>

                {/* Testing */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center  relative">
                    {currentDiv != 5 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-secondary-500 border-2 rounded-full"
                        ></div>
                    )}

                    {currentDiv === 5 && (
                        <div
                            className="absolute -top-4 -left-4 -right-4 -bottom-4 border-secondary-500 border-b-4 rounded-full animate-spin"
                            ref={spinRef}
                        ></div>
                    )}
                    <img
                        src="https://i.ibb.co/xs4yH3J/testing.gif"
                        alt="Testing Image"
                        className="w-12 h-12"
                    />
                    <h2 className="text-center text-sm text-textColor-500">Testing</h2>
                    {currentDiv === 1 && (
                        <div className="absolute -bottom-12 left-1/2 animate-bounce font-extrabold text-xl text-primary-500">
                            <AiOutlineArrowDown />
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-row gap-16 ">
                {/* Support & Maintenance */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center  relative">
                    {currentDiv != 7 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-secondary-500 border-2 rounded-full"
                        ></div>
                    )}

                    {currentDiv === 7 && (
                        <div
                            className="absolute -top-4 -left-4 -right-4 -bottom-4 border-secondary-500 border-b-4 rounded-full animate-spin"
                            ref={spinRef}
                        ></div>
                    )}
                    <img
                        src="https://i.ibb.co/LCjSQLR/support.gif"
                        alt="Support & Maintenance Image"
                        className="w-12 h-12"
                    />
                    <h2 className="text-center text-sm text-textColor-500">Support & Maintenance</h2>
                </div>

                {/* Deployment */}
                <div className="w-32 h-32 rounded-full bg-background-500 shadow-lg flex flex-col items-center justify-center relative">
                    {currentDiv != 6 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 border-2 rounded-full"
                        ></div>
                    )}

                    {currentDiv === 6 && (
                        <div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-primary-500 border-b-4 rounded-full animate-spin"
                            ref={spinRef}
                        ></div>
                    )}
                    <img
                        src="https://i.ibb.co/M90d1PF/deployment.gif"
                        alt="Deployment Image"
                        className="w-12 h-12"
                    />
                    <h2 className='text-center text-sm text-textColor-500'>Deployment</h2>
                    {currentDiv === 6 && (
                        <div className="absolute -left-12 top-1/2 animate-bounce font-extrabold text-xl text-secondary-500">
                            <AiOutlineArrowLeft />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProcessSm