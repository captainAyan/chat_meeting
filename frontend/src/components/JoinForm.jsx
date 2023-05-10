import React, { useState } from "react";

import useStore from "../store";

export default function JoinForm() {
  const [formData, setFormData] = useState({ name: "", roomId: "" });
  const login = useStore((state) => state.login);

  return (
    <div>
      <h3>Join Chat</h3>
      <p>
        <b>Private Group Chat</b> with a anyone without any sign up or vigilance
        🦇
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(formData.name, formData.roomId);
        }}
        onReset={(e) => setFormData({ name: "", roomId: "" })}
      >
        <label htmlFor="name">Your Name (or anything you want 😅😂)</label>
        <input
          className="u-full-width"
          type="text"
          placeholder="James Bond"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <label htmlFor="roomId">Room ID (don't change if already filled)</label>
        <input
          className="u-full-width"
          type="text"
          placeholder="MI6 HQ xyz123"
          name="roomId"
          value={formData.roomId}
          onChange={(e) => setFormData({ ...formData, roomId: e.target.value })}
        />

        <p className="justified">
          ⚠️<strong>TIPS:</strong> Your conversations are{" "}
          <strong>NOT being stored</strong> ❌🕵️‍♂️❌. Chats are only delivered
          through the server <strong>NOT stored</strong>. Add{" "}
          <strong>Random Numbers</strong> to the room id, so that people can't
          brute force into your room.
        </p>

        <button className="button-primary" type="submit">
          Join
        </button>

        <button
          className="button button-secondary"
          style={{ marginLeft: "8px" }}
          type="reset"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
