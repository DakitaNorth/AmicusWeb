import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SearchParametersCSS from './css/parameters.module.css';

const SearchParameters = () => {

    const [daysData, setDaysData] = useState([]);
    const [humanData, setHumanData] = useState([]);
    const [departureTime, setDepartureTime] = useState([]);
    const [arrivalTime, setArrivalTime] = useState([]);

    useEffect(() => {
        includeData();
    }, []);

    function includeData() {
        let daysParameter = "пн вт ср ";
        let humanParameter = "1";
        let departureTime = "12:00";
        let arrivalTime = "19:00";

        if (JSON.parse(localStorage.getItem("SearchDaysParameter"))) {
            setDaysData(JSON.parse(localStorage.getItem("SearchDaysParameter")));
        } else {
            setDaysData(daysParameter);
            localStorage.setItem("SearchDaysParameter", JSON.stringify(daysParameter));
        }

        if (JSON.parse(localStorage.getItem("SearchHumanParameter"))) {
            setHumanData(JSON.parse(localStorage.getItem("SearchHumanParameter")));
        } else {
            setHumanData(humanParameter);
            localStorage.setItem("SearchHumanParameter", JSON.stringify(humanParameter));
        }

        if (JSON.parse(localStorage.getItem("SearchDepartureTime"))) {
            setDepartureTime(JSON.parse(localStorage.getItem("SearchDepartureTime")));
        } else {
            setDepartureTime(departureTime);
            localStorage.setItem("SearchDepartureTime", JSON.stringify(departureTime));
        }

        if (JSON.parse(localStorage.getItem("SearchArrivalTime"))) {
            setArrivalTime(JSON.parse(localStorage.getItem("SearchArrivalTime")));
        } else {
            setArrivalTime(arrivalTime);
            localStorage.setItem("SearchArrivalTime", JSON.stringify(arrivalTime));
        }
    }

    return (
        <div className={SearchParametersCSS.parameters}>
            <ul className={SearchParametersCSS.parameters__list}>
                <li className={SearchParametersCSS.parameters__item}>
                    <NavLink to="/search-days-parameter" className={SearchParametersCSS.days_item} href="#">
                        <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M9.58427 1.69228L10.2681 1.77744C11.8464 1.97401 13.0311 3.31545 13.0311 4.90597V13.7246C13.0311 15.2689 11.8808 16.5714 10.3483 16.7622C7.80299 17.0793 5.22814 17.0793 2.68279 16.7622C1.15032 16.5714 0 15.2689 0 13.7246V4.90597C0 3.31545 1.18474 1.97401 2.76306 1.77744L3.44686 1.69228C3.71772 0.716338 4.61263 0 5.67485 0H7.35628C8.4185 0 9.3134 0.716338 9.58427 1.69228ZM3.36287 2.97356L2.91891 3.02885C1.97192 3.14679 1.26108 3.95166 1.26108 4.90597V13.7246C1.26108 14.6327 1.9375 15.3986 2.83865 15.5108C5.28049 15.815 7.75063 15.815 10.1925 15.5108C11.0936 15.3986 11.7701 14.6327 11.7701 13.7246V4.90597C11.7701 3.95166 11.0592 3.14679 10.1122 3.02885L9.66825 2.97356V3.99341C9.66825 4.34165 9.38595 4.62395 9.03772 4.62395H3.99341C3.64517 4.62395 3.36287 4.34165 3.36287 3.99341V2.97356ZM4.62395 2.31197C4.62395 1.73158 5.09445 1.26108 5.67485 1.26108H7.35628C7.93668 1.26108 8.40718 1.73158 8.40718 2.31197V3.36287H4.62395V2.31197Z"
                                fill="white" />
                            <path
                                d="M9.66825 7.98682C9.66825 7.63858 9.38595 7.35628 9.03772 7.35628H3.99341C3.64517 7.35628 3.36287 7.63858 3.36287 7.98682C3.36287 8.33506 3.64517 8.61736 3.99341 8.61736H9.03772C9.38595 8.61736 9.66825 8.33506 9.66825 7.98682Z"
                                fill="white" />
                            <path
                                d="M8.82754 10.509C8.82754 10.1607 8.54524 9.87844 8.197 9.87844H3.99341C3.64517 9.87844 3.36287 10.1607 3.36287 10.509C3.36287 10.8572 3.64517 11.1395 3.99341 11.1395H8.197C8.54524 11.1395 8.82754 10.8572 8.82754 10.509Z"
                                fill="white" />
                        </svg>
                        {daysData}
                    </NavLink>
                </li>
                <li className={SearchParametersCSS.parameters__item}>
                    <NavLink to="/search-human-parameter" className={SearchParametersCSS.human_item} href="#">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M3.50432 4.25524C3.50432 1.90514 5.40945 0 7.75956 0C10.1097 0 12.0148 1.90514 12.0148 4.25524C12.0148 6.60535 10.1097 8.51048 7.75956 8.51048C5.40945 8.51048 3.50432 6.60535 3.50432 4.25524ZM7.75956 1.50185C6.2389 1.50185 5.00617 2.73459 5.00617 4.25524C5.00617 5.7759 6.2389 7.00863 7.75956 7.00863C9.28022 7.00863 10.513 5.7759 10.513 4.25524C10.513 2.73459 9.28022 1.50185 7.75956 1.50185Z"
                                fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M0 13.767C0 11.6933 1.681 10.0123 3.75463 10.0123H4.09591C4.28063 10.0123 4.46419 10.0415 4.63979 10.0989L5.50637 10.3818C6.97046 10.8599 8.54866 10.8599 10.0127 10.3818L10.8793 10.0989C11.0549 10.0415 11.2385 10.0123 11.4232 10.0123H11.7645C13.8381 10.0123 15.5191 11.6933 15.5191 13.767V14.9567C15.5191 15.7109 14.9726 16.3539 14.2283 16.4754C9.94415 17.1749 5.57497 17.1749 1.29086 16.4754C0.546557 16.3539 0 15.7109 0 14.9567V13.767ZM3.75463 11.5142C2.51045 11.5142 1.50185 12.5228 1.50185 13.767V14.9567C1.50185 14.9748 1.51498 14.9903 1.53286 14.9932C5.65669 15.6665 9.86243 15.6665 13.9863 14.9932C14.0041 14.9903 14.0173 14.9748 14.0173 14.9567V13.767C14.0173 12.5228 13.0087 11.5142 11.7645 11.5142H11.4232C11.3968 11.5142 11.3706 11.5184 11.3455 11.5265L10.4789 11.8095C8.71192 12.3865 6.8072 12.3865 5.04019 11.8095L4.17361 11.5265C4.14853 11.5184 4.1223 11.5142 4.09591 11.5142H3.75463Z"
                                fill="white" />
                            <path
                                d="M16.27 3.0037C16.6848 3.0037 17.021 3.3399 17.021 3.75463V5.50678H18.7731C19.1879 5.50678 19.5241 5.84299 19.5241 6.25771C19.5241 6.67243 19.1879 7.00863 18.7731 7.00863H17.021V8.76079C17.021 9.17552 16.6848 9.51172 16.27 9.51172C15.8553 9.51172 15.5191 9.17552 15.5191 8.76079V7.00863H13.767C13.3522 7.00863 13.016 6.67243 13.016 6.25771C13.016 5.84299 13.3522 5.50678 13.767 5.50678H15.5191V3.75463C15.5191 3.3399 15.8553 3.0037 16.27 3.0037Z"
                                fill="white" />
                        </svg>
                        {humanData}
                    </NavLink>
                </li>
                <li className={SearchParametersCSS.parameters__item}>
                    <NavLink to="/search-time-parameter" className={SearchParametersCSS.time_item} href="#">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.22857 3.64286C9.22857 3.24048 8.90238 2.91429 8.5 2.91429C8.09762 2.91429 7.77143 3.24048 7.77143 3.64286V8.5C7.77143 8.7512 7.90084 8.98469 8.11386 9.11783L11.0281 10.9393C11.3694 11.1525 11.8189 11.0488 12.0321 10.7076C12.2454 10.3664 12.1416 9.91686 11.8004 9.7036L9.22857 8.09619V3.64286Z"
                                fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0ZM1.45714 8.5C1.45714 4.61034 4.61034 1.45714 8.5 1.45714C12.3897 1.45714 15.5429 4.61034 15.5429 8.5C15.5429 12.3897 12.3897 15.5429 8.5 15.5429C4.61034 15.5429 1.45714 12.3897 1.45714 8.5Z"
                                fill="white" />
                        </svg>
                        <span className={SearchParametersCSS.time_text}>{departureTime}</span>
                        <span className={SearchParametersCSS.time_text}>{arrivalTime}</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
};

export default SearchParameters;