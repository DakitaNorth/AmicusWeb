import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CarSettingsCSS from './css/carSettings.module.css';

import car_img from "../img/carSettings/car.png";

const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
const phone = LoginPassword.phone;

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

class CarSettings extends Component {

    state = {
        carsData: []
    }

    componentDidMount() {
        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getusersauto";
        axios.post(API_URL, { phone }, { headers })
            .then((response) => {
                this.setState({
                    carsData: response.data[0]
                });
                this.includeData();
                console.log(this.state);
            });
    }

    includeData() {
        document.getElementById('color-input').value = this.state.carsData.color;
        document.getElementById('model-input').value = this.state.carsData.model;
        document.getElementById('places-input').value = this.state.carsData.places;
        document.getElementById('num-input').value = this.state.carsData.statenumber;
    }

    render() {
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
                        <button className={CarSettingsCSS.car__button + " button"}>Сохранить</button>
                    </div>
                </section >
            </div >
        )
    }
};

export default CarSettings;