import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import moment from 'moment';

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
            <div className='w-full'>
                <h3 className='font-bold'>{chat.name ? chat.name : "Unknown"}</h3>
                <div className='w-full flex justify-between items-center'>
                    <span>{lastMessage.text.slice(0, 16)}... </span>
                    <span className='text-xs'>{moment(new Date(lastMessage.createdAt)).fromNow()}</span>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;