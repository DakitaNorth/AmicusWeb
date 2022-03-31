import React, { useState, useEffect } from "react";
import axios from "axios";
import RouteSelListCSS from './css/routeSelectedList.module.css';

import SearchParameters from "../routeSearchPage/searchParameters";
import RouteSelectedListItem from "./routeSelectedListItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const RouteSelectedList = () => {

    const [routesData, setRoutesData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        // gettingRoutesData();
        // setSearchDatas();
    }, []);

    function setSearchDatas() {
        setSearchData({
            departureplace: JSON.parse(localStorage.getItem("SearchDepartureplace")),
            arrivalplace: JSON.parse(localStorage.getItem("SearchArrivalplace"))
        })
    }

    function gettingRoutesData() {
        let departureplace = JSON.parse(localStorage.getItem("SearchDepartureplace"));
        let arrivalplace = JSON.parse(localStorage.getItem("SearchArrivalplace"));
        let departuretime = JSON.parse(localStorage.getItem("SearchDepartureTime"));
        let arrivaltime = JSON.parse(localStorage.getItem("SearchArrivalTime"));
        let membercount = JSON.parse(localStorage.getItem("SearchDepartureplace"));
        let weekday = JSON.parse(localStorage.getItem("SearchHumanParameter"));

        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/searchtravelobject";
        axios.post(API_URL, { departureplace, arrivalplace, departuretime, arrivaltime, membercount, weekday }, { headers })
            .then((response) => {
                setRoutesData(response.data);
            });
    };

    // const routeStandart = routesData.map((item) => {
    //     return (
    //         <RouteSelectedListItem
    //             autorphoto={item.autorphoto}
    //             autorname={item.autorname}
    //             departureplace={item.departureplace}
    //             departuretime={item.departuretime}
    //             arrivalplace={item.arrivalplace}
    //             arrivaltime={item.arrivaltime}
    //             price={item.departuretime}
    //         />
    //     )
    // });

    return (
        <div className="universal-form">
            <h1 className="visually-hidden">Выбор поездки</h1>
            <section className={RouteSelListCSS.form_search_route}>
                <div className={RouteSelListCSS.form_search_route__container}>
                    <form className={RouteSelListCSS.form_search_route__wrapper} action="#">
                        <input className={RouteSelListCSS.form_search_route__where_input + " input"} type="text" name="where" placeholder="" value={searchData.departureplace} disabled
                            id="where-input" />
                        <input className={RouteSelListCSS.form_search_route__somewhere_input + " input"} type="text" name="somewhere" placeholder="" value={searchData.arrivalplace} disabled
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