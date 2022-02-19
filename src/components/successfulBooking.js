import React from "react";
import { NavLink } from "react-router-dom";
import SuccessfulBookingCSS from './css/successfulBooking.module.css';

const SuccessfulBooking = () => (
    <div className="universal-form">
        <h1 className={SuccessfulBookingCSS.page_main__heading}>Бронирование прошло удачно</h1>
        <section className={SuccessfulBookingCSS.successful_form}>
            <div className={SuccessfulBookingCSS.successful__container}>
                <form className={SuccessfulBookingCSS.successful__wrapper} action="#">
                    <button className={SuccessfulBookingCSS.successful_form__button + " button"}>Мои поездки</button>
                    <span className={SuccessfulBookingCSS.successful_text}>Автоматический переход (30 сек)</span>
                </form>
            </div>
        </section>
    </div>
);

export default SuccessfulBooking;