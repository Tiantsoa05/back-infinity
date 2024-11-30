import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Message from "./Message";
import MessageInput from "./MessageInput";

// URL du backend

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Écouter les messages entrants
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Nettoyer à la fermeture du composant
    return () => socket.off("message");
  }, []);

  const sendMessage = (text) => {
    if (text.trim()) {
      socket.emit("message", text); // Envoyer le message au backend
      setMessages((prev) => [...prev, { user: "Moi", text }]);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Discussion</h1>
      <div style={{ height: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
        {messages.map((msg, index) => (
          <Message key={index} user={msg.user} text={msg.text} />
        ))}
      </div>
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
