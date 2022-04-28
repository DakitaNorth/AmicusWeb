import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import MyRoutesPassagersCSS from './css/myRoutesPassagersItem.module.css';
import avatar from "../../img/routeHistory/Group.png";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const myRoutesPassagersItem = props => {
    return (
        <li className={MyRoutesPassagersCSS.my_routes_passagers__item}>
            <NavLink to={"/user-profile/" + props.id} className={MyRoutesPassagersCSS.my_routes_passagers__wrapper}>
                <img className={MyRoutesPassagersCSS.my_routes_passagers__avatar} src={props.photo} alt="Фотография пользователя" />
                <span className={MyRoutesPassagersCSS.my_routes_passagers__name}>{props.name}</span>
                <span className={MyRoutesPassagersCSS.my_routes_passagers__phone}>{props.phone}</span>
            </NavLink>
        </li>

    )
};

export default myRoutesPassagersItem;