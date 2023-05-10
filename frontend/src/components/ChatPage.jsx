import React, { useEffect, useState } from "react";

import useStore from "../store";
import { socket } from "../socket";
import MessageView from "./MessageView";

export default function ChatPage({ messages }) {
  const [formData, setFormData] = useState({ massage: "" });
  const logout = useStore((state) => state.logout);
  const name = useStore((state) => state.name);
  const roomID = useStore((state) => state.roomID);

  useEffect(() => {
    socket.emit("join-room", { roomID });
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat-message-container" id="message_container">
          {messages.map((message, i) => {
            return <MessageView {...message} key={i} />;
          })}
        </div>

        <div className="chat-form-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (formData.massage !== "")
                socket.emit("message", {
                  name,
                  roomID,
                  ...formData,
                });

              setFormData({ message: "" });
            }}
          >
            <input
              className="u-full-width"
              type="text"
              placeholder="Hey, Bro ..."
              value={formData.message || ""}
              onChange={(e) => setFormData({ message: e.target.value })}
            />

            <button className="button button-primary" type="submit">
              Send
            </button>
            <button style={{ marginLeft: "8px" }} onClick={() => logout()}>
              Leave
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
