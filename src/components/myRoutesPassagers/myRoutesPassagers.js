import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyRoutesPassagersCSS from './css/myRoutesPassagers.module.css';

import MyRoutesPassagerItem from "./myRoutesPassagersItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const MyRoutesPassagers = () => {
    const params = useParams();

    const [myRoutePassagers, setMyRoutePassagers] = useState([]);

    useEffect(() => {
        gettingData();
    }, []);

    function gettingData() {
        let paramsId = parseInt(params.myRoutesPassagersID);

        const PASSAGERS_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getallpassengerintravel/" + paramsId;

        axios.get(PASSAGERS_URL, { headers })
            .then((response) => {
                if (Array.isArray(response.data) && response.data.length) {
                    setMyRoutePassagers(response.data);
                    console.log(response.data);
                }
                else {
                    console.log(response.data);
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