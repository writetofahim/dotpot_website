import React, { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import ChatList from "./ChatList";
import axios from "../../utils/axiosInstance"
import "./chat.css"
import { Outlet } from "react-router";
import socket from "../../socket";

const Chat = () => {
  const [chatList, setChatList] = useState([]);
  const [page, setPage] = useState(1);

  const getChatList = async()=>{
    axios.get(`/chats?page=${page}`).then(({ data }) => {
      console.log(data);
      setChatList([...data.chats]);
    })
  }

  
  useEffect(() => {
    getChatList();
  }, [page]);

  useEffect(() => {
    socket.on("newMessage", data => {
      getChatList();
    })
  }, []);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  }

  return (
    <div className="flex ">
      <ChatList chatList={chatList} handleLoadMore={handleLoadMore}/>
      <Outlet />
    </div>
  );
};

export default Chat;
