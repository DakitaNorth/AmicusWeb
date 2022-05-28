import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PassRecSecCSS from './css/passwordRecoverySecond.module.css';

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const PasswordRecoverySecond = () => {

    const navigate = useNavigate();

    function saveNewPassword(e) {
        e.preventDefault();

        let password = e.target.password.value;
        let repeatPassword = e.target.repeat.value;
        let mail = sessionStorage.getItem("RecoveryMail");

        console.log(password);
        console.log(repeatPassword);
        console.log(mail);

        if (password === repeatPassword) {

            const PASSWORD_RECOVERY_URL = "https://xn--80aaggtieo3biv.xn--p1ai/setusernewpassword";

            axios.post(PASSWORD_RECOVERY_URL, { password, mail }, { headers })
                .then((response) => {
                    console.log(response.data);
                    navigate("/login");
                });
        }
    }

    return (
        <div className={PassRecSecCSS.universal_form}>
            <h1 className={PassRecSecCSS.page_main__heading}>Восстановление пароля</h1>
            <section className={PassRecSecCSS.form_recovery}>
                <div className={PassRecSecCSS.form_recovery__container}>
                    <span className={PassRecSecCSS.form_recovery__text}>Отлично!<br></br>Введите новый пароль</span>
                    <form onSubmit={saveNewPassword} className={PassRecSecCSS.form_recovery__wrapper} action="#">
                        <label htmlFor="password-input">Новый пароль</label>
                        <input className={"input " + PassRecSecCSS.form_recovery__password_input} type="text" name="password" placeholder="" id="password-input" />
                        <label htmlFor="repeat-input">Повторите пароль</label>
                        <input className={"input " + PassRecSecCSS.form_recovery__repeat_input} type="text" name="repeat" placeholder="" id="repeat-input" />
                        <button className={PassRecSecCSS.form_recovery__button}>Восстановить</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default PasswordRecoverySecond;