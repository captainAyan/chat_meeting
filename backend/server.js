const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  allowEIO3: true,
  cors: {
    credentials: true,
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  },
});

const PORT = 3000 || process.env.PORT;

io.on("connection", (socket) => {
  socket.on("message", ({ roomID, message, name }) => {
    if (message !== "")
      io.sockets
        .to(roomID)
        .emit("message", { name, message, roomID, timestamp: Date.now() });
  });

  socket.on("join-room", ({ roomID }) => {
    if (roomID !== "") socket.join(roomID);
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
