import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import RouteSelCSS from './css/routeSelected.module.css';

import Parameters from "./parameters";
import RouteSelectedItem from "./routeSelectedItem";
import RouteSelectedListItem from "./routeSelectedListItem";

const where = JSON.parse(localStorage.getItem("departureplace"));
const somewhere = JSON.parse(localStorage.getItem("arrivalplace"));
const daysParameter = JSON.parse(localStorage.getItem("daysParameter"));
const humanParameter = JSON.parse(localStorage.getItem("humanParameter"));
const departureTime = JSON.parse(localStorage.getItem("departureTime"));
const arrivalTime = JSON.parse(localStorage.getItem("arrivalTime"));

const departureplace = where;
const arrivalplace = somewhere;
const weekday = daysParameter;
const membercount = humanParameter;
const departuretime = departureTime;
const arrivaltime = arrivalTime;

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

class RouteSelected extends Component {

    state = {
        routeSearchData: []
    }

    componentDidMount() {
        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/searchtravel";
        axios.post(API_URL, { departureplace, arrivalplace, departuretime, arrivaltime, membercount, weekday }, { headers })
            .then((response) => {
                this.setState({
                    routeSearchData: response.data
                });
                console.log(this.state);
            });
    }

    render() {
        const routeStandart = this.state.routeSearchData.map((item) => {
            return (
                <RouteSelectedListItem
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
                            <input className={RouteSelCSS.form_search_route__where_input + " input"} type="text" name="where" placeholder="" value={departureplace} disabled
                                id="where-input" />
                            <input className={RouteSelCSS.form_search_route__somewhere_input + " input"} type="text" name="somewhere" placeholder=""  value={arrivalplace} disabled
                                id="somewhere-input" />
                        </form>
                    </div>
                    <Parameters />
                    <div className={RouteSelCSS.route_list}>
                        <div className={RouteSelCSS.route_list__container}>
                            <ul className={RouteSelCSS.route_list__list}>
                                <li className={RouteSelCSS.route__item + " " + RouteSelCSS.route}>
                                    <RouteSelectedItem />
                                </li>
                                {routeStandart}
                            </ul>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
};

export default RouteSelected;