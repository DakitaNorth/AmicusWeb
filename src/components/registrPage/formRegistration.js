import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import FormRegCSS from './css/formRegistration.module.css';

class FormRegistration extends Component {
    Registration(e) {
        e.preventDefault();

        // const navigate = useNavigate();

        const name = e.target.elements.name.value;

        const phone = e.target.elements.login.value;

        const password = e.target.elements.password.value;

        const repeatPassword = e.target.elements.repeatPassword.value;

        const headers = {
            "Content-Type": "application/json; charset=utf-8",
        };

        if (document.getElementById("agree-checkbox").checked) {
            if (password === repeatPassword) {
                axios.post("https://xn--80aaggtieo3biv.xn--p1ai/registration",
                    { password, phone, name },
                    { headers })
                    .then(response => {
                        if (response.data["response"] === "User has been registered") {
                            // navigate("/route-search");
                            console.log(response.data);
                        }
                        else if (response.data["response"] === "Phone is already in use") {
                            console.log("Телефон уже зарегистрирован");
                        }
                        else {
                            console.log(response.data);
                        }
                    });
            }
            else {
                alert("Пароли не совпадают")
            }
        }
        else {
            alert("Политика конфиденциальности не принята")
        }
    };

    componentDidMount() {
        let loginInput = document.getElementById("login-input");
        let maskOptions = {
            mask: "+7(000)000-00-00",
            lazy: false
        }
        IMask(loginInput, maskOptions);
    }

    render() {
        return (
            <div className="universal-form">
                <h1 className={FormRegCSS.page_main__heading}>Регистрация</h1>
                <section className={FormRegCSS.form_registration}>
                    <div className={FormRegCSS.form_registration__container}>
                        <form onSubmit={this.Registration} className={FormRegCSS.form_registration__wrapper} action="#">
                            <label htmlFor="name-input">Ваше имя</label>
                            <input className="input" type="text" name="name" placeholder="Даниил" id="name-input" />
                            <label htmlFor="login-input">Номер телефона</label>
                            <input className="input" type="text" name="login" placeholder="+7(900)000-00-00" id="login-input" />
                            <label htmlFor="password-input">Пароль</label>
                            <input className="input" type="password" name="password" id="password-input" autoComplete="on" />
                            <label htmlFor="repeat-input">Повторите ароль</label>
                            <input className="input" type="password" name="repeatPassword" id="repeat-input" autoComplete="on" />
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
    }
};

export default FormRegistration;