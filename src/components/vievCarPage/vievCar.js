import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import CarSettingsCSS from './css/vievCar.module.css';

import car_img from "../../img/carSettings/car.png";

const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
const phone = LoginPassword.phone;

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const VievCar = () => {
    const navigate = useNavigate();

    const [carData, setCarData] = useState([]);

    useEffect(() => {
        gettingCarData();
    }, []);

    useLayoutEffect(() => {
        includeData();
    })

    function gettingCarData() {
        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getusersauto";
        axios.post(API_URL, { phone }, { headers })
            .then((response) => {
                setCarData(response.data[1]);
            });

    }

    function includeData() {
        document.getElementById('color-input').value = carData.color;
        document.getElementById('model-input').value = carData.model;
        document.getElementById('places-input').value = carData.places;
        document.getElementById('num-input').value = carData.statenumber;
    }

    function deleteCar(e) {
        e.preventDefault();

        let statenumber = document.getElementById('num-input').value;

        const DELETE_CARD_URL = "https://xn--80aaggtieo3biv.xn--p1ai/delauto";

        axios.post(DELETE_CARD_URL, { statenumber }, { headers })
            .then((response) => {
                navigate("/my-car-settings");
                console.log(response);
            });
    }

    return (
        <div className="universal-form">
            <h1 className={CarSettingsCSS.page_main__heading}>Настройки авто</h1>
            <section className={CarSettingsCSS.car_settings}>
                <div className={CarSettingsCSS.car_settings__container}>
                    <img className={CarSettingsCSS.car__img} src={car_img} width="203.5" height="135.67" alt="Ваш автомобиль" />
                    <div className={CarSettingsCSS.car__data}>
                        <label className={CarSettingsCSS.car__label} htmlFor="body-input">
                            <span className={CarSettingsCSS.car__text}>Цвет</span>
                            <input className={CarSettingsCSS.car__input} type="text" name="color" placeholder="Желтый" id="color-input" />
                        </label>
                        <label className={CarSettingsCSS.car__label} htmlFor="model-input">
                            <span className={CarSettingsCSS.car__text}>Модель машины</span>
                            <input className={CarSettingsCSS.car__input} type="text" name="model" placeholder="Renault Logan" id="model-input" />
                        </label>
                        <label className={CarSettingsCSS.car__label} htmlFor="year-input">
                            <span className={CarSettingsCSS.car__text}>Свободных мест</span>
                            <input className={CarSettingsCSS.car__input} type="text" name="places" placeholder="2" id="places-input" />
                        </label>
                        <label className={CarSettingsCSS.car__label} htmlFor="num-input">
                            <span className={CarSettingsCSS.car__text}>Номер машины</span>
                            <input className={CarSettingsCSS.car__input} type="text" name="num" placeholder="Я360МА.40" id="num-input" />
                        </label>
                    </div>
                    <button className={CarSettingsCSS.car__button + " " + CarSettingsCSS.car__button_save + " button"}>Сохранить</button>
                    <button onClick={deleteCar} className={CarSettingsCSS.car__button + " " + CarSettingsCSS.car__button_delete}>Удалить</button>
                </div>
            </section >
        </div >
    )

};

export default VievCar;