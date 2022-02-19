import React from "react";
import { NavLink } from "react-router-dom";
import ChatListItemCSS from './css/chastListItem.module.css';

import avatar from "../img/routeHistory/Group.png";

const ChatListItem = () => (
    <div className={ChatListItemCSS.chat_item}>
        <div className={ChatListItemCSS.chat_item__avatar + " " + ChatListItemCSS.avatar}>
            <img className={ChatListItemCSS.avatar__img} src={avatar} alt="Фотография водителя" />
            <span className={ChatListItemCSS.avatar__name}>Игорь</span>
        </div>
        <div className={ChatListItemCSS.chat_item__message + " " + ChatListItemCSS.last_message}>
            <img className={ChatListItemCSS.last_message__img} src={avatar} alt="Фотография водителя" />
            <span className={ChatListItemCSS.last_message__text}>Огромное спасибо! Подтверждаю</span>
        </div>
        <span className={ChatListItemCSS.chat_item__time}>Вчера. 17:50</span>
    </div>
);

export default ChatListItem;