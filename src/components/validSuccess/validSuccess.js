import React, { useEffect } from "react";
import ValidSuccessCSS from './css/validSuccess.module.css';

const ValidSuccess = props => {

    useEffect(() => {
        document.getElementById("valid_success").classList.add( ValidSuccessCSS.valie_success_visible);
        setTimeout(() => document.getElementById("valid_success").classList.remove( ValidSuccessCSS.valie_success_visible), 2500);
    }, []);

    return (
        <div className={ ValidSuccessCSS.valid_success} id="valid_success">
            <div className={ ValidSuccessCSS.valid_success__container}>
                <span className={ ValidSuccessCSS.valid_success__text}>
                    {props.success}
                </span>
            </div>
        </div>
    )
};

export default ValidSuccess;