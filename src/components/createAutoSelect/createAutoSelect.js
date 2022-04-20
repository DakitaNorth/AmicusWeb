import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CreateAutoSelectCSS from './css/createAutoSelect.module.css';

import CreateAutoSelectItem from "./createAutoSelectItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const CreateAutoSelect = () => {

    const [carsData, setCarsData] = useState([]);

    useEffect(() => {
        gettingCarsData();
    }, []);

    function gettingCarsData() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const phone = LoginPassword.phone;

            const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getusersauto";
            axios.post(API_URL, { phone }, { headers })
                .then((response) => {
                    if (Array.isArray(response.data) && response.data.length) {
                        setCarsData(response.data); 
                    }
                    else {
                        console.log(carsData);
                    }
                });
        }
    };

    const carsStandart = carsData.map((item, pos) => {
        return (
            <CreateAutoSelectItem
                key={pos}
                owner={item.owner}
                statenumber={item.statenumber}
                model={item.model}
                color={item.color}
            />
        )
    });

    return (
        <div className="universal-form">
            <h1 className={CreateAutoSelectCSS.page_main__heading}>Выберите автомобиль</h1>
            <section className={CreateAutoSelectCSS.car_settings}>
                <form className={CreateAutoSelectCSS.car_settings__form + " " + CreateAutoSelectCSS.car_settings__container} aciton="#">
                    <ul className={CreateAutoSelectCSS.car_settings__list}>
                        {carsStandart}
                        <li className={CreateAutoSelectCSS.car_list__item}>
                            <input className={CreateAutoSelectCSS.car_input + " visually-hidden"} type="radio" name="car" value="first-car" id="first-car" />
                            <label className={CreateAutoSelectCSS.car_label + " " + CreateAutoSelectCSS.car_label_add} htmlFor="first-car">
                            <NavLink className={CreateAutoSelectCSS.car_link} to="/add-car" href="#">
                                    <span className={CreateAutoSelectCSS.car_name + " " + CreateAutoSelectCSS.car_add_car}>Добавить машину</span>
                                </NavLink>
                            </label>
                        </li>
                    </ul>
                </form>
            </section>
        </div >
    )
};

export default CreateAutoSelect;