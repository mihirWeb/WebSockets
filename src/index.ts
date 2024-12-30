// Basics of webSockets

import { WebSocket, WebSocketServer } from "ws"; // 1st step: Import the WebSocket class


// 2nd step: Create a WebSocket server
const wss = new WebSocketServer({ port: 8080 }); // 8080 is the server port, ther server will remain same for all the clients, however the socket will be different for each client


// 3rd step: Handle incoming connections
wss.on("connection", function(socket) { // socket, a connection object, will be different for each client
    console.log("user connected"); // socket established

    setInterval(() => {
        socket.send("current price of solana is: " + Math.random()); // this is the msg sending by ws server to the client(browser) through the socket
    }, 500); 

    socket.on("message", (e) =>  {
        console.log(e.toString()); // this is the msg sending by the client(browser) to the ws server through the socket
    });


})