import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SuccessfulBookingCSS from './css/successfulBooking.module.css';

const SuccessfulBooking = () => {
    const navigate = useNavigate();

    let timer = 30;

    useEffect(() => {
        setTimeout(timerLink, 1000);
    }, []);

    function timerLink() {
        if (timer >= 1) {
            timer -= 1;
            setTimeout(timerLink, 1000);
            document.getElementById("successful_timer").textContent = timer;
        } else {
            navigate("/my-routes")
        }
    };

    return (
        <div className="universal-form">
            <h1 className={SuccessfulBookingCSS.page_main__heading}>Бронирование прошло удачно</h1>
            <section className={SuccessfulBookingCSS.successful_form}>
                <div className={SuccessfulBookingCSS.successful__container}>
                    <form className={SuccessfulBookingCSS.successful__wrapper} action="#">
                        <button className={SuccessfulBookingCSS.successful_form__button + " button"}>Мои поездки</button>
                        <NavLink to="/my-routes" className={SuccessfulBookingCSS.successful_text} id="successful_text">
                            <span>Автоматический переход (</span>
                            <span id="successful_timer">30</span>
                            <span>сек)</span>
                        </NavLink>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default SuccessfulBooking;