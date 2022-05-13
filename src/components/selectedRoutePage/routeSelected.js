import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RouteSelCSS from './css/routeSelected.module.css';

import SearchParameters from "../routeSearchPage/searchParameters";
import RouteSelectedItem from "./routeSelectedItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const RouteSelected = () => {

    const params = useParams();

    const [routesData, setRoutesData] = useState([]);
    const [thisRoutesData, setThisRoutesData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        gettingRoutesData();
        gettingThisRoute();
        includeData();
        console.log(thisRoutesData);
    }, [isLoading]);

    function gettingRoutesData() {
        let departureplace = JSON.parse(sessionStorage.getItem("SearchDepartureplace"));
        let arrivalplace = JSON.parse(sessionStorage.getItem("SearchArrivalplace"));
        let departuretime = JSON.parse(sessionStorage.getItem("SearchDepartureTime"));
        let arrivaltime = JSON.parse(sessionStorage.getItem("SearchArrivalTime"));
        let membercount = JSON.parse(sessionStorage.getItem("SearchHumanParameter"));
        let weekday = JSON.parse(sessionStorage.getItem("SearchDaysParameter"));

        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/searchtravel";
        axios.post(API_URL, { departureplace, arrivalplace, departuretime, arrivaltime, membercount, weekday }, { headers })
            .then((response) => {
                setRoutesData(response.data);
                setIsLoading(true);
            });
    };

    function gettingThisRoute() {
        let paramsId = parseInt(params.selRouteID);

        for (var i = 0; i < routesData.length; i++) {
            if (routesData[i].id === paramsId) {
                setThisRoutesData(routesData[i]);
            }
        }
    }

    function includeData() {
        document.getElementById('where-input').value = JSON.parse(sessionStorage.getItem("SearchDepartureplace"));
        document.getElementById('somewhere-input').value = JSON.parse(sessionStorage.getItem("SearchArrivalplace"));
    }

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
                        <RouteSelectedItem
                            key={thisRoutesData.id}
                            id={thisRoutesData.id}
                            autor={thisRoutesData.autor}
                            autorname={thisRoutesData.autorname}
                            autorphoto={thisRoutesData.autorphoto}
                            departuretime={thisRoutesData.departuretime}
                            arrivaltime={thisRoutesData.arrivaltime}
                            membercount={thisRoutesData.membercount}
                            weekday={thisRoutesData.weekday}
                            price={thisRoutesData.price}
                        />
                    </div>
                </div>
            </section>
        </div >
    )
};

export default RouteSelected;