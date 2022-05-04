import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import VerCSS from './css/verificationPage.module.css';

import ValidError from "../../components/validError/validError";
import ValidSuccess from "../validSuccess/validSuccess";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
};

const VerificationPage = () => {

  const navigate = useNavigate();

  const [serverRecoveryCode, setServerRecoveryCode] = useState(sessionStorage.getItem("RecoveryCode"));
  const [clientRecoveryCode, setClientRecoveryCode] = useState("");

  const [codeDirty, setCodeDirty] = useState(false);
  const [codeError, setCodeError] = useState("");

  const [sendSuccess, setSendSuccess] = useState(false);
  const [textSuccess, setTextSuccess] = useState("");

  useEffect(() => {
    let inputs = document.getElementsByClassName(VerCSS.form_verification__input);

    for (var i = 1; i <= inputs.length - 1; i++) {
      inputs[i].setAttribute("disabled", "disabled");
    }

    document.getElementById("code-input-1").focus();
  }, []);


  function codeEnter(e) {
    let inputValue = e.target.value;
    let inputId = e.target.id;

    setClientRecoveryCode(clientRecoveryCode + inputValue);

    if (inputId === "code-input-1" && inputValue !== "") {
      document.getElementById("code-input-2").removeAttribute("disabled");
      document.getElementById("code-input-2").focus();
    }
    else if (inputId === "code-input-2" && inputValue !== "") {
      document.getElementById("code-input-3").removeAttribute("disabled");
      document.getElementById("code-input-3").focus();
    }
    else if (inputId === "code-input-3" && inputValue !== "") {
      document.getElementById("code-input-4").removeAttribute("disabled");
      document.getElementById("code-input-4").focus();
    }
    else if (inputId === "code-input-4" && inputValue !== "") {
      document.getElementById("code-input-5").removeAttribute("disabled");
      document.getElementById("code-input-5").focus();
    }
    else if (inputId === "code-input-5" && inputValue !== "") {
      document.getElementById("code-input-6").removeAttribute("disabled");
      document.getElementById("code-input-6").focus();
    }
    else if (inputId === "code-input-6" && inputValue !== "") {
      document.getElementById("code-input-6").blur();
      recoveryCode();
    }
  };

  function recoveryCode() {
    if ((clientRecoveryCode + document.getElementById("code-input-6").value) === serverRecoveryCode) {
      navigate("/password-recovery-second");
    }
    else {
      setCodeDirty(true);
      setTimeout(() => setCodeDirty(false), 3000);
      setCodeError("Данные заполнены некорректно");
      valueError();
    }
  };

  function valueError() {
    let inputs = document.getElementsByClassName(VerCSS.form_verification__input);

    for (var i = 0; i <= inputs.length - 1; i++) {
      inputs[i].classList.add(VerCSS.not_valid_input);
    }
  };

  function deleteValue(e) {
    e.preventDefault();

    let inputs = document.getElementsByClassName(VerCSS.form_verification__input);

    for (var i = 1; i <= inputs.length - 1; i++) {
      inputs[i].setAttribute("disabled", "disabled");
    }

    for (var i = 0; i <= inputs.length - 1; i++) {
      inputs[i].classList.remove(VerCSS.not_valid_input);
      inputs[i].value = "";
    }

    document.getElementById("code-input-1").focus();
  };

  function sendMesageAgain(e) {
    e.preventDefault();

    let email = sessionStorage.getItem("RecoveryMail");

    console.log(email);

    const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/sendmessage";
    axios.post(API_URL, { email }, { headers })
      .then((response) => {
        console.log(response.data);
        setSendSuccess(true);
        setTimeout(() => setSendSuccess(false), 3000);
        setTextSuccess("Код повторно отправлен");
      });
  };

  return (
    <div className="universal-form">
      {(codeDirty && codeError) && <ValidError error={codeError}></ValidError>}
      {(sendSuccess && textSuccess) && <ValidSuccess success={textSuccess}></ValidSuccess>}
      <h1 className={VerCSS.page_main__heading}>Подтверждение</h1>
      <section className={VerCSS.form_verification}>
        <div className={VerCSS.form_verification__container}>
          <span className={VerCSS.form_verification__text}>Код был отправлен на вашу электронную почту</span>
          <form className={VerCSS.form_verification__wrapper} action="#">
            <label htmlFor="code-input-1" className={VerCSS.form_verification__input_wrapper}>
              <input className={VerCSS.form_verification__input} onChange={codeEnter} type="text" name="code1" placeholder="" maxLength="1" id="code-input-1" />
              <input className={VerCSS.form_verification__input} onChange={codeEnter} type="text" name="code2" placeholder="" maxLength="1" id="code-input-2" />
              <input className={VerCSS.form_verification__input} onChange={codeEnter} type="text" name="code3" placeholder="" maxLength="1" id="code-input-3" />
              <input className={VerCSS.form_verification__input} onChange={codeEnter} type="text" name="code4" placeholder="" maxLength="1" id="code-input-4" />
              <input className={VerCSS.form_verification__input} onChange={codeEnter} type="text" name="code5" placeholder="" maxLength="1" id="code-input-5" />
              <input className={VerCSS.form_verification__input} onChange={codeEnter} type="text" name="code6" placeholder="" maxLength="1" id="code-input-6" />
            </label>
            <button onClick={sendMesageAgain} className={VerCSS.form_verification__button}>Отправить повторно</button>
            <button onClick={deleteValue} className={VerCSS.form_verification__button + " " + VerCSS.form_verification__button_delete}>Стереть значение</button>
          </form>
        </div>
      </section>
    </div>
  )
};

export default VerificationPage;