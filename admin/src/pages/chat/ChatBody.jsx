import React, { useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { FiPaperclip, FiSend } from "react-icons/fi";
import socket from "../../socket";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";
import MessageBody from "./MessageBody";

const ChatBody = ({ selectedChatId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [files, setFiles] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageLoading, setMessageLoading] = useState(true);

  const messagesEndRef = useRef(null);

  const conversationId = selectedChatId;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    socket.on("newMessage", (data) => {
      console.log("newMessage event fire", data);
      if (data.conversation_id === conversationId && data.sender !== "admin") {
        setMessages((prev) => [...prev, data]);
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    });

    socket.on("connection", (socket) => {
      console.log("connection socket", socket);
    });
  }, []);

  useEffect(() => {
    setMessageLoading(true);
    axios
      .get(`/chats/${conversationId}/messages/admin`)
      .then((response) => {
        console.log("messages", response.data);
        setMessages(response.data);
        postLogger({ level: "info", message: response });
      })
      .finally(() => {
        setMessageLoading(false);
      });
  }, [conversationId]);

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
        filesArray.forEach((file) => {
          formData.append("files[]", file);
        });
        const { data: resFiles } = await axios.post("/upload", formData);
        console.log("resFiles", resFiles[0].filename);
        attachment = resFiles[0].filename;
        setFiles(null);
        postLogger({ level: "info", message: resFiles[0].filename });
      }
      if (newMessage !== "" || attachment !== null) {
        const { data } = await axios.post(`/chats/${conversationId}/reply`, {
          text: newMessage,
          attachment: attachment,
        });
        console.log(data);
        setMessages([...messages, data]);
        setNewMessage("");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error.response", error);
      postLogger({ level: "error", message: error });
      if (error.response?.data?.errors?.msg) {
        setError(error.response.data.errors.msg);
      } else {
        setError(error.message);
      }
      setIsLoading(false);
    }
  };

  if (messageLoading) {
    return (
      <div className="flex-1 flex flex-col mt-10">
        <img
          className="w-60 self-end"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
        <img
          className="w-60 self-start"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
        <img
          className="w-60 self-end"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
        <img
          className="w-60 self-start"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
        <img
          className="w-60 self-end"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
        <img
          className="w-60 self-start"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
        <img
          className="w-60 self-end"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
        <img
          className="w-60 self-start"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
        <img
          className="w-60 self-end"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
        <img
          className="w-60 self-start"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
        <img
          className="w-60 self-end"
          src={
            "https://www.freecodecamp.org/news/content/images/2020/05/loading-animation.gif"
          }
          alt=""
        />
      </div>
    );
  }
  return (
    <div className="my-3 mr-1 flex-1 p-3 bg-white rounded-md flex flex-col justify-between ">
      <div className="flex flex-col h-[calc(100vh_-_194px)] overflow-y-auto chatBody">
        {messages?.map((message) => (
          <MessageBody key={message._id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border-b-2 border-blue-500 py-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight outline-0"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              disabled={isLoading}
              type="submit"
              className="flex-shrink-0 text-blue-500 hover:text-blue-700"
            >
              {isLoading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FiSend className="h-6 w-6" />
              )}
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
                {files[0].name}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBody;
