import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PassRecCSS from './css/passwordRecovery.module.css';

const PasswordRecovery = () => {

  const navigate = useNavigate();

  function sendMesage(e) {
    e.preventDefault();

    let email = e.target.elements.email.value;

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
    };

    const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/sendmessage";

    if (email !== "") {
      console.log(email);

      axios.post(API_URL, { email }, { headers })
        .then((response) => {
          sessionStorage.setItem("RecoveryCode", response.data.code);
          navigate("/verification");
          console.log(response.data);
        })
    }
    else {
      console.log("Данные заполнены некорректно");
    }

  }

  return (
    <div className="universal-form">
      <h1 className={PassRecCSS.page_main__heading}>Восстановление пароля</h1>
      <section className={PassRecCSS.form_recovery}>
        <div className={PassRecCSS.form_recovery__container}>
          <span className={PassRecCSS.form_recovery__text}>На вашу электронную почту будет отправлено письмо с кодом для восстановления пароля</span>
          <form onSubmit={sendMesage} className={PassRecCSS.form_recovery__wrapper} action="#">
            <label htmlFor="email-input">Ваша почта</label>
            <input className={PassRecCSS.form_recovery__input + " input"} type="text" name="email" placeholder="amicusDrive@yandex.ru" id="email-input" />
            <button className={PassRecCSS.form_recovery__button + " button"}>Отправить</button>
          </form>
        </div>
      </section>
    </div>
  )
};

export default PasswordRecovery;