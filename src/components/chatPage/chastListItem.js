import React from "react";
import { NavLink } from "react-router-dom";
import ChatListItemCSS from './css/chastListItem.module.css';

import avatar from "../../img/routeHistory/Group.png";

const ChatListItem = props => {
    return (
        <li className={ChatListItemCSS.chat_item}>
            <NavLink to="/messages-item" className={ChatListItemCSS.chat_item__wrapper}>
                <div className={ChatListItemCSS.chat_item__avatar + " " + ChatListItemCSS.avatar}>
                    <img className={ChatListItemCSS.avatar__img} src={props.photo} alt="Фотография водителя" />
                    <span className={ChatListItemCSS.avatar__name}>{props.name}</span>
                </div>
                <div className={ChatListItemCSS.chat_item__message + " " + ChatListItemCSS.last_message}>
                    <span className={ChatListItemCSS.last_message__text}>{props.lastMessage}</span>
                </div>
            </NavLink>
        </li>
    )
};

export default ChatListItem;