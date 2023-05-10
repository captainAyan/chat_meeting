import React, { useEffect, useState } from "react";

import "./App.css";
import HomePage from "./components/HomePage";
import ChatPage from "./components/ChatPage";
import { socket } from "./socket";
import useStore from "./store";

export default function App() {
  const name = useStore((state) => state.name);

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessageEvent(value) {
      setMessages((messages) => [...messages, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessageEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessageEvent);
    };
  }, []);

  useEffect(() => {
    if (name) socket.connect();
    else {
      setMessages([]);
      socket.disconnect();
    }
  }, [name]);

  return (
    <div className="container">
      <section>
        {name ? <ChatPage messages={messages} /> : <HomePage />}
        <center>
          <span>
            Copyright © {new Date().getFullYear()} - All right reserved
          </span>
        </center>
      </section>
    </div>
  );
}
