import io from "socket.io-client";

const socket = io("http://localhost:8000");
socket.on("message", (message) => {
  console.log(message);
});
socket.on("connect", () => {
  console.log("Connected to the backend");
});

export default socket