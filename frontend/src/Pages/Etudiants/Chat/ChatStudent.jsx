import React, { useEffect, useState } from "react";
import { ChatMessages } from "../../../data/Chat.js";
import { IoSend } from "react-icons/io5";
import socket from "../../../tools/socket.js";
import { Header } from "../Accueil/Header/Header.jsx";
import './Chat.css'

const ChatStudent = () => {
    const [messages, setMessages] = useState([
        {
            id_prof:1,
            id_etudiant:3,
            send_type: 1,
            message: "Salut",
            date_sent: "2023-03-01 12:00:00",
        },
        {
            id_prof:1,
            id_etudiant:3,
            send_type: 2,
            message: "Coucou",
            date_sent: "2023-03-01 12:05:00",
        }
    ])
    const [chat,setChat] = useState("")

   /*  socket.on("discussion", (messages)=>{
        setMessages(messages)
    }) */

    return (
        <>
            <Header/>
            <div className="chat-body">
                <div className="menu-chat">
                    <div className="group-chat">
                        <div className="group-profile">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="image" className="menu-chat-picture"/>
                            <span className="group-name">Français niveau 1</span>
                        </div>
                    </div>
                </div>
                <div className="chat-card">
                    {/* <div className="chat-sender">
                        <div className="sender-image">
                            <img src={sender.picture} alt="image" />
                        </div>
                        <div className="sender-name">
                            <span>{sender.name}</span>
                        </div>
                    </div> */}
                    <div className="chat-content">
                        {
                            messages.map((msg, index)=>(
                                <div key={index} className={`chat-message ${msg.send_type === 1 ? 'sender-message' : 'receiver-message'}`}>
                                    {msg.message}
                                </div>
                            ))
                        }
                    </div>
                    <div className="chat-input">
                        <input 
                            type="text" 
                            placeholder="Ecrivez votre message" 
                            value={chat}
                            onChange={(e)=>setChat(e.target.value)}
                        />
                        <div 
                            className="send-message"
                            onClick={(e)=>{
                                e.preventDefault()
                                setMessages([...messages,{
                                    id_prof:1,
                                    id_etudiant:3,
                                    send_type: 1,
                                    message: chat,
                                    date_sent: "2023-03-01 12:00:00",
                                }])
                                setChat("")
                            }}
                        >
                            <IoSend
                                size={30}
                                color="blue"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ChatStudent;