import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import FormRegCSS from './css/formRegistration.module.css';

import ValidError from "../validError/validError";

const FormRegistration = () => {

    const navigate = useNavigate();

    const [regDirty, setRegDirty] = useState(false);
    const [regError, setRegError] = useState("");

    useEffect(() => {
        let nameInput = document.getElementById("name-input");
        let loginInput = document.getElementById("login-input");
        let emailInput = document.getElementById("email-input");
        let passwordInput = document.getElementById("password-input");
        let agreeCheckbox = document.getElementById("agree-checkbox");

        let repeatPasswordInput = document.getElementById("repeat-input");

        nameInput.onfocus = function () {
            nameInput.classList.remove(FormRegCSS.not_valid_input);
        }

        emailInput.onfocus = function () {
            emailInput.classList.remove(FormRegCSS.not_valid_input);
        }

        nameInput.onfocus = function () {
            nameInput.classList.remove(FormRegCSS.not_valid_input);
        }

        passwordInput.onfocus = function () {
            passwordInput.classList.remove(FormRegCSS.not_valid_input);
        }

        repeatPasswordInput.onfocus = function () {
            repeatPasswordInput.classList.remove(FormRegCSS.not_valid_input);
        }

        agreeCheckbox.onchange = function () {
            agreeCheckbox.classList.remove(FormRegCSS.agree_checkbox_not_valid);
        }

        loginInput.onfocus = function () {
            let maskOptions = {
                mask: [
                    {
                        mask: '+{7}(000)000-00-00'
                    },
                    {
                        mask: /^\S*@?\S*$/
                    }
                ]
            }
            IMask(loginInput, maskOptions);
            loginInput.classList.remove(FormRegCSS.not_valid_input);
        }
    });

    const Registration = (e) => {
        e.preventDefault();

        let name = e.target.elements.name.value;

        let phone = e.target.elements.login.value;

        let email = e.target.elements.email.value;

        let password = e.target.elements.password.value;

        let repeatPassword = e.target.elements.repeatPassword.value;

        const headers = {
            "Content-Type": "application/json; charset=utf-8",
        };

        const REG_URL = "https://xn--80aaggtieo3biv.xn--p1ai/registration";

        if (document.getElementById("agree-checkbox").checked) {
            if (name !== "" && phone !== "" && email !== "" && password !== "" && repeatPassword !== "") {
                if (password === repeatPassword) {
                    axios.post(REG_URL, { password, phone, name, email }, { headers })
                        .then(response => {
                            console.log(response);
                            if (response.data["response"] === "User has been registered") {
                                navigate("/");
                                console.log(response.data);
                            }
                            else if (response.data["response"] === "Phone is already in use") {
                                setRegDirty(true);
                                setTimeout(() => setRegDirty(false), 3000);
                                setRegError("Телефон уже зарегистрирован");
                                document.getElementById("login-input").classList.add(FormRegCSS.not_valid_input);
                            }
                        });
                }
                else {
                    setRegDirty(true);
                    setTimeout(() => setRegDirty(false), 3000);
                    setRegError("Пароли не совпадают")
                    document.getElementById("password-input").classList.add(FormRegCSS.not_valid_input);
                    document.getElementById("repeat-input").classList.add(FormRegCSS.not_valid_input);
                }
            }
            else {
                setRegDirty(true);
                setTimeout(() => setRegDirty(false), 3000);
                setRegError("Данные заполнены некорректно");
                valueError();
            }
        }
        else {
            setRegDirty(true);
            setTimeout(() => setRegDirty(false), 3000);
            document.getElementById("agree-checkbox").classList.add(FormRegCSS.agree_checkbox_not_valid);
            setRegError("Политика конфиденциальности не принята")
        }
    };

    function valueError() {
        document.getElementById("name-input").classList.add(FormRegCSS.not_valid_input);
        document.getElementById("login-input").classList.add(FormRegCSS.not_valid_input);
        document.getElementById("email-input").classList.add(FormRegCSS.not_valid_input);
        document.getElementById("password-input").classList.add(FormRegCSS.not_valid_input);
        document.getElementById("repeat-input").classList.add(FormRegCSS.not_valid_input);
    };

    return (
        <div className="universal-form">
            {(regDirty && regError) && <ValidError error={regError}></ValidError>}
            <h1 className={FormRegCSS.page_main__heading}>Регистрация</h1>
            <section className={FormRegCSS.form_registration}>
                <div className={FormRegCSS.form_registration__container}>
                    <form onSubmit={Registration} className={FormRegCSS.form_registration__wrapper} action="#">
                        <label htmlFor="name-input">Ваше имя</label>
                        <input className={FormRegCSS.form_registration__input} type="text" name="name" placeholder="Даниил" id="name-input" />
                        <label htmlFor="login-input">Номер телефона</label>
                        <input className={FormRegCSS.form_registration__input} type="text" name="login" placeholder="+7(900)000-00-00" id="login-input" />
                        <label htmlFor="email-input">Электронная почта</label>
                        <input className={FormRegCSS.form_registration__input} type="text" name="email" placeholder="amicusDrive@yandex.ru" id="email-input" />
                        <label htmlFor="password-input">Пароль</label>
                        <input className={FormRegCSS.form_registration__input} type="password" name="password" id="password-input" autoComplete="on" />
                        <label htmlFor="repeat-input">Повторите пароль</label>
                        <input className={FormRegCSS.form_registration__input} type="password" name="repeatPassword" id="repeat-input" autoComplete="on" />
                        <div className={FormRegCSS.agree_checkbox__wrapper}>
                            <input className={FormRegCSS.agree_checkbox + " visually-hidden"} type="checkbox" name="agree" id="agree-checkbox" />
                            <label className={FormRegCSS.agree_checkbox__label} htmlFor="agree-checkbox">
                                <span>Я согласен с условиями</span>
                                <a className={FormRegCSS.agree_checkbox__link} href="#">политики конфиденциальности</a>
                            </label>
                        </div>
                        <button to="/verification" className={FormRegCSS.form_registration__button + " button"}>Далее</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default FormRegistration;