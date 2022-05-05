import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CardSettingsCSS from './css/cardSettings.module.css';

import CardSettingsItem from "./cardSettingsItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const CardSettings = () => {

    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        gettingCardData();
    }, []);

    function gettingCardData() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const userId = LoginPassword.id;

            const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getuserscards/" + userId; 
            axios.get(API_URL, { headers })
                .then((response) => {
                    if (Array.isArray(response.data) && response.data.length) {
                        setCardsData(response.data); 
                    }
                    else {
                        console.log(cardsData);
                    }
                });
        }
    }

    const cardsStandart = cardsData.map((item, pos) => {
        return (
            <CardSettingsItem
                key={pos}
                id={item.id}
                number={item.number}
                owner={item.owner}
                date={item.date}
            />
        )
    });

    return (
        <div className="universal-form">
            <h1 className={CardSettingsCSS.page_main__heading}>список карт</h1>
            <section className={CardSettingsCSS.payment_list}>
                <form className={CardSettingsCSS.payment_form + " " + CardSettingsCSS.payment_list__container} aciton="#">
                    <ul className={CardSettingsCSS.payment_list__list}>
                        {cardsStandart}
                        <li className={CardSettingsCSS.payment_list__item}>
                            <input className={CardSettingsCSS.payment_input + " visually-hidden"} type="radio" name="payment-method" value="add-card" id="add-card" />
                            <label className={CardSettingsCSS.payment_label + " " + CardSettingsCSS.payment_label_add} htmlFor="add-card">
                                <NavLink className={CardSettingsCSS.payment_link} to="/add-card" href="#">
                                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M30.2906 9.24407L19.5 9L8.70941 9.24407C6.70989 9.2893 5.01688 10.7322 4.65535 12.6993C3.78155 17.4536 3.78155 22.3273 4.65535 27.0815C5.01689 29.0486 6.70989 30.4916 8.70941 30.5368L19.5 30.7809L30.2906 30.5368C32.2901 30.4916 33.9831 29.0486 34.3447 27.0815C35.2185 22.3273 35.2185 17.4536 34.3447 12.6993C33.9831 10.7322 32.2901 9.2893 30.2906 9.24407ZM8.76036 11.4966L19.5 11.2537L30.2396 11.4966C31.1713 11.5177 31.9602 12.19 32.1286 13.1066C32.3589 14.3593 32.5248 15.6208 32.6264 16.8862H6.37357C6.47519 15.6208 6.64112 14.3593 6.87137 13.1066C7.03982 12.19 7.82868 11.5177 8.76036 11.4966ZM6.25313 19.8904C6.25313 22.1611 6.45921 24.4318 6.87137 26.6743C7.03982 27.5908 7.82868 28.2632 8.76036 28.2842L19.5 28.5272L30.2396 28.2842C31.1713 28.2632 31.9602 27.5908 32.1286 26.6743C32.5408 24.4318 32.7469 22.1611 32.7469 19.8904H6.25313Z"
                                            fill="#3E4958" />
                                    </svg>
                                    <span className={CardSettingsCSS.payment_name + " " + CardSettingsCSS.payment_add_card}>Добавить карту</span>
                                </NavLink>
                            </label>
                        </li>
                    </ul>
                </form>
            </section>
        </div >
    )
};

export default CardSettings;