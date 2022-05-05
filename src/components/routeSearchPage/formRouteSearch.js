import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FormRouteSCSS from './css/formRouteSearch.module.css';

import ValidError from "../validError/validError";

const FormRouteSearch = () => {
    const navigate = useNavigate();

    const [searchDirty, setSearchDirty] = useState(false);
    const [searchError, setSearchError] = useState("");

    useEffect(() => {
        let departureplaceInput = document.getElementById("where-input");
        let arrivalplaceInput = document.getElementById("somewhere-input");

        departureplaceInput.onfocus = function () {
            departureplaceInput.classList.remove(FormRouteSCSS.not_valid_input);
        }

        arrivalplaceInput.onfocus = function () {
            arrivalplaceInput.classList.remove(FormRouteSCSS.not_valid_input);
        }

        arrivalplaceInput.onfocus = function () {
            arrivalplaceInput.classList.remove(FormRouteSCSS.not_valid_input);
        }
    });

    useLayoutEffect(() => { 
        includeData();
    });

    function gettingWhere() {
        let departureplace = document.getElementById("where-input").value;
        sessionStorage.setItem("SearchDepartureplace", JSON.stringify(departureplace));
    };

    function gettingSomewere() {
        let arrivalplace = document.getElementById("somewhere-input").value;
        sessionStorage.setItem("SearchArrivalplace", JSON.stringify(arrivalplace));
    };

    function includeData() {
        document.getElementById('where-input').value = JSON.parse(sessionStorage.getItem("SearchDepartureplace"));
        document.getElementById('somewhere-input').value = JSON.parse(sessionStorage.getItem("SearchArrivalplace"));
    };

    function searchRoute(e) {
        e.preventDefault();

        let departureplace = JSON.parse(sessionStorage.getItem("SearchDepartureplace"));
        let arrivalplace = JSON.parse(sessionStorage.getItem("SearchArrivalplace"));

        console.log(departureplace);
        console.log(arrivalplace);

        if (departureplace !== "" && arrivalplace !== "") {
            navigate("/selected-route-list");
        }
        else {
            setSearchDirty(true);
            setTimeout(() => setSearchDirty(false), 3000);
            setSearchError("Данные поиска заполнены некорректно");
            valueError();
        }
    };

    function valueError() {
        document.getElementById("where-input").classList.add(FormRouteSCSS.not_valid_input);
        document.getElementById("somewhere-input").classList.add(FormRouteSCSS.not_valid_input);
        document.getElementById("search-button").classList.add(FormRouteSCSS.not_valid_button);

        setTimeout(() => document.getElementById("search-button").classList.remove(FormRouteSCSS.not_valid_button), 2500);
    };

    return (
        <div className="universal-form">
            {(searchDirty && searchError) && <ValidError error={searchError}></ValidError>}
            <h1 className={FormRouteSCSS.page_main__heading}>Куда поедем?</h1>
            <section className={FormRouteSCSS.form_search_route}>
                <div className={FormRouteSCSS.form_search_route__container}>
                    <form onSubmit={searchRoute} className={FormRouteSCSS.form_search_route__wrapper} action="#">
                        <label htmlFor="where-input">Откуда</label>
                        <input className={FormRouteSCSS.form_search_route__where_input} onChange={gettingWhere} type="text" name="where"
                            id="where-input" /> 
                        <label htmlFor="somewhere-input">Куда</label>
                        <input className={FormRouteSCSS.form_search_route__somewhere_input} onChange={gettingSomewere} type="text" name="somewhere"
                            id="somewhere-input" />
                        <button to="/selected-route-list" className={FormRouteSCSS.time_form__button} id="search-button">Поиск</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default FormRouteSearch;