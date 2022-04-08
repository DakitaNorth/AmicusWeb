import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import MyRoutesSCSS from './css/myRoutesSelector.module.css';

import MyRoutesItem from "./myRoutesItem";

const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
const userphone = LoginPassword.phone;

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const MyRoutesSelector = () => {

    const [myPassagerData, setMyPassagerData] = useState([]);
    const [myDriverData, setMyDriverData] = useState([]);
    const [myRoutesData, setMyRoutesData] = useState([]);

    useEffect(() => {
        gettingPassagerData();
        gettingDriverData();
        gettingAllData();
    }, []);

    function gettingPassagerData() {
        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/gettravelwhereuserpassenger";
        axios.post(API_URL, { userphone }, { headers })
            .then((response) => {
                setMyPassagerData(response.data);
            });
    }

    function gettingDriverData() {
        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/gettravelwhereuserdriver";
        axios.post(API_URL, { userphone }, { headers })
            .then((response) => {
                setMyDriverData(response.data);
            });
    }

    function gettingAllData() {
        setMyRoutesData(myPassagerData.concat(myDriverData));
    }

    function radioChecked(e) {
        var radioInputs = document.getElementsByName("radio");

        for (var i = 0; i <= 2; i++) {
            radioInputs[i].classList.remove("activeRadio");
        }

        e.target.classList.add("activeRadio");
    }

    const passagerStandart = myPassagerData.map((item, pos) => {
        return (
            <MyRoutesItem
                key={pos}
                id={item.id}
                departureplace={item.departureplace}
                departuretime={item.departuretime}
                arrivalplace={item.arrivalplace}
                arrivaltime={item.arrivaltime}
            />
        )
    });

    const driverStandart = myDriverData.map((item, pos) => {
        return (
            <MyRoutesItem
                key={pos}
                id={item.id}
                departureplace={item.departureplace}
                departuretime={item.departuretime}
                arrivalplace={item.arrivalplace}
                arrivaltime={item.arrivaltime}
                autor={item.autor}
            />
        )
    });

    const allStandart = myRoutesData.map((item, pos) => {
        return (
            <MyRoutesItem
                key={pos}
                id={item.id}
                departureplace={item.departureplace}
                departuretime={item.departuretime}
                arrivalplace={item.arrivalplace}
                arrivaltime={item.arrivaltime}
            />
        )
    });
    return (
        <div className="universal-form">
            <h1 className={MyRoutesSCSS.page_main__heading}>Мои поездки</h1>
            <section className={MyRoutesSCSS.my_routes}>
                <div className={MyRoutesSCSS.my_routes__container}>
                    <form className={MyRoutesSCSS.my_routes__wrapper} action="#">
                        <div className={MyRoutesSCSS.my_routes__selector}>
                            <label className={MyRoutesSCSS.my_routes__label + " " + MyRoutesSCSS.my_routes__label_left + " " + MyRoutesSCSS.my_routes__label_active} htmlFor="all-radio">
                                <input className={MyRoutesSCSS.my_routes__radiobutton + "activeRadio"} onChange={radioChecked} type="radio" name="radio" id="all-radio"/>
                                Все
                            </label>
                            <label className={MyRoutesSCSS.my_routes__label} htmlFor="driver-radio">
                                <input className={MyRoutesSCSS.my_routes__radiobutton} onChange={radioChecked} type="radio" name="radio" id="driver-radio"/>
                                Водитель
                            </label>
                            <label className={MyRoutesSCSS.my_routes__label + " " + MyRoutesSCSS.my_routes__label_right} htmlFor="passenger-radio">
                                <input className={MyRoutesSCSS.my_routes__radiobutton} onChange={radioChecked} type="radio" name="radio" id="passenger-radio" />
                                Пассажир
                            </label>
                        </div>
                    </form>
                </div>
                <div className={MyRoutesSCSS.my_routes__list}>
                    {driverStandart}
                </div>
            </section>
        </div>
    )
};

export default MyRoutesSelector;