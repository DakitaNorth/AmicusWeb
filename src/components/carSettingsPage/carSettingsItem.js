import React from "react";
import { NavLink } from "react-router-dom"; 
import CarSettingItemCSS from './css/carSettingsItem.module.css';

const CarSettingItem = props => ( 
    <li id={props.statenumber} className={CarSettingItemCSS.car_list__item}>
        <NavLink className={CarSettingItemCSS.car_link} to={"/viev-car/" + props.id}>
            <input className={CarSettingItemCSS.car_input + " visually-hidden"} type="radio" name="car" value="first-car" id="first-car" />
            <label className={CarSettingItemCSS.car_label} htmlFor="first-car">
                <span className={CarSettingItemCSS.car_model}>{props.model}</span>
                <span className={CarSettingItemCSS.car_color}>{props.color.substring(0, 8)}</span>
                <span className={CarSettingItemCSS.car_statenumber}>{props.statenumber.substring(0, 8)}</span>
            </label>
        </NavLink>
    </li>
);

export default CarSettingItem;