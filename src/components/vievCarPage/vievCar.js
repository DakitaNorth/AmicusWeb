import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import CarSettingsCSS from './css/vievCar.module.css';

import car_img from "../../img/carSettings/car.png";

import ValidError from "../validError/validError";
import ValidSuccess from "../../components/validSuccess/validSuccess";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const VievCar = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [carData, setCarData] = useState([]);
    const [thisCarData, setThisCarData] = useState([]);
    
    const [editDirty, setEditDirty] = useState(false);
    const [editError, setEditError] = useState("");

    const [editYep, setEditYep] = useState(false);
    const [editSuccess, setEditSuccess] = useState("Данные успешно изменены");

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        gettingCarData();
    }, []);

    useLayoutEffect(() => {
        if (isLoading) {
            gettingThisCarData();
            includeData();
        }
    });

    useEffect(() => {
        includeData();
    }, [thisCarData]);

    useEffect(() => {
        let statenumberInput = document.getElementById('num-input');
        let modelInput = document.getElementById('model-input'); 
        let colorInput = document.getElementById('color-input');
        let placesInput = document.getElementById('places-input');

        modelInput.onfocus = function () {
            modelInput.classList.remove(CarSettingsCSS.not_valid_input);
        }

        colorInput.onfocus = function () {
            colorInput.classList.remove(CarSettingsCSS.not_valid_input);
        }

        placesInput.onfocus = function () {
            placesInput.classList.remove(CarSettingsCSS.not_valid_input);
        }

        statenumberInput.onfocus = function () {
            let maskOptions = {
                mask: "a 000 aa 00aaa",
                lazy: true
            }
            IMask(statenumberInput, maskOptions);
            statenumberInput.classList.remove(CarSettingsCSS.not_valid_input);
        }
    });

    function gettingCarData() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const userId = LoginPassword.id;

            const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getusersauto/" + userId;
            axios.get(API_URL, { headers })
                .then((response) => {
                    setCarData(response.data);
                    setIsLoading(true);
                });
        }
    }

    function gettingThisCarData() {
        let paramsId = parseInt(params.myCarID);

        for (var i = 0; i < carData.length; i++) {
            if (carData[i].id === paramsId) {
                setThisCarData(carData[i]);
            }
        }
    }

    function includeData() {
        document.getElementById('color-input').value = thisCarData.color;
        document.getElementById('model-input').value = thisCarData.model;
        document.getElementById('places-input').value = thisCarData.places;
        document.getElementById('num-input').value = thisCarData.statenumber;
    }

    function saveNewData(e) {
        e.preventDefault();

        const autoid = thisCarData.id;

        let color = document.getElementById('color-input').value;
        let model = document.getElementById('model-input').value;
        let places = document.getElementById('places-input').value;
        let statenumber = document.getElementById('num-input').value; 


        if (color !== "" && model !== "" && places !== "" && statenumber) {
            if (thisCarData.color !== color || thisCarData.model !== model || thisCarData.places !== places || thisCarData.statenumber !== statenumber) {
                const UPDATA_CAR_DATA = "https://xn--80aaggtieo3biv.xn--p1ai/updateautodata";
                axios.post(UPDATA_CAR_DATA, { color, model, places, statenumber, autoid }, { headers })
                    .then((response) => {
                        console.log(response.data);

                        setEditYep(true);
                        setTimeout(() => setEditYep(false), 3000);
                        setEditSuccess("Данные успешно изменены");

                        gettingCarData();
                        gettingThisCarData();
                    });
            }
        }
        else {
            setEditDirty(true);
            setTimeout(() => setEditDirty(false), 3000);
            setEditError("Данные заполнены некорректно");
            valueError();
        }
    };

    function valueError() {
        document.getElementById("color-input").classList.add(CarSettingsCSS.not_valid_input);
        document.getElementById("model-input").classList.add(CarSettingsCSS.not_valid_input);
        document.getElementById("places-input").classList.add(CarSettingsCSS.not_valid_input);
        document.getElementById("num-input").classList.add(CarSettingsCSS.not_valid_input);
    };

    function deleteCar(e) {
        e.preventDefault();

        let thisCarId = thisCarData.id;

        const DELETE_CARD_URL = "https://xn--80aaggtieo3biv.xn--p1ai/delauto/" + thisCarId;

        axios.get(DELETE_CARD_URL, { headers })
            .then((response) => {
                navigate("/my-car-settings");
                console.log(response);
            });
    };

    return (
        <div className="universal-form">
            {(editDirty && editError) && <ValidError error={editError}></ValidError>}
            {(editYep && editSuccess) && <ValidSuccess success={editSuccess}></ValidSuccess>}
            <h1 className={CarSettingsCSS.page_main__heading}>Настройки авто</h1>
            <section className={CarSettingsCSS.car_settings}>
                <div className={CarSettingsCSS.car_settings__container}>
                    <img className={CarSettingsCSS.car__img} src={car_img} width="203.5" height="135.67" alt="Ваш автомобиль" />
                    <div className={CarSettingsCSS.car__data}>
                        <label className={CarSettingsCSS.car__label} htmlFor="body-input">
                            <span className={CarSettingsCSS.car__text}>Цвет</span>
                            <input className={CarSettingsCSS.car__input} type="text" name="color" placeholder="Желтый" id="color-input" />
                        </label>
                        <label className={CarSettingsCSS.car__label} htmlFor="model-input">
                            <span className={CarSettingsCSS.car__text}>Модель машины</span>
                            <input className={CarSettingsCSS.car__input} type="text" name="model" placeholder="Renault Logan" id="model-input" />
                        </label>
                        <label className={CarSettingsCSS.car__label} htmlFor="year-input">
                            <span className={CarSettingsCSS.car__text}>Свободных мест</span>
                            <input className={CarSettingsCSS.car__input} type="text" name="places" placeholder="2" id="places-input" />
                        </label>
                        <label className={CarSettingsCSS.car__label} htmlFor="num-input">
                            <span className={CarSettingsCSS.car__text}>Номер машины</span>
                            <input className={CarSettingsCSS.car__input} type="text" name="num" placeholder="Я360МА.40" id="num-input" />
                        </label>
                    </div>
                    <button onClick={saveNewData} className={CarSettingsCSS.car__button + " " + CarSettingsCSS.car__button_save + " button"}>Сохранить</button>
                    <button onClick={deleteCar} className={CarSettingsCSS.car__button + " " + CarSettingsCSS.car__button_delete}>Удалить</button>
                </div>
            </section >
        </div >
    )

};

export default VievCar;