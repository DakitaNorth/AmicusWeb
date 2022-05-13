import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IMask from "imask";
import TimeParameterCSS from './css/timeParameter.module.css';

const TimeParameter = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let departureInput = document.getElementById("time-departure-input");
        let arrivalInput = document.getElementById("time-arrival-input");

        let maskOptions = {
            mask: "00:00",
            lazy: true
        };

        departureInput.onfocus = function () {
            IMask(departureInput, maskOptions);
        };

        arrivalInput.onfocus = function () {
            IMask(arrivalInput, maskOptions);
        };
    });

    function gettingTimeParameter(e) {
        e.preventDefault();
        let departureTime = [""];
        let arrivalTime = [""];

        departureTime = document.getElementById('time-departure-input').value;
        arrivalTime = document.getElementById('time-arrival-input').value;

        console.log(departureTime);
        console.log(arrivalTime); 

        sessionStorage.setItem("CreateDepartureTime", JSON.stringify(departureTime));
        sessionStorage.setItem("CreateArrivalTime", JSON.stringify(arrivalTime));

        navigate("/creating-route");
    }

    function timeEnter(e) {
        e.preventDefault();

        let inputValue = e.target.value;
        let inputId = e.target.id;

        if (inputId === "time-departure-input" && inputValue.length == 5) {
            document.getElementById("time-arrival-input").focus();
        }
    };

    return (
        <div className="universal-form">
            <h1 className={TimeParameterCSS.page_main__heading}>Во сколько?</h1>
            <section className={TimeParameterCSS.time_form}>
                <div className={TimeParameterCSS.time_form__container}>
                    <form className={TimeParameterCSS.time_form__wrapper} action="#">
                        <div className={TimeParameterCSS.time_input__wrapper}>
                            <label className={TimeParameterCSS.time_input__label} htmlFor="time-departure-input">Туда</label>
                            <input onChange={timeEnter} className={TimeParameterCSS.time_form__input} type="text" name="time-departure" placeholder="07:00" id="time-departure-input" />
                        </div>
                        <div className={TimeParameterCSS.time_input__wrapper}>
                            <label className={TimeParameterCSS.time_input__label} htmlFor="time-arrival-input">Обратно</label>
                            <input className={TimeParameterCSS.time_form__input} type="text" name="time-arrival" placeholder="22:00" id="time-arrival-input" />
                        </div>
                        <button onClick={gettingTimeParameter}className={TimeParameterCSS.time_form__button + " button"}>Сохранить</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default TimeParameter;