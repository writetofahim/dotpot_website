import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import userAvatar from "../../images/user-avatar-32.png";

const imageTypes = ["png", "jpge", "jpg", "jpeg", "gif"];

const MessageBody = ({ message }) => {
  const isVisitor = message.sender === "visitor" ? true : false;
  const avatarURL = isVisitor
    ? "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
    : userAvatar;
  const textColor = isVisitor ? "text-gray-700" : "text-gray-100";
  const bgColor = isVisitor ? "bg-gray-100" : "bg-blue-500";
  const alignment = isVisitor ? "justify-start" : "justify-end";

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`flex my-2 ${alignment} `}>
      <div className="flex flex-col items-center">
        <img src={avatarURL} alt="avatar" className="w-8 h-8 rounded-full" />
        <span className="text-xs mt-1">{isVisitor ? "Visitor" : "Admin"}</span>
      </div>
      <div
        className={`max-w-md px-4 py-2 rounded-lg ${bgColor} ml-2 mr-2 messageShadow`}
      >
        {message?.text && (
          <p className={`break-words ${textColor}`}>{message?.text}</p>
        )}
        {message?.attachment && (
          <div>
            {imageTypes.includes(message.attachment.split(".").pop()) ? (
              <img
                src={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                  message?.attachment
                }`}
                alt="attachment"
                className="w-48 mt-2 cursor-pointer"
                onClick={openModal}
              />
            ) : (
              <a
                href={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                  message?.attachment
                }`}
                download
                target="_blank"
                className={`break-words ${textColor} hover:text-blue-500 flex gap-2 items-center duration-300`}
              >
                <BsDownload className="text-xl mr-2" />
                {message?.attachment.split("/").pop()}
              </a>
            )}
            {showModal && (
              <div className="fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
                <div className="bg-white rounded-lg p-8 max-w-md">
                  <div className="flex justify-end">
                    <button className="ml-auto mt-0" onClick={closeModal}>
                      <AiOutlineClose />
                    </button>
                  </div>
                  <img
                    src={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                      message?.attachment
                    }`}
                    alt="attachment"
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        <p className={`text-xs ${textColor} mt-1`}>
          {new Date(message?.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default MessageBody;
