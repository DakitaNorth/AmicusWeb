import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CarSettingsCSS from './css/carSettings.module.css';

import car_img from "../../img/carSettings/car.png";

import CarSettingsItem from "./carSettingsItem";

const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
const phone = LoginPassword.phone;

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const CarSettings = () => {

    const [carsData, setCarsData] = useState([]);

    useEffect(() => {
        gettingCarsData();
    }, []);

    function gettingCarsData() {
        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getusersauto";
        axios.post(API_URL, { phone }, { headers })
            .then((response) => {
                setCarsData(response.data); 
            });
    }

    const carsStandart = carsData.map((item) => {
        return (
            <CarSettingsItem
                owner={item.owner}
                statenumber={item.statenumber}
                model={item.model}
                color={item.color}
            />
        )
    });

    return (
        <div className="universal-form">
            <h1 className={CarSettingsCSS.page_main__heading}>Настройки авто</h1>
            <section className={CarSettingsCSS.car_settings}>
                <form className={CarSettingsCSS.car_settings__form + " " + CarSettingsCSS.car_settings__container} aciton="#">
                    <ul className={CarSettingsCSS.car_settings__list}>
                        {carsStandart}
                        <li className={CarSettingsCSS.car_list__item}>
                            <input className={CarSettingsCSS.car_input + " visually-hidden"} type="radio" name="car" value="first-car" id="first-car" />
                            <label className={CarSettingsCSS.car_label + " " + CarSettingsCSS.car_label_add} htmlFor="first-car">
                                <NavLink to="/add-car" href="#">
                                    <span className={CarSettingsCSS.car_name + " " + CarSettingsCSS.car_add_car}>Добавить машину</span>
                                </NavLink>
                            </label>
                        </li>
                    </ul>
                </form>
            </section>
        </div >
    )
};

export default CarSettings;