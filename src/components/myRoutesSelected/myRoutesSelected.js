import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import MyRoutesSelectedCSS from './css/myRoutesSelected.module.css';

import MyRouteSelectedItem from "./myRoutesSelectedItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const MyRoutesSelected = () => {

    const params = useParams();

    const [myDriverData, setMyDriverData] = useState([]);
    const [thisDriverData, setThisDriverData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        gettingData();
    }, []);

    useLayoutEffect(() => {
        if (isLoading) {
            gettingThisRoute();
            includeData();
        }
    })

    function gettingData() {
        if (typeof localStorage.getItem("LoginPassword") !== "undefined" && localStorage.getItem("LoginPassword") !== null) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const userphone = LoginPassword.phone;

            const DRIVER_URL = "https://xn--80aaggtieo3biv.xn--p1ai/gettravelwhereuserdriver";

            axios.post(DRIVER_URL, { userphone }, { headers })
                .then((response) => {
                    setMyDriverData(response.data);
                    setIsLoading(true);
                });
        }
    }

    function gettingThisRoute() {
        let paramsId = parseInt(params.myRouteID);

        for (var i = 0; i < myDriverData.length; i++) {
            if (myDriverData[i].id == paramsId) {
                setThisDriverData(myDriverData[i]);
            }
        }
    }

    function includeData() {
        document.getElementById('where-input').value = thisDriverData.departureplace;
        document.getElementById('somewhere-input').value = thisDriverData.arrivalplace;
    }

    return (
        <div className="universal-form">
            <h1 className="visually-hidden">Выбор поездки</h1>
            <section className={MyRoutesSelectedCSS.form_search_route}>
                <div className={MyRoutesSelectedCSS.form_search_route__container}>
                    <form className={MyRoutesSelectedCSS.form_search_route__wrapper} action="#">
                        <input className={MyRoutesSelectedCSS.form_search_route__where_input + " input"} type="text" name="where" placeholder=""
                            disabled id="where-input" />
                        <input className={MyRoutesSelectedCSS.form_search_route__somewhere_input + " input"} type="text" name="somewhere" placeholder=""
                            disabled id="somewhere-input" />
                    </form>
                </div>
                <div className={MyRoutesSelectedCSS.route_list}>
                    <div className={MyRoutesSelectedCSS.route_list__container}>
                        <MyRouteSelectedItem
                            id={thisDriverData.id}
                            autorname={thisDriverData.autorname}
                            autorphoto={thisDriverData.autorphoto}
                            departuretime={thisDriverData.departuretime}
                            arrivaltime={thisDriverData.arrivaltime}
                            membercount={thisDriverData.membercount}
                            weekday={thisDriverData.weekday}
                            price={thisDriverData.price}
                        />
                    </div>
                </div>
            </section>
        </div >
    )
};

export default MyRoutesSelected;