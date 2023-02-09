import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:3000/"); //TODO: socket url

export default socket;
