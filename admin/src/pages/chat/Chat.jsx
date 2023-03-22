import React, { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import ChatList from "./ChatList";
import axios from "../../utils/axiosInstance"
import "./chat.css"
import { Outlet } from "react-router";

const Chat = () => {
  const [chatList, setChatList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`/chats?page=${page}`).then(({ data }) => {
      console.log(data);
      setChatList([...chatList, ...data]);
    })
  }, [page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  }

  return (
    <div className="flex ">
      <ChatList chatList={chatList} handleLoadMore={handleLoadMore} />
      <Outlet />
    </div>
  );
};

export default Chat;
