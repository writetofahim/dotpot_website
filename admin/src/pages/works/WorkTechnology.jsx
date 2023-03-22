import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx"

const WorkTechnology = ({ technology, setTechnology }) => {
    const [text, setText] = useState("")
    const handleAdd = (tag) => {
        setTechnology(prev => [...prev, tag]);
        setText("");
    }
    const handleRemoveTag = (tag) => {
        setTechnology(technology.filter(t => t !== tag));
        setText("");
    }
    return (
        <div>
            <div className="m-5 flex gap-3">
                {technology &&
                    technology.map((item, index) => (
                        <p key={index} className="py-2 px-4 rounded-full border flex items-center gap-2">
                            <span className="text-sm">{item}</span>
                            <RxCross1 onClick={() => handleRemoveTag(item)} className="text-black cursor-pointer" />
                        </p>
                    ))}
            </div>
            <div className="w-full h-10 flex justify-between">
                <input
                    className="rounded w-11/12"
                    type="text"
                    placeholder="Enter Technology"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                    onClick={() => handleAdd(text)}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default WorkTechnology;
