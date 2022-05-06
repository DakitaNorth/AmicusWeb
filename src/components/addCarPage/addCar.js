import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import AddCarSettingsCSS from './css/addCar.module.css';

import ValidError from "../validError/validError";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const AddCar = () => {
    const navigate = useNavigate();

    const [addDirty, setAddDirty] = useState(false);
    const [addError, setAddError] = useState("");

    useEffect(() => {
        let statenumberInput = document.getElementById('num-input');
        let modelInput = document.getElementById('model-input'); 
        let colorInput = document.getElementById('color-input');
        let placesInput = document.getElementById('places-input');

        modelInput.onfocus = function () {
            modelInput.classList.remove(AddCarSettingsCSS.not_valid_input);
        }

        colorInput.onfocus = function () {
            colorInput.classList.remove(AddCarSettingsCSS.not_valid_input);
        }

        placesInput.onfocus = function () {
            placesInput.classList.remove(AddCarSettingsCSS.not_valid_input);
        }

        statenumberInput.onfocus = function () {
            let maskOptions = {
                mask: "a 000 aa 00aaa",
                lazy: true
            }
            IMask(statenumberInput, maskOptions);
            statenumberInput.classList.remove(AddCarSettingsCSS.not_valid_input);
        }
    });

    function addCar(e) {
        e.preventDefault();

        const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
        const owner = LoginPassword.id;

        let statenumber = document.getElementById('num-input').value;
        let model = document.getElementById('model-input').value; 
        let color = document.getElementById('color-input').value;
        let places = document.getElementById('places-input').value;

        if (statenumber !== "" && model !== "" && color !== "" && places !== "") {
            const ADD_CARD_URL = "https://xn--80aaggtieo3biv.xn--p1ai/addauto";
            axios.post(ADD_CARD_URL, { statenumber, model, color, places, owner }, { headers })
                .then((response) => {
                    navigate("/my-car-settings");
                    console.log(response);
                });
        }
        else {
            setAddDirty(true);
            setTimeout(() => setAddDirty(false), 3000);
            setAddError("Данные заполнены некорректно");
            valueError();
        }
    };

    function valueError() {
        document.getElementById("color-input").classList.add(AddCarSettingsCSS.not_valid_input);
        document.getElementById("model-input").classList.add(AddCarSettingsCSS.not_valid_input);
        document.getElementById("places-input").classList.add(AddCarSettingsCSS.not_valid_input);
        document.getElementById("num-input").classList.add(AddCarSettingsCSS.not_valid_input);
    };

    return (
        <div className="universal-form">
            {(addDirty && addError) && <ValidError error={addError}></ValidError>}
            <h1 className={AddCarSettingsCSS.page_main__heading}>Добавление авто</h1>
            <section className={AddCarSettingsCSS.car_settings}>
                <div className={AddCarSettingsCSS.car_settings__container}>
                    <div className={AddCarSettingsCSS.car__data}>
                        <label className={AddCarSettingsCSS.car__label} htmlFor="body-input">
                            <span className={AddCarSettingsCSS.car__text}>Цвет</span>
                            <input className={AddCarSettingsCSS.car__input} type="text" name="color" placeholder="Желтый" id="color-input" />
                        </label>
                        <label className={AddCarSettingsCSS.car__label} htmlFor="model-input">
                            <span className={AddCarSettingsCSS.car__text}>Модель машины</span>
                            <input className={AddCarSettingsCSS.car__input} type="text" name="model" placeholder="Renault Logan" id="model-input" />
                        </label>
                        <label className={AddCarSettingsCSS.car__label} htmlFor="year-input">
                            <span className={AddCarSettingsCSS.car__text}>Свободных мест</span>
                            <input className={AddCarSettingsCSS.car__input} type="text" name="places" placeholder="2" maxLength="1" id="places-input" />
                        </label>
                        <label className={AddCarSettingsCSS.car__label} htmlFor="num-input">
                            <span className={AddCarSettingsCSS.car__text}>Номер машины</span>
                            <input className={AddCarSettingsCSS.car__input} type="text" name="num" placeholder="Я360МА.40" id="num-input" />
                        </label>
                    </div>
                    <button onClick={addCar} className={AddCarSettingsCSS.car__button + " " + AddCarSettingsCSS.car__button_add + " button"}>Добавить</button>
                </div>
            </section >
        </div > 
    )

};

export default AddCar;