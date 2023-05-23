import { io } from "socket.io-client";

const socket = io.connect(import.meta.env.REACT_APP_SOCKET_PATH);

socket.on("connect", () => {
  console.log("%cSocket.io connected!", "font-size: 20px; color: green");
});

socket.on("disconnect", (reason) => {
  console.log(
    `%cSocket.io disconnected!, ${reason}`,
    "font-size: 20px; color: red"
  );
  socket.connect();
});

socket.on("reconnect", (attemptNumber) => {
  console.log(
    "%cSocket reconnected after %d attempts",
    "font-size: 20px; color: red",
    attemptNumber
  );
});

socket.on("reconnect_attempt", (attemptNumber) => {
  console.log("Socket reconnect attempt %d", attemptNumber);
});

socket.on("error", (error) => {
  console.error("Socket.io error:", error);
});

console.log("socket", socket);

export default socket;
