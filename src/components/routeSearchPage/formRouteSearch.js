import React from "react";
import { NavLink } from "react-router-dom";
import FormRouteSCSS from './css/formRouteSearch.module.css';

function gettingWhereSomewere() {
    const departureplace = document.getElementById("where-input").value;
    const arrivalplace = document.getElementById("somewhere-input").value;

    localStorage.setItem("departureplace", JSON.stringify(departureplace));
    localStorage.setItem("arrivalplace", JSON.stringify(arrivalplace));


    console.log(departureplace);
    console.log(arrivalplace);
}

const formRouteSearch = () => {
    return (
        <div className="universal-form">
            <h1 className={FormRouteSCSS.page_main__heading}>Куда поедем?</h1>
            <section className={FormRouteSCSS.form_search_route}>
                <div className={FormRouteSCSS.form_search_route__container}>
                    <form className={FormRouteSCSS.form_search_route__wrapper} action="#">
                        <label htmlFor="where-input">Откуда</label>
                        <input className={FormRouteSCSS.form_search_route__where_input + " input"} onChange={gettingWhereSomewere} type="text" name="where" placeholder=""
                            id="where-input" />
                        <label htmlFor="somewhere-input">Куда</label>
                        <input className={FormRouteSCSS.form_search_route__somewhere_input + " input"} onChange={gettingWhereSomewere} type="text" name="somewhere" placeholder=""
                            id="somewhere-input" />
                        <NavLink to="/selected-route-list" className={FormRouteSCSS.time_form__button + " button"}>Поиск</NavLink>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default formRouteSearch;