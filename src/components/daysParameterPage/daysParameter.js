import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DaysParameterCSS from './css/daysParameter.module.css';

const DaysParameter = () => {
    const navigate = useNavigate();

    function gettingDaysParameter(e) {
        e.preventDefault();
        let daysParameter = "";
        for (var i = 1; i <= 7; i++) {
            if (document.getElementById('checkbox' + i).checked) {
                daysParameter += (document.getElementById('label' + i).textContent + " ");
            }
        }

        console.log(daysParameter);

        localStorage.setItem("daysParameter", JSON.stringify(daysParameter));

        navigate("/route-search");
    }

    return (
        <div className="universal-form">
            <h1 className={DaysParameterCSS.page_main__heading}>В какие дни?</h1>
            <section className={DaysParameterCSS.days_form}>
                <div className={DaysParameterCSS.days_form__container}>
                    <form className={DaysParameterCSS.days_form__wrapper} action="#">
                        <ul className={DaysParameterCSS.days_form__list}>
                            <li className={DaysParameterCSS.days_form__item}>
                                <input className={DaysParameterCSS.day_checkbox + " visually-hidden"} type="checkbox" name="day-monday" id="checkbox1" />
                                <label className={DaysParameterCSS.day_checkbox_label} htmlFor="checkbox1" id="label1">
                                    пн
                                </label>
                            </li>
                            <li className={DaysParameterCSS.days_form__item}>
                                <input className={DaysParameterCSS.day_checkbox + " visually-hidden"} type="checkbox" name="day-tuesday" id="checkbox2" />
                                <label className={DaysParameterCSS.day_checkbox_label} htmlFor="checkbox2" id="label2">
                                    вт
                                </label>
                            </li>
                            <li className={DaysParameterCSS.days_form__item}>
                                <input className={DaysParameterCSS.day_checkbox + " visually-hidden"} type="checkbox" name="day-wednesday" id="checkbox3" />
                                <label className={DaysParameterCSS.day_checkbox_label} htmlFor="checkbox3" id="label3">
                                    ср
                                </label>
                            </li>
                            <li className={DaysParameterCSS.days_form__item}>
                                <input className={DaysParameterCSS.day_checkbox + " visually-hidden"} type="checkbox" name="day-thursday" id="checkbox4" />
                                <label className={DaysParameterCSS.day_checkbox_label} htmlFor="checkbox4" id="label4">
                                    чт
                                </label>
                            </li>
                            <li className={DaysParameterCSS.days_form__item}>
                                <input className={DaysParameterCSS.day_checkbox + " visually-hidden"} type="checkbox" name="day-friday" id="checkbox5" />
                                <label className={DaysParameterCSS.day_checkbox_label} htmlFor="checkbox5" id="label5">
                                    пт
                                </label>
                            </li>
                            <li className={DaysParameterCSS.days_form__item}>
                                <input className={DaysParameterCSS.day_checkbox + " visually-hidden"} type="checkbox" name="day-saturday" id="checkbox6" />
                                <label className={DaysParameterCSS.day_checkbox_label} htmlFor="checkbox6" id="label6">
                                    сб
                                </label>
                            </li>
                            <li className={DaysParameterCSS.days_form__item}>
                                <input className={DaysParameterCSS.day_checkbox + " visually-hidden"} type="checkbox" name="day-sunday" id="checkbox7" />
                                <label className={DaysParameterCSS.day_checkbox_label} htmlFor="checkbox7" id="label7">
                                    вс
                                </label>
                            </li>
                        </ul>
                        <button onClick={gettingDaysParameter} className={DaysParameterCSS.days_form__button + " button"}>Сохранить</button>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default DaysParameter;