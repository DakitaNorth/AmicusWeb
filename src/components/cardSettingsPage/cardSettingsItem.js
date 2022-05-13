import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CardSettingItemCSS from './css/cardSettings.module.css';

import MasterImg from "../../img/cardSettings/master.svg";
import MirImg from "../../img/cardSettings/mir.svg";
import UnionImg from "../../img/cardSettings/unionpay.svg";

const CardSettingItem = props => {

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

    return (
        <li id={props.number} className={CardSettingItemCSS.payment_list__item}>
            <NavLink className={CardSettingItemCSS.payment_item_link} to={"/viev-card/" + props.id}>
                <input className={CardSettingItemCSS.payment_input + " visually-hidden"} type="radio" name="payment-method" value="first-card" id="first-card" />
                <label className={CardSettingItemCSS.payment_label} htmlFor="first-card">
                    <img className={CardSettingItemCSS.payment__img} width="38" height="38" src={img} alt="Label карты" />
                    <span className={CardSettingItemCSS.payment_name}>{props.owner}</span>
                    <span className={CardSettingItemCSS.payment_date}>{props.date}</span>
                    <span className={CardSettingItemCSS.payment_numbers}>{props.number.substring(0, 7)}</span>
                </label>
            </NavLink>
        </li>
    )
};

export default CardSettingItem;