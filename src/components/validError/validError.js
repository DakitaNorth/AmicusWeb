import React, { useEffect } from "react";
import ValidErrorCss from './css/validError.module.css';

const ValidError = props => {

    useEffect(() => {
        if (props.ifVisible) {
            document.getElementById("valid_error").classList.add(ValidErrorCss.valie_error_visible);
            setTimeout(() => document.getElementById("valid_error").classList.remove(ValidErrorCss.valie_error_visible), 2500);
        }
    }, []);

    return (
        <div className={ValidErrorCss.valid_error} id="valid_error">
            <div className={ValidErrorCss.valid_error__container}>
                <span className={ValidErrorCss.valid_error__text}>
                    {props.error}
                </span>
            </div>
        </div>
    )
};

export default ValidError;