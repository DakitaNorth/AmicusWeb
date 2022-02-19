import React from "react";
import { NavLink } from "react-router-dom";
import PassRecCSS from './css/passwordRecovery.module.css';

const PasswordRecovery = () => (
    <div className="universal-form">
        <h1 className="page-main__heading">Восстановление пароля</h1>
        <section className={PassRecCSS.form_recovery}>
        <div className={PassRecCSS.form_recovery__container}>
            <span className={PassRecCSS.form_recovery__text}>На ваш номер телефона будет отправлено SMS с кодом для восстановления пароля</span>
            <form className={PassRecCSS.form_recovery__wrapper} action="#">
              <label htmlFor="login-input">Номер телефона</label>
              <input className={PassRecCSS.form_recovery__input + " input"} type="text" name="login" placeholder="" id="login-input"/>
              <NavLink to="/verification" className={PassRecCSS.form_recovery__button + " button"}>Отправить</NavLink>
            </form>
        </div>
      </section>
    </div>
);

export default PasswordRecovery;