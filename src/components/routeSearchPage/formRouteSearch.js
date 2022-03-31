import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import FormRouteSCSS from './css/formRouteSearch.module.css';

const FormRouteSearch = () => {

    useLayoutEffect(() => {
        includeData();
    })

    function gettingWhere() {
        let departureplace = document.getElementById("where-input").value;
        localStorage.setItem("SearchDepartureplace", JSON.stringify(departureplace));
    }

    function gettingSomewere() {
        let arrivalplace = document.getElementById("somewhere-input").value;
        localStorage.setItem("SearchArrivalplace", JSON.stringify(arrivalplace));
    }

    function includeData() {
        document.getElementById('where-input').value = JSON.parse(localStorage.getItem("SearchDepartureplace"));
        document.getElementById('somewhere-input').value = JSON.parse(localStorage.getItem("SearchArrivalplace"));
    }

    return (
        <div className="universal-form">
            <h1 className={FormRouteSCSS.page_main__heading}>Куда поедем?</h1>
            <section className={FormRouteSCSS.form_search_route}>
                <div className={FormRouteSCSS.form_search_route__container}>
                    <form className={FormRouteSCSS.form_search_route__wrapper} action="#">
                        <label htmlFor="where-input">Откуда</label>
                        <input className={FormRouteSCSS.form_search_route__where_input + " input"} onChange={gettingWhere} type="text" name="where"
                            id="where-input" />
                        <label htmlFor="somewhere-input">Куда</label>
                        <input className={FormRouteSCSS.form_search_route__somewhere_input + " input"} onChange={gettingSomewere} type="text" name="somewhere"
                            id="somewhere-input" />
                        <NavLink to="/selected-route-list" className={FormRouteSCSS.time_form__button + " button"}>Поиск</NavLink>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default FormRouteSearch;