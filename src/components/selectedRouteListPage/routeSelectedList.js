import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import RouteSelListCSS from './css/routeSelectedList.module.css';

import SearchParameters from "../routeSearchPage/searchParameters";
import RouteSelectedListItem from "./routeSelectedListItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const RouteSelectedList = () => {

    const [routeSearchData, setRouteSearchData] = useState([]);
    const [serviceData, setServiceData] = useState({});

    // useEffect(() => {
    //     setSearchData();
    //     gettingRoutesData();
    // }, []);

    function gettingRoutesData() {
        let departureplace = serviceData.departureplace;
        let arrivalplace = serviceData.arrivalplace;
        let weekday = serviceData.weekday;
        let membercount = serviceData.membercount;
        let departuretime = serviceData.departuretime;
        let arrivaltime = serviceData.arrivaltime;

        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/searchtravel";
        axios.post(API_URL, { departureplace, arrivalplace, departuretime, arrivaltime, membercount, weekday }, { headers })
            .then((response) => {
                setRouteSearchData(response.data);
                console.log(routeSearchData);
            });
    }

    function setSearchData() {
        setServiceData({
            departureplace: JSON.parse(localStorage.getItem("SearchDepartureplace")),
            arrivalplace: JSON.parse(localStorage.getItem("SearchArrivalplace")),
            weekday: JSON.parse(localStorage.getItem("SearchDaysParameter")),
            membercount: JSON.parse(localStorage.getItem("SearchHumanParameter")),
            departuretime: JSON.parse(localStorage.getItem("SearchDepartureTime")),
            arrivaltime: JSON.parse(localStorage.getItem("SearchArrivalTime"))
        });
    }


    const routeStandart = routeSearchData.map((item) => {
        return (
            <RouteSelectedListItem
                autorname={item.autorname}
                autorphoto={item.autorphoto}
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
                        <input className={RouteSelListCSS.form_search_route__where_input + " input"} type="text" name="where" placeholder="" value={serviceData.departureplace} disabled
                            id="where-input" />
                        <input className={RouteSelListCSS.form_search_route__somewhere_input + " input"} type="text" name="somewhere" placeholder="" value={serviceData.arrivalplace} disabled
                            id="somewhere-input" />
                    </form>
                </div>
                <SearchParameters />
                <div className={RouteSelListCSS.route_list}>
                    <div className={RouteSelListCSS.route_list__container}>
                        <ul className={RouteSelListCSS.route_list__list}>
                            {/* {routeStandart} */}
                        </ul>
                    </div>
                </div>
            </section>
        </div >
    )
};

export default RouteSelectedList;