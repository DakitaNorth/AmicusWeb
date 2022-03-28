import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CreateAutoSelectCSS from './css/createAutoSelect.module.css';

import CreateAutoSelectItem from "./createAutoSelectItem";

const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
const phone = LoginPassword.phone;

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const CreateAutoSelect = () => {

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
            <CreateAutoSelectItem
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
                    </ul>
                </form>
            </section>
        </div >
    )
};

export default CreateAutoSelect;