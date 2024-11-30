import React, { useState } from "react";

const MessageInput = ({ sendMessage }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", marginTop: "10px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tapez votre message..."
        style={{ flex: 1, padding: "10px" }}
      />
      <button type="submit" style={{ padding: "10px 20px" }}>
        Envoyer
      </button>
    </form>
  );
};

export default MessageInput;
