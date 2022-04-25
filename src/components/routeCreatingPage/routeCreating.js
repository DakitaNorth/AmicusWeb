import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import RouteCreatingCSS from './css/routeCreating.module.css';

import CreateParameters from "../routeCreatingPage/createParameters";

import ValidError from "../validError/validError";
import ValidSuccess from "../validSuccess/validSuccess";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const RouteCreating = () => {

    const [profileData, setProfileData] = useState([]);

    const [whereDirty, setWhereDirty] = useState(false);
    const [somewhereDirty, setSomewhereDirty] = useState(false);
    const [priceDirty, setPriceDirty] = useState(false);
    const [createDirty, setCreateDirty] = useState(false);

    const [createError, setCreateError] = useState("Данные публикации не заполнены");

    const [createYep, setCreateYep] = useState(false);

    const [createSuccess, setCreateSuccess] = useState("Публикация успешно выполнена");

    useEffect(() => {
        gettingProfileData();
        includeData();
    }, []);

    function includeData() {
        document.getElementById("where-input").value = JSON.parse(sessionStorage.getItem("СreateDepartureplace"));
        document.getElementById("somewhere-input").value = JSON.parse(sessionStorage.getItem("СreateArrivalplace"));

        document.getElementById("price-input").value = JSON.parse(sessionStorage.getItem("CreateGettingPrice"));
        document.getElementById("additional-input").value = JSON.parse(sessionStorage.getItem("CreateGettingDescription"));

        if (JSON.parse(sessionStorage.getItem("CreateAutoSelectItemID"))) {
            var AutoText = JSON.parse(sessionStorage.getItem("CreateAutoSelectItemID"));
        }
        else {
            var AutoText = "Выбрать автомобиль";
        }

        document.getElementById("auto-text").textContent = AutoText;
    }

    function gettingWhere() {
        let createDepartureplace = document.getElementById("where-input").value;
        sessionStorage.setItem("СreateDepartureplace", JSON.stringify(createDepartureplace));

        if (createDepartureplace !== "") {
            document.getElementById("where-input").classList.remove(RouteCreatingCSS.not_valid_input);
            setWhereDirty(true);
        } else {
            setWhereDirty(false);
        }
    }

    function gettingSomewere() {
        let createArrivalplace = document.getElementById("somewhere-input").value;
        sessionStorage.setItem("СreateArrivalplace", JSON.stringify(createArrivalplace));

        if (createArrivalplace !== "") {
            document.getElementById("somewhere-input").classList.remove(RouteCreatingCSS.not_valid_input);
            setSomewhereDirty(true);
        } else {
            setSomewhereDirty(false);
        }
    }

    function createGettingPrice() {
        let gettingPrice = document.getElementById("price-input").value;
        sessionStorage.setItem("CreateGettingPrice", JSON.stringify(gettingPrice));

        if (gettingPrice !== "") {
            document.getElementById("price-input").classList.remove(RouteCreatingCSS.not_valid_input__price);
            setPriceDirty(true);
        } else {
            setPriceDirty(false);
        }
    }

    function createGettingDescription() {
        let gettingDescription = document.getElementById("additional-input").value;
        sessionStorage.setItem("CreateGettingDescription", JSON.stringify(gettingDescription));
    }

    function gettingProfileData() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            let LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            let phone = LoginPassword.phone;
            let password = LoginPassword.password;

            const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/autorization";
            axios.post(API_URL, { phone, password }, { headers })
                .then((response) => {
                    setProfileData(response.data);
                });
        }
    }

    function createRoute(e) {
        e.preventDefault();
        if (whereDirty && somewhereDirty && priceDirty) {

            let departureplace = document.getElementById('where-input').value;
            let arrivalplace = document.getElementById('somewhere-input').value;

            let departuretime = JSON.parse(sessionStorage.getItem("CreateDepartureTime"));
            let arrivaltime = JSON.parse(sessionStorage.getItem("CreateArrivalTime"));
            let membercount = JSON.parse(sessionStorage.getItem("CreateHumanParameter"));
            let distance = "72 км";
            let weekday = JSON.parse(sessionStorage.getItem("CreateDaysParameter"));

            let automobile = JSON.parse(sessionStorage.getItem("CreateAutoSelectItemData"));

            let price = document.getElementById('price-input').value;
            let description = document.getElementById('additional-input').value;

            if (JSON.parse(localStorage.getItem("LoginPassword"))) {
                const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
                let autor = LoginPassword.phone;

                let autorname = profileData.name;
                let autorphoto = profileData.photo;

                const ADD_ROUTE_URL = "https://xn--80aaggtieo3biv.xn--p1ai/addtravel";

                if (departureplace !== "" && arrivalplace !== "" && automobile !== null && price !== "") {
                    axios.post(ADD_ROUTE_URL, {
                        departureplace, arrivalplace, departuretime, arrivaltime, membercount,
                        distance, weekday, automobile, price, description, autor, autorname, autorphoto
                    }, { headers })
                        .then((response) => {
                            console.log(response.data);
                            setCreateYep(true);
                        });
                } else {
                    console.log("Недостаточно данных");
                }
            }
            setWhereDirty(false);
            setSomewhereDirty(false);
            setPriceDirty(false);
            setCreateDirty(false);
            setCreateYep(false);
        }
        else {
            setCreateDirty(true);
            document.getElementById("where-input").classList.add(RouteCreatingCSS.not_valid_input);
            document.getElementById("somewhere-input").classList.add(RouteCreatingCSS.not_valid_input);
            document.getElementById("price-input").classList.add(RouteCreatingCSS.not_valid_input__price);
        }
    }

    return (
        <div className="universal-form">
            {(createDirty && createError) && <ValidError error={createError} ifVisible={createDirty}></ValidError>}
            {(createYep && createSuccess) && <ValidSuccess success={createSuccess} ifVisible={createYep}></ValidSuccess>}
            <h1 className="visually-hidden">Создание маршрута</h1>
            <section className={RouteCreatingCSS.form_create_route}>
                <div className={RouteCreatingCSS.form_create_route__container}>
                    <form onSubmit={createRoute} className={RouteCreatingCSS.form_create_route__shield} action="#">
                        <div className={RouteCreatingCSS.form_create_route__wrapper}>
                            <label htmlFor="where-input">Откуда</label>
                            <input className={RouteCreatingCSS.form_create_route__where_input} onChange={gettingWhere} type="text" name="where" placeholder=""
                                id="where-input" />
                            <label htmlFor="somewhere-input">Куда</label>
                            <input className={RouteCreatingCSS.form_create_route__somewhere_input} onChange={gettingSomewere} type="text" name="somewhere"
                                placeholder="" id="somewhere-input" />
                        </div>
                        <CreateParameters />
                        <div className={RouteCreatingCSS.form_create_route__information + " " + RouteCreatingCSS.information}>
                            <div className={RouteCreatingCSS.information__auto + " " + RouteCreatingCSS.auto}>
                                <NavLink to="/auto-select-list" className={RouteCreatingCSS.auto__select} href="#">
                                    <svg width="20" height="17" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.4802 5.18614H21.7201C21.586 5.18614 21.4571 5.23795 21.3604 5.33066L20.9846 5.69061C20.3513 4.22512 19.4427 2.77591 18.2154 1.27557C17.552 0.464894 16.5709 0 15.5235 0H8.47642C7.42891 0 6.44782 0.464949 5.78477 1.27562C4.51876 2.82316 3.62822 4.23746 3.00986 5.68544L2.63968 5.33066C2.54291 5.23795 2.41401 5.18614 2.27995 5.18614H0.519865C0.232725 5.18614 0 5.41887 0 5.70601V6.90943C0 7.18384 0.213326 7.4109 0.487182 7.42824L2.29634 7.54218C2.02299 8.34096 1.80955 9.53127 1.80955 11.2099C1.80955 12.6665 2.10047 13.6238 2.60677 14.2435V17.0476C2.60677 17.2881 2.8017 17.4829 3.04215 17.4829H5.04474C5.2853 17.4829 5.48029 17.2881 5.48029 17.0476V15.3063H18.5198V17.0476C18.5198 17.2881 18.7148 17.4829 18.9552 17.4829H20.9578C21.1982 17.4829 21.3932 17.2881 21.3932 17.0476V14.2435C21.8994 13.6238 22.1905 12.6665 22.1905 11.2099C22.1905 9.53127 21.9771 8.34096 21.7037 7.54218L23.5129 7.42824C23.7867 7.4109 24 7.18384 24 6.90943V5.70601C24 5.41887 23.7674 5.18614 23.4802 5.18614ZM7.27055 2.49105C7.5677 2.12787 8.00724 1.91949 8.47642 1.91949H15.5235C15.9927 1.91949 16.4324 2.12787 16.7295 2.49105C17.5881 3.54062 18.2661 4.54505 18.7902 5.5456L5.19782 5.54815C5.7104 4.56984 6.39229 3.56457 7.27055 2.49105ZM5.78933 13.1769C4.79256 13.1769 3.98461 12.8513 3.98461 12.0616C3.98461 11.2718 4.27776 10.6315 5.27446 10.6315C6.27117 10.6315 7.59393 11.2718 7.59393 12.0616C7.59393 12.8513 6.78593 13.1769 5.78933 13.1769ZM13.8918 13.0123H10.1083C9.53794 13.0123 9.07393 12.5483 9.07393 11.978C9.07393 11.818 9.20366 11.6883 9.36374 11.6883H14.6365C14.7965 11.6883 14.9261 11.818 14.9261 11.978C14.9261 12.5484 14.4621 13.0123 13.8918 13.0123ZM18.2107 13.1769C17.214 13.1769 16.406 12.8513 16.406 12.0616C16.406 11.2718 17.7289 10.6315 18.7255 10.6315C19.7222 10.6315 20.0154 11.2718 20.0154 12.0616C20.0154 12.8513 19.2075 13.1769 18.2107 13.1769Z" fill="white" />
                                    </svg>
                                    <span className={RouteCreatingCSS.auto__text} id="auto-text"></span>
                                </NavLink>
                            </div>
                            <div className={RouteCreatingCSS.information__price + " " + RouteCreatingCSS.price}>
                                <label className={RouteCreatingCSS.price__label} htmlFor="price-input">Цена поездки</label>
                                <input className={RouteCreatingCSS.price__input} onChange={createGettingPrice} type="text" name="price" placeholder="250" maxLength="4" id="price-input" />
                            </div>
                            <div className={RouteCreatingCSS.information__additional + " " + RouteCreatingCSS.additional}>
                                <label className={RouteCreatingCSS.additional__label} htmlFor="additional-input">Дополнительно о поездке</label>
                                <textarea className={RouteCreatingCSS.additional__input} onChange={createGettingDescription} type="text" name="additional" id="additional-input"></textarea>
                            </div>
                        </div>
                        <button className={RouteCreatingCSS.form_create_route__button + " " + " button"}>Опубликовать</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default RouteCreating;