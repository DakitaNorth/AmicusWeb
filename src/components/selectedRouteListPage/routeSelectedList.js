import React, { Component } from "react";
import axios from "axios";
import RouteSelListCSS from './css/routeSelectedList.module.css';

import Parameters from "../A1General/parameters";
import RouteSelectedListItem from "./routeSelectedListItem";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

class RouteSelectedList extends Component {

    state = {
        routeSearchData: [], 
        serviceData: {
            departureplace: JSON.parse(localStorage.getItem("departureplace")),
            arrivalplace: JSON.parse(localStorage.getItem("arrivalplace")),
            weekday: JSON.parse(localStorage.getItem("daysParameter")),
            membercount: JSON.parse(localStorage.getItem("humanParameter")),
            departuretime: JSON.parse(localStorage.getItem("departureTime")),
            arrivaltime: JSON.parse(localStorage.getItem("arrivalTime"))
        }
    } 

    componentDidMount() {
        let departureplace = this.state.serviceData.departureplace;
        let arrivalplace = this.state.serviceData.arrivalplace;
        let weekday = this.state.serviceData.weekday;
        let membercount = this.state.serviceData.membercount;
        let departuretime = this.state.serviceData.departuretime;
        let arrivaltime = this.state.serviceData.arrivaltime;

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
                            <input className={RouteSelListCSS.form_search_route__where_input + " input"} type="text" name="where" placeholder="" value={this.state.serviceData.departureplace} disabled
                                id="where-input" />
                            <input className={RouteSelListCSS.form_search_route__somewhere_input + " input"} type="text" name="somewhere" placeholder=""  value={this.state.serviceData.arrivalplace} disabled
                                id="somewhere-input" />
                        </form>
                    </div>
                    <Parameters />
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
    }

};

export default RouteSelectedList;