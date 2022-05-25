import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SuccessfulBookingCSS from './css/successfulBooking.module.css';

const SuccessfulBooking = () => {
    const navigate = useNavigate();

    let [timer, setTimer] = useState(15);
    const [timerId, setTimerId] = useState(setTimeout(() => {
        // navigate("/my-routes");
    }, 15000));

    useEffect(() => {
        setTimeout(timerLink, 1000);
    }, []);

    function timerLink() {
        if (timer >= 1) {
            timer -= 1;
            document.getElementById("successful_timer").textContent = timer + " ";
            setTimeout(timerLink, 1000);
        }
        else {
            console.log("Таймер умер"); 
        }
    };

    function stopTimerNGo(e) {
        e.preventDefault();

        clearTimeout(timerId);
        navigate("/my-routes");
    };

    return (
        <div className="universal-form">
            <h1 className={SuccessfulBookingCSS.page_main__heading}>Бронирование прошло удачно</h1>
            <section className={SuccessfulBookingCSS.successful_form}>
                <div className={SuccessfulBookingCSS.successful__container}>
                    <form className={SuccessfulBookingCSS.successful__wrapper} action="#">
                        <button onClick={stopTimerNGo} className={SuccessfulBookingCSS.successful_form__button + " button"}>Мои поездки</button>
                        <div className={SuccessfulBookingCSS.successful_text}>
                            <span>Автоматический переход (</span>
                            <span id="successful_timer">15 </span>
                            <span>сек)</span>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default SuccessfulBooking;