import { useEffect, useRef, useState } from "react";
import { FaComments } from "react-icons/fa";
import { AiOutlineCloseCircle, AiOutlineSend } from "react-icons/ai";
import axios from "axios"
import { io } from "socket.io-client";
import moment from "moment/moment";

const socket = io("http://localhost:8800")

// const data = [
//   { name: "DotpotiT", message: "Hi there!", timestamp: "11:30 AM" },
//   { name: "DotpotiT", message: "Hey John, how are you?", timestamp: "11:35 AM" },
//   { name: "DotpotiT", message: "I'm good, thanks! How about you?", timestamp: "11:37 AM" },
//   { name: "DotpotiT", message: "I'm doing well too. Thanks for asking!", timestamp: "11:40 AM" },
// ];

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    messagesEndRef.current?.scrollIntoView();
  }, [messages, isOpen]);

  useEffect(() => {
    socket.on("newMessage", data => {
      const conversationId = localStorage.getItem("conversation_id")
      if (conversationId === data.conversation_id && data.sender === "admin") {
        setMessages(prev => ([...prev, data]))
      }
    })
  }, [])

  const handleOpen = async () => {
    const conversationId = localStorage.getItem("conversation_id")
    if (conversationId && messages.length === 0) {
      console.log("1")
      const { data } = await axios.get(`http://localhost:8800/api/chats/${conversationId}/messages`)
      setMessages(data)
    } if (!conversationId) {
      console.log("2")
      const { data } = await axios.post("http://localhost:8800/api/chats")
      localStorage.setItem("conversation_id", data.conversation_id)
      setMessages(prev => [...prev, data])
    }
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = async () => {
    const conversationId = localStorage.getItem("conversation_id")
    if (newMessage !== "") {
      const { data } = await axios.post(`http://localhost:8800/api/chats/${conversationId}/messages`, { text: newMessage })
      setMessages([...messages, data])
      setNewMessage("");
    }
  };

  return (
    <>
      <button
        className="fixed z-1 bottom-4 right-4 bg-primary-500 text-white p-4 rounded-full border border-white hover:scale-110 transition-all"
        onClick={handleOpen}
      >
        <FaComments size={24} />
      </button>
      {isOpen && (
        <div className="fixed bottom-[10vh] right-2 bg-white border-t border-gray-300 w-80 max-h-100 rounded-xl overflow-hidden transition-all">
          <div className="flex justify-between p-4 border-b bg-primary-400 text-white">
            <h2 className="text-lg font-medium">DotpotiT</h2>
            <button className="text-white text-3xl" onClick={handleClose}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className="flex flex-col p-4 h-64 overflow-y-auto " >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg my-2 ${message.sender === "visitor" ? "bg-primary-200 text-white self-end" : "bg-gray-200"
                  }`}
              >
                <p className="font-medium">{message.sender === "visitor" ? "You" : 'DotpotiT'}</p>
                <p>{message.text}</p>
                <p className="text-xs text-gray-500">{moment(new Date(message.createdAt)).fromNow()}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 flex items-center justify-between gap-1">
            <textarea
              className="flex-[0.9] p-1 border border-gray-300 rounded-lg h-[50px]"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></textarea>
            <button
              className="flex-[0.1] bg-primary-500 text-white text-3xl p-2 rounded-lg h-[50px] flex items-center justify-center"
              onClick={handleSendMessage}
            >
              <AiOutlineSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPopup;
