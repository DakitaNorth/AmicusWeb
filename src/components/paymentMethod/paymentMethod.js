import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PaymentMethodCSS from './css/paymentMethod.module.css';
import { useNavigate } from "react-router-dom";

import PaymentMethodItem from "./paymentMethodItem";

import CardImg from "../../img/cardSettings/card.svg";
import CashImg from "../../img/cardSettings/cash.svg";

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
                    if (Array.isArray(response.data) && response.data.length) {
                        setCardsData(response.data); 
                        console.log(response.data);
                    }
                    else {
                        console.log(response.data);
                    }
                });
        }
    }

    function joiningRoute() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const userId = LoginPassword.id;
            const travelid = JSON.parse(sessionStorage.getItem("SelectedTravelID"));
            
            const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/addusertotravel/" + travelid + "/" + userId;
            axios.get(API_URL, { headers })
                .then((response) => {
                    console.log(response.data);
                });
        }

        navigate("/successful-booking");
    };

    const cardsStandart = cardsData.map((item, pos) => {
        return (
            <PaymentMethodItem
                key={pos}
                banksystem={item.banksystem}
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
                            <label className={PaymentMethodCSS.payment_label + " " + PaymentMethodCSS.payment_label_cash + " " + PaymentMethodCSS.payment_link} htmlFor="cash">
                                <input className={PaymentMethodCSS.payment_input + " visually-hidden"} onChange={joiningRoute} type="radio" name="payment-method" value="cash" id="cash" />
                                <img className={PaymentMethodCSS.payment__img} width="38" height="38" src={CashImg} alt="Label карты" />
                                <span className={PaymentMethodCSS.payment_name + " " + PaymentMethodCSS.payment_cash}>Наличные</span>
                            </label>
                        </li>
                        <li className={PaymentMethodCSS.payment_list__item}>
                            <NavLink className={PaymentMethodCSS.payment_link} to="/add-card" href="#">
                                <input className={PaymentMethodCSS.payment_input + " visually-hidden"} type="radio" name="payment-method" value="add-card" id="add-card" />
                                <label className={PaymentMethodCSS.payment_label + " " + PaymentMethodCSS.payment_label_add} htmlFor="add-card">
                                    <img className={PaymentMethodCSS.payment__img} width="38" height="38" src={CardImg} alt="Label карты" />
                                    <span className={PaymentMethodCSS.payment_name + " " + PaymentMethodCSS.payment_add_card}>Добавить карту</span>
                                </label>
                            </NavLink>
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    )
};

export default PaymentMethod;