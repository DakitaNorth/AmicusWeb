import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RouteSelListCSS from './css/routeSelectedList.module.css';

import SearchParameters from "../routeSearchPage/searchParameters";
import RouteSelectedListItem from "./routeSelectedListItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const RouteSelectedList = () => {

    const [routesData, setRoutesData] = useState([]); 

    useEffect(() => {
        gettingRoutesData();
    }, []);

    useLayoutEffect(() => {
        includeData();
    })

    function gettingRoutesData() {
        let departureplace = JSON.parse(localStorage.getItem("SearchDepartureplace"));
        let arrivalplace = JSON.parse(localStorage.getItem("SearchArrivalplace"));
        let departuretime = JSON.parse(localStorage.getItem("SearchDepartureTime"));
        let arrivaltime = JSON.parse(localStorage.getItem("SearchArrivalTime"));
        let membercount = JSON.parse(localStorage.getItem("SearchHumanParameter"));
        let weekday = JSON.parse(localStorage.getItem("SearchDaysParameter"));

        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/searchtravel";
        axios.post(API_URL, { departureplace, arrivalplace, departuretime, arrivaltime, membercount, weekday }, { headers })
            .then((response) => {
                setRoutesData(response.data);
                console.log(response.data);
            });
    };

    function includeData() {
        document.getElementById('where-input').value = JSON.parse(localStorage.getItem("SearchDepartureplace"));
        document.getElementById('somewhere-input').value = JSON.parse(localStorage.getItem("SearchArrivalplace"));
    }

    const routeStandart = routesData.map((item, pos) => {
        return (
            <RouteSelectedListItem
                key={pos}
                id={item.id}
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