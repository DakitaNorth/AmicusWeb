import React from "react";
import { NavLink } from "react-router-dom";
import GreatingCSS from './css/greating.module.css';
import logo from "../../img/logo-mobile.svg";

const Greeting = () => {
    return (
        <header className={GreatingCSS.page_header}>
            <div className={GreatingCSS.page_header__container}>
                <NavLink to="/" className={GreatingCSS.page_header__logo} href="/"> 
                    <picture>
                        <source media="(min-width: 1440px)" srcSet={logo} />
                        <source media="(min-width: 768px)" srcSet={logo} />
                        <img className={GreatingCSS.page_header__logo_image} src={logo} width="75" height="47" alt="Логотип проекта AmicusDrive" />
                    </picture>
                </NavLink>
                <svg className={GreatingCSS.page_header__logo__svg} width="3" height="44" viewBox="0 0 3 44" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L1 45" stroke="#ffffff" stroke-dasharray="3 3" />
                </svg>
                <span className={GreatingCSS.page_header__text}>Поездки на ваш выбор по самым низким ценам</span>
            </div>
        </header>
    )
};

export default Greeting;