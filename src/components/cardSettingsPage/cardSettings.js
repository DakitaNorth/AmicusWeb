import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CardSettingsCSS from './css/cardSettings.module.css';

import CardSettingsItem from "./cardSettingsItem";

import CardImg from "../../img/cardSettings/card.svg";

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
                banksystem={item.banksystem}
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
                            <NavLink className={CardSettingsCSS.payment_link} to="/add-card" href="#">
                                <input className={CardSettingsCSS.payment_input + " visually-hidden"} type="radio" name="payment-method" value="add-card" id="add-card" />
                                <label className={CardSettingsCSS.payment_label + " " + CardSettingsCSS.payment_label_add} htmlFor="add-card">
                                    <img className={CardSettingsCSS.payment__img_add} width="38" height="38" src={CardImg} alt="Label карты" />
                                    <span className={CardSettingsCSS.payment_name + " " + CardSettingsCSS.payment_add_card}>Добавить карту</span>
                                </label>
                            </NavLink>
                        </li>
                    </ul>
                </form>
            </section>
        </div >
    )
};

export default CardSettings;