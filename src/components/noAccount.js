import React from "react";
import { NavLink } from "react-router-dom";
import NoAccCSS from './css/noAccount.module.css';

const NoAccount = () => (
    <section className={NoAccCSS.no_account}>
        <div className={NoAccCSS.no_account__container}>
          <span className={NoAccCSS.no_account__text}>Вы не имеете аккаунта?</span>
          <NavLink to="/registration" className={NoAccCSS.no_account__link} href="#">Регистрация</NavLink>
        </div>
    </section>
);

export default NoAccount;