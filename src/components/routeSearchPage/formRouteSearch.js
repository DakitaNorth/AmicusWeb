import React, { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FormRouteSCSS from './css/formRouteSearch.module.css';

import ValidError from "../validError/validError";

const FormRouteSearch = () => {
    const navigate = useNavigate();

    const [whereDirty, setWhereDirty] = useState(false);
    const [somewhereDirty, setSomewhereDirty] = useState(false);
    const [searchDirty, setSearchDirty] = useState(false);

    const [searchError, setSearchError] = useState("Данные поиска некорректны");

    useLayoutEffect(() => {
        includeData();
    })

    function gettingWhere() {
        let departureplaceInput = document.getElementById("where-input");
        let departureplace = document.getElementById("where-input").value;
        sessionStorage.setItem("SearchDepartureplace", JSON.stringify(departureplace));

        if (departureplace !== "") {
            departureplaceInput.classList.remove(FormRouteSCSS.not_valid_input);
            setWhereDirty(true);
        }
    }

    function gettingSomewere() {
        let arrivalplaceInput = document.getElementById("somewhere-input");
        let arrivalplace = document.getElementById("somewhere-input").value;
        sessionStorage.setItem("SearchArrivalplace", JSON.stringify(arrivalplace));

        if (arrivalplace !== "") {
            arrivalplaceInput.classList.remove(FormRouteSCSS.not_valid_input);
            setSomewhereDirty(true);
        }
    }

    function includeData() {
        document.getElementById('where-input').value = JSON.parse(sessionStorage.getItem("SearchDepartureplace"));
        document.getElementById('somewhere-input').value = JSON.parse(sessionStorage.getItem("SearchArrivalplace"));
    }

    function searchRoute(e) {
        e.preventDefault();
        if (whereDirty && somewhereDirty) {
            navigate("/selected-route-list");
        }
        else {
            setSearchDirty(true);
            document.getElementById("where-input").classList.add(FormRouteSCSS.not_valid_input);
            document.getElementById("somewhere-input").classList.add(FormRouteSCSS.not_valid_input);
        }
    }

    return (
        <div className="universal-form">
            <h1 className={FormRouteSCSS.page_main__heading}>Куда поедем?</h1>
            <section className={FormRouteSCSS.form_search_route}>
                <div className={FormRouteSCSS.form_search_route__container}>
                    <form onSubmit={searchRoute} className={FormRouteSCSS.form_search_route__wrapper} action="#">
                        {(searchDirty && searchError) && <ValidError error={searchError} ifVisible={searchDirty}></ValidError>}
                        <label htmlFor="where-input">Откуда</label>
                        <input className={FormRouteSCSS.form_search_route__where_input} onChange={gettingWhere} type="text" name="where"
                            id="where-input" />
                        <label htmlFor="somewhere-input">Куда</label>
                        <input className={FormRouteSCSS.form_search_route__somewhere_input} onChange={gettingSomewere} type="text" name="somewhere"
                            id="somewhere-input" />
                        <button to="/selected-route-list" className={FormRouteSCSS.time_form__button + " button"}>Поиск</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default FormRouteSearch;