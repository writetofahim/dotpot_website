import React, { useEffect, useRef } from 'react';
import MessageBody from './MessageBody';
import { useState } from "react";
import { FiSend, FiPaperclip } from "react-icons/fi";
import { useParams } from 'react-router';
import axios from "../../utils/axiosInstance"
import { FaSpinner } from "react-icons/fa";
import io from "socket.io-client";

const socket = io.connect(import.meta.env.REACT_APP_SERVER_PATH);

const ChatBody = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [files, setFiles] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const conversationId = useParams().id;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView();
    }, [messages]);

    useEffect(() => {
        socket.on("newMessage", (data) => {
            console.log(data);
            console.log("data.conversation_id === conversationId", data.conversation_id === conversationId);
            if (data.conversation_id === conversationId) {
                setMessages(prev => [...prev, data]);
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }
        })
        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        axios.get(`/chats/${conversationId}/messages`).then((response) => {
            console.log("messages", response.data);
            setMessages(response.data);
        })
    }, [conversationId])

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newMessage, files);
        setError("");
        setIsLoading(true);
        let attachment = null;
        try {
            if (files) {
                // if files selected then upload file to server and get file name
                const filesArray = Array.from(files);
                const formData = new FormData();
                filesArray.forEach(file => {
                    formData.append('files[]', file);
                });
                const { data: resFiles } = await axios.post("/upload", formData)
                attachment = resFiles[0].filename;
                setFiles(null)
            }
            if (newMessage !== "" || attachment !== null) {
                const { data } = await axios.post(`/chats/${conversationId}/replay`, { text: newMessage, attachment: attachment })
                console.log(data)
                setMessages([...messages, data]);
                setNewMessage("");
                setIsLoading(false);
            }
            setIsSending(false);
        } catch (error) {
            console.log("error.response", error.response)
            if (error.response?.data?.errors?.msg) {
                setError(error.response.data.errors.msg)
            } else {
                setError(error.message)
            }
            setIsLoading(false)
        }
    };
    return (
        <div className='my-3 mr-1 flex-1 p-3 bg-white rounded-md flex flex-col justify-between '>
            <div className='flex flex-col h-[calc(100vh_-_194px)] overflow-y-auto chatBody'>
                {messages?.map((message) => (
                    <MessageBody key={message._id} message={message} />
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center border-b-2 border-[#8a52fd] py-2">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight outline-0"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button disabled={isLoading} type="submit" className="flex-shrink-0 text-[#8a52fd] hover:text-[#482c81]">
                            {isLoading ? <FaSpinner className="animate-spin" /> : <FiSend className="h-6 w-6" />}
                        </button>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="file-input" className="flex items-center">
                            <FiPaperclip className="mr-2 h-6 w-6 text-gray-600" />
                            <span className="text-gray-600">Attach a file</span>
                        </label>
                        <input
                            id="file-input"
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        {files && (
                            <div className="mt-2">
                                <span className="text-gray-600">Selected file:</span>{" "}
                                {files.name}
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatBody;