import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ref, push, onValue } from "firebase/database";
import axios from "axios";
import UserProfilePageCSS from './css/userProfilePage.module.css';

import { db } from "../firebase/firebase";

import avatar from "../../img/routeHistory/Group.png";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const UserProfilePage = () => {

    const navigation = useNavigate();

    const params = useParams();

    const [thisProfileData, setThisProfileData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        gettingProfileData();
    }, [isLoading]);

    function gettingProfileData() {
        let paramsId = parseInt(params.userId);

        const THIS_PROFILE_DATA_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getuserdata/" + paramsId;

        axios.get(THIS_PROFILE_DATA_URL, { headers })
            .then((response) => {
                setThisProfileData(response.data);
                setIsLoading(true);
                console.log(thisProfileData);
            });
    };

    function goToChat() {
        // const allChats = [];

        // let profilePhone = thisProfileData.phone;
        // sessionStorage.setItem("phoneToChat", JSON.stringify(profilePhone));

        // const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
        
        // const FIREBASE_CHATS_REF = ref(db, "chat");
        // const FIREBASE_ADD_CHAT_REF = ref(db, "chat/");

        // onValue(FIREBASE_CHATS_REF, (snapshot) => {
        //     if (snapshot.exists()) {
        //         snapshot.forEach(function (childSnapshot) {
        //             var childData = childSnapshot.val();
        //             allChats.push(childData);
        //         });
        //     }
        // });

        // for (var i = 0; i <= allChats.length - 1; i++) {
        //     if (thisProfileData.phone !== allChats[i].user_1) {
        //         push(FIREBASE_ADD_CHAT_REF, {
        //             messages: {
        //                 user: LoginPassword.phone,
        //                 msg: ""
        //             },
        //             user_1: thisProfileData.phone,
        //             user_2: LoginPassword.phone
        //         });

        //         console.log("Чат зарегистрирован");
        //         navigation("/messages-item");
        //     }
        //     else {
        //         console.log("Чат зарегистрирован ранее");
        //         navigation("/messages-item");
        //     }
        // }
        navigation("/messages");
    };

    return (
        <section className={UserProfilePageCSS.user_profile__wrapper}>
            <h1 className="visually-hidden">Страница профиля</h1>
            <div className={UserProfilePageCSS.user_profile__avatar}>
                <img className={UserProfilePageCSS.user_profile__image} src={thisProfileData.photo} alt="Фотография водителя" />
                <span className={UserProfilePageCSS.user_profile__name}>{thisProfileData.name}</span>
                <span className={UserProfilePageCSS.user_profile__mail}>{thisProfileData.mail}</span>
            </div>
            <div className={UserProfilePageCSS.user_profile__information}>
                <div className={UserProfilePageCSS.regdata__wrapper}>
                    <span className={UserProfilePageCSS.regdata__label} name="regdata-label" id="regdata-label">С нами с:</span>
                    <span className={UserProfilePageCSS.regdata__text} name="regdata" id="regdata-text">{thisProfileData.regdata}</span>
                </div>
                <div className={UserProfilePageCSS.vk__wrapper}>
                    <span className={UserProfilePageCSS.vk__label} name="vk-label" id="vk-label">Соцсеть связи:</span>
                    <span className={UserProfilePageCSS.vk__text}name="vk" id="vk-text">vk.com{thisProfileData.facebook}</span>
                </div>
                <div className={UserProfilePageCSS.phone__wrapper}>
                <span className={UserProfilePageCSS.phone__label} name="phone-label" id="phone-label">Телефон связи:</span>
                    <span className={UserProfilePageCSS.phone__text} name="phone" id="phone-text">{thisProfileData.phone}</span>
                </div>
            </div>
            <div className={UserProfilePageCSS.user_profile__buttons}>
                <a className={UserProfilePageCSS.user_profile__button__phone} href={"tel:" + thisProfileData.phone}>Позвонить</a>
                <button onClick={goToChat} className={UserProfilePageCSS.user_profile__button__chat}>Написать</button>  
            </div>
        </section>
    )
};

export default UserProfilePage;