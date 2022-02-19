import React from "react";
import { NavLink } from "react-router-dom";
import HasAccCSS from './css/hasAccount.module.css';

const HasAccount = () => (
    <section className={HasAccCSS.has_account}>
        <div className={HasAccCSS.has_account__container}>
          <span className={HasAccCSS.has_account__text}>Уже имеете аккаунт?</span>
          <NavLink to="/login" className={HasAccCSS.has_account__link} href="#">Вход</NavLink>
        </div>
    </section>
);

export default HasAccount;