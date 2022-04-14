import React, { useState, useEffect } from "react";
import axios from "axios";
import MyRoutesSCSS from './css/myRoutesSelector.module.css';

import MyRoutesItem from "./myRoutesItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const MyRoutesSelector = () => {

    const [myPassagerData, setMyPassagerData] = useState([]);
    const [myDriverData, setMyDriverData] = useState([]);
    const [myRoutesData, setMyRoutesData] = useState([]);

    useEffect(() => {
        gettingData();
    }, []);

    function gettingData() {
        if (typeof localStorage.getItem("LoginPassword") !== "undefined" && localStorage.getItem("LoginPassword") !== null) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const userphone = LoginPassword.phone;
            
            const PASSAGER_URL = "https://xn--80aaggtieo3biv.xn--p1ai/gettravelwhereuserpassenger";
            const DRIVER_URL = "https://xn--80aaggtieo3biv.xn--p1ai/gettravelwhereuserdriver";
    
            axios.post(PASSAGER_URL, { userphone }, { headers })
                .then((response) => {
                    setMyPassagerData(response.data);
                    console.log(myPassagerData);
                });
    
            axios.post(DRIVER_URL, { userphone }, { headers })
                .then((response) => {
                    setMyDriverData(response.data);
                    console.log(myDriverData);
                });
    
            setMyRoutesData(myPassagerData.concat(myDriverData));
        }
    }

    const passagerStandart = myPassagerData.map((item, pos) => {
        return (
            <MyRoutesItem
                key={pos}
                id={item.id}
                autorname={item.autorname}
                autorphoto={item.autorphoto}
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
                autorname={item.autorname}
                autorphoto={item.autorphoto}
                departureplace={item.departureplace}
                departuretime={item.departuretime}
                arrivalplace={item.arrivalplace}
                arrivaltime={item.arrivaltime}
            />
        )
    });

    const allStandart = myRoutesData.map((item, pos) => {
        return (
            <MyRoutesItem
                key={pos}
                id={item.id}
                autorname={item.autorname}
                autorphoto={item.autorphoto}
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
                                <input className={MyRoutesSCSS.my_routes__radiobutton + "activeRadio"} type="radio" name="radio" id="all-radio" />
                                Все
                            </label>
                            <label className={MyRoutesSCSS.my_routes__label} htmlFor="driver-radio">
                                <input className={MyRoutesSCSS.my_routes__radiobutton} type="radio" name="radio" id="driver-radio" />
                                Водитель
                            </label>
                            <label className={MyRoutesSCSS.my_routes__label + " " + MyRoutesSCSS.my_routes__label_right} htmlFor="passenger-radio">
                                <input className={MyRoutesSCSS.my_routes__radiobutton} type="radio" name="radio" id="passenger-radio" />
                                Пассажир
                            </label>
                        </div>
                    </form>
                </div>
                <div className={MyRoutesSCSS.my_routes__list}>
                    {allStandart}
                </div>
            </section>
        </div>
    )
};

export default MyRoutesSelector;