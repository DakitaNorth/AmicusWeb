import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import FormRegCSS from './css/formRegistration.module.css';

const FormRegistration = () => {
    const navigate = useNavigate();

    const Registration = async (e) => {
        e.preventDefault();

        const name = "Даниил";
        // const phone  = e.target.elements.name.value;

        const phone = "+7(555)555-55-55";
        // const phone  = e.target.elements.login.value;

        const password = "54321";
        // const password = e.target.elements.password.value;

        const headers = {
            "Content-Type": "application/json; charset=utf-8",
        };

        await axios
            .post("https://xn--80aaggtieo3biv.xn--p1ai/registration",
                { password, phone, name },
                { headers })
            .then(response => {
                if (response.data["response"] === "User has been registered") {
                    navigate("/route-search");
                    console.log(response.data);
                }
                else if (response.data["response"] === "Phone is already in use") {
                    console.log("Телефон уже зарегистрирован");
                }
                else {
                    console.log(response.data);
                }
            });
    };

    return (
        <div className="universal-form">
            <h1 className={FormRegCSS.page_main__heading}>Регистрация</h1>
            <section className={FormRegCSS.form_registration}>
                <div className={FormRegCSS.form_registration__container}>
                    <form onSubmit={Registration} className={FormRegCSS.form_registration__wrapper} action="#">
                        <label htmlFor="name-input">Ваше имя</label>
                        <input className="input" type="text" name="name" placeholder="" id="name-input" />
                        <label htmlFor="login-input">Номер телефона</label>
                        <input className="input" type="text" name="login" placeholder="" id="login-input" />
                        <label htmlFor="password-input">Пароль</label>
                        <input className="input" type="password" name="password" placeholder="" id="password-input" />
                        <label htmlFor="repeat-input">Повторите ароль</label>
                        <input className="input" type="password" name="repeat-password" placeholder="" id="repeat-input" />
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