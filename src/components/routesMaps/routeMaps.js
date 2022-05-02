import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import RoutesMapCSS from './css/routeMaps.module.css';

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const RouteMaps = () => {

    const params = useParams();

    const [myData, setMyData] = useState([]);

    useEffect(() => {
    }, []);

    function gettingData() {
        // if (JSON.parse(localStorage.getItem("LoginPassword"))) {
        //     const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
        //     const userId = LoginPassword.id;

        //     const DRIVER_URL = "https://xn--80aaggtieo3biv.xn--p1ai/gettravelswhereuserdriver/" + userId;

        //     axios.get(DRIVER_URL, { headers })
        //         .then((response) => {
        //             if (Array.isArray(response.data) && response.data.length) {
        //                 for (var i = 0; i <= response.data.length - 1; i++) {
        //                     response.data[i].autorname = "Вы";
        //                 }
        //                 setMyData(response.data);
        //             }
        //         });
        // }
    }

    function includeData() {
    }

    return (
        <div className="universal-form">
            <h1 className="visually-hidden">Выбор поездки</h1>
            <section className={RoutesMapCSS.form_search_route}>
                <YMaps>
                    <div>
                        <Map
                            defaultState={{
                                center: [54.513845, 36.261224],
                                zoom: 9
                            }}
                        >
                            <Placemark geometry={[54.513845, 36.261224]}/>
                        </Map>
                    </div>
                </YMaps>
            </section>
        </div >
    )
};

export default RouteMaps;