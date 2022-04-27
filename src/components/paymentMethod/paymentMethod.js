import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PaymentMethodCSS from './css/paymentMethod.module.css';
import { useNavigate } from "react-router-dom";

import PaymentMethodItem from "./paymentMethodItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const PaymentMethod = () => {
    const navigate = useNavigate();

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
                    setCardsData(response.data); 
                });
        }
    }

    function selRouteIDPush() {
        navigate("/successful-booking");
    };

    const cardsStandart = cardsData.map((item, pos) => {
        return (
            <PaymentMethodItem
                key={pos}
                number={item.number}
                owner={item.owner}
                date={item.date}
            />
        )
    });

    return (
        <div className="universal-form">
            <h1 className={PaymentMethodCSS.page_main__heading}>список карт</h1>
            <section className={PaymentMethodCSS.payment_list}>
                <form className={PaymentMethodCSS.payment_form + " " + PaymentMethodCSS.payment_list__container} aciton="#">
                    <ul className={PaymentMethodCSS.payment_list__list}>
                        {cardsStandart}
                        <li className={PaymentMethodCSS.payment_list__item}>
                            <label className={PaymentMethodCSS.payment_label + " " + PaymentMethodCSS.payment_label_cash} htmlFor="cash">
                                <input className={PaymentMethodCSS.payment_input + " visually-hidden"} onChange={selRouteIDPush} type="radio" name="payment-method" value="cash" id="cash" />
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.2409 21.2509C26.1542 21.2509 28.7172 18.4114 28.7172 14.6574C28.7172 10.9565 26.1967 8 21.2409 8H13.3287V18.4646H10V21.2509H13.3287V23.0801H10V25.877H13.3287V29.78H16.6042V25.877H21.4005V23.0801H16.6042V21.2509H21.2409ZM16.6042 18.4646V10.8076H21.2409C24.0911 10.8076 25.4523 12.456 25.4523 14.668C25.4523 16.9013 24.1017 18.4646 21.1984 18.4646H16.6042Z"
                                        fill="#3E4958" />
                                </svg>
                                <span className={PaymentMethodCSS.payment_name + " " + PaymentMethodCSS.payment_cash}>Наличные</span>
                            </label>
                        </li>
                        {/* <li className={PaymentMethodCSS.payment_list__item}>
                            <label className={PaymentMethodCSS.payment_label + " " + PaymentMethodCSS.payment_label_add} htmlFor="add-card">
                            <input className={PaymentMethodCSS.payment_input + " visually-hidden"} type="radio" name="payment-method" value="add-card" id="add-card" />
                                <a href="#">
                                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M30.2906 9.24407L19.5 9L8.70941 9.24407C6.70989 9.2893 5.01688 10.7322 4.65535 12.6993C3.78155 17.4536 3.78155 22.3273 4.65535 27.0815C5.01689 29.0486 6.70989 30.4916 8.70941 30.5368L19.5 30.7809L30.2906 30.5368C32.2901 30.4916 33.9831 29.0486 34.3447 27.0815C35.2185 22.3273 35.2185 17.4536 34.3447 12.6993C33.9831 10.7322 32.2901 9.2893 30.2906 9.24407ZM8.76036 11.4966L19.5 11.2537L30.2396 11.4966C31.1713 11.5177 31.9602 12.19 32.1286 13.1066C32.3589 14.3593 32.5248 15.6208 32.6264 16.8862H6.37357C6.47519 15.6208 6.64112 14.3593 6.87137 13.1066C7.03982 12.19 7.82868 11.5177 8.76036 11.4966ZM6.25313 19.8904C6.25313 22.1611 6.45921 24.4318 6.87137 26.6743C7.03982 27.5908 7.82868 28.2632 8.76036 28.2842L19.5 28.5272L30.2396 28.2842C31.1713 28.2632 31.9602 27.5908 32.1286 26.6743C32.5408 24.4318 32.7469 22.1611 32.7469 19.8904H6.25313Z"
                                            fill="#3E4958" />
                                    </svg>
                                    <span className={PaymentMethodCSS.payment_name + " " + PaymentMethodCSS.payment_add_card}>Добавить карту</span>
                                </a>
                            </label>
                        </li> */}
                    </ul>
                </form>
            </section>
        </div>
    )
};

export default PaymentMethod;