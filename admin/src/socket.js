import { io } from "socket.io-client";
console.log("io path", import.meta.env.REACT_APP_SOCKET_PATH)
const socket = io.connect(import.meta.env.REACT_APP_SOCKET_PATH);
// const socket = io.connect("http://localhost:8800");
console.log("socket", socket)

export default socket;