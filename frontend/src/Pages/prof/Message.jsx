import React from "react";

const Message = ({ user, text }) => (
  <div style={{ margin: "10px 0" }}>
    <strong>{user}: </strong>
    <span>{text}</span>
  </div>
);

export default Message;
