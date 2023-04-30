import React, { useEffect, useState } from "react";
import socket from "../../socket";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";
import ChatBody from "./ChatBody";
import ChatList from "./ChatList";
import "./chat.css";

const Chat = () => {
  const [chatList, setChatList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalChats, setTotalChats] = useState(true);
  const [selectedChatId, setSelectedChatId] = useState(null);

  const getChatList = async () => {
    setIsLoading(true);
    axios
      .get(`/chats?page=${page}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken")
          )}`,
        },
      })
      .then(({ data }) => {
        postLogger({ level: "info", message: data });
        setChatList([...data.chats]);
        setTotalChats(data.totalChatsCount);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getChatList();
  }, [page]);

  useEffect(() => {
    socket.on("newMessage", (data) => {
      getChatList();
    });
  }, []);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="flex ">
      <ChatList
        chatList={chatList}
        handleLoadMore={handleLoadMore}
        isLoading={isLoading}
        totalChats={totalChats}
        getChatList={getChatList}
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
      />
      {selectedChatId ? (
        <ChatBody selectedChatId={selectedChatId} />
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="font-thin text-xl ">Select a conversation</h1>
          <img
            className=" mx-auto"
            src={
              "https://i.pinimg.com/originals/e3/1b/75/e31b752875679b64fce009922f9f0dda.gif"
            }
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Chat;
