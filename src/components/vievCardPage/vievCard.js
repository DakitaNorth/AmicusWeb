import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import VievCardCSS from './css/vievCard.module.css';

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const VievCard = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [cardData, setCardData] = useState([]);
    const [thisCardData, setThisCardData] = useState([]);
    const [cardDataNum, setCardDataNum] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        gettingCardData();
    }, []);

    useLayoutEffect(() => {
        if (isLoading) {
            gettingThisCardData();
            includeData();
            disabledInputs();
        }
    }) 

    function gettingCardData() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
            const phone = LoginPassword.phone;

            const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/getuserscards";
            axios.post(API_URL, { phone }, { headers })
                .then((response) => {
                    setCardData(response.data);
                    setIsLoading(true);
                });
        }
    }

    function gettingThisCardData() {
        let paramsId = parseInt(params.myCardID);

        for (var i = 0; i < cardData.length; i++) {
            if (cardData[i].id === paramsId) {
                setThisCardData(cardData[i]);
                setCardDataNum(cardData[i].number.substring(0, 7) + "XX XXXX XXXX");
            }
        }
    }

    function includeData() {
        if (document.getElementById('num-card').value.includes("X")) {
            document.getElementById('num-card').value = thisCardData.number;
            document.getElementById('date-card').value = thisCardData.date;
            document.getElementById('cvv-card').value = thisCardData.cvv;
            document.getElementById('name-card').value = thisCardData.owner;
        }
        else {
            document.getElementById('num-card').value = cardDataNum;
            document.getElementById('date-card').value = thisCardData.date;
            document.getElementById('cvv-card').value = "XXX";
            document.getElementById('name-card').value = thisCardData.owner;
        }
    }

    function disabledInputs() {
        document.getElementById('num-card').setAttribute("disabled", "disabled");
        document.getElementById('date-card').setAttribute("disabled", "disabled");
        document.getElementById('cvv-card').setAttribute("disabled", "disabled");
        document.getElementById('name-card').setAttribute("disabled", "disabled");
    }

    function setDisabledInputs() {
        includeData();

        if (document.getElementById('num-card').disabled &&
            document.getElementById('date-card').disabled &&
            document.getElementById('cvv-card').disabled &&
            document.getElementById('name-card').disabled) {

            document.getElementById('num-card').removeAttribute("disabled");
            document.getElementById('date-card').removeAttribute("disabled");
            document.getElementById('cvv-card').removeAttribute("disabled");
            document.getElementById('name-card').removeAttribute("disabled");
        }
        else {
            document.getElementById('num-card').setAttribute("disabled", "disabled");
            document.getElementById('date-card').setAttribute("disabled", "disabled");
            document.getElementById('cvv-card').setAttribute("disabled", "disabled");
            document.getElementById('name-card').setAttribute("disabled", "disabled");
        }
        document.getElementById('num-card').focus();
    }

    function CardMasks() {
        let numInput = document.getElementById("num-card");
        let dateInput = document.getElementById("date-card");
        let cvvInput = document.getElementById("cvv-card");

        let numMaskOptions = {
            mask: "0000 0000 0000 0000",
            lazy: false
        }
        let dateMaskOptions = {
            mask: "00/00",
            lazy: false
        }
        let cvvMaskOptions = {
            mask: "000",
            lazy: false
        }

        IMask(numInput, numMaskOptions);
        IMask(dateInput, dateMaskOptions);
        IMask(cvvInput, cvvMaskOptions);
    }

    function saveNewData(e) {
        // e.preventDefault();

        // let cardnumber = document.getElementById('num-card').value;

        // const DELETE_CARD_URL = "https://xn--80aaggtieo3biv.xn--p1ai/delcard";

        // axios.post(DELETE_CARD_URL, { cardnumber }, { headers })
        //     .then((response) => {
        //         navigate("/my-card-settings");
        //         console.log(response);
        //     });
    }

    function deleteCard(e) {
        e.preventDefault();

        let cardnumber = document.getElementById('num-card').value;

        const DELETE_CARD_URL = "https://xn--80aaggtieo3biv.xn--p1ai/delcard";

        axios.post(DELETE_CARD_URL, { cardnumber }, { headers })
            .then((response) => {
                navigate("/my-card-settings");
                console.log(response);
            });
    }

    return (
        <div className="universal-form">
            <h1 className={VievCardCSS.page_main__heading}>ваша карта</h1>
            <section className={VievCardCSS.form_card_viev}>
                <div className={VievCardCSS.form_card_viev__container}>
                    <form className={VievCardCSS.form_card_viev__wrapper} action="#">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M54.5748 39.9302V39.3081H54.4179L54.2363 39.7354L54.0557 39.3081H53.8978V39.9302H54.0093V39.461L54.179 39.8659H54.2945L54.4643 39.46V39.9302H54.5748ZM53.579 39.9302V39.4141H53.7803V39.3091H53.2671V39.4141H53.4684V39.9302H53.579Z" fill="#F79410" />
                            <path d="M36.7712 42.6016H23.2177V17.4316H36.7712V42.6016Z" fill="#FF5F00" />
                            <path d="M24.0845 30.012C24.0845 24.9061 26.3979 20.358 30.0006 17.427C27.3661 15.2837 24.0411 14.0044 20.4276 14.0044C11.873 14.0044 4.93848 21.1711 4.93848 30.012C4.93848 38.8528 11.873 46.0195 20.4276 46.0195C24.0411 46.0195 27.3661 44.7403 30.0006 42.597C26.3979 39.666 24.0845 35.1178 24.0845 30.012Z" fill="#EB001B" />
                            <path d="M55.0568 30.0076C55.0568 38.8484 48.1223 46.0151 39.5676 46.0151C35.9541 46.0151 32.6292 44.7359 29.9937 42.5926C33.5973 39.6616 35.9108 35.1134 35.9108 30.0076C35.9108 24.9017 33.5973 20.3536 29.9937 17.4226C32.6292 15.2793 35.9541 14 39.5676 14C48.1223 14 55.0568 21.1667 55.0568 30.0076Z" fill="#F79E1B" />
                        </svg>
                        <label className={VievCardCSS.form_label_num} htmlFor="num-card">
                            <span className={VievCardCSS.form_input__text}>Номер карты</span>
                            <input onFocus={CardMasks} className={VievCardCSS.form__input + " " + VievCardCSS.form__input_num} id="num-card" placeholder="0000 0000 0000 0000" />
                        </label>
                        <div className={VievCardCSS.form_card_viev__shield}>
                            <label className={VievCardCSS.form_label_date} htmlFor="date-card">
                                <span className={VievCardCSS.form_input__text}>Срок действия</span>
                                <input onFocus={CardMasks} className={VievCardCSS.form__input + " " + VievCardCSS.form__input_date} placeholder="00/00" id="date-card" />
                            </label>
                            <label className={VievCardCSS.form_label_cvv} htmlFor="cvv-card">
                                <span className={VievCardCSS.form_input__text}>CVV-код</span>
                                <input onFocus={CardMasks} className={VievCardCSS.form__input + " " + VievCardCSS.form__input_cvv} placeholder="000" id="cvv-card" />
                            </label>
                        </div>
                        <input className={VievCardCSS.form__input + " " + VievCardCSS.form__input_name} id="name-card" placeholder="VALDIMIR TIHOMIROV" />
                    </form>
                    <div className={VievCardCSS.form_card_viev__buttons}>
                        <button onClick={includeData} className={VievCardCSS.form_card_viev__true_viev + " " + VievCardCSS.form_card_viev__button}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H40V40H0V0Z" fill="white" fillOpacity="0.01" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.6154 20C14.6154 16.9318 17.0262 14.4444 20 14.4444C22.9738 14.4444 25.3846 16.9318 25.3846 20C25.3846 23.0682 22.9738 25.5556 20 25.5556C17.0262 25.5556 14.6154 23.0682 14.6154 20ZM20 16.6667C18.2157 16.6667 16.7692 18.1591 16.7692 20C16.7692 21.8409 18.2157 23.3333 20 23.3333C21.7843 23.3333 23.2308 21.8409 23.2308 20C23.2308 18.1591 21.7843 16.6667 20 16.6667Z" fill="#3E4958" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.97723 17.9946C8.37542 18.8893 8.15385 19.5892 8.15385 20C8.15385 20.4108 8.37542 21.1107 8.97723 22.0054C9.55897 22.8703 10.4237 23.8078 11.5177 24.6741C13.7105 26.4105 16.7168 27.7778 20 27.7778C23.2832 27.7778 26.2895 26.4105 28.4823 24.6741C29.5763 23.8078 30.441 22.8703 31.0228 22.0054C31.6246 21.1107 31.8462 20.4108 31.8462 20C31.8462 19.5892 31.6246 18.8893 31.0228 17.9946C30.441 17.1297 29.5763 16.1922 28.4823 15.3259C26.2895 13.5895 23.2832 12.2222 20 12.2222C16.7168 12.2222 13.7105 13.5895 11.5177 15.3259C10.4237 16.1922 9.55897 17.1297 8.97723 17.9946ZM10.2063 13.563C12.6908 11.5957 16.146 10 20 10C23.854 10 27.3092 11.5957 29.7937 13.563C31.0383 14.5486 32.0661 15.6481 32.7923 16.7276C33.4983 17.7774 34 18.9293 34 20C34 21.0707 33.4983 22.2226 32.7923 23.2724C32.0661 24.3519 31.0383 25.4514 29.7937 26.437C27.3092 28.4043 23.854 30 20 30C16.146 30 12.6908 28.4043 10.2063 26.437C8.96172 25.4514 7.93388 24.3519 7.20774 23.2724C6.50166 22.2226 6 21.0707 6 20C6 18.9293 6.50166 17.7774 7.20774 16.7276C7.93388 15.6481 8.96172 14.5486 10.2063 13.563Z" fill="#3E4958" />
                            </svg>
                            <span>Показать данные</span>
                        </button>
                        <button onClick={setDisabledInputs} className={VievCardCSS.form_card_viev__edit + " " + VievCardCSS.form_card_viev__button}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H40V40H0V0Z" fill="white" fillOpacity="0.01" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.1718 5.37277C25.9331 5.13409 25.6094 5 25.2718 5C24.9343 5 24.6105 5.13409 24.3718 5.37277L8.77264 20.972C8.61275 21.1319 8.49834 21.3315 8.44119 21.5503L6.74422 28.047C6.63003 28.4842 6.75618 28.9491 7.07568 29.2686C7.39517 29.5881 7.86011 29.7143 8.29728 29.6001L14.794 27.9031C15.0128 27.8459 15.2124 27.7315 15.3723 27.5716L30.9715 11.9724C31.4685 11.4754 31.4685 10.6696 30.9715 10.1725L26.1718 5.37277ZM10.8167 22.5277L25.2718 8.07264L28.2717 11.0725L13.8166 25.5275L9.75613 26.5882L10.8167 22.5277Z" fill="#3E4958" />
                                <path d="M7.27273 32.1515C6.56982 32.1515 6 32.7213 6 33.4242C6 34.1272 6.56982 34.697 7.27273 34.697H32.7273C33.4302 34.697 34 34.1272 34 33.4242C34 32.7213 33.4302 32.1515 32.7273 32.1515H7.27273Z" fill="#3E4958" />
                            </svg>
                            <span>Редактировать данные</span>
                        </button>
                    </div>
                </div>
                <button onClick={saveNewData} className={VievCardCSS.viev_card__button + " " + VievCardCSS.viev_card__button_add + " button"}>Сохранить</button>
                <button onClick={deleteCard} className={VievCardCSS.viev_card__button + " " + VievCardCSS.viev_card__button_delete}>Удалить</button>
            </section>
        </div>
    )

};

export default VievCard;