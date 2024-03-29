import { io } from "socket.io-client";

console.log("io path", import.meta.env.REACT_APP_SOCKET_PATH);
const socket = io.connect(import.meta.env.REACT_APP_SOCKET_PATH);

socket.on("connect_error", (error) => {
  // Prevent the error from being logged to the console
  error.preventDefault();

  // Handle the error as needed
  console.error("WebSocket connection error:", error);
});

// listen for connection events
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

// listen for reconnect events
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

console.log("socket", socket);

export default socket;
