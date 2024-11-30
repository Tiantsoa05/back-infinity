import React, { useEffect, useRef, useState } from "react";
import "../Accueil.css"
import { IoNotifications } from "react-icons/io5";
import Logo from "../../../../assets/logo.png"
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Notifications from "./Notifications/Notifications.jsx";
import { notifications } from "../../../../data/Notifications.js";
import { BiLogoMessenger } from "react-icons/bi";
import { TfiAgenda } from "react-icons/tfi";

export const Header = () => {
    const [search, setSearch] = useState("")
    const [showNotification,setNotification] = useState(false)
    const notificationRef = useRef(null)

    const handleIconClick = () => {
      if(showNotification){
        setNotification(false);
      }else{
        setNotification(true);
      }
    }

    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotification(false);
      }
    }

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    },[])

  return (
    <div className="header align-items-center w-100 h-100 card-group"> 
      <div className="icone">
        <Link to={"/home"}>
          <img src={Logo} alt="img" width={100} className='mt-4'/>
        </Link>
      </div>
      <div className="barre">
        <input 
            type="text" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Faites vos recherches"
            className="form-control formulaire" 
        />
      </div>
      <div className="profil card-group">
      <div className="messages notif">
        <Link to={'/messenger/1'}>
          <div 
            className="icon-messages"
          >
            <BiLogoMessenger
                size={34}  
                className="icon"
                color="#000"
            />
          </div>
        </Link>
          <span>7</span>
        </div>
        <div className="notif" onClick={handleIconClick}>
          <div className="icon-notif">
            <IoNotifications 
                size={34}  
                className="icon"
                color="#000"
            />
          </div>
          {
            showNotification && 
            <div ref={notificationRef}>
              <Notifications/>
            </div>
          }
          <span>{notifications.length}</span>
        </div>
        <div className="profile-header">
            <Link to={'/dashboard'}>
                <FaUser 
                    size={30} 
                    className="icon"
                    color="#000"
                />
            </Link>
        </div>
        <div className="agenda notif">
            <Link to={'/prof/calendar'}>
                <TfiAgenda
                  color="#000"
                  size={30}
                  className="icon"
                />
            </Link>
            <span>4</span>
        </div>
        <Link to={"/"}>
          <div className="btn btn-primary btn-deconnect">Deconnexion</div>
        </Link>
      </div>
    </div>
  );
};