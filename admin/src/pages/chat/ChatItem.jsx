import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router";
import axios from "../../utils/axiosInstance";

const ChatItem = ({ chat, getChatList, setSelectedChatId, selectedChatId }) => {
  const navigate = useNavigate();
  const { _id, name, lastMessage, adminUnseenCount } = chat;
  const [unseen, setUnseen] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setUnseen(adminUnseenCount);
  }, [adminUnseenCount]);

  const messageDate = new Date(lastMessage?.createdAt) || new Date();
  const now = new Date();
  const dateDiff = now.getDate() - messageDate.getDate();
  const selected = selectedChatId === _id || false;

  let dateStr = "";
  if (dateDiff === 0) {
    dateStr = "Today";
  } else if (dateDiff === 1) {
    dateStr = "Yesterday";
  } else if (dateDiff > 1 && dateDiff < 7) {
    dateStr = moment(messageDate).format("dddd");
  } else {
    dateStr = moment(messageDate).format("L");
  }

  const timeStr = moment(messageDate).format("LT");
  const dateTimeStr = `${dateStr} at ${timeStr}`;

  const handleDeleteConversation = async (id) => {
    setIsDeleting(true);
    await axios.delete(`/chats/${id}`).finally(() => {
      setIsDeleting(false);
    });
    getChatList();
    setSelectedChatId(null);
    navigate("/chat");
  };

  return (
    <div
      onClick={() => {
        setSelectedChatId(_id);
        // lastMessage?.isAdminSeen = true;
        setUnseen(0);
      }}
      className={`flex items-center gap-2 py-2 px-3 cursor-pointer ${
        selected ? "bg-blue-500 text-white" : "bg-white"
      } hover:bg-blue-500 hover:text-white duration-300 group relative my-1   `}
    >
      <div className="w-12 ">
        <img
          className="rounded-full p-1 w-10 aspect-square object-contain border"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
          alt="User Avatar"
        />
      </div>
      <div className="w-full">
        <h3 className="flex gap-1 justify-between">
          <span
            className={`font-medium group-hover:text-white ${
              selected ? "text-white" : "text-blue-600"
            }`}
          >
            {chat.name ? chat.name : "Unknown"}
          </span>
          <span className="text-[11px]">{dateTimeStr}</span>
        </h3>
        <div className="w-full flex justify-between items-center">
          <span
            className={`${
              lastMessage?.isAdminSeen ? "font-light" : "font-bold"
            }`}
          >
            {lastMessage?.text?.slice(0, 16)}...{" "}
          </span>
        </div>
      </div>
      {selected && !isDelete && (
        <div
          onClick={() => setIsDelete(true)}
          className="absolute top-9 right-2 z-50 backdrop-blur-md h-5"
        >
          <span>
            <RiDeleteBin6Line />
          </span>
        </div>
      )}
      {selected && isDelete && !isDeleting && (
        <div className="absolute top-9 right-2 z-50 backdrop-blur-md h-5 flex gap-2">
          <span onClick={() => handleDeleteConversation(_id)}>
            <BsCheck2 className="text-xl" />
          </span>
          <span onClick={() => setIsDelete(false)}>
            <RxCross1 />
          </span>
        </div>
      )}
      {selected && isDeleting && (
        <div className="absolute top-9 right-2 z-50 backdrop-blur-md h-5 flex gap-2">
          <FaSpinner className="animate-spin" />
        </div>
      )}
      {unseen > 0 && (
        <p
          className={`absolute top-7 right-2 rounded-full ${
            selected ? "bg-white text-black" : "bg-blue-600 text-white"
          }  group-hover:bg-white  group-hover:text-black px-1.5 text-xs `}
        >
          {!selected && unseen}
        </p>
      )}
    </div>
  );
};

export default ChatItem;
