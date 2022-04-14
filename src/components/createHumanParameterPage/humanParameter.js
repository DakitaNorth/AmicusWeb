import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HumanParameterCSS from './css/humanParameter.module.css';

const HumanParameter = () => {

    const navigate = useNavigate();

    let inputNumber = 1;

    useEffect(() => {
        includeData();
    })

    function gettingHumanParameter(e) {
        e.preventDefault();

        let humanParameter = document.getElementById('human-input').value;

        console.log(humanParameter);

        localStorage.setItem("CreateHumanParameter", JSON.stringify(humanParameter));

        navigate("/creating-route");
    }

    function includeData() {
        document.getElementById('human-input').value = inputNumber;
    }

    function inputPlus(e) {
        e.preventDefault();
        if (inputNumber >= 0 && inputNumber < 9) {
            inputNumber += 1;
            document.getElementById('human-input').value = inputNumber;
        }
    }

    function inputMinus(e) {
        e.preventDefault();
        if (inputNumber >= 2) {
            inputNumber -= 1;
            document.getElementById('human-input').value = inputNumber;
        }
    }

    return (
        <div className="universal-form">
            <h1 className={HumanParameterCSS.page_main__heading}>Cколько пассажиров?</h1>
            <section className={HumanParameterCSS.human_form}>
                <div className={HumanParameterCSS.human_form__container}>
                    <form className={HumanParameterCSS.human_form__wrapper} action="#">
                        <div className={HumanParameterCSS.human_input__wrapper}>
                            <button onClick={inputMinus} className={HumanParameterCSS.human_input__button}>
                                <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.2513 2H0.74874C0.337129 2 0 1.55497 0 1C0 0.450262 0.337129 0 0.74874 0H20.2513C20.6668 0 21 0.450262 21 1C21 1.55497 20.6629 2 20.2513 2Z"
                                        fill="#3E4958" />
                                </svg>
                            </button>
                            <input className={HumanParameterCSS.human_form__input} type="text" name="human" placeholder="1" maxLength="1" id="human-input" disabled />
                            <button onClick={inputPlus} className={HumanParameterCSS.human_input__button}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.001 9.96144L10.0002 1.41396C10.0002 0.861736 10.4478 0.414114 11 0.414165C11.5523 0.414217 12 0.861922 12 1.41414L12.0008 9.96163L20.5437 9.96242C21.0959 9.96247 21.5437 10.4102 21.5437 10.9624C21.5438 11.5146 21.0961 11.9622 20.5439 11.9622L12.001 11.9614L12.0018 20.5038C12.0018 21.056 11.5542 21.5037 11.002 21.5036C10.4498 21.5036 10.0021 21.0559 10.002 20.5036L10.0012 11.9612L1.45423 11.9604C0.90201 11.9604 0.454306 11.5127 0.454254 10.9604C0.454202 10.4082 0.901824 9.9606 1.45404 9.96065L10.001 9.96144Z"
                                        fill="#3E4958" />
                                </svg>
                            </button>
                        </div>
                        <button onClick={gettingHumanParameter} className={HumanParameterCSS.human_form__button + " button"}>Сохранить</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default HumanParameter;