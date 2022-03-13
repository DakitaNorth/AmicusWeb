import React, { Component } from "react";
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

class CarSettings extends Component {

    state = {
        carsData: []
    }

    componentDidMount() {
        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getusersauto";
        axios.post(API_URL, { phone }, { headers })
            .then((response) => {
                this.setState({
                    carsData: response.data
                });
                console.log(this.state);
            });
    }

    render() {
        const carsStandart = this.state.carsData.map((item) => {
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
                        </ul>
                    </form>
                </section>
            </div >
        )
    }
};

export default CarSettings;