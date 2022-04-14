import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import FormLoginCSS from './css/formLogin.module.css';

import password_lock from "../../img/formLogin/passwordLock.svg";
import password_unlock from "../../img/formLogin/passwordUnlock.svg";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const FormLogin = () => {
    const navigate = useNavigate();

    const Autorization = (e) => {
        e.preventDefault();

        const phone = "+7(903)542-21-02";
        // const phone  = e.target.elements.login.value;

        const password = "12345";
        // const password = e.target.elements.password.value;

        let LoginPassword = {
            phone: phone,
            password: password
        }

        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/autorization";
        axios.post(API_URL, { phone, password }, { headers })
            .then((response) => {
                if (typeof response.data["phone"] !== "undefined" && response.data["phone"] !== "Bad phone or password") {
                    navigate("/route-search");
                    console.log(response.data);
                }
                else {
                    console.log(phone);
                    console.log(password);
                }
            });

        localStorage.setItem("LoginPassword", JSON.stringify(LoginPassword));
    };

    function passwordUnlockLock() {
        if (document.getElementById('password-unlock').checked) {
            document.getElementById('password-unlock-img').setAttribute('src', password_lock);
            document.getElementById('login-password').setAttribute('type', 'text');
        }
        else {
            document.getElementById('password-unlock-img').setAttribute('src', password_unlock);
            document.getElementById('login-password').setAttribute('type', 'password');
        }
    }

    function loginInputMask() {
        let loginInput = document.getElementById("login-input");
        let maskOptions = {
            mask: "+7(000)000-00-00",
            lazy: false
        }
        IMask(loginInput, maskOptions);
    }

    return (
        <div className="universal-form">
            <h1 className={FormLoginCSS.page_main__heading}>Авторизация</h1>
            <section className={FormLoginCSS.form_login}>
                <div className={FormLoginCSS.form_login__container}>
                    <form onSubmit={Autorization} className={FormLoginCSS.form_login__wrapper} action="#">
                        <label htmlFor="login-input">Номер телефона</label>
                        <input onFocus={loginInputMask} className={FormLoginCSS.login_input + " input"} type="text" name="login" placeholder="+7(900)000-00-00" id="login-input" />
                        <label htmlFor="login-password">Пароль</label>
                        <input className={FormLoginCSS.login_password + " input"} type="password" name="password" id="login-password" autoComplete="on" />
                        <input onChange={passwordUnlockLock} className={FormLoginCSS.password_checkbox + " visually-hidden"} type="checkbox" name="password-unlock" id="password-unlock" />
                        <label className={FormLoginCSS.password_checkbox_label} htmlFor="password-unlock">
                            <img className={FormLoginCSS.password_checkbox_img} src={password_unlock} width="22" height="22" alt="" id="password-unlock-img" />
                        </label>
                        <NavLink to="/password-recovery" className={FormLoginCSS.forgot_password}>Забыли пароль?</NavLink>
                        <button to="/route-search" className={FormLoginCSS.form_login__button + " button"} type="submit">Войти</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default FormLogin;