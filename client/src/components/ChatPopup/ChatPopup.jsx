import { useEffect, useRef, useState } from "react";
import { FaComments } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
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
  const [files, setFiles] = useState(null);
  const messagesEndRef = useRef(null);
  const [error, setError] = useState("")

  useEffect(() => {
    // Scroll to the bottom when messages change
    messagesEndRef.current?.scrollIntoView();
  }, [messages, isOpen]);

  useEffect(() => {
    socket.on("newMessage", data => {
      console.log(data)
      const conversationId = localStorage.getItem("conversation_id")
      if (conversationId === data.conversation_id && data.sender === "admin") {
        setMessages(prev => ([...prev, data]))
      }
    })
  }, [])

  const handleOpen = async () => {
    const conversationId = localStorage.getItem("conversation_id")
    if (conversationId && messages.length === 0) {
      const { data } = await axios.get(`http://localhost:8800/api/chats/${conversationId}/messages`)
      setMessages(data)
    } if (!conversationId) {
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
    setError("")
    const conversationId = localStorage.getItem("conversation_id")
    let attachment = null;

    try {
      if (files) {
        const filesArray = Array.from(files);
        const formData = new FormData();
        filesArray.forEach(file => {
          formData.append('files[]', file);
        });
        const { data: resFiles } = await axios.post("http://localhost:8800/api/upload", formData)
        attachment = resFiles[0].filename;
        console.log(attachment)
      }
      if (newMessage !== "" || attachment !== null) {
        const { data } = await axios.post(`http://localhost:8800/api/chats/${conversationId}/messages`, { text: newMessage, attachment: attachment })
        console.log(data)
        setMessages([...messages, data])
        setNewMessage("");
      }
    } catch (error) {
      console.log("error.response", error.response)
      if (error.response.data.errors.msg) {
        setError(error.response.data.errors.msg)
      } else {
        setError(error.message)
      }

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
                {message.text && <p>{message.text}</p>}
                {(message.attachment && message.attachment?.includes(".pdf"))
                  ? <a className="flex items-center gap-2" href={`http://localhost:8800/uploads/conversation/${message.attachment}`} download>
                    <HiOutlineDownload />
                    {message.attachment?.slice(0, 20)}...</a>
                  : <img className="w-40" src={`http://localhost:8800/uploads/conversation/${message.attachment}`} alt="" />}
                <p className="text-xs text-gray-500">{moment(new Date(message.createdAt)).fromNow()}</p>
              </div>
            ))}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 flex items-center justify-between gap-1">
            <label htmlFor="attachment">
              <GrAttachment />
            </label>
            <input onChange={e => setFiles(e.target.files)} className="hidden" type="file" name="attachment" id="attachment" />
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
