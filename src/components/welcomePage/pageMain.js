import React from "react";
import { NavLink } from "react-router-dom";
import PageMainCSS from "./css/pageMain.module.css";

import qrPnG from "../../img/qr-code.png";

const PageMain = () => (
  <main className="page-main">
    <h1 className="visually-hidden">AmicusDrive</h1>
    <section className={PageMainCSS.page_welcome}>
      <div className={PageMainCSS.page_welcome__container}>
        <div className={PageMainCSS.page_welcome__promo}>
          <span className={PageMainCSS.page_welcome__promo_text}>Добро пожаловать</span>
          <span className={PageMainCSS.page_welcome__promo_text}>Не желаете проехаться?</span>
        </div>
      </div>
    </section>
    <section className={PageMainCSS.page_navigation}>
      <div className={PageMainCSS.page_navigation__container}>
        <ul className={PageMainCSS.page_navigation__list}>
          <li>
            <NavLink className={PageMainCSS.page_navigation__list_link + " " + PageMainCSS.page_navigation__list__login} to="/login" alt="Войти на портал">Войти</NavLink>
          </li>
          <li>
            <NavLink className={PageMainCSS.page_navigation__list_link + " " + PageMainCSS.page_navigation__list__registration} to="/registration" alt="Регистрация на портале">Регистрация</NavLink>
          </li>
          <li>
            <NavLink className={PageMainCSS.page_navigation__list_link + " " + PageMainCSS.page_navigation__list__faq} to="/faq" href="#" alt="Faq проекта">Faq</NavLink>
          </li>
          <li>
            <NavLink className={PageMainCSS.page_navigation__list_link + " " + PageMainCSS.page_navigation__list__application} to="/mobileApplication" href="#" alt="Ссылка на мобильное приложение">Мобильное приложение</NavLink>
          </li>
        </ul>
      </div>
      <div className={PageMainCSS.page_navigation__text_container + " " + PageMainCSS.page_text}>
        <span className={PageMainCSS.page_text__text}>
          <span className={PageMainCSS.page_text__text_yellow}>Данный проект </span>
          <span>представляет из себя выпускную квалификационную работу студента ГАПОУ КО "Калужский технический колледж", группы 4ИС</span>
          <span className={PageMainCSS.page_text__text_yellow}> Синицына Даниила Валентиновича</span>
        </span>
        <img className={PageMainCSS.page_text__img} src={qrPnG} width="105" height="105" alt="Логотип проекта AmicusDrive" />
      </div>
    </section>
  </main>
);

export default PageMain;