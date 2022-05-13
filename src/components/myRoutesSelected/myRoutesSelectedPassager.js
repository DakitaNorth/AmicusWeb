import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyRoutesSelectedCSS from './css/myRoutesSelected.module.css';

import MyRoutesSelectedItemPassager from "./myRoutesSelectedItemPassager";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const MyRoutesSelected = () => {

    const params = useParams();

    const [myData, setMyData] = useState([]);
    const [thisRouteData, setThisRouteData] = useState([]);

    useEffect(() => {
        gettingData();
        gettingThisRoute();
        includeData();
    }, [myData]);

    function gettingData() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const userId = LoginPassword.id;

            const PASSAGER_URL = "https://xn--80aaggtieo3biv.xn--p1ai/gettravelwhereuserpassenger/" + userId;

            axios.get(PASSAGER_URL, { headers })
                .then((response) => {
                    if (Array.isArray(response.data) && response.data.length) {
                        setMyData(response.data);
                    }
                    else {
                        console.log(response.data);
                    }
                });
        }
    }

    function gettingThisRoute() {
        let paramsId = parseInt(params.myRoutePassagerID);

        for (var i = 0; i < myData.length; i++) {
            if (myData[i].id === paramsId) {
                setThisRouteData(myData[i]);
            }
        }
    }

    function includeData() {
        document.getElementById('where-input').value = thisRouteData.departureplace;
        document.getElementById('somewhere-input').value = thisRouteData.arrivalplace;
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
                        <MyRoutesSelectedItemPassager
                            id={thisRouteData.id}
                            autor={thisRouteData.autor}
                            autorname={thisRouteData.autorname}
                            autorphoto={thisRouteData.autorphoto}
                            departuretime={thisRouteData.departuretime}
                            arrivaltime={thisRouteData.arrivaltime}
                            membercount={thisRouteData.membercount}
                            weekday={thisRouteData.weekday}
                            price={thisRouteData.price}
                        />
                    </div>
                </div>
            </section>
        </div >
    )
};

export default MyRoutesSelected;