import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import MyRouteSelItemCSS from './css/myRoutesSelectedItem.module.css'; 
import avatar from "../../img/routeHistory/Group.png";

import ValidSuccess from "../validSuccess/validSuccess";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const MyRouteSelectedItem = props => { 
    const navigate = useNavigate();

    function deluserRoute() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const userId = LoginPassword.id;
            let travelid = props.id;

            const DELUSER_ROUTE_URL = "https://xn--80aaggtieo3biv.xn--p1ai/deluserfromtravel/" + travelid + "/" + userId;
    
            axios.get(DELUSER_ROUTE_URL, { headers })
                .then((response) => {
                    console.log(response.data);
                    navigate("/my-routes");
                });
        }
    }
    return (
        <div className={MyRouteSelItemCSS.route_selected__container}>
            <div className={MyRouteSelItemCSS.route_selected__wrapper}>
                <div className={MyRouteSelItemCSS.route_selected__shield}>
                    <NavLink to={"/user-profile/" + props.autor}>
                        <div className={MyRouteSelItemCSS.route_avatar}>
                            <img className={MyRouteSelItemCSS.route_avatar__img} src={props.autorphoto} alt="Фотография водителя" />
                            <span className={MyRouteSelItemCSS.route_avater__name}>{props.autorname}</span>
                        </div>
                    </NavLink>
                    <div className={MyRouteSelItemCSS.route_selected_information}>
                        <div className={MyRouteSelItemCSS.route_selected_information__item + " " + MyRouteSelItemCSS.route_selected_information__item_there}>
                            <span className={MyRouteSelItemCSS.route_information__text + " " + MyRouteSelItemCSS.route_information__text_label}>Туда</span>
                            <span className={MyRouteSelItemCSS.route_information__text + " " + MyRouteSelItemCSS.route_information__text_value}>{props.departuretime}</span>
                        </div>
                        <div className={MyRouteSelItemCSS.route_selected_information__item + " " + MyRouteSelItemCSS.route_selected_information__item_back}>
                            <span className={MyRouteSelItemCSS.route_information__text + " " + MyRouteSelItemCSS.route_information__text_label}>Обратно</span>
                            <span className={MyRouteSelItemCSS.route_information__text + " " + MyRouteSelItemCSS.route_information__text_value}>{props.arrivaltime}</span>
                        </div>
                        <div className={MyRouteSelItemCSS.route_selected_information__item + " " + MyRouteSelItemCSS.route_selected_information__item_price}>
                            <span className={MyRouteSelItemCSS.route_information__text + " " + MyRouteSelItemCSS.route_information__text_price + " " + MyRouteSelItemCSS.route_information__text_label}>Цена поездки</span>
                            <span className={MyRouteSelItemCSS.route_information__text + " " + MyRouteSelItemCSS.route_information__text_value}>{props.price}₽</span>
                        </div>
                        <div className={MyRouteSelItemCSS.route_selected_information__item + " " + MyRouteSelItemCSS.route_selected_information__item_places}>
                            <span className={MyRouteSelItemCSS.route_information__text + " " + MyRouteSelItemCSS.route_information__text_places + " " + MyRouteSelItemCSS.route_information__text_label}>Свободных мест</span>
                            <span className={MyRouteSelItemCSS.route_information__text + " " + MyRouteSelItemCSS.route_information__text_value}>{props.membercount}</span>
                        </div>
                        <span className={MyRouteSelItemCSS.route_selected_information__item + " " + MyRouteSelItemCSS.route_selected_information__item_days}>
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M9.58427 1.69228L10.2681 1.77744C11.8464 1.97401 13.0311 3.31545 13.0311 4.90597V13.7246C13.0311 15.2689 11.8808 16.5714 10.3483 16.7622C7.80299 17.0793 5.22814 17.0793 2.68279 16.7622C1.15032 16.5714 0 15.2689 0 13.7246V4.90597C0 3.31545 1.18474 1.97401 2.76306 1.77744L3.44686 1.69228C3.71772 0.716338 4.61263 0 5.67485 0H7.35628C8.4185 0 9.3134 0.716338 9.58427 1.69228ZM3.36287 2.97356L2.91891 3.02885C1.97192 3.14679 1.26108 3.95166 1.26108 4.90597V13.7246C1.26108 14.6327 1.9375 15.3986 2.83865 15.5108C5.28049 15.815 7.75063 15.815 10.1925 15.5108C11.0936 15.3986 11.7701 14.6327 11.7701 13.7246V4.90597C11.7701 3.95166 11.0592 3.14679 10.1122 3.02885L9.66825 2.97356V3.99341C9.66825 4.34165 9.38595 4.62395 9.03772 4.62395H3.99341C3.64517 4.62395 3.36287 4.34165 3.36287 3.99341V2.97356ZM4.62395 2.31197C4.62395 1.73158 5.09445 1.26108 5.67485 1.26108H7.35628C7.93668 1.26108 8.40718 1.73158 8.40718 2.31197V3.36287H4.62395V2.31197Z"
                                    fill="white" />
                                <path
                                    d="M9.66825 7.98682C9.66825 7.63858 9.38595 7.35628 9.03772 7.35628H3.99341C3.64517 7.35628 3.36287 7.63858 3.36287 7.98682C3.36287 8.33506 3.64517 8.61736 3.99341 8.61736H9.03772C9.38595 8.61736 9.66825 8.33506 9.66825 7.98682Z"
                                    fill="white" />
                                <path
                                    d="M8.82754 10.509C8.82754 10.1607 8.54524 9.87844 8.197 9.87844H3.99341C3.64517 9.87844 3.36287 10.1607 3.36287 10.509C3.36287 10.8572 3.64517 11.1395 3.99341 11.1395H8.197C8.54524 11.1395 8.82754 10.8572 8.82754 10.509Z"
                                    fill="white" />
                            </svg>
                            {props.weekday}
                        </span>
                    </div>
                </div>
                <div className={MyRouteSelItemCSS.route_selected__buttons}>
                    {/* <NavLink to="/" className={MyRouteSelItemCSS.route_selected__button + " " + MyRouteSelItemCSS.route_selected__button_map}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" rx="15" fill="#F1F5F6" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M11.0895 14.1975C11.0895 12.0396 12.8388 10.2903 14.9967 10.2903C17.1546 10.2903 18.9039 12.0396 18.9039 14.1975C18.9039 16.3554 17.1546 18.1047 14.9967 18.1047C12.8388 18.1047 11.0895 16.3554 11.0895 14.1975ZM14.9967 11.5241C13.5202 11.5241 12.3233 12.721 12.3233 14.1975C12.3233 15.6739 13.5202 16.8708 14.9967 16.8708C16.4731 16.8708 17.67 15.6739 17.67 14.1975C17.67 12.721 16.4731 11.5241 14.9967 11.5241Z"
                                fill="#3E4958" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8.02488 13.2572C8.31634 9.72126 11.2711 7 14.819 7H15.1743C18.7222 7 21.677 9.72126 21.9685 13.2572C22.1251 15.1566 21.5383 17.0427 20.3319 18.5181L16.3893 23.3398C15.6695 24.2201 14.3238 24.2201 13.6041 23.3398L9.66147 18.5181C8.45504 17.0427 7.86831 15.1566 8.02488 13.2572ZM14.819 8.23385C11.9133 8.23385 9.49327 10.4626 9.25457 13.3585C9.12426 14.9394 9.61257 16.5091 10.6167 17.7371L14.5593 22.5588C14.7853 22.8353 15.208 22.8353 15.4341 22.5588L19.3767 17.7371C20.3808 16.5091 20.8691 14.9394 20.7388 13.3585C20.5001 10.4626 18.0801 8.23385 15.1743 8.23385H14.819Z"
                                fill="#3E4958" />
                        </svg>
                        <span className={MyRouteSelItemCSS.route_selected__button_text}>Карта</span>
                    </NavLink> */}
                    <NavLink to="/messages" className={MyRouteSelItemCSS.route_selected__button + " " + MyRouteSelItemCSS.route_selected__button_chat}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" rx="15" fill="#F1F5F6" />
                            <path
                                d="M20.4921 13.6654C20.4582 13.6393 20.4242 13.6106 20.3877 13.5845L20.1059 13.3731L20.0432 13.7202C19.6414 15.9879 17.157 17.6972 14.2656 17.6972C13.6576 17.6972 13.06 17.6242 12.4911 17.478L12.1571 17.3815L12.1414 17.3893L12.0762 17.3736L12.0918 17.4154L9.53966 18.6758V15.7792L9.48486 15.7165C8.79592 14.9363 8.43058 14.0177 8.43058 13.0652C8.43058 10.5104 11.0454 8.43319 14.263 8.43319C15.299 8.43319 16.2724 8.64979 17.1179 9.02818C17.3919 9.16649 17.6946 9.34133 18.0078 9.55792C18.4357 9.85281 18.7828 10.1581 19.062 10.4321C19.717 11.1811 20.1007 12.0866 20.1007 13.0652C20.1007 13.2766 20.0824 13.4984 20.0432 13.7176L20.1059 13.3705L20.3877 13.5819C20.4242 13.608 20.4582 13.6367 20.4921 13.6654C20.5208 13.4619 20.5365 13.2609 20.5365 13.0652C20.5365 11.9692 20.1033 10.9567 19.37 10.1268C19.1377 9.88151 18.8402 9.60229 18.4697 9.32828C18.1017 9.05427 17.7494 8.85333 17.4467 8.70198C16.5125 8.25574 15.4269 8 14.2656 8C10.8105 8 8 10.273 8 13.0652C8 14.1012 8.38361 15.0955 9.10907 15.9436V19.3726L12.1988 17.846L12.2771 17.8695C12.9739 19.5031 14.8528 20.5939 16.9952 20.5939C17.5589 20.5939 18.1069 20.5182 18.6236 20.3694L21.1106 21.6012V18.8402C21.6847 18.167 21.99 17.3762 21.99 16.549C21.99 15.4634 21.4446 14.4196 20.4921 13.6654ZM20.7322 18.6132L20.6774 18.6758V20.8992L18.6654 19.9023L18.5819 19.9284C18.0808 20.0798 17.5485 20.1581 16.9979 20.1581C15.1633 20.1581 13.5428 19.3047 12.8199 17.9973C12.8251 17.9973 12.8277 17.9999 12.833 17.9999C12.8486 18.0025 12.8643 18.0052 12.8799 18.0078C13.0026 18.0313 13.1278 18.0495 13.2531 18.0652C13.2975 18.0704 13.3418 18.0756 13.3862 18.0808C13.4906 18.0913 13.5923 18.1017 13.6967 18.1095C13.7411 18.1122 13.7828 18.1174 13.8272 18.12C13.9707 18.1278 14.1169 18.133 14.263 18.133C14.357 18.133 14.4509 18.1304 14.5448 18.1278C14.5762 18.1278 14.6075 18.1252 14.6388 18.1226C14.7014 18.12 14.7641 18.1174 14.8241 18.1122C14.8606 18.1095 14.8971 18.1043 14.9337 18.1017C14.9885 18.0965 15.0459 18.0913 15.1007 18.0861C15.1398 18.0808 15.179 18.0756 15.2155 18.0704C15.2677 18.0626 15.3199 18.0574 15.3721 18.0495C15.4112 18.0443 15.4504 18.0365 15.4895 18.0313C15.5391 18.0234 15.5913 18.0156 15.6409 18.0052C15.68 17.9973 15.7218 17.9895 15.7609 17.9817C15.8105 17.9712 15.8601 17.9608 15.9071 17.9504C15.9462 17.9425 15.9853 17.9321 16.0271 17.9217C16.0741 17.9112 16.1236 17.8982 16.1706 17.8851C16.2098 17.8747 16.2489 17.8642 16.2881 17.8538C16.335 17.8408 16.382 17.8277 16.429 17.8147C16.4681 17.8042 16.5073 17.7912 16.5438 17.7781C16.5908 17.7625 16.6351 17.7494 16.6821 17.7338C16.7186 17.7207 16.7578 17.7077 16.7943 17.6946C16.8387 17.679 16.8856 17.6607 16.93 17.645C16.9665 17.632 17.0031 17.6163 17.0396 17.6033C17.084 17.585 17.1283 17.5667 17.1727 17.5485C17.2092 17.5328 17.2432 17.5172 17.2797 17.5015C17.3241 17.4806 17.3658 17.4624 17.4102 17.4415C17.4441 17.4258 17.478 17.4102 17.5119 17.3919C17.5563 17.371 17.5981 17.3475 17.6424 17.3267C17.6737 17.311 17.7077 17.2927 17.739 17.2745C17.7833 17.251 17.8251 17.2275 17.8669 17.2014C17.8982 17.1831 17.9295 17.1675 17.9582 17.1492C18.0026 17.1231 18.0443 17.097 18.0861 17.0709C18.1148 17.0527 18.1435 17.037 18.1722 17.0187C18.2165 16.99 18.2583 16.9613 18.3027 16.9326C18.3287 16.9144 18.3548 16.8987 18.3783 16.8804C18.4227 16.8491 18.4671 16.8152 18.5114 16.7839C18.5323 16.7682 18.5558 16.7526 18.5767 16.7369C18.6262 16.7004 18.6732 16.6612 18.7202 16.6221C18.7358 16.609 18.7515 16.5986 18.7672 16.5855C18.8272 16.536 18.8872 16.4838 18.9446 16.4316C18.9472 16.429 18.9472 16.429 18.9498 16.4264C19.0725 16.3168 19.1873 16.2019 19.2969 16.0845C19.3021 16.0793 19.3073 16.0715 19.3152 16.0636C19.3621 16.0114 19.4091 15.9592 19.4535 15.9044C19.4665 15.8914 19.477 15.8757 19.4874 15.8627C19.5265 15.8157 19.5631 15.7687 19.5996 15.7218C19.6127 15.7035 19.6257 15.6852 19.6414 15.667C19.6753 15.6226 19.7066 15.5782 19.7379 15.5339C19.7536 15.513 19.7666 15.4921 19.7797 15.4713C19.8084 15.4269 19.8371 15.3851 19.8658 15.3408C19.8815 15.3173 19.8945 15.2938 19.9075 15.2703C19.9336 15.2286 19.9597 15.1842 19.9832 15.1424C19.9963 15.1163 20.0093 15.0929 20.0224 15.0668C20.0459 15.025 20.0667 14.9806 20.0876 14.9389C20.1007 14.9128 20.1137 14.8867 20.1268 14.858C20.1476 14.8162 20.1659 14.7719 20.1842 14.7301C20.1972 14.7014 20.2077 14.6727 20.2181 14.6466C20.2364 14.6049 20.252 14.5631 20.2677 14.5188C20.2781 14.49 20.2885 14.4587 20.299 14.43C20.3146 14.3883 20.3277 14.3465 20.3407 14.3022C20.3512 14.2708 20.359 14.2395 20.3694 14.2082C20.3747 14.1899 20.3825 14.1691 20.3877 14.1508C21.1288 14.8084 21.549 15.667 21.549 16.5516C21.5542 17.2927 21.2698 18.0078 20.7322 18.6132Z"
                                fill="#3E4958" />
                            <path
                                d="M20.4921 13.6654C20.4582 13.6393 20.4242 13.6106 20.3877 13.5845L20.1059 13.3731L20.0432 13.7202C19.6414 15.9879 17.157 17.6972 14.2656 17.6972C13.6576 17.6972 13.06 17.6242 12.4911 17.478L12.1571 17.3815L12.1414 17.3893L12.0762 17.3736L12.0918 17.4154L9.53966 18.6758V15.7792L9.48486 15.7166C8.79592 14.9363 8.43058 14.0177 8.43058 13.0652C8.43058 10.5104 11.0454 8.43319 14.263 8.43319C15.299 8.43319 16.2724 8.64979 17.1179 9.02818C17.3919 9.16649 17.6946 9.34133 18.0078 9.55792C18.4357 9.85281 18.7828 10.1581 19.062 10.4321C19.717 11.1811 20.1007 12.0866 20.1007 13.0652C20.1007 13.2766 20.0824 13.4984 20.0432 13.7176L20.1059 13.3705L20.3877 13.5819C20.4242 13.608 20.4582 13.6367 20.4921 13.6654ZM20.4921 13.6654C20.5208 13.4619 20.5365 13.2609 20.5365 13.0652C20.5365 11.9692 20.1033 10.9567 19.37 10.1268C19.1377 9.88151 18.8402 9.60229 18.4697 9.32828C18.1017 9.05427 17.7494 8.85333 17.4467 8.70198C16.5125 8.25574 15.4269 8 14.2656 8C10.8105 8 8 10.273 8 13.0652C8 14.1012 8.38361 15.0955 9.10907 15.9436V19.3726L12.1988 17.846L12.2771 17.8695C12.9739 19.5031 14.8528 20.5939 16.9952 20.5939C17.5589 20.5939 18.1069 20.5182 18.6236 20.3694L21.1106 21.6012V18.8402C21.6847 18.167 21.99 17.3762 21.99 16.549C21.99 15.4634 21.4446 14.4196 20.4921 13.6654ZM20.7322 18.6132L20.6774 18.6758V20.8992L18.6654 19.9023L18.5819 19.9284C18.0808 20.0798 17.5485 20.1581 16.9979 20.1581C15.1633 20.1581 13.5428 19.3047 12.8199 17.9973C12.8251 17.9973 12.8277 17.9999 12.833 17.9999C12.8486 18.0025 12.8643 18.0052 12.8799 18.0078C13.0026 18.0313 13.1278 18.0495 13.2531 18.0652C13.2975 18.0704 13.3418 18.0756 13.3862 18.0808C13.4906 18.0913 13.5923 18.1017 13.6967 18.1095C13.7411 18.1122 13.7828 18.1174 13.8272 18.12C13.9707 18.1278 14.1169 18.133 14.263 18.133C14.357 18.133 14.4509 18.1304 14.5448 18.1278C14.5762 18.1278 14.6075 18.1252 14.6388 18.1226C14.7014 18.12 14.7641 18.1174 14.8241 18.1122C14.8606 18.1095 14.8971 18.1043 14.9337 18.1017C14.9885 18.0965 15.0459 18.0913 15.1007 18.0861C15.1398 18.0808 15.179 18.0756 15.2155 18.0704C15.2677 18.0626 15.3199 18.0574 15.3721 18.0495C15.4112 18.0443 15.4504 18.0365 15.4895 18.0313C15.5391 18.0234 15.5913 18.0156 15.6409 18.0052C15.68 17.9973 15.7218 17.9895 15.7609 17.9817C15.8105 17.9712 15.8601 17.9608 15.9071 17.9504C15.9462 17.9425 15.9853 17.9321 16.0271 17.9217C16.0741 17.9112 16.1236 17.8982 16.1706 17.8851C16.2098 17.8747 16.2489 17.8642 16.2881 17.8538C16.335 17.8408 16.382 17.8277 16.429 17.8147C16.4681 17.8042 16.5073 17.7912 16.5438 17.7781C16.5908 17.7625 16.6351 17.7494 16.6821 17.7338C16.7186 17.7207 16.7578 17.7077 16.7943 17.6946C16.8387 17.679 16.8856 17.6607 16.93 17.645C16.9665 17.632 17.0031 17.6163 17.0396 17.6033C17.084 17.585 17.1283 17.5667 17.1727 17.5485C17.2092 17.5328 17.2432 17.5172 17.2797 17.5015C17.3241 17.4806 17.3658 17.4624 17.4102 17.4415C17.4441 17.4258 17.478 17.4102 17.5119 17.3919C17.5563 17.371 17.5981 17.3475 17.6424 17.3267C17.6737 17.311 17.7077 17.2927 17.739 17.2745C17.7833 17.251 17.8251 17.2275 17.8669 17.2014C17.8982 17.1831 17.9295 17.1675 17.9582 17.1492C18.0026 17.1231 18.0443 17.097 18.0861 17.0709C18.1148 17.0527 18.1435 17.037 18.1722 17.0187C18.2165 16.99 18.2583 16.9613 18.3027 16.9326C18.3287 16.9144 18.3548 16.8987 18.3783 16.8804C18.4227 16.8491 18.4671 16.8152 18.5114 16.7839C18.5323 16.7682 18.5558 16.7526 18.5767 16.7369C18.6262 16.7004 18.6732 16.6612 18.7202 16.6221C18.7358 16.609 18.7515 16.5986 18.7672 16.5855C18.8272 16.536 18.8872 16.4838 18.9446 16.4316C18.9472 16.429 18.9472 16.429 18.9498 16.4264C19.0725 16.3168 19.1873 16.2019 19.2969 16.0845C19.3021 16.0793 19.3073 16.0715 19.3152 16.0636C19.3621 16.0114 19.4091 15.9592 19.4535 15.9044C19.4665 15.8914 19.477 15.8757 19.4874 15.8627C19.5265 15.8157 19.5631 15.7687 19.5996 15.7218C19.6127 15.7035 19.6257 15.6852 19.6414 15.667C19.6753 15.6226 19.7066 15.5782 19.7379 15.5339C19.7536 15.513 19.7666 15.4921 19.7797 15.4713C19.8084 15.4269 19.8371 15.3851 19.8658 15.3408C19.8815 15.3173 19.8945 15.2938 19.9075 15.2703C19.9336 15.2286 19.9597 15.1842 19.9832 15.1424C19.9963 15.1163 20.0093 15.0929 20.0224 15.0668C20.0459 15.025 20.0667 14.9806 20.0876 14.9389C20.1007 14.9128 20.1137 14.8867 20.1268 14.858C20.1476 14.8162 20.1659 14.7719 20.1842 14.7301C20.1972 14.7014 20.2077 14.6727 20.2181 14.6466C20.2364 14.6049 20.252 14.5631 20.2677 14.5188C20.2781 14.49 20.2885 14.4587 20.299 14.43C20.3146 14.3883 20.3277 14.3465 20.3407 14.3022C20.3512 14.2708 20.359 14.2395 20.3694 14.2082C20.3747 14.1899 20.3825 14.1691 20.3877 14.1508C21.1288 14.8084 21.549 15.667 21.549 16.5516C21.5542 17.2927 21.2698 18.0078 20.7322 18.6132Z"
                                stroke="#3E4958" strokeWidth="0.5" />
                        </svg>
                        <span className={MyRouteSelItemCSS.route_selected__button_text}>Чат</span>
                    </NavLink>
                    <NavLink to={"/my-routes-passagers/" + props.id} className={MyRouteSelItemCSS.route_selected__button + " " + MyRouteSelItemCSS.route_selected__button_passagers}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" rx="15" fill="#F1F5F6" />
                            <path
                                d="M20.4921 13.6654C20.4582 13.6393 20.4242 13.6106 20.3877 13.5845L20.1059 13.3731L20.0432 13.7202C19.6414 15.9879 17.157 17.6972 14.2656 17.6972C13.6576 17.6972 13.06 17.6242 12.4911 17.478L12.1571 17.3815L12.1414 17.3893L12.0762 17.3736L12.0918 17.4154L9.53966 18.6758V15.7792L9.48486 15.7165C8.79592 14.9363 8.43058 14.0177 8.43058 13.0652C8.43058 10.5104 11.0454 8.43319 14.263 8.43319C15.299 8.43319 16.2724 8.64979 17.1179 9.02818C17.3919 9.16649 17.6946 9.34133 18.0078 9.55792C18.4357 9.85281 18.7828 10.1581 19.062 10.4321C19.717 11.1811 20.1007 12.0866 20.1007 13.0652C20.1007 13.2766 20.0824 13.4984 20.0432 13.7176L20.1059 13.3705L20.3877 13.5819C20.4242 13.608 20.4582 13.6367 20.4921 13.6654C20.5208 13.4619 20.5365 13.2609 20.5365 13.0652C20.5365 11.9692 20.1033 10.9567 19.37 10.1268C19.1377 9.88151 18.8402 9.60229 18.4697 9.32828C18.1017 9.05427 17.7494 8.85333 17.4467 8.70198C16.5125 8.25574 15.4269 8 14.2656 8C10.8105 8 8 10.273 8 13.0652C8 14.1012 8.38361 15.0955 9.10907 15.9436V19.3726L12.1988 17.846L12.2771 17.8695C12.9739 19.5031 14.8528 20.5939 16.9952 20.5939C17.5589 20.5939 18.1069 20.5182 18.6236 20.3694L21.1106 21.6012V18.8402C21.6847 18.167 21.99 17.3762 21.99 16.549C21.99 15.4634 21.4446 14.4196 20.4921 13.6654ZM20.7322 18.6132L20.6774 18.6758V20.8992L18.6654 19.9023L18.5819 19.9284C18.0808 20.0798 17.5485 20.1581 16.9979 20.1581C15.1633 20.1581 13.5428 19.3047 12.8199 17.9973C12.8251 17.9973 12.8277 17.9999 12.833 17.9999C12.8486 18.0025 12.8643 18.0052 12.8799 18.0078C13.0026 18.0313 13.1278 18.0495 13.2531 18.0652C13.2975 18.0704 13.3418 18.0756 13.3862 18.0808C13.4906 18.0913 13.5923 18.1017 13.6967 18.1095C13.7411 18.1122 13.7828 18.1174 13.8272 18.12C13.9707 18.1278 14.1169 18.133 14.263 18.133C14.357 18.133 14.4509 18.1304 14.5448 18.1278C14.5762 18.1278 14.6075 18.1252 14.6388 18.1226C14.7014 18.12 14.7641 18.1174 14.8241 18.1122C14.8606 18.1095 14.8971 18.1043 14.9337 18.1017C14.9885 18.0965 15.0459 18.0913 15.1007 18.0861C15.1398 18.0808 15.179 18.0756 15.2155 18.0704C15.2677 18.0626 15.3199 18.0574 15.3721 18.0495C15.4112 18.0443 15.4504 18.0365 15.4895 18.0313C15.5391 18.0234 15.5913 18.0156 15.6409 18.0052C15.68 17.9973 15.7218 17.9895 15.7609 17.9817C15.8105 17.9712 15.8601 17.9608 15.9071 17.9504C15.9462 17.9425 15.9853 17.9321 16.0271 17.9217C16.0741 17.9112 16.1236 17.8982 16.1706 17.8851C16.2098 17.8747 16.2489 17.8642 16.2881 17.8538C16.335 17.8408 16.382 17.8277 16.429 17.8147C16.4681 17.8042 16.5073 17.7912 16.5438 17.7781C16.5908 17.7625 16.6351 17.7494 16.6821 17.7338C16.7186 17.7207 16.7578 17.7077 16.7943 17.6946C16.8387 17.679 16.8856 17.6607 16.93 17.645C16.9665 17.632 17.0031 17.6163 17.0396 17.6033C17.084 17.585 17.1283 17.5667 17.1727 17.5485C17.2092 17.5328 17.2432 17.5172 17.2797 17.5015C17.3241 17.4806 17.3658 17.4624 17.4102 17.4415C17.4441 17.4258 17.478 17.4102 17.5119 17.3919C17.5563 17.371 17.5981 17.3475 17.6424 17.3267C17.6737 17.311 17.7077 17.2927 17.739 17.2745C17.7833 17.251 17.8251 17.2275 17.8669 17.2014C17.8982 17.1831 17.9295 17.1675 17.9582 17.1492C18.0026 17.1231 18.0443 17.097 18.0861 17.0709C18.1148 17.0527 18.1435 17.037 18.1722 17.0187C18.2165 16.99 18.2583 16.9613 18.3027 16.9326C18.3287 16.9144 18.3548 16.8987 18.3783 16.8804C18.4227 16.8491 18.4671 16.8152 18.5114 16.7839C18.5323 16.7682 18.5558 16.7526 18.5767 16.7369C18.6262 16.7004 18.6732 16.6612 18.7202 16.6221C18.7358 16.609 18.7515 16.5986 18.7672 16.5855C18.8272 16.536 18.8872 16.4838 18.9446 16.4316C18.9472 16.429 18.9472 16.429 18.9498 16.4264C19.0725 16.3168 19.1873 16.2019 19.2969 16.0845C19.3021 16.0793 19.3073 16.0715 19.3152 16.0636C19.3621 16.0114 19.4091 15.9592 19.4535 15.9044C19.4665 15.8914 19.477 15.8757 19.4874 15.8627C19.5265 15.8157 19.5631 15.7687 19.5996 15.7218C19.6127 15.7035 19.6257 15.6852 19.6414 15.667C19.6753 15.6226 19.7066 15.5782 19.7379 15.5339C19.7536 15.513 19.7666 15.4921 19.7797 15.4713C19.8084 15.4269 19.8371 15.3851 19.8658 15.3408C19.8815 15.3173 19.8945 15.2938 19.9075 15.2703C19.9336 15.2286 19.9597 15.1842 19.9832 15.1424C19.9963 15.1163 20.0093 15.0929 20.0224 15.0668C20.0459 15.025 20.0667 14.9806 20.0876 14.9389C20.1007 14.9128 20.1137 14.8867 20.1268 14.858C20.1476 14.8162 20.1659 14.7719 20.1842 14.7301C20.1972 14.7014 20.2077 14.6727 20.2181 14.6466C20.2364 14.6049 20.252 14.5631 20.2677 14.5188C20.2781 14.49 20.2885 14.4587 20.299 14.43C20.3146 14.3883 20.3277 14.3465 20.3407 14.3022C20.3512 14.2708 20.359 14.2395 20.3694 14.2082C20.3747 14.1899 20.3825 14.1691 20.3877 14.1508C21.1288 14.8084 21.549 15.667 21.549 16.5516C21.5542 17.2927 21.2698 18.0078 20.7322 18.6132Z"
                                fill="#3E4958" />
                            <path
                                d="M20.4921 13.6654C20.4582 13.6393 20.4242 13.6106 20.3877 13.5845L20.1059 13.3731L20.0432 13.7202C19.6414 15.9879 17.157 17.6972 14.2656 17.6972C13.6576 17.6972 13.06 17.6242 12.4911 17.478L12.1571 17.3815L12.1414 17.3893L12.0762 17.3736L12.0918 17.4154L9.53966 18.6758V15.7792L9.48486 15.7166C8.79592 14.9363 8.43058 14.0177 8.43058 13.0652C8.43058 10.5104 11.0454 8.43319 14.263 8.43319C15.299 8.43319 16.2724 8.64979 17.1179 9.02818C17.3919 9.16649 17.6946 9.34133 18.0078 9.55792C18.4357 9.85281 18.7828 10.1581 19.062 10.4321C19.717 11.1811 20.1007 12.0866 20.1007 13.0652C20.1007 13.2766 20.0824 13.4984 20.0432 13.7176L20.1059 13.3705L20.3877 13.5819C20.4242 13.608 20.4582 13.6367 20.4921 13.6654ZM20.4921 13.6654C20.5208 13.4619 20.5365 13.2609 20.5365 13.0652C20.5365 11.9692 20.1033 10.9567 19.37 10.1268C19.1377 9.88151 18.8402 9.60229 18.4697 9.32828C18.1017 9.05427 17.7494 8.85333 17.4467 8.70198C16.5125 8.25574 15.4269 8 14.2656 8C10.8105 8 8 10.273 8 13.0652C8 14.1012 8.38361 15.0955 9.10907 15.9436V19.3726L12.1988 17.846L12.2771 17.8695C12.9739 19.5031 14.8528 20.5939 16.9952 20.5939C17.5589 20.5939 18.1069 20.5182 18.6236 20.3694L21.1106 21.6012V18.8402C21.6847 18.167 21.99 17.3762 21.99 16.549C21.99 15.4634 21.4446 14.4196 20.4921 13.6654ZM20.7322 18.6132L20.6774 18.6758V20.8992L18.6654 19.9023L18.5819 19.9284C18.0808 20.0798 17.5485 20.1581 16.9979 20.1581C15.1633 20.1581 13.5428 19.3047 12.8199 17.9973C12.8251 17.9973 12.8277 17.9999 12.833 17.9999C12.8486 18.0025 12.8643 18.0052 12.8799 18.0078C13.0026 18.0313 13.1278 18.0495 13.2531 18.0652C13.2975 18.0704 13.3418 18.0756 13.3862 18.0808C13.4906 18.0913 13.5923 18.1017 13.6967 18.1095C13.7411 18.1122 13.7828 18.1174 13.8272 18.12C13.9707 18.1278 14.1169 18.133 14.263 18.133C14.357 18.133 14.4509 18.1304 14.5448 18.1278C14.5762 18.1278 14.6075 18.1252 14.6388 18.1226C14.7014 18.12 14.7641 18.1174 14.8241 18.1122C14.8606 18.1095 14.8971 18.1043 14.9337 18.1017C14.9885 18.0965 15.0459 18.0913 15.1007 18.0861C15.1398 18.0808 15.179 18.0756 15.2155 18.0704C15.2677 18.0626 15.3199 18.0574 15.3721 18.0495C15.4112 18.0443 15.4504 18.0365 15.4895 18.0313C15.5391 18.0234 15.5913 18.0156 15.6409 18.0052C15.68 17.9973 15.7218 17.9895 15.7609 17.9817C15.8105 17.9712 15.8601 17.9608 15.9071 17.9504C15.9462 17.9425 15.9853 17.9321 16.0271 17.9217C16.0741 17.9112 16.1236 17.8982 16.1706 17.8851C16.2098 17.8747 16.2489 17.8642 16.2881 17.8538C16.335 17.8408 16.382 17.8277 16.429 17.8147C16.4681 17.8042 16.5073 17.7912 16.5438 17.7781C16.5908 17.7625 16.6351 17.7494 16.6821 17.7338C16.7186 17.7207 16.7578 17.7077 16.7943 17.6946C16.8387 17.679 16.8856 17.6607 16.93 17.645C16.9665 17.632 17.0031 17.6163 17.0396 17.6033C17.084 17.585 17.1283 17.5667 17.1727 17.5485C17.2092 17.5328 17.2432 17.5172 17.2797 17.5015C17.3241 17.4806 17.3658 17.4624 17.4102 17.4415C17.4441 17.4258 17.478 17.4102 17.5119 17.3919C17.5563 17.371 17.5981 17.3475 17.6424 17.3267C17.6737 17.311 17.7077 17.2927 17.739 17.2745C17.7833 17.251 17.8251 17.2275 17.8669 17.2014C17.8982 17.1831 17.9295 17.1675 17.9582 17.1492C18.0026 17.1231 18.0443 17.097 18.0861 17.0709C18.1148 17.0527 18.1435 17.037 18.1722 17.0187C18.2165 16.99 18.2583 16.9613 18.3027 16.9326C18.3287 16.9144 18.3548 16.8987 18.3783 16.8804C18.4227 16.8491 18.4671 16.8152 18.5114 16.7839C18.5323 16.7682 18.5558 16.7526 18.5767 16.7369C18.6262 16.7004 18.6732 16.6612 18.7202 16.6221C18.7358 16.609 18.7515 16.5986 18.7672 16.5855C18.8272 16.536 18.8872 16.4838 18.9446 16.4316C18.9472 16.429 18.9472 16.429 18.9498 16.4264C19.0725 16.3168 19.1873 16.2019 19.2969 16.0845C19.3021 16.0793 19.3073 16.0715 19.3152 16.0636C19.3621 16.0114 19.4091 15.9592 19.4535 15.9044C19.4665 15.8914 19.477 15.8757 19.4874 15.8627C19.5265 15.8157 19.5631 15.7687 19.5996 15.7218C19.6127 15.7035 19.6257 15.6852 19.6414 15.667C19.6753 15.6226 19.7066 15.5782 19.7379 15.5339C19.7536 15.513 19.7666 15.4921 19.7797 15.4713C19.8084 15.4269 19.8371 15.3851 19.8658 15.3408C19.8815 15.3173 19.8945 15.2938 19.9075 15.2703C19.9336 15.2286 19.9597 15.1842 19.9832 15.1424C19.9963 15.1163 20.0093 15.0929 20.0224 15.0668C20.0459 15.025 20.0667 14.9806 20.0876 14.9389C20.1007 14.9128 20.1137 14.8867 20.1268 14.858C20.1476 14.8162 20.1659 14.7719 20.1842 14.7301C20.1972 14.7014 20.2077 14.6727 20.2181 14.6466C20.2364 14.6049 20.252 14.5631 20.2677 14.5188C20.2781 14.49 20.2885 14.4587 20.299 14.43C20.3146 14.3883 20.3277 14.3465 20.3407 14.3022C20.3512 14.2708 20.359 14.2395 20.3694 14.2082C20.3747 14.1899 20.3825 14.1691 20.3877 14.1508C21.1288 14.8084 21.549 15.667 21.549 16.5516C21.5542 17.2927 21.2698 18.0078 20.7322 18.6132Z"
                                stroke="#3E4958" strokeWidth="0.5" />
                        </svg>
                        <span className={MyRouteSelItemCSS.route_selected__button_text}>Попутчики</span>
                    </NavLink>
                </div>
            </div>
            <button className={MyRouteSelItemCSS.route_list__button}>
                <span onClick={deluserRoute} className={MyRouteSelItemCSS.route_list__text}>Отсоединиться от поездки</span>
            </button>
        </div>
    )
};

export default MyRouteSelectedItem;