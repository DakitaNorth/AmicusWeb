import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import RouteSelListCSS from './css/routeSelectedList.module.css';

import SearchParameters from "../routeSearchPage/searchParameters";
import RouteSelectedListItem from "./routeSelectedListItem";

import ValidError from "../validError/validError";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const RouteSelectedList = () => { 

    const [routesData, setRoutesData] = useState([]); 

    const [searchDirty, setSearchDirty] = useState(false);
    const [searchError, setSearchError] = useState("Поездки не найдены");

    useEffect(() => {
        gettingRoutesData();
    }, []);

    useLayoutEffect(() => {
        includeData();
    })

    function gettingRoutesData() {
        const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
        const owner = LoginPassword.phone;

        let responseCopy = [];

        let departureplace = JSON.parse(sessionStorage.getItem("SearchDepartureplace"));
        let arrivalplace = JSON.parse(sessionStorage.getItem("SearchArrivalplace"));
        let departuretime = JSON.parse(sessionStorage.getItem("SearchDepartureTime"));
        let arrivaltime = JSON.parse(sessionStorage.getItem("SearchArrivalTime"));
        let membercount = JSON.parse(sessionStorage.getItem("SearchHumanParameter"));
        let weekday = JSON.parse(sessionStorage.getItem("SearchDaysParameter"));

        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/searchtravel";
        axios.post(API_URL, { departureplace, arrivalplace, departuretime, arrivaltime, membercount, weekday }, { headers })
            .then((response) => {
                if (Array.isArray(response.data) && response.data.length) { 
                    for (var i = 0; i <= response.data.length - 1; i++) {
                        if (response.data[i].autor !== owner) {
                            responseCopy.push(response.data[i]); 
                            setRoutesData(responseCopy);
                        }
                    }
                } else {
                    console.log(response.data);
                    setSearchDirty(true);
                }
            });
    };

    function includeData() {
        document.getElementById('where-input').value = JSON.parse(sessionStorage.getItem("SearchDepartureplace"));
        document.getElementById('somewhere-input').value = JSON.parse(sessionStorage.getItem("SearchArrivalplace"));
    }

    const routeStandart = routesData.map((item, pos) => {
        return (
            <RouteSelectedListItem
                key={pos}
                id={item.id}
                autor={item.autor}
                autorphoto={item.autorphoto}
                autorname={item.autorname}
                departureplace={item.departureplace}
                departuretime={item.departuretime}
                arrivalplace={item.arrivalplace}
                arrivaltime={item.arrivaltime}
                price={item.price}
            />
        )
    });

    return (
        <div className="universal-form">
            <h1 className="visually-hidden">Выбор поездки</h1>
            <section className={RouteSelListCSS.form_search_route}>
                <div className={RouteSelListCSS.form_search_route__container}>
                    <form className={RouteSelListCSS.form_search_route__wrapper} action="#">
                        {(searchDirty && searchError) && <ValidError error={searchError} ifVisible={searchDirty}></ValidError>}
                        <input className={RouteSelListCSS.form_search_route__where_input + " input"} type="text" name="where" placeholder="" disabled
                            id="where-input" />
                        <input className={RouteSelListCSS.form_search_route__somewhere_input + " input"} type="text" name="somewhere" placeholder="" disabled
                            id="somewhere-input" />
                    </form>
                </div>
                <SearchParameters />
                <div className={RouteSelListCSS.route_list}>
                    <div className={RouteSelListCSS.route_list__container}>
                        <ul className={RouteSelListCSS.route_list__list}>
                            {routeStandart}
                        </ul>
                    </div>
                </div>
            </section>
        </div >
    )
};

export default RouteSelectedList;