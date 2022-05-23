import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const IsLoginBefore = () => {
    const navigate = useNavigate();

    useEffect(() => {
        isLoginBefore();
    }, []);

    function isLoginBefore() {
        if (JSON.parse(localStorage.getItem("LoginPassword"))) {
            const phone = JSON.parse(localStorage.getItem("LoginPassword")).phone;
            const password = JSON.parse(localStorage.getItem("LoginPassword")).password;

            const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/authorization";
            axios.post(API_URL, { phone, password }, { headers })
                .then(() => {
                    console.log("Пользователь автоматически вошел в систему");
                    navigate("/route-search");
                });
        }
    };

    return (<></>)
};

export default IsLoginBefore;