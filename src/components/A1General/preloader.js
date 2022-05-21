import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PreloaderCSS from "./css/preloader.module.css";

import preloaderImage from "../../img/preloader/preloader.svg";

// {isLoading ? <Preloader/> : null}

const Preloader = () => {
  return (
    <div className={PreloaderCSS.preloader}>
      <div className={PreloaderCSS.preloader__wrapper}>
        <img className={PreloaderCSS.preloader__img} src={preloaderImage} width="100" height="100"/>
        <span className={PreloaderCSS.preloader__text}>Контент загружается</span>
      </div>
    </div>
  )
};

export default Preloader;