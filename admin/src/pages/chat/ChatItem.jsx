import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const ChatItem = ({ chat }) => {
    const navigate = useNavigate()
    const { _id, name, lastMessage } = chat;
    const { pathname } = useLocation();
    const selected = pathname.includes(_id);
    console.log("chat", chat);
    return (
        <div onClick={() => navigate(`/chat/${_id}`)} className={`flex gap-2 py-2 px-3 cursor-pointer ${selected && "bg-[#8A52FD] text-white"}`}>
            <div className='w-12 '>
                <img className='rounded-full' src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="" />
            </div>
            <div>
                <h3 className='font-bold'>{chat.name ? chat.name : "Unknown"}</h3>
                <p>{lastMessage.text.slice(0, 16)}...</p>
            </div>
        </div>
    );
};

export default ChatItem;