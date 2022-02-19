import React from "react";
import { NavLink } from "react-router-dom";
import ChatListCSS from './css/chatList.module.css';

import ChatListItem from "./chastListItem";

const ChatList = () => (
    <div className="universal-form">
        <h1 className={ChatListCSS.page_main__heading}>Чаты</h1>
        <section className={ChatListCSS.chat_list}>
            <ul className={ChatListCSS.chat_list__list}>
                <li className={ChatListCSS.chat_list__item}>
                    <ChatListItem />
                </li>
                <li className={ChatListCSS.chat_list__item}>
                    <ChatListItem />
                </li>
            </ul>
        </section>
    </div>
);

export default ChatList;