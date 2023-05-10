import React from "react";

export default function MessageView({ name, message, timestamp }) {
  const colors = [
    "#32C4F0",
    "#FCDE28",
    "#2076E8",
    "#6A23D9",
    "#FA2622",
    "#23D926",
    "#31FFA5",
    "#96E820",
    "#9308FF",
    "#FFC724",
  ];

  const font_color = {
    backgroundColor:
      colors[(name.toLowerCase()[0].charCodeAt() - 96) % colors.length],
  };

  return (
    <div className="message">
      <div className="avatar">
        <div className="circle img" style={font_color}>
          <span className="initials">{name[0].toUpperCase()}</span>
        </div>
        <div className="data">
          <span className="username">{name}</span>

          <span className="time">
            &nbsp; - {new Date(timestamp).toGMTString()}
          </span>
        </div>
        <div className="body">
          <br />
          {message}
        </div>
      </div>
    </div>
  );
}
