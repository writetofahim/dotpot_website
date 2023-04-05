import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import moment from 'moment';
import { useState } from 'react';

const ChatItem = ({ chat }) => {
    const navigate = useNavigate()
    const { _id, name, lastMessage, adminUnseenCount } = chat;
    const [unseen, setUnseen] = useState(adminUnseenCount)
    const { pathname } = useLocation();
    const selected = pathname.includes(_id);
 
    return (
        <div onClick={() => { navigate(`/admin/chat/${_id}`); setUnseen(0) }} className={`flex items-center gap-2 py-2 px-3 cursor-pointer ${selected && "bg-gray-500 text-white"} hover:bg-[#ae86ff] hover:text-white duration-300 group relative`}>
            <div className='w-12 '>
                <img className='rounded-full p-1 w-10 aspect-square object-contain border' src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="" />
            </div>
            <div className='w-full'>
                <h3 className={`${lastMessage.isAdminSeen ? "font-light" : "font-bold"}`}>{chat.name ? chat.name : "Unknown"}</h3>
                <div className='w-full flex justify-between items-center'>
                    <span>{lastMessage.text.slice(0, 16)}... </span>
                    <span className='text-xs'>{moment(new Date(lastMessage.createdAt)).format('LT')}</span>
                </div>
            </div>
            {unseen > 0 && <p className={`absolute top-2 right-2 rounded-full ${selected ? "bg-white text-black" : "bg-[#ae86ff]"}  group-hover:bg-white  group-hover:text-black px-1.5 text-xs `}>{unseen}</p>}
        </div>
    );
};

export default ChatItem;