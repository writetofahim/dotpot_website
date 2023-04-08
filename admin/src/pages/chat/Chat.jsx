import React, { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import ChatList from "./ChatList";
import axios from "../../utils/axiosInstance"
import "./chat.css"
import { Outlet } from "react-router";
import socket from "../../socket";
import {useLocation} from "react-router-dom"
import postLogger from "../../utils/postLogger";

const Chat = () => {
  const [chatList, setChatList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalChats, setTotalChats] = useState(true);
  const location =useLocation()

  const getChatList = async()=>{
    setIsLoading(true)
    axios.get(`/chats?page=${page}`).then(({ data }) => {
      postLogger({level:"info", message:data})
      console.log(data);
      setChatList([...data.chats]);
      setTotalChats(data.totalChatsCount);
    }).finally(() => setIsLoading(false))
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
      <ChatList chatList={chatList} handleLoadMore={handleLoadMore} isLoading={isLoading} totalChats={totalChats} getChatList={getChatList}/>
      {location.pathname === "/admin/chat" && <div className="mt-5 text-xl">Select a conversation!</div>}
      <Outlet />
    </div>
  );
};

export default Chat;
