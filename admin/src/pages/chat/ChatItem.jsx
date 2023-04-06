import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import moment from 'moment';
import { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri"
import { RxCross1 } from "react-icons/rx"
import { BsCheck2 } from "react-icons/bs"
import axios from "../../utils/axiosInstance"
import { FaSpinner } from "react-icons/fa"

const ChatItem = ({ chat, getChatList }) => {
    const navigate = useNavigate()
    const { _id, name, lastMessage, adminUnseenCount } = chat;
    const [unseen, setUnseen] = useState(0)
    const { pathname } = useLocation();
    const selected = pathname.includes(_id);
    const [isDelete, setIsDelete] = useState(false)
    const [isDeleting , setIsDeleting] = useState(false)

    useEffect(()=>{
        setUnseen(adminUnseenCount);
    }, [adminUnseenCount])

    const messageDate = new Date(lastMessage?.createdAt) || new Date();
    const now = new Date();
    const dateDiff = now.getDate() - messageDate.getDate();

    let dateStr = '';
    if (dateDiff === 0) {
        dateStr = 'Today';
    } else if (dateDiff === 1) {
        dateStr = 'Yesterday';
    } else if (dateDiff > 1 && dateDiff < 7) {
        dateStr = moment(messageDate).format('dddd');
    } else {
        dateStr = moment(messageDate).format('L');
    }

    const timeStr = moment(messageDate).format('LT');
    const dateTimeStr = `${dateStr} at ${timeStr}`;

    const handleDeleteConversation = async (id) => {
        setIsDeleting(true)
        await axios.delete(`/chats/${id}`)
            .finally(() => { setIsDeleting(false) })
        getChatList();
        navigate("/admin/chat");
    }   
    
 
    return (
        <div onClick={() => { 
            navigate(`/admin/chat/${_id}`);
            // lastMessage?.isAdminSeen = true;
            setUnseen(0);
            }} 
            className={`flex items-center gap-2 py-2 px-3 cursor-pointer ${selected && "bg-gray-500 text-white"} hover:bg-[#ae86ff] hover:text-white duration-300 group relative`}>
            <div className='w-12 '>
                <img className='rounded-full p-1 w-10 aspect-square object-contain border' src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="" />
            </div>
            <div className='w-full'>
                <h3 className='flex gap-1 justify-between'> 
                    <span className={`${lastMessage?.isAdminSeen ? "font-light" : "font-bold"}`}>{chat.name ? chat.name : "Unknown"}</span>
                    <span className='text-[11px]'>{dateTimeStr}</span></h3>
                <div className='w-full flex justify-between items-center'>
                    <span className={`${lastMessage?.isAdminSeen ? "font-light" : "font-bold"}`}>{lastMessage?.text?.slice(0, 16)}... </span>
                </div>
            </div>
            {selected && !isDelete && <div onClick={()=> setIsDelete(true)} className='absolute top-9 right-2 z-50 backdrop-blur-md h-5'>
                <span><RiDeleteBin6Line /></span>
            </div>}
            {selected && isDelete && !isDeleting && <div className='absolute top-9 right-2 z-50 backdrop-blur-md h-5 flex gap-2'>
                <span onClick={() => handleDeleteConversation(_id)} ><BsCheck2 className='text-xl' /></span>
                <span onClick={() => setIsDelete(false)}><RxCross1 /></span>
            </div>}
            {selected && isDeleting && <div className='absolute top-9 right-2 z-50 backdrop-blur-md h-5 flex gap-2'><FaSpinner className="animate-spin" /></div> }
            {unseen > 0 && <p className={`absolute top-7 right-2 rounded-full ${selected ? "bg-white text-black" : "bg-[#ae86ff]"}  group-hover:bg-white  group-hover:text-black px-1.5 text-xs `}>{unseen}</p>}
        </div>
    );
};

export default ChatItem;