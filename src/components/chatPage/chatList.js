import React, { useEffect, useState } from "react";
import axios from "axios";
// import { onValue, ref } from "firebase/database";
import ChatListCSS from "./css/chatList.module.css";

// import { db } from "../firebase/firebase";

// import ChatListItem from "./chastListItem";

import ValidError from "../validError/validError";

import chatEmpty from "../../img/chatItem/1156361.png"

// const headers = {
//     "Content-Type": "application/json; charset=utf-8",
// };

const ChatList = () => {

    // const [allChats, setAllChats] = useState([]);
    // const [lastMessage, setLastMessage] = useState("");
    // const [allUsers, setAllUsers] = useState([]);
    // const [usersData, setUsersData] = useState([]);

    // const [chatsDirty, setChatsDirty] = useState(false);
    // const [chatsError, setChatsError] = useState("");

    // useEffect(() => {
    //     getChatsdata();
    // }, []);

    // useEffect(() => {
    //     getThisUserData();
    // }, [allChats && allUsers]);

    // function getChatsdata() {
    //     const FIREBASE_CHATS_REF = ref(db, "chat");
    //     const FIREBASE_USERS_REF = ref(db, "users");

    //     const allChats = [];
    //     const allUsers = [];
    //     const lastMessageData = [];
    //     let lastMessageText = "";

    //     onValue(FIREBASE_CHATS_REF, (snapshot) => {
    //         if (snapshot.exists()) {
    //             snapshot.forEach(function (childSnapshot) {
    //                 var childData = childSnapshot.val();
    //                 if (childData.messages !== null) {
    //                     lastMessageData.push(childData.messages[Object.keys(childData.messages)[Object.keys(childData.messages).length - 1]]);
    //                 }
    //                 allChats.push(childData);
    //             });

    //             lastMessageText = lastMessageData[0].msg; 

    //             setAllChats(allChats);
    //             setLastMessage(lastMessageText);
    //         }
    //     });

    //     onValue(FIREBASE_USERS_REF, (snapshot) => {
    //         if (snapshot.exists()) {
    //             snapshot.forEach(function (childSnapshot) {
    //                 var childData = childSnapshot.val();
    //                 allUsers.push(childData);
    //             });
    //             setAllUsers(allUsers);
    //         }
    //     });

    //     console.log(allChats);
    //     console.log(lastMessage);
    //     console.log(allUsers); 
    // };

    // function getThisUserData() {
    //     const usersData = [];
    //     const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
    //     const authUserPhone = LoginPassword.phone;

    //     try {
    //         for (var i = 0; i <= allUsers.length - 1; i++) {
    //             if (allUsers[i].phone === allChats[0].user_1 && authUserPhone === allChats[0].user_2) {
    //                 usersData.push(allUsers[i]);
    //             }
    //         }
    //     } catch (err) {
    //         setChatsDirty(true);
    //         setTimeout(() => setChatsDirty(false), 3000);
    //         setChatsError("Чаты отсутствуют");
    //     }

    //     setUsersData(usersData);
    //     console.log(usersData);
    // };

    // const chatStandart = usersData.map((item, pos) => {
    //     return (
    //         <ChatListItem
    //             key={pos}
    //             name={item.name}
    //             photo={item.profile_pic}
    //             lastMessage={lastMessage}
    //         />
    //     )
    // });

    return (
        <div className="universal-form">
            {/* {(chatsDirty && chatsError) && <ValidError error={chatsError}></ValidError>} */}
            <h1 className={ChatListCSS.page_main__heading}>Чаты</h1>
            <section className={ChatListCSS.chat_list}>
                {/* <ul className={ChatListCSS.chat_list__list}>
                    {chatStandart}
                </ul> */}
                <div className={ChatListCSS.chats_empty__container}>
                    <div className={ChatListCSS.chats_empty}>
                        <img className={ChatListCSS.chats_empty__img} width="100" height="38100" src={chatEmpty} alt="Чат сломался" />
                        <p className={ChatListCSS.chats_empty__text}>К сожалению, в данной версии Web-сервиса функция чата недоступна</p>
                        <p className={ChatListCSS.chats_empty__text}>На данный момент, вы можете скачать мобильное приложение AmicusDrive с полным функционалом</p>
                        <a href="#" download="" className={ChatListCSS.mobile_ver_download}>Скачать приложение</a>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ChatList;