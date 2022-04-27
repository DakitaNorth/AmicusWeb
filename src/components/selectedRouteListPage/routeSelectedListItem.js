import React from "react";
import { NavLink } from "react-router-dom";
import RouteSelLisItemCSS from './css/routeSelectedListItem.module.css';
import avatar from "../../img/routeHistory/Group.png";

const RouteSelectedListItem = props => {
    return (
        <li key={props.pos} id={props.id} className={RouteSelLisItemCSS.route__item + " " + RouteSelLisItemCSS.route}>
            <div className={RouteSelLisItemCSS.route__shield}>
                <div className={RouteSelLisItemCSS.route__wrapper}>
                    <NavLink to={"/user-profile/" + props.autor}>
                        <div className={RouteSelLisItemCSS.route_avatar}>
                            <img className={RouteSelLisItemCSS.route_avatar__img} src={props.autorphoto} alt="Фотография водителя" />
                            <span className={RouteSelLisItemCSS.route_avater__name}>{props.autorname}</span>
                        </div>
                    </NavLink>
                    <div className={RouteSelLisItemCSS.route_information}>
                        <div className={RouteSelLisItemCSS.route_information__item_where}>
                            <span className={RouteSelLisItemCSS.route_information__adress}>{props.departureplace}</span>
                            <span className={RouteSelLisItemCSS.route_information__time}>{props.departuretime}</span>
                        </div>
                        <div className={RouteSelLisItemCSS.route_information__item_somewhere}>
                            <span className={RouteSelLisItemCSS.route_information__adress}>{props.arrivalplace}</span>
                            <span className={RouteSelLisItemCSS.route_information__time}>{props.arrivaltime}</span>
                        </div>
                    </div>
                </div>
                <NavLink to={"/selected-route/" + props.id} className={RouteSelLisItemCSS.route_button}>
                    <span className={RouteSelLisItemCSS.route_list__text}>Смотреть</span>
                    <span className={RouteSelLisItemCSS.route_list__price}>{props.price} ₽</span>
                </NavLink>
            </div>
        </li>
    )
};

export default RouteSelectedListItem;