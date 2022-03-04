import React from "react";
import { NavLink } from "react-router-dom";
import RouteStoryItemCSS from './css/routeStoryItem.module.css';
import avatar from "../../img/routeHistory/Group.png";

const RouteStoryItem = () => (
    <li className={RouteStoryItemCSS.route_story__item}>
        <div className={RouteStoryItemCSS.route_avatar}>
            <img className={RouteStoryItemCSS.route_avatar__img} src={avatar} alt="Фотография водителя" />
            <span className={RouteStoryItemCSS.route_avater__name}>Игорь</span>
        </div>
        <div className={RouteStoryItemCSS.route_information}>
            <div className={RouteStoryItemCSS.route_information__item_where}>
                <span className={RouteStoryItemCSS.route_information__adress}>Салтыкова-Щедрина, 107/103</span>
                <span className={RouteStoryItemCSS.route_information__time}>7:00</span>
            </div>
            <div className={RouteStoryItemCSS.route_information__item_somewhere}>
                <span className={RouteStoryItemCSS.route_information__adress}>Грабцевское Шоссе, 126</span>
                <span className={RouteStoryItemCSS.route_information__time}>17:00</span>
            </div>
            <div className={RouteStoryItemCSS.route_information__item_something}>
                <span className={RouteStoryItemCSS.route_information__date}>01.11.2021</span>
                <span className={RouteStoryItemCSS.route_information__price}>80₽</span>
            </div>
        </div>
    </li>
);

export default RouteStoryItem;