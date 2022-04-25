import React , { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VerCSS from './css/verificationPage.module.css';

const VerificationPage = () => {

  const navigate = useNavigate();

  const [serverRecoveryCode, setServerRecoveryCode] = useState(sessionStorage.getItem("RecoveryCode"));
  const [clientRecoveryCode, setClientRecoveryCode] = useState("");

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
      console.log("Верно");
      navigate("/password-recovery-second");
    }
    else {
      console.log("Не верно");
    }
  };

  return (
    <div className="universal-form">
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
            <button className={VerCSS.form_verification__button}>Отправить повторно</button>
          </form>
        </div>
      </section>
    </div>
  )
};

export default VerificationPage;