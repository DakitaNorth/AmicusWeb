import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import MyRoutesSCSS from './css/myRoutesSelector.module.css';

import MyRoutesItem from "./myRoutesItem";

const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
const phone = LoginPassword.phone;

const userphone = phone;

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

class MyRoutesSelector extends Component {

    state = {
        myRoutesData: []
    }

    componentDidMount() {
        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getallusertravel";
        axios.post(API_URL, { userphone }, { headers })
            .then((response) => {
                this.setState({
                    myRoutesData: response.data
                });
                console.log(this.state);
            });
    }

    // myRoutesFilter() {
    //     if (document.getElementById('all-radio').checked) {

    //     }
    //     else if (document.getElementById('driver-radio').checked) {
    //     }
    //     else if (document.getElementById('passenger-radio').checked) {
    //     }
    // }


    render() {
        const myRouteStandart = this.state.myRoutesData.map((item) => {
            return (
                <MyRoutesItem
                    id={item.id}
                    departureplace={item.departureplace}
                    departuretime={item.departuretime}
                    arrivalplace={item.arrivalplace}
                    arrivaltime={item.arrivaltime}
                />
            )
        });
        return (
            <div className="universal-form">
                <h1 className={MyRoutesSCSS.page_main__heading}>Мои поездки</h1>
                <section className={MyRoutesSCSS.my_routes}>
                    <div className={MyRoutesSCSS.my_routes__container}>
                        <form className={MyRoutesSCSS.my_routes__wrapper} action="#">
                            <div className={MyRoutesSCSS.my_routes__selector}>
                                <label className={MyRoutesSCSS.my_routes__label + " " + MyRoutesSCSS.my_routes__label_left + " " + MyRoutesSCSS.my_routes__label_active} htmlFor="all-radio">
                                    <input className={MyRoutesSCSS.my_routes__radiobutton + " visually-hidden"} type="radio" name="radio" id="all-radio" />
                                    Все 
                                </label>
                                <label className={MyRoutesSCSS.my_routes__label} htmlFor="driver-radio">
                                    <input className={MyRoutesSCSS.my_routes__radiobutton + " visually-hidden"} type="radio" name="radio" id="driver-radio" />
                                    Водитель
                                </label>
                                <label className={MyRoutesSCSS.my_routes__label + " " + MyRoutesSCSS.my_routes__label_right} htmlFor="passenger-radio">
                                    <input className={MyRoutesSCSS.my_routes__radiobutton + " visually-hidden"} type="radio" name="radio" id="passenger-radio" />
                                    Пассажир
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className={MyRoutesSCSS.my_routes__list}>
                        {myRouteStandart}
                    </div>
                </section>
            </div>
        )
    }
};

export default MyRoutesSelector;