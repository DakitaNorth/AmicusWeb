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

    const [myPassagerData, setMyPassagerData] = useState([]);
    const [myDriverData, setMyDriverData] = useState([]);
    const [myData, setMyData] = useState([]);

    const [thisDriverData, setThisDriverData] = useState([]);

    const [isPassagerLoading, setIsPassagerLoading] = useState(false);
    const [isDriverLoading, setIsDriverLoading] = useState(false);

    useEffect(() => {
        gettingData();
    }, []);

    useLayoutEffect(() => {
        if (isPassagerLoading && isDriverLoading) {
            gettingThisRoute();
            includeData();
        }
    })

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
                    setIsPassagerLoading(true);
                });

            axios.post(DRIVER_URL, { userphone }, { headers })
                .then((response) => {
                    if (Array.isArray(response.data) && response.data.length) {
                        for (var i = 0; i <= response.data.length - 1; i++) {
                            response.data[i].autorname = "Вы";
                        }
                        setMyDriverData(response.data);
                    }
                    setIsDriverLoading(true);
                });
            
            console.log(myPassagerData);
            console.log(myDriverData); 
            console.log(myData);
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