import { useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [socket, setSocket] = useState(); // state to store the socket object

  const inputRef = useRef(); // ref to store and interact with the input values

  function sendMessage() {
    socket.send(inputRef.current.value); // send the msg to the ws server through the socket
    inputRef.current.value = ''; // clear the input field after sending the msg
  }
    

  
  // Making a connection to the web socket server
  useEffect(() => {

    const ws = new WebSocket('ws://localhost:8080'); // create web socket object, pass the server url, this will make a connection to the ws server

    setSocket(ws); // store the socket object in the state

    ws.onmessage = (e) => { // this will listen to the incoming msg from the ws server
      alert(e.data); // logic to handle that msg
    }

    // ws provides a lot of other event handlers like onopen, onclose, onerror, etc. which can be used to handle different events


  }, []) // we are using useEffect with empty dependency array so that it will run only once when the component is mounted, i.e. the ws connection will be established only once for one client

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='write message....' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
