import React from "react";
import { NavLink } from "react-router-dom";
import MyRoutesItemSCSS from './css/myRoutesItem.module.css';
import avatar from "../../img/routeHistory/Group.png";

const MyRoutesItem = props => { 
    return (
        <div id={props.id} className={MyRoutesItemSCSS.route_driver__item}>
            <div className={MyRoutesItemSCSS.route_driver__shield}>
                <div className={MyRoutesItemSCSS.route_driver_avatar}> 
                    <img className={MyRoutesItemSCSS.route_driver_avatar__img} src={props.autorphoto} alt="Фотография водителя" />
                    <span className={MyRoutesItemSCSS.route_driver__name}>{props.autorname}</span>
                </div>
                <div className={MyRoutesItemSCSS.route_driver_information}>
                    <div className={MyRoutesItemSCSS.route_driver_information__item + " " + MyRoutesItemSCSS.route_driver_information__item_where}>
                        <span className={MyRoutesItemSCSS.route_driver_information__adress}>{props.departureplace}</span>
                        <span className={MyRoutesItemSCSS.route_driver_information__time}>{props.departuretime}</span>
                    </div>
                    <div className={MyRoutesItemSCSS.route_driver_information__item + " " + MyRoutesItemSCSS.route_driver_information__item_somewhere}>
                        <span className={MyRoutesItemSCSS.route_driver_information__adress}>{props.arrivalplace}</span>
                        <span className={MyRoutesItemSCSS.route_driver_information__time}>{props.arrivaltime}</span>
                    </div>
                    <div className={MyRoutesItemSCSS.route_driver_information__item + " " + MyRoutesItemSCSS.route_driver_information__item_status}>
                        <span className={MyRoutesItemSCSS.route_driver_information__text}>Активна</span>
                    </div>
                </div>
            </div>
            <NavLink to={"/my-routes-passager/" + props.id} className={MyRoutesItemSCSS.route_driver_button}>Подробнее</NavLink>
        </div>
    )
};

export default MyRoutesItem;