import React from "react";
import { NavLink } from "react-router-dom";
import PassRecSecCSS from './css/passwordRecoverySecond.module.css';

const PasswordRecoverySecond = () => {
    return (
        <div className={PassRecSecCSS.universal_form}>
            <h1 className={PassRecSecCSS.page_main__heading}>Восстановление пароля</h1>
            <section className={PassRecSecCSS.form_recovery}>
                <div className={PassRecSecCSS.form_recovery__container}>
                    <span className={PassRecSecCSS.form_recovery__text}>Отлично!<br></br>Введите новый пароль</span>
                    <form className={PassRecSecCSS.form_recovery__wrapper} action="#">
                        <label for="password-input">Новый пароль</label>
                        <input className={"input " + PassRecSecCSS.form_recovery__password_input} type="text" name="password" placeholder="" id="password-input" />
                        <label for="repeat-input">Повторите ароль</label>
                        <input className={"input " + PassRecSecCSS.form_recovery__repeat_input} type="text" name="password" placeholder="" id="repeat-input" />
                        <NavLink to="/successful" className={PassRecSecCSS.form_recovery__button + " button"}>Готово</NavLink>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default PasswordRecoverySecond;