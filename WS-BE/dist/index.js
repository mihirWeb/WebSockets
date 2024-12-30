"use strict";
// Basics of webSockets
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws"); // 1st step: Import the WebSocket class
// 2nd step: Create a WebSocket server
const wss = new ws_1.WebSocketServer({ port: 8080 }); // 8080 is the server port, ther server will remain same for all the clients, however the socket will be different for each client
// 3rd step: Handle incoming connections
wss.on("connection", function (socket) {
    console.log("user connected"); // socket established
    // setInterval(() => {
    //     socket.send("current price of solana is: " + Math.random()); // this is the msg sending by ws server to the client(browser) through the socket
    // }, 500); 
    // socket.send("Pong");
    socket.on("message", (e) => {
        const msg = e.toString();
        console.log(msg); // this is the msg sending by the client(browser) to the ws server through the socket
        if (msg === "ping") {
            socket.send("pong");
        }
    });
});
