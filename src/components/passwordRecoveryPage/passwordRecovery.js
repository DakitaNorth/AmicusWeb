import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PassRecCSS from './css/passwordRecovery.module.css';

import ValidError from "../../components/validError/validError";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
};

const PasswordRecovery = () => {

  const navigate = useNavigate();

  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    let emailInput = document.getElementById("email-input");

    emailInput.onfocus = function () {
      emailInput.classList.remove(PassRecCSS.not_valid_input);
    }
  });

  function sendMesage(e) {
    e.preventDefault();

    let email = e.target.elements.email.value;

    const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/sendmessage";
    axios.post(API_URL, { email }, { headers })
      .then((response) => {
        if (typeof response.data["mail"] !== "undefined" && response.data["mail"] !== "" && email.includes("@")) {
          sessionStorage.setItem("RecoveryMail", email);
          sessionStorage.setItem("RecoveryCode", response.data.code);
          navigate("/verification");
          console.log(response.data);
        }
        else {
          console.log(response.data);
          setEmailDirty(true);
          setTimeout(() => setEmailDirty(false), 3000);
          setEmailError("Данные заполнены некорректно");
          valueError();
        }
      });
  };

  function valueError() {
    document.getElementById("email-input").classList.add(PassRecCSS.not_valid_input);
  };

  return (
    <div className="universal-form">
      {(emailDirty && emailError) && <ValidError error={emailError}></ValidError>}
      <h1 className={PassRecCSS.page_main__heading}>Восстановление пароля</h1>
      <section className={PassRecCSS.form_recovery}>
        <div className={PassRecCSS.form_recovery__container}>
          <span className={PassRecCSS.form_recovery__text}>На вашу электронную почту будет отправлено письмо с кодом для восстановления пароля</span>
          <form onSubmit={sendMesage} className={PassRecCSS.form_recovery__wrapper} action="#">
            <label htmlFor="email-input">Ваша почта</label>
            <input className={PassRecCSS.form_recovery__input} type="text" name="email" placeholder="amicusDrive@yandex.ru" id="email-input" />
            <button className={PassRecCSS.form_recovery__button}>Отправить</button>
          </form>
        </div>
      </section>
    </div>
  )
};

export default PasswordRecovery;