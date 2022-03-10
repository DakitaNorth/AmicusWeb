import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FormRouteSCSS from './css/formRouteSearch.module.css';

class formRouteSearch extends Component {

    gettingWhere() {
        let departureplace = document.getElementById("where-input").value;
        localStorage.setItem("departureplace", JSON.stringify(departureplace));
    }

    gettingSomewere() {
        let arrivalplace = document.getElementById("somewhere-input").value;
        localStorage.setItem("arrivalplace", JSON.stringify(arrivalplace));
    }

    componentDidMount() {
        document.getElementById('where-input').value = JSON.parse(localStorage.getItem("departureplace"));
        document.getElementById('somewhere-input').value = JSON.parse(localStorage.getItem("arrivalplace"));
    }

    render() {
        return (
            <div className="universal-form">
                <h1 className={FormRouteSCSS.page_main__heading}>Куда поедем?</h1>
                <section className={FormRouteSCSS.form_search_route}>
                    <div className={FormRouteSCSS.form_search_route__container}>
                        <form className={FormRouteSCSS.form_search_route__wrapper} action="#">
                            <label htmlFor="where-input">Откуда</label>
                            <input className={FormRouteSCSS.form_search_route__where_input + " input"} onChange={this.gettingWhere} type="text" name="where"
                                id="where-input" />
                            <label htmlFor="somewhere-input">Куда</label>
                            <input className={FormRouteSCSS.form_search_route__somewhere_input + " input"} onChange={this.gettingSomewere} type="text" name="somewhere"
                                id="somewhere-input" />
                            <NavLink to="/selected-route-list" className={FormRouteSCSS.time_form__button + " button"}>Поиск</NavLink>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
};

export default formRouteSearch;