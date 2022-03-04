import React from "react";
import { NavLink } from "react-router-dom";
import VerCSS from './css/verificationPage.module.css';

const VerificationPage = () => (
    <div className="universal-form">
        <h1 className="page-main__heading">Подтверждение телефона</h1>
        <section className={VerCSS.form_verification}>
        <div className={VerCSS.form_verification__container}>
            <span className={VerCSS.form_verification__text}>Код был отправлен на ваш телефон через SMS</span>
            <form className={VerCSS.form_verification__wrapper} action="#">
              <input className={VerCSS.form_verification__input} type="text" name="code" placeholder="" maxlength="4" id="code-input"/>
              <button className={VerCSS.form_verification__button}>Отправить повторно</button>
            </form>
            <NavLink to="/password-recovery-second">полетели дальше (Тестово)</NavLink>
        </div>
      </section>
      </div>
);

export default VerificationPage;