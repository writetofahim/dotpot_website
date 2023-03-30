import React, { useState } from 'react';
import ChatItem from './ChatItem';

const ChatList = ({ chatList, handleLoadMore }) => {

    return (
        <div className='m-3 w-[300px] bg-[#f3f3f3] rounded-md py-3 relative'>
            <h1 className="font-bold text-2xl pl-3 pb-2">Chats</h1>
            <div className='chatList h-[700px] overflow-y-scroll'>
                {chatList.sort((a,b)=> new Date(b.lastMessage.createdAt).getTime() - new Date(a.lastMessage.createdAt).getTime()).map(chat => <ChatItem key={chat._id} chat={chat} />)}
            </div>
            <div className='mb-10'></div>
            <div className='w-full backdrop-blur-md absolute bottom-0 left-0 py-3 flex justify-center '>
                <button onClick={handleLoadMore} className="text-center px-3 py-1 bg-blue-600 text-white rounded-lg">Load More</button>
            </div>

        </div>
    );
};

export default ChatList;