import moment from "moment/moment";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineSend } from "react-icons/ai";
import { FaComments, FaSpinner } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { HiOutlineDownload } from "react-icons/hi";
import { io } from "socket.io-client";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";
import ImageViewModal from "./ImageViewModal";

const socket = io(import.meta.env.REACT_APP_SOCKET_PATH);
// const socket = io("http://localhost:8800")
// console.log("socket", socket);

// const data = [
//   { name: "DotpotiT", message: "Hi there!", timestamp: "11:30 AM" },
//   { name: "DotpotiT", message: "Hey John, how are you?", timestamp: "11:35 AM" },
//   { name: "DotpotiT", message: "I'm good, thanks! How about you?", timestamp: "11:37 AM" },
//   { name: "DotpotiT", message: "I'm doing well too. Thanks for asking!", timestamp: "11:40 AM" },
// ];

const ChatPopup = () => {
  const { isChatPopupOpen, setIsChatPopupOpen, randomValue } =
    React.useContext(AuthContext);

  // const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [files, setFiles] = useState(null);
  const messagesEndRef = useRef(null);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages, isChatPopupOpen]);

  useEffect(() => {
    const conversationId = localStorage.getItem("conversation_id");
    const createNewChat = async () => {
      if (!conversationId) {
        const { data } = await axios.post("/chats");
        localStorage.setItem("conversation_id", data.conversation_id);
        setMessages((prev) => [...prev, data]);
      }
    };
    createNewChat();
  }, []);

  useEffect(() => {
    // listen event for new message
    socket.on("newMessage", (data) => {
      const conversationId = localStorage.getItem("conversation_id");
      if (conversationId === data.conversation_id && data.sender === "admin") {
        setMessages((prev) => [...prev, data]);
      }
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  useEffect(() => {
    if (files !== null) {
      handleSendMessage();
    }
  }, [files]);

  useEffect(() => {
    const conversationId = localStorage.getItem("conversation_id");
    const loadMessages = async () => {
      try {
        const response = await axios.get(`/chats/${conversationId}/messages`);
        setMessages(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadMessages();
    // console.log("Load messages");
  }, [setIsChatPopupOpen, randomValue]);

  const handleOpen = async () => {
    const conversationId = localStorage.getItem("conversation_id");
    if (conversationId) {
      try {
        const response = await axios.get(`/chats/${conversationId}/messages`);
        setMessages(response?.data);
      } catch (error) {
        console.log(error);
        if (error.response.status !== 200) {
          const { data } = await axios.post("/chats");
          localStorage.setItem("conversation_id", data.conversation_id);
          setMessages((prev) => [...prev, data]);
          return;
        }
      }
    }
    if (!conversationId) {
      const { data } = await axios.post("/chats");
      localStorage.setItem("conversation_id", data.conversation_id);
      setMessages((prev) => [...prev, data]);
    }
    setIsChatPopupOpen(!isChatPopupOpen);
  };

  const handleClose = () => {
    setIsChatPopupOpen(false);
  };

  const handleSendMessage = async () => {
    setError("");
    setIsSending(true);
    const conversationId = localStorage.getItem("conversation_id");
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
        attachment = resFiles[0].filename;
        postLogger({ level: "info", message: resFiles });
        setFiles(null);
      }
      if (newMessage !== "" || attachment !== null) {
        const { data } = await axios.post(`/chats/${conversationId}/messages`, {
          text: newMessage,
          attachment: attachment,
        });
        console.log(data);
        postLogger({ level: "info", message: data });
        setMessages([...messages, data]);
        setNewMessage("");
      }
      setIsSending(false);
    } catch (error) {
      console.log("error.response", error.response);
      postLogger({ level: "error", message: error });
      if (error.response?.data?.errors?.msg) {
        setError(error.response.data.errors.msg);
      } else {
        setError(error.message);
      }
      setIsSending(false);
    }
  };

  const handleModalOpen = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  return (
    <>
      {selectedImage && (
        <ImageViewModal
          selectedImage={selectedImage}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}

      <button
        className="group z-[750] fixed z-1 bottom-4 right-4 bg-primary-500 text-buttonText-500 p-4 rounded-full border border-border hover:scale-110 transition-all"
        onClick={handleOpen}
      >
        <FaComments size={24} />
        <span className="absolute top-2 right-16 group-hover:block w-[max-content] px-3 py-2 bg-primary-500 text-buttonText-500 hidden rounded border border-border">
          Chat with us
        </span>
      </button>

      {isChatPopupOpen && (
        <div className="z-[800] fixed bottom-[10vh] right-2 bg-background-500 border-t border-border w-80 max-h-100 rounded-xl overflow-hidden shadow-xl transition-all">
          <div className="flex justify-between px-4 py-1.5 border border-border bg-primary-400 text-textColor-500">
            <h2 className="text-lg font-medium text-buttonText-500">Dotpot iT</h2>
            <button className="text-buttonText-500 text-3xl" onClick={handleClose}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className="flex flex-col p-4 h-80 overflow-y-auto changeThumb">
            <div className="">
              <img
                className="w-24 mx-auto"
                src={
                  "https://myadhp.aadharhousing.com/csr_portal/public/images/crm-main.gif"
                }
                alt=""
              />
              <p className="text-sm text-center mb-2 text-textColor-500">
                Dotpot iT Customer Support
              </p>
              <div className="border-t border-border my-2 text-textColor-500"></div>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2 text-textColor-500 ${
                  message.sender === "admin" ? "" : "justify-end"
                } items-start`}
              >
                <div className="mt-3 w-max ">
                  <img
                    className="w-4"
                    src={
                      message.sender === "admin"
                        ? "https://cdn-icons-png.flaticon.com/512/2706/2706962.png"
                        : "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    }
                    alt=""
                  />
                </div>
                <div className={`w-[75%] flex flex-col my-2`}>
                  <div className="flex gap-2 text-xs items-center mb-1">
                    <p className="font-medium text-textColor-500">
                      {message.sender === "admin" ? "Dotpot iT" : "You"}
                    </p>
                    <p className=" text-gray-500 ">
                      {moment(new Date(message.createdAt)).format("LT")} (
                      {moment(new Date(message.createdAt)).format("L")})
                    </p>
                  </div>
                  <div
                    className={`p-2 rounded-md ${
                      message.sender === "admin"
                        ? "bg-gray-200 w-full text-textColor-500"
                        : "bg-primary-200 text-buttonText-500 min-w-[100px]"
                    }`}
                  >
                    {message.text && <p className="text-sm">{message.text}</p>}
                    {message.attachment &&
                    message.attachment?.includes(".pdf") ? (
                      <a
                        className="flex items-center gap-2"
                        href={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                          message.attachment
                        }`}
                        download
                      >
                        <HiOutlineDownload />
                        {message.attachment?.slice(0, 20)}...
                      </a>
                    ) : (
                      message.attachment && (
                        <img
                          onClick={() =>
                            handleModalOpen(
                              `${import.meta.env.REACT_APP_SERVER_PATH}/${
                                message.attachment
                              }`
                            )
                          }
                          className="w-40 cursor-pointer"
                          src={`${import.meta.env.REACT_APP_SERVER_PATH}/${
                            message.attachment
                          }`}
                          alt=""
                        />
                      )
                    )}
                    {/* <p className="text-xs text-gray-500 mt-1">{moment(new Date(message.createdAt)).fromNow()}</p> */}
                  </div>
                </div>
              </div>
            ))}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-4 flex items-center justify-between gap-1 w-full"
          >
            <label htmlFor="attachment">
              <GrAttachment />
            </label>
            <input
              disabled={isSending}
              onChange={(e) => {
                setFiles(e.target.files);
              }}
              className="hidden"
              type="file"
              name="attachment"
              id="attachment"
            />
            <input
              className="flex-[0.9] p-1 border border-gray-300 rounded-lg h-[38px] outline-none w-full"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></input>
            <button
              disabled={isSending}
              className="flex-[0.1] bg-primary-500 text-buttonText-500 text-2xl p-2 rounded-lg h-[38px] flex items-center justify-center"
              onClick={handleSendMessage}
            >
              {isSending ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <AiOutlineSend />
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatPopup;
