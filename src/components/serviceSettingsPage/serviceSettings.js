import React from "react";
import { NavLink } from "react-router-dom";
import ServiceSettingsCSS from './css/serviceSettings.module.css';

const ServiceSettings = () => (
    <div className="universal-form">
        <h1 className={ServiceSettingsCSS.page_main__heading}>настройки сервиса</h1>
        <section className={ServiceSettingsCSS.service_settings}>
            <div className={ServiceSettingsCSS.service_settings__container}>
                <ul className={ServiceSettingsCSS.service_settings__list + " " + ServiceSettingsCSS.service}>
                    <li className={ServiceSettingsCSS.service__item}>
                        <NavLink to="/" className={ServiceSettingsCSS.service_settings__link}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="14.505" cy="15" rx="14.505" ry="15" fill="#D5DDE0" />
                                <path d="M13.2606 8C12.9537 8 12.7049 8.24881 12.7049 8.55573V9.11146H9.55573C9.24881 9.11146 9 9.36027 9 9.66719C9 9.97411 9.24881 10.2229 9.55573 10.2229H19.9294C20.2363 10.2229 20.4851 9.97411 20.4851 9.66719C20.4851 9.36027 20.2363 9.11146 19.9294 9.11146H16.7802V8.55573C16.7802 8.24881 16.5314 8 16.2245 8H13.2606Z" fill="white" />
                                <path d="M13.2606 14.2242C13.5675 14.2242 13.8163 14.473 13.8163 14.7799L13.8163 19.9667C13.8163 20.2737 13.5675 20.5225 13.2606 20.5225C12.9537 20.5225 12.7049 20.2737 12.7049 19.9667L12.7049 14.7799C12.7049 14.473 12.9537 14.2242 13.2606 14.2242Z" fill="white" />
                                <path d="M16.7802 14.7799C16.7802 14.473 16.5314 14.2242 16.2245 14.2242C15.9176 14.2242 15.6688 14.473 15.6688 14.7799V19.9667C15.6688 20.2737 15.9176 20.5225 16.2245 20.5225C16.5314 20.5225 16.7802 20.2737 16.7802 19.9667V14.7799Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.2904 12.1992C10.3216 11.9178 10.5595 11.7049 10.8427 11.7049H18.6424C18.9256 11.7049 19.1635 11.9178 19.1947 12.1992L19.3431 13.534C19.6119 15.9535 19.6119 18.3954 19.3431 20.8149L19.3285 20.9463C19.2217 21.9067 18.4774 22.6725 17.5204 22.8065C15.6775 23.0645 13.8076 23.0645 11.9647 22.8065C11.0077 22.6725 10.2634 21.9067 10.1566 20.9463L10.142 20.8149C9.87321 18.3954 9.87321 15.9535 10.142 13.534L10.2904 12.1992ZM11.3401 12.8163L11.2467 13.6567C10.9869 15.9947 10.9869 18.3542 11.2467 20.6921L11.2613 20.8235C11.3119 21.279 11.6649 21.6422 12.1188 21.7058C13.8595 21.9495 15.6256 21.9495 17.3663 21.7058C17.8202 21.6422 18.1732 21.279 18.2238 20.8235L18.2384 20.6921C18.4982 18.3542 18.4982 15.9947 18.2384 13.6567L18.145 12.8163H11.3401Z" fill="white" />
                            </svg>
                            <span className={ServiceSettingsCSS.service_text}>Очистить кэш</span>
                        </NavLink>
                    </li>
                    <li className={ServiceSettingsCSS.service__item}>
                        <NavLink to="/" className={ServiceSettingsCSS.service_settings__link}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="14.505" cy="15" rx="14.505" ry="15" fill="#D5DDE0" />
                                <path d="M12.9541 18.7553H14.675V18.6692C14.7036 16.891 15.1625 16.1166 16.4245 15.3279C17.6864 14.5607 18.4321 13.4565 18.4321 11.8719C18.4321 9.6348 16.7973 8 14.2734 8C11.9503 8 10.1076 9.43403 10 11.8719H11.8069C11.9144 10.1797 13.0975 9.4914 14.2734 9.4914C15.6214 9.4914 16.7113 10.3805 16.7113 11.7859C16.7113 12.9259 16.0588 13.7433 15.2199 14.2524C13.8145 15.1056 12.9756 15.9374 12.9541 18.6692V18.7553ZM13.8719 23C14.5817 23 15.1625 22.4192 15.1625 21.7094C15.1625 20.9995 14.5817 20.4187 13.8719 20.4187C13.162 20.4187 12.5813 20.9995 12.5813 21.7094C12.5813 22.4192 13.162 23 13.8719 23Z" fill="white" />
                            </svg>
                            <span className={ServiceSettingsCSS.service_text}>Вопросы о AmicusDrive</span>
                        </NavLink>
                    </li>
                    <li className={ServiceSettingsCSS.service__item}>
                        <NavLink to="/" className={ServiceSettingsCSS.service_settings__link}>
                            <svg width="30" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="15.1031" cy="15" rx="15.1031" ry="15" fill="#D5DDE0" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.5068 9.50152C15.152 9.28792 14.7083 9.28792 14.3536 9.50152L13.8919 9.77952C12.6568 10.5232 11.2702 10.9796 9.83477 11.1149L9.5439 11.1423C9.42907 11.1531 9.34132 11.2495 9.34132 11.3648V12.8348C9.34132 15.0771 10.2517 17.2233 11.8638 18.7818L14.7748 21.5959C14.8614 21.6796 14.9989 21.6796 15.0855 21.5959L17.9965 18.7818C19.6086 17.2233 20.519 15.0771 20.519 12.8348V11.3648C20.519 11.2495 20.4312 11.1531 20.3164 11.1423L20.0255 11.1149C18.5901 10.9796 17.2036 10.5232 15.9684 9.77952L15.5068 9.50152ZM13.6616 8.35244C14.442 7.88252 15.4183 7.88252 16.1987 8.35244L16.6604 8.63044C17.7231 9.27039 18.9162 9.66309 20.1513 9.77945L20.4422 9.80685C21.246 9.88259 21.8603 10.5574 21.8603 11.3648V12.8348C21.8603 15.4407 20.8023 17.9349 18.9288 19.7461L16.0178 22.5602C15.4112 23.1466 14.4491 23.1466 13.8425 22.5602L10.9315 19.7461C9.05796 17.9349 8 15.4407 8 12.8348V11.3648C8 10.5574 8.61426 9.88259 9.41809 9.80685L9.70896 9.77945C10.9441 9.66309 12.1372 9.27039 13.1999 8.63044L13.6616 8.35244Z" fill="white" />
                            </svg>
                            <span className={ServiceSettingsCSS.service_text}>Политика конфиденциальности</span>
                        </NavLink>
                    </li>
                    <li className={ServiceSettingsCSS.service__item}>
                        <NavLink to="/" className={ServiceSettingsCSS.service_settings__link}>
                            <svg width="30" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="15.1031" cy="15" rx="15.1031" ry="15" fill="#D5DDE0" />
                                <path d="M20.5626 8.15747C20.7726 8.36744 20.7726 8.70785 20.5626 8.91782L20.168 9.31241C22.5258 12.0588 22.4039 16.2007 19.8023 18.8023C18.5743 20.0302 17.0032 20.7058 15.3977 20.8288V21.9247H16.6522C16.9491 21.9247 17.1898 22.1654 17.1898 22.4624C17.1898 22.7593 16.9491 23 16.6522 23H13.0679C12.771 23 12.5303 22.7593 12.5303 22.4624C12.5303 22.1654 12.771 21.9247 13.0679 21.9247H14.3224V20.8288C12.8842 20.7185 11.4736 20.1649 10.3124 19.168L9.91782 19.5626C9.70785 19.7726 9.36744 19.7726 9.15747 19.5626C8.94751 19.3527 8.94751 19.0122 9.15747 18.8023L9.66437 18.2954C10.0195 17.9402 10.5714 17.9584 10.9172 18.2682C12.0369 19.2717 13.4473 19.7737 14.8579 19.7741L14.86 19.7741L14.8624 19.7741C16.3751 19.7735 17.8878 19.1961 19.0419 18.0419C21.2735 15.8104 21.3489 12.2389 19.2682 9.91716C18.9584 9.57141 18.9402 9.01952 19.2954 8.66437L19.8023 8.15747C20.0122 7.94751 20.3527 7.94751 20.5626 8.15747Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.0213 13.86C10.0213 11.1877 12.1877 9.02125 14.86 9.02125C17.5324 9.02125 19.6988 11.1877 19.6988 13.86C19.6988 16.5324 17.5324 18.6988 14.86 18.6988C12.1877 18.6988 10.0213 16.5324 10.0213 13.86ZM14.86 10.0965C12.7815 10.0965 11.0965 11.7815 11.0965 13.86C11.0965 14.1001 11.119 14.3349 11.162 14.5624C11.4568 14.2409 11.8804 14.0393 12.351 14.0393C13.2418 14.0393 13.964 14.7614 13.964 15.6522C13.964 16.3134 13.5661 16.8817 12.9968 17.1307C13.5461 17.4443 14.1822 17.6236 14.86 17.6236C16.6833 17.6236 18.2037 16.3271 18.5497 14.6057C18.0704 15.3435 17.2391 15.8314 16.2938 15.8314C14.8091 15.8314 13.6055 14.6279 13.6055 13.1432C13.6055 11.6585 14.8091 10.455 16.2938 10.455C16.3558 10.455 16.4173 10.4571 16.4782 10.4612C15.988 10.2274 15.4393 10.0965 14.86 10.0965ZM14.6808 13.1432C14.6808 12.2524 15.403 11.5303 16.2938 11.5303C17.1846 11.5303 17.9067 12.2524 17.9067 13.1432C17.9067 14.034 17.1846 14.7561 16.2938 14.7561C15.403 14.7561 14.6808 14.034 14.6808 13.1432ZM12.351 15.1146C12.0541 15.1146 11.8134 15.3553 11.8134 15.6522C11.8134 15.9491 12.0541 16.1898 12.351 16.1898C12.648 16.1898 12.8887 15.9491 12.8887 15.6522C12.8887 15.3553 12.648 15.1146 12.351 15.1146Z" fill="white" />
                            </svg>
                            <span className={ServiceSettingsCSS.service_text}>Язык</span>
                        </NavLink>
                    </li>
                </ul>
                <button className={ServiceSettingsCSS.service_settings__button + " button"}>Сохранить</button>
                <span className={ServiceSettingsCSS.service_settings__version}>AmicusDrive v1.0</span>
            </div>
        </section>
    </div>
);

export default ServiceSettings;