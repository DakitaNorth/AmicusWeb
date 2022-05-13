import React, { useEffect, useState } from "react";
import PaymentMethodItemCSS from './css/paymentMethodItem.module.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import MasterImg from "../../img/cardSettings/master.svg";
import MirImg from "../../img/cardSettings/mir.svg";
import UnionImg from "../../img/cardSettings/unionpay.svg";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const PaymentMethodItem = props => { 
    const navigate = useNavigate();

    const [img, setImg] = useState();

    useEffect(() => {
        if (props.banksystem === "MasterCard") {
            setImg(MasterImg);
        }
        else if (props.banksystem === "МИР") {
            setImg(MirImg);
        }
        else if (props.banksystem === "China UnionPay") {
            setImg(UnionImg);
        }
    }, []);

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

    return (
        <li id={props.number} className={PaymentMethodItemCSS.payment_list__item}>
            <label className={PaymentMethodItemCSS.payment_label} htmlFor="first-card">
                <input className={PaymentMethodItemCSS.payment_input + " visually-hidden"} onClick={joiningRoute} type="radio" name="payment-method" value="first-card" id="first-card" />
                <img className={PaymentMethodItemCSS.payment__img} width="38" height="38" src={img} alt="Label карты" />
                <span className={PaymentMethodItemCSS.payment_name}>{props.owner}</span>
                <span className={PaymentMethodItemCSS.payment_date}>{props.date}</span>
                <span className={PaymentMethodItemCSS.payment_numbers}>{props.number.substring(0, 7)}</span>
            </label>
        </li>
    )
};

export default PaymentMethodItem;