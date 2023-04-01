import React from "react";
import userAvatar from '../../images/user-avatar-32.png';

const MessageBody = ({ message }) => {
    const isVisitor = message.sender === "visitor" ? true : false;
    const avatarURL = isVisitor ? "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" : userAvatar;
    const textColor = isVisitor ? "text-gray-700" : "text-gray-900";
    const bgColor = isVisitor ? "bg-gray-100" : "bg-[#d6c2ff]";
    const alignment = isVisitor ? "justify-start" : "justify-end";

    return (
        <div className={`flex my-2 ${alignment}`}>
            <div className="flex flex-col items-center">
                <img src={avatarURL} alt="avatar" className="w-8 h-8 rounded-full" />
                <span className="text-xs mt-1">{isVisitor ? "Visitor" : "Admin"}</span>
            </div>
            <div className={`max-w-md px-4 py-2 rounded-lg ${bgColor} ml-2 mr-2`}>
                {message?.text && (
                    <p className={`break-words ${textColor}`}>
                        {message?.text}
                    </p>
                )}
                {message?.attachment && (
                    <img
                        src={`${import.meta.env.REACT_APP_SERVER_PATH}/${message?.attachment}`}
                        alt="attachment"
                        className="w-48 mt-2"   
                    />
                )}
                <p className="text-xs text-gray-500 mt-1">{new Date(message?.createdAt).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default MessageBody;
