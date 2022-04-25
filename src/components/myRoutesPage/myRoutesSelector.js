import React, { useState, useEffect } from "react";
import axios from "axios";
import MyRoutesSCSS from './css/myRoutesSelector.module.css';

import MyRoutesItemPassager from "./myRoutesItemPassager";
import MyRoutesItemDriver from "./myRoutesItemDriver";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const MyRoutesSelector = () => {

    const [myPassagerData, setMyPassagerData] = useState([]);
    const [myDriverData, setMyDriverData] = useState([]);

    const [myAllDataDirty, setMyAllDataDirty] = useState(false);
    const [myPassagerDataDirty, setMyPassagerDataDirty] = useState(false);
    const [myDriverDataDirty, setMyDriverDataDirty] = useState(false);

    useEffect(() => {
        document.getElementById("all-radio").setAttribute("checked", "checked");
        setMyAllDataDirty(true);

        gettingData();
    }, []);

    function gettingData() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const userphone = LoginPassword.phone;

            const PASSAGER_URL = "https://xn--80aaggtieo3biv.xn--p1ai/gettravelwhereuserpassenger";
            const DRIVER_URL = "https://xn--80aaggtieo3biv.xn--p1ai/gettravelwhereuserdriver";

            axios.post(PASSAGER_URL, { userphone }, { headers })
                .then((response) => {
                    if (Array.isArray(response.data) && response.data.length) {
                        setMyPassagerData(response.data);
                    }
                    else {
                        console.log(response.data);
                    }
                });

            axios.post(DRIVER_URL, { userphone }, { headers })
                .then((response) => {
                    if (Array.isArray(response.data) && response.data.length) {
                        for (var i = 0; i <= response.data.length - 1; i++) {
                            response.data[i].autorname = "Вы";
                        }
                        setMyDriverData(response.data);
                    }
                    else {
                        console.log(response.data);
                    }
                });
        }
    }

    function radioChecked(e) {
        var allRadio = document.getElementsByClassName(MyRoutesSCSS.my_routes__radiobutton);
        var allLabels = document.getElementsByClassName(MyRoutesSCSS.my_routes__label);

        for (var i = 0; i <= allRadio.length - 1; i++) {
            allRadio[i].removeAttribute("checked");
            allLabels[i].classList.remove(MyRoutesSCSS.my_routes__label_active);
        }

        e.target.setAttribute("checked", "checked");
        document.querySelector(`[for="${e.target.id}"]`).classList.add(MyRoutesSCSS.my_routes__label_active);;

        if (e.target.id === "all-radio") {
            setMyAllDataDirty(true);
            setMyPassagerDataDirty(false);
            setMyDriverDataDirty(false);
        }
        else if (e.target.id === "driver-radio") {
            setMyAllDataDirty(false);
            setMyPassagerDataDirty(false);
            setMyDriverDataDirty(true);
        }
        else if (e.target.id === "passenger-radio") {
            setMyAllDataDirty(false);
            setMyPassagerDataDirty(true);
            setMyDriverDataDirty(false);
        }
    }

    const passagerStandart = myPassagerData.map((item) => {
        return (
            <MyRoutesItemPassager
                key={item.id}
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

    const driverStandart = myDriverData.map((item) => {
        return (
            <MyRoutesItemDriver
                key={item.id}
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
                                <input className={MyRoutesSCSS.my_routes__radiobutton + " visually-hidden"} onChange={radioChecked} type="radio" name="radio" id="all-radio" />
                                Все
                            </label>
                            <label className={MyRoutesSCSS.my_routes__label} htmlFor="driver-radio">
                                <input className={MyRoutesSCSS.my_routes__radiobutton + " visually-hidden"} onChange={radioChecked} type="radio" name="radio" id="driver-radio" />
                                Водитель
                            </label>
                            <label className={MyRoutesSCSS.my_routes__label + " " + MyRoutesSCSS.my_routes__label_right} htmlFor="passenger-radio">
                                <input className={MyRoutesSCSS.my_routes__radiobutton + " visually-hidden"} onChange={radioChecked} type="radio" name="radio" id="passenger-radio" />
                                Пассажир
                            </label>
                        </div>
                    </form>
                </div>
                <div className={MyRoutesSCSS.my_routes__list}>
                    {(myAllDataDirty) && passagerStandart.concat(driverStandart)}
                    {(myDriverDataDirty) && driverStandart}
                    {(myPassagerDataDirty) && passagerStandart}
                </div>
            </section>
        </div>
    )
};

export default MyRoutesSelector;