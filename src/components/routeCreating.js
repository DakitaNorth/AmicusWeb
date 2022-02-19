import React from "react";
import { NavLink } from "react-router-dom";
import RouteCreatingCSS from './css/routeCreating.module.css';

import Parameters from "./parameters";

const RouteCreating = () => (
    <div className="universal-form">
        <h1 className="visually-hidden">Создание маршрута</h1>
        <section className={RouteCreatingCSS.form_create_route}>
            <div className={RouteCreatingCSS.form_create_route__container}>
                <form className={RouteCreatingCSS.form_create_route__shield} action="#">
                    <div className={RouteCreatingCSS.form_create_route__wrapper}>
                        <label for="where-input">Откуда</label>
                        <input className={RouteCreatingCSS.form_create_route__where_input + " " + " input"} type="text" name="where" placeholder=""
                            id="where-input" />
                        <label for="somewhere-input">Куда</label>
                        <input className={RouteCreatingCSS.form_create_route__somewhere_input + " " + " input"} type="text" name="somewhere"
                            placeholder="" id="somewhere-input" />
                    </div>
                    <Parameters />
                    <div className={RouteCreatingCSS.form_create_route__information + " " + RouteCreatingCSS.information}>
                        <div className={RouteCreatingCSS.information_general}>
                            <div className={RouteCreatingCSS.information_general__wrapper}>
                                <div className={RouteCreatingCSS.information_general__item}>
                                    <span className={RouteCreatingCSS.information_general__text}>Расстояние</span>
                                    <span className={RouteCreatingCSS.information_general__text}>20км</span>
                                </div>
                                <div className={RouteCreatingCSS.information_general__item}>
                                    <span className={RouteCreatingCSS.information_general__text}>Бензин</span>
                                    <span className={RouteCreatingCSS.information_general__text}>4л</span>
                                </div>
                                <div className={RouteCreatingCSS.information_general__item}>
                                    <span className={RouteCreatingCSS.information_general__text}>Рекомендуемая<br></br>цена</span>
                                    <span className={RouteCreatingCSS.information_general__text}>250₽</span>
                                </div>
                            </div>
                            <a className={RouteCreatingCSS.information_general__card_button} href="#">
                                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.08948 7.19749C3.08948 5.0396 4.83879 3.29028 6.99668 3.29028C9.15457 3.29028 10.9039 5.0396 10.9039 7.19749C10.9039 9.35538 9.15457 11.1047 6.99668 11.1047C4.83879 11.1047 3.08948 9.35538 3.08948 7.19749ZM6.99668 4.52413C5.52023 4.52413 4.32333 5.72103 4.32333 7.19749C4.32333 8.67394 5.52023 9.87084 6.99668 9.87084C8.47313 9.87084 9.67004 8.67394 9.67004 7.19749C9.67004 5.72103 8.47313 4.52413 6.99668 4.52413Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0248808 6.25717C0.31634 2.72126 3.27114 0 6.81904 0H7.17434C10.7222 0 13.677 2.72126 13.9685 6.25717C14.1251 8.1566 13.5383 10.0427 12.3319 11.5181L8.38928 16.3398C7.66953 17.2201 6.32384 17.2201 5.60409 16.3398L1.66147 11.5181C0.455037 10.0427 -0.131686 8.1566 0.0248808 6.25717ZM6.81904 1.23385C3.91328 1.23385 1.49327 3.46259 1.25457 6.35853C1.12426 7.93938 1.61257 9.5091 2.61665 10.7371L6.55928 15.5588C6.78535 15.8353 7.20802 15.8353 7.43409 15.5588L11.3767 10.7371C12.3808 9.5091 12.8691 7.93938 12.7388 6.35853C12.5001 3.46259 10.0801 1.23385 7.17434 1.23385H6.81904Z" fill="white" />
                                </svg>
                                карта
                            </a>
                        </div>
                        <div className={RouteCreatingCSS.information__price + " " +  RouteCreatingCSS.price}>
                            <label className={RouteCreatingCSS.price__label} for="price-input">Цена поездки</label>
                            <button className={RouteCreatingCSS.price__button + " " + RouteCreatingCSS.price__button_min}>
                                <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.2513 2H0.74874C0.337129 2 0 1.55497 0 1C0 0.450262 0.337129 0 0.74874 0H20.2513C20.6668 0 21 0.450262 21 1C21 1.55497 20.6629 2 20.2513 2Z"
                                        fill="#3E4958" />
                                </svg>
                            </button>
                            <input className={RouteCreatingCSS.price__input} type="text" name="price" placeholder="250" maxlength="4" id="price-input" />
                            <button className={RouteCreatingCSS.price__button + " " + RouteCreatingCSS.price__button_max}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.001 9.96144L10.0002 1.41396C10.0002 0.861736 10.4478 0.414114 11 0.414165C11.5523 0.414217 12 0.861922 12 1.41414L12.0008 9.96163L20.5437 9.96242C21.0959 9.96247 21.5437 10.4102 21.5437 10.9624C21.5438 11.5146 21.0961 11.9622 20.5439 11.9622L12.001 11.9614L12.0018 20.5038C12.0018 21.056 11.5542 21.5037 11.002 21.5036C10.4498 21.5036 10.0021 21.0559 10.002 20.5036L10.0012 11.9612L1.45423 11.9604C0.90201 11.9604 0.454306 11.5127 0.454254 10.9604C0.454202 10.4082 0.901824 9.9606 1.45404 9.96065L10.001 9.96144Z"
                                        fill="#3E4958" />
                                </svg>
                            </button>
                        </div>
                        <div className={RouteCreatingCSS.information__additional + " " + RouteCreatingCSS.additional}>
                            <label className={RouteCreatingCSS.additional__label} for="additional-input">Дополнительно о поездке</label>
                            <textarea className={RouteCreatingCSS.additional__input} type="text" name="additional" id="additional-input"></textarea>
                        </div>
                    </div>
                    <button className={RouteCreatingCSS.form_create_route__button + " " + " button"}>Опубликовать</button>
                </form>
            </div>
        </section>
    </div>
);

export default RouteCreating;