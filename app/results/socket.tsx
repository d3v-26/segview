// socket.js
import { io } from "socket.io-client";

const server = process.env.server || "http://localhost:5500";

const SOCKET_URL = server;

const socket = io(SOCKET_URL, {
  autoConnect: true,
});

export default socket;