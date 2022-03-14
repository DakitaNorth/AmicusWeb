import React from "react";
import { NavLink } from "react-router-dom";
import GreatingCSS from './css/greating.module.css';
import logo from "../../img/logo-mobile.svg";

let LoginPassword = {
    phone: "+7(903)542-21-02",
    password: "12345"
}

localStorage.setItem("LoginPassword", JSON.stringify(LoginPassword));

const Greeting = () => {
    return (
        <header className={GreatingCSS.page_header}>
            <div className={GreatingCSS.page_header__container}>
                <NavLink to="/" className={GreatingCSS.page_header__logo} href="/">
                    <picture>
                        <source media="(min-width: 1440px)" srcSet="img/logo-desktop.svg" />
                        <source media="(min-width: 768px)" srcSet="img/logo-tablet.svg" />
                        <img className={GreatingCSS.page_header__logo_image} src={logo} width="75" height="47" alt="Логотип проекта AmicusDrive" />
                    </picture>
                </NavLink>
                <span className={GreatingCSS.page_header__text}>Поездки на ваш выбор по самым низким ценам</span>
            </div>
        </header>
    )
};

export default Greeting;