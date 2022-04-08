import React, { Component } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GoBackCSS from './css/goBackButton.module.css';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} className={GoBackCSS.go_back}>
      <svg width="63" height="63" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_503_524)">
          <circle cx="33" cy="29" r="18" fill="white" />
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M35.3374 22.3468C35.7998 22.8093 35.7998 23.5591 35.3374 24.0216L29.8589 29.5L35.3374 34.9784C35.7998 35.4409 35.7998 36.1907 35.3374 36.6532C34.8749 37.1156 34.1251 37.1156 33.6626 36.6532L27.3468 30.3374C26.8844 29.8749 26.8844 29.1251 27.3468 28.6626L33.6626 22.3468C34.1251 21.8844 34.8749 21.8844 35.3374 22.3468Z" fill="#3E4958" />
        <defs>
          <filter id="filter0_d_503_524" x="0" y="0" width="63" height="63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_503_524" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_503_524" result="shape" />
          </filter>
        </defs>
      </svg>
    </button>
  )
};

export default GoBackButton;