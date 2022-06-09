import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import ChatItemCSS from "./css/chatItem.module.css";

import { db } from "../firebase/firebase";

import AnotherUserMessages from "../chatMessagesStandart/anotherUserMessages";

import avatar from "../../img/routeHistory/Group.png";

const ChatItem = () => {

    const [profileData, setProfileData] = useState({
        USER_PHOTO: "https://xn--80aaggtieo3biv.xn--p1ai/images/unload.jpg",
        email: "Qwerty@mail.ru ",
        name: "asdas",
        phone: "+7(777)111-11-11"
    });

    const [authUserchatMessages, setAuthUserchatMessages] = useState();
    const [anotherUserchatMessages, setAnotherUserchatMessages] = useState();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let messageInput = document.getElementById("message-input");
        let callButton = document.getElementById("call-button");

        messageInput.onfocus = function () {
            callButton.classList.add(ChatItemCSS.chat__call_button_focus);
        }

        messageInput.onblur = function () {
            callButton.classList.remove(ChatItemCSS.chat__call_button_focus);
        }
    });

    useEffect(() => {
        getThisUserData();
        getThisChatMessages();
    }, []);

    function getThisUserData() {
        const FIREBASE_USERS_REF = ref(db, "users");

        const allUsers = [];
        const thisUserData = [];

        const phoneToChat = JSON.parse(sessionStorage.getItem("phoneToChat"));

        onValue(FIREBASE_USERS_REF, (snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                allUsers.push(childData);
            });

            for (var i = 0; i <= allUsers.length - 1; i++) {
                if (allUsers[i].phone === phoneToChat) {
                    thisUserData.push(allUsers[i]);
                }
            }

            setProfileData(thisUserData[0]);
            console.log(thisUserData[0]); 
        });
    };

    function getThisChatMessages() {
        const FIREBASE_CHAT_REF = ref(db, "chat");

        const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
        const authUserPhone = LoginPassword.phone;

        const allChats = [];
        const thisChatMessages = [];

        onValue(FIREBASE_CHAT_REF, (snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.val();
                    allChats.push(childData);
                });

                for (var i = 0; i <= allChats.length - 1; i++) {
                    if (allChats[i].user_2 === authUserPhone) {
                        thisChatMessages.push(allChats[i].messages);
                    }
                }

                for (var i = 0; i <= thisChatMessages.length - 1; i++) {
                    if (thisChatMessages[i].user === authUserPhone) {
                        setAuthUserchatMessages(thisChatMessages[i]);
                    }
                    else {
                        setAnotherUserchatMessages(thisChatMessages[i]);
                    }
                }

                console.log(thisChatMessages);
                console.log(authUserchatMessages);
                console.log(anotherUserchatMessages);

                setIsLoading(true);
            }
        });
    };

    // const authUserchatMessagesStandart = authUserchatMessages.map((item, pos) => {
    //     return (
    //         <authUserMessages
    //             key={pos}
    //             msg={item.msg}
    //         />
    //     )
    // });

    // const anotherUserchatMessagesStandart = anotherUserchatMessages.map((item, pos) => {
    //     return (
    //         <AnotherUserMessages
    //             key={pos}
    //             msg={item.msg}
    //         />
    //     )
    // });

    return (
        <div className="universal-form">
            <h1 className={ChatItemCSS.page_main__heading + " visually-hidden"}>Чат с пользователем</h1>
            <section className={ChatItemCSS.chat}>
                <form className={ChatItemCSS.chat__wrapper} action="#">
                    <div className={ChatItemCSS.chat__avatar + " " + ChatItemCSS.avatar}>
                        <span className={ChatItemCSS.avatar__name}>{profileData.name}</span>
                        <img className={ChatItemCSS.avatar__img} width="40" height="40" src={profileData.profile_pic} alt="Фотография пользователя" />
                    </div>
                    <div className={ChatItemCSS.chat__messages}>
                        {/* {(isLoading) && anotherUserchatMessagesStandart } */}
                    </div>
                    <div className={ChatItemCSS.chat__inputs}>
                        <button className={ChatItemCSS.chat__call_button} id="call-button">
                            <span className={"visually-hidden"}>Позвонить</span>
                        </button>
                        <input className={ChatItemCSS.chat__input} type="text" name="message" placeholder="Здравствуйте..." id="message-input" />
                        <button className={ChatItemCSS.chat__send_message} id="send-button">
                            <span className={"visually-hidden"}>Отправить сообщение</span>
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
};

export default ChatItem;