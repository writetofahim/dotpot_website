import React from "react";
import { FaSpinner } from "react-icons/fa";
import ChatItem from "./ChatItem";

const ChatList = ({
  chatList,
  handleLoadMore,
  isLoading,
  totalChats,
  getChatList,
  setSelectedChatId,
  selectedChatId,
}) => {
  return (
    <div className="m-3 w-[310px] bg-[#f3f3f3] rounded-md py-3 relative">
      <h1 className="font-bold text-2xl pl-3 pb-2">Chats</h1>
      <div className="chatList h-[700px] overflow-y-scroll">
        {chatList.map((chat) => (
          <ChatItem
            key={chat._id}
            chat={chat}
            getChatList={getChatList}
            setSelectedChatId={setSelectedChatId}
            selectedChatId={selectedChatId}
          />
        ))}
        {chatList.length === 0 && !isLoading && (
          <p className="ml-3">No chats available!</p>
        )}
        {(totalChats > 10 || totalChats !== chatList.length) && (
          <div className="w-full py-3 flex justify-center ">
            <button
              disabled={isLoading}
              onClick={handleLoadMore}
              className="text-center px-3 py-1 bg-blue-600 text-white rounded-lg flex items-center gap-2 disabled:bg-blue-300"
            >
              Load More {isLoading && <FaSpinner className="animate-spin" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
