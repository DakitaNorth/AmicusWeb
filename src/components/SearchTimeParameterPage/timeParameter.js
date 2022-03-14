import React from "react";
import { useNavigate } from "react-router-dom";
import IMask from "imask";
import TimeParameterCSS from './css/timeParameter.module.css';

const TimeParameter = () => {

    const navigate = useNavigate();

    function gettingTimeParameter(e) {
        e.preventDefault();
        let departureTime = [""];
        let arrivalTime = [""];

        departureTime = document.getElementById('time-departure-input').value;
        arrivalTime = document.getElementById('time-arrival-input').value;

        console.log(departureTime);
        console.log(arrivalTime);

        localStorage.setItem("SearchDepartureTime", JSON.stringify(departureTime));
        localStorage.setItem("SearchArrivalTime", JSON.stringify(arrivalTime));

        navigate("/route-search");
    }

    function departureMask() {
        let departureInput = document.getElementById("time-departure-input");
        let cvvMaskOptions = {
            mask: "00:00",
            lazy: false
        }
        IMask(departureInput, cvvMaskOptions);
    }

    function arrivalMask() {
        let arrivalInput = document.getElementById("time-arrival-input");
        let cvvMaskOptions = {
            mask: "00:00",
            lazy: false
        }
        IMask(arrivalInput, cvvMaskOptions);
    }

    return (
        <div className="universal-form">
            <h1 className={TimeParameterCSS.page_main__heading}>Во сколько?</h1>
            <section className={TimeParameterCSS.time_form}>
                <div className={TimeParameterCSS.time_form__container}>
                    <form className={TimeParameterCSS.time_form__wrapper} action="#">
                        <div className={TimeParameterCSS.time_input__wrapper}>
                            <label className={TimeParameterCSS.time_input__label} htmlFor="time-departure-input">Туда</label>
                            <input onFocus={departureMask} className={TimeParameterCSS.time_form__input} type="text" name="time-departure" placeholder="07:00" id="time-departure-input" />
                        </div>
                        <div className={TimeParameterCSS.time_input__wrapper}>
                            <label className={TimeParameterCSS.time_input__label} htmlFor="time-arrival-input">Обратно</label>
                            <input onFocus={arrivalMask} className={TimeParameterCSS.time_form__input} type="text" name="time-arrival" placeholder="22:00" id="time-arrival-input" />
                        </div>
                        <button onClick={gettingTimeParameter}className={TimeParameterCSS.time_form__button + " button"}>Сохранить</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default TimeParameter;