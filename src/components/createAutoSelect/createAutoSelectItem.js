import React from "react";
import CreateAutoSelectItemCSS from './css/createAutoSelectItem.module.css';
import { useNavigate } from "react-router-dom";

const CreateAutoSelectItem = props => {
    const navigate = useNavigate();

    function radioChecked(e) {
        let carId = e.target.id;
        let carModel = props.model;
        let carColor = props.color;

        let createAutoSelectItemData = carColor + " " + carModel + " " + carId;

        console.log(carId);
        console.log(createAutoSelectItemData);

        sessionStorage.setItem("CreateAutoSelectItemID", JSON.stringify(carId));
        sessionStorage.setItem("CreateAutoSelectItemData", JSON.stringify(createAutoSelectItemData));

        navigate("/creating-route");
    };

    return (
        <li className={CreateAutoSelectItemCSS.car_list__item}>
            <label className={CreateAutoSelectItemCSS.car_label} htmlFor={props.statenumber}>
                <input className={CreateAutoSelectItemCSS.car_input +" visually-hidden"} onClick={radioChecked} type="radio" name="car" id={props.statenumber} />
                <span className={CreateAutoSelectItemCSS.car_model}>{props.model}</span>
                <span className={CreateAutoSelectItemCSS.car_color}>{props.color.substring(0, 6)}</span>
                <span className={CreateAutoSelectItemCSS.car_statenumber}>{props.statenumber.substring(0, 8)}</span>
            </label>
        </li>
    )
};

export default CreateAutoSelectItem;