import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyRoutesPassagersCSS from './css/myRoutesPassagers.module.css';

import MyRoutesPassagerItem from "./myRoutesPassagersItem";

import ValidError from "../validError/validError";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
}; 

const MyRoutesPassagers = () => {
    const params = useParams();

    const [myRoutePassagers, setMyRoutePassagers] = useState([]);

    const [myRoutePassagerDirty, setMyRoutePassagerDirty] = useState(false);
    const [myRoutePassagerError, setMyRoutePassagerError] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        gettingData();
    }, [isLoading]);

    function gettingData() {
        const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
        const userName = LoginPassword.name;

        let paramsId = parseInt(params.myRoutesPassagersID); 

        const PASSAGERS_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getallpassengerintravel/" + paramsId;

        axios.get(PASSAGERS_URL, { headers })
            .then((response) => {
                if (Array.isArray(response.data) && response.data.length) {
                    for (var i = 0; i <= response.data.length - 1; i++) {
                        if (response.data[i].name === userName) {
                            response.data[i].name = "Вы";
                        }
                    }
                    setMyRoutePassagers(response.data);
                    setIsLoading(true);
                    console.log(response.data);
                }
                else {
                    console.log(response.data);
                    setMyRoutePassagerError("Пассажиры в поездке отсутствуют");
                    setMyRoutePassagerDirty(true);
                    setTimeout(() => setMyRoutePassagerDirty(false), 3000);
                }
            });
    }

    const passagerStandart = myRoutePassagers.map((item) => {
        return (
            <MyRoutesPassagerItem
                key={item.id}
                id={item.id}
                name={item.name}
                phone={item.phone}
                photo={item.photo}
            />
        )
    });

    return (
        <div className="universal-form">
            {(myRoutePassagerDirty && myRoutePassagerError) && <ValidError error={myRoutePassagerError}></ValidError>}
            <h1 className={MyRoutesPassagersCSS.page_main__heading}>Попутчики поездки</h1>
            <section className={MyRoutesPassagersCSS.my_routes_passagers}>
                <ul className={MyRoutesPassagersCSS.my_routes_passagers__list}>
                    {passagerStandart}
                </ul>
            </section>
        </div >
    )
};

export default MyRoutesPassagers;