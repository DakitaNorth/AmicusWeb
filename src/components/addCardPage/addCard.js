import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import AddCardCSS from './css/addCard.module.css';

import ValidError from "../validError/validError";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const AddCard = () => {
    const navigate = useNavigate();

    const [addDirty, setAddDirty] = useState(false);
    const [addError, setAddError] = useState("");

    useEffect(() => {
        let numberInput = document.getElementById('num-card');
        let dateInput = document.getElementById('date-card');
        let cvvInput = document.getElementById('cvv-card');

        numberInput.onfocus = function () {
            let maskOptions = {
                mask: "0000 0000 0000 0000",
                lazy: true
            }
            IMask(numberInput, maskOptions);
            numberInput.classList.remove(AddCardCSS.not_valid_input);
        }

        dateInput.onfocus = function () {
            let maskOptions = {
                mask: "00/00",
                lazy: true
            }
            IMask(dateInput, maskOptions);
            dateInput.classList.remove(AddCardCSS.not_valid_input);
        }

        cvvInput.onfocus = function () {
            let maskOptions = {
                mask: "000",
                lazy: true
            }
            IMask(cvvInput, maskOptions);
            cvvInput.classList.remove(AddCardCSS.not_valid_input);
        }
    });

    function saveNewData(e) {
        e.preventDefault();

        const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
        const user = LoginPassword.id;

        let number = document.getElementById('num-card').value;
        let owner = document.getElementById('name-card').value;
        let date = document.getElementById('date-card').value;
        let cvv = document.getElementById('cvv-card').value;

        if (number !== "" && owner !== "" && date !== "" && cvv !== "") {
            const ADD_CARD_URL = "https://xn--80aaggtieo3biv.xn--p1ai/addcard";
            axios.post(ADD_CARD_URL, { user, number, owner, date, cvv }, { headers })
                .then((response) => {
                    console.log(response);
                    navigate(-1); 
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
        document.getElementById("num-card").classList.add(AddCardCSS.not_valid_input);
        document.getElementById("name-card").classList.add(AddCardCSS.not_valid_input);
        document.getElementById("date-card").classList.add(AddCardCSS.not_valid_input);
        document.getElementById("cvv-card").classList.add(AddCardCSS.not_valid_input);
    };

    return (
        <div className="universal-form">
            {(addDirty && addError) && <ValidError error={addError}></ValidError>}
            <h1 className={AddCardCSS.page_main__heading}>добавить карту</h1>
            <section className={AddCardCSS.form_card_add}>
                <div className={AddCardCSS.form_card_add__container}>
                    <form onSubmit={saveNewData} className={AddCardCSS.form_card_add__wrapper} action="#">
                        <label htmlFor="num-card">
                            <span className={AddCardCSS.form_input__text}>Номер карты</span>
                            <input className={AddCardCSS.form__input} type="text" name="num-card" placeholder="0000 0000 0000 0000" id="num-card" />
                        </label>
                        <label htmlFor="name-card">
                            <span className={AddCardCSS.form_input__text}>Имя на карте</span>
                            <input className={AddCardCSS.form__input} type="text" name="name-card" placeholder="VALDIMIR TIHOMIROV" id="name-card" />
                        </label>
                        <div className={AddCardCSS.form_card_add__shield}>
                            <label className={AddCardCSS.form_label_date} htmlFor="date-card">
                                <span className={AddCardCSS.form_input__text}>Срок действия</span>
                                <input className={AddCardCSS.form__input + " " + AddCardCSS.form__input_date} type="text" name="date-card" placeholder="00/00" id="date-card" />
                            </label>
                            <label htmlFor="cvv-card">
                                <span className={AddCardCSS.form_input__text}>CVV-код</span>
                                <input className={AddCardCSS.form__input + " " + AddCardCSS.form__input_cvv} type="text" name="cvv-card" placeholder="000" id="cvv-card" />
                            </label>
                        </div>
                        <button className={AddCardCSS.add_card__button + " button"}>Сохранить</button>
                    </form>
                    {/* <div className={AddCardCSS.form_card_add__buttons}>
                            <button className={AddCardCSS.form_card_add__scane + " " + AddCardCSS.form_card_add__button}>
                                <svg width="40" height="40" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0H41V40H1V0Z" fill="white" fillOpacity="0.01" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.7246 6C8.45844 6 5 9.45844 5 13.7246V15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15V13.7246C7 10.563 9.56301 8 12.7246 8H13.375H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H13.375H12.7246ZM29.2754 6C33.5416 6 37 9.45844 37 13.7246V15C37 15.5523 36.5523 16 36 16C35.4477 16 35 15.5523 35 15V13.7246C35 10.563 32.437 8 29.2754 8H28.625H27C26.4477 8 26 7.55228 26 7C26 6.44772 26.4477 6 27 6H28.625H29.2754ZM37 26.2754C37 30.5416 33.5416 34 29.2754 34H28.625H27C26.4477 34 26 33.5523 26 33C26 32.4477 26.4477 32 27 32H28.625H29.2754C32.437 32 35 29.437 35 26.2754V25C35 24.4477 35.4477 24 36 24C36.5523 24 37 24.4477 37 25V26.2754ZM12.7246 34C8.45844 34 5 30.5416 5 26.2754V25C5 24.4477 5.44772 24 6 24C6.55228 24 7 24.4477 7 25V26.2754C7 29.437 9.56301 32 12.7246 32H13.375H15C15.5523 32 16 32.4477 16 33C16 33.5523 15.5523 34 15 34H13.375H12.7246Z" fill="#3E4958" />
                                    <g filter="url(#filter0_d_167_485)">
                                        <circle cx="21" cy="20" r="5" fill="white" />
                                        <circle cx="21" cy="20" r="5" stroke="#3E4958" strokeWidth="2" strokeLinecap="round" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_167_485" x="0" y="3" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="7.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_167_485" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_167_485" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <span>Сканировать карту</span>
                            </button>
                            <button className={AddCardCSS.form_card_add__face_id + " " + AddCardCSS.form_card_add__button}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H40V40H0V0Z" fill="white" fillOpacity="0.01" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7246 6C7.45844 6 4 9.45844 4 13.7246V15C4 15.5523 4.44772 16 5 16C5.55228 16 6 15.5523 6 15V13.7246C6 10.563 8.56301 8 11.7246 8H12.375H14C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6H12.375H11.7246ZM28.2754 6C32.5416 6 36 9.45844 36 13.7246V15C36 15.5523 35.5523 16 35 16C34.4477 16 34 15.5523 34 15V13.7246C34 10.563 31.437 8 28.2754 8H27.625H26C25.4477 8 25 7.55228 25 7C25 6.44772 25.4477 6 26 6H27.625H28.2754ZM36 26.2754C36 30.5416 32.5416 34 28.2754 34H27.625H26C25.4477 34 25 33.5523 25 33C25 32.4477 25.4477 32 26 32H27.625H28.2754C31.437 32 34 29.437 34 26.2754V25C34 24.4477 34.4477 24 35 24C35.5523 24 36 24.4477 36 25V26.2754ZM11.7246 34C7.45844 34 4 30.5416 4 26.2754V25C4 24.4477 4.44772 24 5 24C5.55228 24 6 24.4477 6 25V26.2754C6 29.437 8.56301 32 11.7246 32H12.375H14C14.5523 32 15 32.4477 15 33C15 33.5523 14.5523 34 14 34H12.375H11.7246Z" fill="#3E4958" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15V17.9951C14 18.5474 14.4477 18.9951 15 18.9951C15.5523 18.9951 16 18.5474 16 17.9951V15ZM26.9631 15C26.9631 14.4477 26.5154 14 25.9631 14C25.4108 14 24.9631 14.4477 24.9631 15V17.9951C24.9631 18.5474 25.4108 18.9951 25.9631 18.9951C26.5154 18.9951 26.9631 18.5474 26.9631 17.9951V15ZM20.8771 14C21.4294 14 21.8771 14.4477 21.8771 15V19.5774C21.8771 21.1908 20.5692 22.4987 18.9558 22.4987V20.4987C19.4646 20.4987 19.8771 20.0862 19.8771 19.5774V15C19.8771 14.4477 20.3248 14 20.8771 14ZM25.6399 24.9147C25.966 24.469 25.8691 23.8433 25.4234 23.5172C24.9777 23.1911 24.352 23.288 24.0258 23.7337C23.4105 24.5746 22.1613 25.1675 20.6923 25.2107C19.246 25.2532 17.7666 24.7528 16.7543 23.6485C16.3811 23.2414 15.7486 23.2139 15.3415 23.5871C14.9343 23.9603 14.9068 24.5928 15.28 24.9999C16.7542 26.6082 18.835 27.2662 20.7511 27.2098C22.6445 27.1541 24.5598 26.3908 25.6399 24.9147Z" fill="#3E4958" />
                                </svg>
                                <span>Добавить face ID</span>
                            </button>
                        </div> */}
                </div>
            </section>
        </div> 
    )
};

export default AddCard;