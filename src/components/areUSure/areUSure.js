import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AreUSureCSS from './css/areUSure.module.css';

const AreUSure = props => {
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("sure").classList.add(AreUSureCSS.sure_visible);
    }, []);

    function functionYes() {
        if (props.text === "storageCleanUp") {
            sessionStorage.clear();
            localStorage.clear();
            navigate("/");
        }
    };

    function functionNo() {
        document.getElementById("sure").classList.remove(AreUSureCSS.sure_visible);
    };

    return (
        <div className={AreUSureCSS.sure} id="sure">
            <div className={AreUSureCSS.sure__container}>
                <span className={AreUSureCSS.sure__text}>Вы уверены?</span>
                <div className={AreUSureCSS.sure__buttons_wrapper}>
                    <button onClick={functionYes} className={AreUSureCSS.sure__button + " " + AreUSureCSS.sure__button_yes}>Да</button>
                    <button onClick={functionNo} className={AreUSureCSS.sure__button + " " + AreUSureCSS.sure__button_no}>Нет</button>
                </div>
            </div>
        </div>
    )
};

export default AreUSure;