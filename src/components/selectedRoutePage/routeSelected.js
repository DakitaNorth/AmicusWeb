import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import RouteSelCSS from './css/routeSelected.module.css';

import SearchParameters from "../routeSearchPage/searchParameters";
import RouteSelectedItem from "./routeSelectedItem";
import RouteSelectedListItem from "../selectedRouteListPage/routeSelectedListItem";

const departureplace = JSON.parse(localStorage.getItem("departureplace"));
const arrivalplace = JSON.parse(localStorage.getItem("arrivalplace"));
const weekday = JSON.parse(localStorage.getItem("daysParameter"));
const membercount = JSON.parse(localStorage.getItem("humanParameter"));
const departuretime = JSON.parse(localStorage.getItem("departureTime"));
const arrivaltime = JSON.parse(localStorage.getItem("arrivalTime"));

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const RouteSelected = () => {

    const [selRoutesData, setSelRoutesData] = useState([]);

    useEffect(() => {
        gettingSelRoutesData();
    }, []);

    useLayoutEffect(() => {
        includeData();
    })

    function gettingSelRoutesData() {
        let departureplace = JSON.parse(localStorage.getItem("SearchDepartureplace"));
        let arrivalplace = JSON.parse(localStorage.getItem("SearchArrivalplace"));
        let departuretime = JSON.parse(localStorage.getItem("SearchDepartureTime"));
        let arrivaltime = JSON.parse(localStorage.getItem("SearchArrivalTime"));
        let membercount = JSON.parse(localStorage.getItem("SearchHumanParameter"));
        let weekday = JSON.parse(localStorage.getItem("SearchDaysParameter"));

        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/searchtravel";
        axios.post(API_URL, { departureplace, arrivalplace, departuretime, arrivaltime, membercount, weekday }, { headers })
            .then((response) => {
                setSelRoutesData(response.data);
                console.log(response.data);
            });
    };

    function includeData() {
        document.getElementById('where-input').value = JSON.parse(localStorage.getItem("SearchDepartureplace"));
        document.getElementById('somewhere-input').value = JSON.parse(localStorage.getItem("SearchArrivalplace"));
    }

    const routeStandart = selRoutesData.map((item, pos) => {
        return (
            <RouteSelectedItem
                key={item.id}
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
            <section className={RouteSelCSS.form_search_route}>
                <div className={RouteSelCSS.form_search_route__container}>
                    <form className={RouteSelCSS.form_search_route__wrapper} action="#">
                        <input className={RouteSelCSS.form_search_route__where_input + " input"} type="text" name="where" placeholder="" disabled
                            id="where-input" />
                        <input className={RouteSelCSS.form_search_route__somewhere_input + " input"} type="text" name="somewhere" placeholder="" disabled
                            id="somewhere-input" />
                    </form>
                </div>
                <SearchParameters />
                <div className={RouteSelCSS.route_list}>
                    <div className={RouteSelCSS.route_list__container}>
                        <ul className={RouteSelCSS.route_list__list}>
                            <li className={RouteSelCSS.route__item + " " + RouteSelCSS.route}>
                                {routeStandart}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div >
    )
};

export default RouteSelected;