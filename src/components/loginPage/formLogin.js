import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import FormLoginCSS from "./css/formLogin.module.css";

import ValidError from "../../components/validError/validError";

import password_lock from "../../img/formLogin/passwordLock.svg";
import password_unlock from "../../img/formLogin/passwordUnlock.svg";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const FormLogin = () => {
    const navigate = useNavigate();

    const [loginDirty, setLoginDirty] = useState(false);
    const [loginError, setLoginError] = useState("");

    useEffect(() => {
        let loginInput = document.getElementById("login-input");
        let passwordInput = document.getElementById("login-password");

        loginInput.onfocus = function () {
            let maskOptions = {
                mask: "+{7}(000)000-00-00",
                lazy: true
            };
            IMask(loginInput, maskOptions);
            loginInput.classList.remove(FormLoginCSS.not_valid_input);
        }

        passwordInput.onfocus = function () {
            passwordInput.classList.remove(FormLoginCSS.not_valid_input);
        }
    });

    const Autorization = (e) => {
        e.preventDefault();

        // // const phone = "+7(777)111-11-11"; 
        // const phone = "+7(999)999-99-99";

        const phone  = e.target.elements.phone.value; 

        // const password = "12345";

        const password = e.target.elements.password.value;

        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/authorization";
        axios.post(API_URL, { phone, password }, { headers })
            .then((response) => {
                if (typeof response.data["phone"] !== "undefined" && response.data["phone"] !== "Bad phone or password") {
                    let LoginPassword = {
                        phone: response.data.phone,
                        password: response.data.password,
                        name: response.data.name,
                        id: response.data.id
                    }
                    localStorage.setItem("LoginPassword", JSON.stringify(LoginPassword));
                    navigate("/route-search");
                }
                else {
                    console.log(response.data);
                    setLoginDirty(true);
                    setTimeout(() => setLoginDirty(false), 3000);
                    setLoginError("Данные заполнены некорректно");
                    valueError();
                }
            });
    };

    function passwordUnlockLock() {
        if (document.getElementById("password-unlock").checked) {
            document.getElementById("password-unlock-img").setAttribute("src", password_lock);
            document.getElementById("login-password").setAttribute("type", "text");
        }
        else {
            document.getElementById("password-unlock-img").setAttribute("src", password_unlock);
            document.getElementById("login-password").setAttribute("type", "password");
        }
    };

    function valueError() {
        document.getElementById("login-input").classList.add(FormLoginCSS.not_valid_input);
        document.getElementById("login-password").classList.add(FormLoginCSS.not_valid_input);
    };

    return (
        <div className="universal-form">
            {(loginDirty && loginError) && <ValidError error={loginError}></ValidError>}
            <h1 className={FormLoginCSS.page_main__heading}>Авторизация</h1>
            <section className={FormLoginCSS.form_login}>
                <div className={FormLoginCSS.form_login__container}>
                    <form onSubmit={Autorization} className={FormLoginCSS.form_login__wrapper} action="#">
                        <label htmlFor="login-input">Номер телефона</label>
                        <input className={FormLoginCSS.login_input} type="tel" name="phone" placeholder="+7(900)000-00-00" id="login-input" />
                        <label htmlFor="login-password">Пароль</label>
                        <div className={FormLoginCSS.login_password__wrapper}>
                            <input className={FormLoginCSS.login_password} type="password" name="password" id="login-password" autoComplete="on" />
                            <input onChange={passwordUnlockLock} className={FormLoginCSS.password_checkbox + " visually-hidden"} type="checkbox" name="password-unlock" id="password-unlock" />
                            <label className={FormLoginCSS.password_checkbox_label} htmlFor="password-unlock">
                                <img className={FormLoginCSS.password_checkbox_img} src={password_unlock} width="22" height="22" alt="" id="password-unlock-img" />
                            </label>
                        </div>
                        <NavLink to="/password-recovery" className={FormLoginCSS.forgot_password}>Забыли пароль?</NavLink>
                        <button to="/route-search" className={FormLoginCSS.form_login__button + " button"} type="submit">Войти</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default FormLogin;