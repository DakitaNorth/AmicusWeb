import React from "react";
import { NavLink } from "react-router-dom";
import MyRoutesSelectedCSS from './css/routeSelected.module.css';

import MyRoutesItem from "./myRoutesItem";
import MyRouteSelectedItem from "./myRoutesSelectedItem";
//import MyRouteSelectedItemDriver from "./myRoutesSelectedItemDrive";

const MyRoutesSelected = () => ( 
    <div className="universal-form">
        <h1 className="visually-hidden">Выбор поездки</h1>
        <section className={MyRoutesSelectedCSS.form_search_route}>
            <div className={MyRoutesSelectedCSS.form_search_route__container}>
                <form className={MyRoutesSelectedCSS.form_search_route__wrapper} action="#">
                    <input className={MyRoutesSelectedCSS.form_search_route__where_input + " input"} type="text" name="where" placeholder=""
                        id="where-input" />
                    <input className={MyRoutesSelectedCSS.form_search_route__somewhere_input + " input"} type="text" name="somewhere" placeholder=""
                        id="somewhere-input" />
                </form>
            </div>
            <div className={MyRoutesSelectedCSS.route_list}>
                <div className={MyRoutesSelectedCSS.route_list__container}>
                    <ul className={MyRoutesSelectedCSS.route_list__list}>
                        <li className={MyRoutesSelectedCSS.route__item + " " + MyRoutesSelectedCSS.route}>
                            <MyRouteSelectedItem />
                        </li>
                        <li className={MyRoutesSelectedCSS.route__item + " " + MyRoutesSelectedCSS.route}>
                            <MyRoutesItem />
                        </li>
                        <li className={MyRoutesSelectedCSS.route__item + " " + MyRoutesSelectedCSS.route}>
                            <MyRoutesItem />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div >
);

export default MyRoutesSelected;