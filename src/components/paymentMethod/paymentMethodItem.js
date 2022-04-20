import React from "react";
import PaymentMethodItemCSS from './css/paymentMethodItem.module.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const PaymentMethodItem = props => {
    const navigate = useNavigate();

    function joiningRoute() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const userphone = LoginPassword.phone;
            const travelid = JSON.parse(localStorage.getItem("SelectedTravelID"));
            
            const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/addusertotravel";
            axios.post(API_URL, { travelid, userphone }, { headers })
                .then((response) => {
                    console.log(response.data);
                });
        }

        navigate("/successful-booking");
    };

    return (
        <li id={props.number} className={PaymentMethodItemCSS.payment_list__item}>
            <label className={PaymentMethodItemCSS.payment_label} htmlFor="first-card">
                <input className={PaymentMethodItemCSS.payment_input + " visually-hidden"} onClick={joiningRoute} type="radio" name="payment-method" value="first-card" id="first-card" />
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M34.5636 25.2891V24.8951H34.4642L34.3492 25.1657L34.2348 24.8951H34.1348V25.2891H34.2054V24.992L34.3129 25.2484H34.3861L34.4936 24.9913V25.2891H34.5636ZM33.9329 25.2891V24.9622H34.0604V24.8957H33.7354V24.9622H33.8629V25.2891H33.9329Z"
                        fill="#F79410" />
                    <path d="M23.288 26.981H14.7041V11.04H23.288V26.981Z" fill="#FF5F00" />
                    <path
                        d="M15.2532 19.0076C15.2532 15.7738 16.7184 12.8934 19.0001 11.0371C17.3316 9.67963 15.2258 8.86943 12.9372 8.86943C7.5193 8.86943 3.12744 13.4083 3.12744 19.0076C3.12744 24.6068 7.5193 29.1457 12.9372 29.1457C15.2258 29.1457 17.3316 28.3355 19.0001 26.978C16.7184 25.1217 15.2532 22.2413 15.2532 19.0076Z"
                        fill="#EB001B" />
                    <path
                        d="M34.8694 19.0048C34.8694 24.604 30.4776 29.1429 25.0596 29.1429C22.7711 29.1429 20.6653 28.3327 18.9961 26.9753C21.2784 25.119 22.7436 22.2385 22.7436 19.0048C22.7436 15.7711 21.2784 12.8906 18.9961 11.0343C20.6653 9.67685 22.7711 8.86665 25.0596 8.86665C30.4776 8.86665 34.8694 13.4056 34.8694 19.0048Z"
                        fill="#F79E1B" />
                </svg>
                <span className={PaymentMethodItemCSS.payment_name}>{props.owner}</span>
                <span className={PaymentMethodItemCSS.payment_date}>{props.date}</span>
                <span className={PaymentMethodItemCSS.payment_numbers}>{props.number.substring(0, 7)}</span>
            </label>
        </li>
    )
};

export default PaymentMethodItem;