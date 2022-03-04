import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ProfileSettingsCSS from './css/profileSettings.module.css';

import avatar_load from "../../img/profile-load.svg";
import password_lock from "../../img/formLogin/passwordLock.svg";
import password_unlock from "../../img/formLogin/passwordUnlock.svg";

const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
const phone = LoginPassword.phone;
const password = LoginPassword.password;

const userphone = phone;

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

class ProfileSettings extends Component {

    state = {
        profileSettingsData: []
    }

    componentDidMount() {
        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/autorization";

        axios.post(API_URL, { phone, password }, { headers })
            .then((response) => {
                this.setState({
                    profileSettingsData: response.data
                });
                this.includeData();
                console.log(this.state);
            });
    }

    includeData() {
        document.getElementById('email-input').value = this.state.profileSettingsData.mail;
        document.getElementById('facebook-input').value = this.state.profileSettingsData.facebook;
        document.getElementById('password-input').value = this.state.profileSettingsData.password;
    }

    passwordUnlockLock() {
        if (document.getElementById('password-unlock').checked) {
            document.getElementById('password-unlock-img').setAttribute('src', password_lock);
            document.getElementById('password-input').setAttribute('type', 'text');
        }
        else {
            document.getElementById('password-unlock-img').setAttribute('src', password_unlock);
            document.getElementById('password-input').setAttribute('type', 'password');
        }
    }

    saveNewData(e) {
        e.preventDefault();

        const MAIL_URL = "https://xn--80aaggtieo3biv.xn--p1ai/changeusermail";
        const FACEBOOK_URL = "https://xn--80aaggtieo3biv.xn--p1ai/changeuserfacebook";
        const PASSWORD_URL = "https://xn--80aaggtieo3biv.xn--p1ai/changeuserpass";

        let mail = document.getElementById('email-input').value;
        let facebook = document.getElementById('facebook-input').value;
        let password = document.getElementById('password-input').value;

        console.log(mail);
        console.log(facebook);
        console.log(password);


        axios.post(MAIL_URL, { userphone, mail }, { headers })
            .then((response) => {
                console.log(response);
            });
        axios.post(FACEBOOK_URL, { userphone, facebook }, { headers })
            .then((response) => {
                console.log(response);
            });
        axios.post(PASSWORD_URL, { userphone, password }, { headers })
            .then((response) => {
                console.log(response);
            });
    }

    render() {
        return (
            <div className="universal-form">
                <h1 className={ProfileSettingsCSS.page_main__heading}>Настройки профиля</h1>
                <section className={ProfileSettingsCSS.profile_settings}>
                    <div className={ProfileSettingsCSS.profile_settings__container}>
                        <div className={ProfileSettingsCSS.profile__avatar + " " + ProfileSettingsCSS.avatar}>
                            <button className={ProfileSettingsCSS.avatar__load_button}>
                                <img className={ProfileSettingsCSS.avatar__img} src={this.state.profileSettingsData.photo} width="85" height="85" alt="Ваш аватар" />
                            </button>
                            <span className={ProfileSettingsCSS.avatar__name}>{this.state.profileSettingsData.name}</span>
                        </div>
                        <div className={ProfileSettingsCSS.profile__data}>
                            <label className={ProfileSettingsCSS.phone_label} htmlFor="phone-input">
                                <svg className={ProfileSettingsCSS.phone_svg} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.505 30C22.5158 30 29.0099 23.2843 29.0099 15C29.0099 6.71573 22.5158 0 14.505 0C6.49409 0 0 6.71573 0 15C0 23.2843 6.49409 30 14.505 30ZM19.1922 17.0423L21.4322 19.3643C21.8772 19.8269 21.8639 20.5928 21.4024 21.0722L20.7628 21.7213L20.749 21.7086C20.4791 21.9275 20.1678 22.1106 19.8347 22.2455C19.5247 22.3702 19.2197 22.4491 18.9014 22.4885C18.7553 22.5046 15.3677 22.8337 11.164 18.477C8.12301 15.325 7.00246 13.0022 7.29825 10.4607C7.33279 10.1437 7.40834 9.82744 7.52969 9.49599C7.66133 9.14778 7.83823 8.82488 8.04992 8.54491L8.03267 8.52716L8.66399 7.86905C9.12642 7.38962 9.86564 7.37563 10.3108 7.83691L12.5508 10.1592C12.996 10.6211 12.9832 11.3867 12.5208 11.8662L12.1484 12.2526L11.391 13.0365C11.4249 13.098 11.4592 13.1623 11.4947 13.2288C11.5005 13.2398 11.5064 13.2509 11.5124 13.262L11.5146 13.2662C11.9105 14.005 12.4521 15.0157 13.4797 16.0805C14.5061 17.1452 15.4815 17.7062 16.1942 18.1154C16.2717 18.1606 16.3456 18.2031 16.4169 18.2438L17.5454 17.0744C18.0071 16.5957 18.746 16.5817 19.1922 17.0423Z" fill="#D5DDE0" />
                                </svg>
                                <input className={ProfileSettingsCSS.phone__input + " input"} type="text" name="email" placeholder="ggg@yandex.ru" id="email-input" />
                            </label>
                            <label className={ProfileSettingsCSS.email_label} htmlFor="facebook-input">
                                <svg className={ProfileSettingsCSS.email_svg} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M29.0099 15C29.0099 23.2843 22.5158 30 14.505 30C6.49409 30 0 23.2843 0 15C0 6.71573 6.49409 0 14.505 0C22.5158 0 29.0099 6.71573 29.0099 15ZM8.53829 12.6989C8.72511 12.8352 9.28827 13.2401 10.2278 13.9134C11.1673 14.5867 11.8871 15.1051 12.3871 15.4686C12.442 15.5085 12.5587 15.5951 12.7372 15.7286C12.9158 15.8622 13.0642 15.9702 13.1822 16.0526C13.3004 16.1349 13.4432 16.2273 13.6109 16.3295C13.7785 16.4317 13.9365 16.5085 14.0848 16.5594C14.2332 16.6106 14.3705 16.6361 14.4969 16.6361H14.5052H14.5135C14.6398 16.6361 14.7772 16.6106 14.9256 16.5594C15.0739 16.5085 15.232 16.4316 15.3995 16.3295C15.567 16.2271 15.7098 16.1349 15.828 16.0526C15.9461 15.9702 16.0944 15.8622 16.273 15.7286C16.4515 15.595 16.5684 15.5085 16.6233 15.4686C17.1287 15.1051 18.4145 14.1817 20.4803 12.6987C20.8814 12.409 21.2164 12.0595 21.4856 11.6504C21.755 11.2415 21.8895 10.8125 21.8895 10.3637C21.8895 9.98862 21.759 9.66757 21.498 9.40055C21.237 9.13347 20.9279 9 20.5709 9H8.43937C8.01633 9 7.69077 9.14771 7.46276 9.44312C7.23477 9.73859 7.12078 10.1079 7.12078 10.5511C7.12078 10.909 7.27192 11.2969 7.57407 11.7145C7.87618 12.1321 8.1977 12.4603 8.53829 12.6989ZM16.9612 16.9819C17.8951 16.2829 19.2633 15.3027 21.0653 14.0415C21.3786 13.8199 21.6533 13.5726 21.8896 13.3V20.0669C21.8896 20.4422 21.7606 20.7629 21.5022 21.0301C21.244 21.2972 20.9336 21.4307 20.571 21.4307H8.43945C8.0768 21.4307 7.76632 21.2972 7.50811 21.0301C7.24984 20.763 7.12078 20.4421 7.12078 20.0669V13.3C7.36254 13.5784 7.64 13.8257 7.95326 14.0415C9.94218 15.4391 11.3075 16.4194 12.0493 16.9819C12.3624 17.2204 12.6166 17.4066 12.8115 17.5401C13.0066 17.6736 13.2662 17.8099 13.5904 17.9491C13.9145 18.0884 14.2167 18.1579 14.4969 18.1579H14.5052H14.5136C14.7939 18.1579 15.0959 18.0884 15.42 17.9491C15.7443 17.8099 16.0037 17.6736 16.1988 17.5401C16.3939 17.4066 16.648 17.2204 16.9612 16.9819Z" fill="#D5DDE0" />
                                </svg>
                                <input className={ProfileSettingsCSS.email__input + " input"} type="text" name="facebook" placeholder="@gg" id="facebook-input" />
                            </label>
                            <label className={ProfileSettingsCSS.password_label} htmlFor="password-input">
                                <svg className={ProfileSettingsCSS.password_svg} width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path filRule="evenodd" clipRule="evenodd" d="M15.1031 30C23.4443 30 30.2062 23.2843 30.2062 15C30.2062 6.71573 23.4443 0 15.1031 0C6.76189 0 0 6.71573 0 15C0 23.2843 6.76189 30 15.1031 30ZM4 14.75C4 11.5744 6.57436 9 9.75 9C11.9306 9 13.8262 10.2137 14.8008 12H23.75C24.7165 12 25.5 12.7835 25.5 13.75V16.75C25.5 17.1642 25.1642 17.5 24.75 17.5H23V19.75C23 20.1642 22.6642 20.5 22.25 20.5H18.75C18.3358 20.5 18 20.1642 18 19.75V17.5H14.8008C13.8262 19.2863 11.9306 20.5 9.75 20.5C6.57436 20.5 4 17.9256 4 14.75ZM9.75 10.5C7.40279 10.5 5.5 12.4028 5.5 14.75C5.5 17.0972 7.40279 19 9.75 19C11.4916 19 12.9902 17.9523 13.6467 16.4497C13.766 16.1766 14.0359 16 14.334 16H18.75C19.1642 16 19.5 16.3358 19.5 16.75V19H21.5V16.75C21.5 16.3358 21.8358 16 22.25 16H24V13.75C24 13.6119 23.8881 13.5 23.75 13.5H14.334C14.0359 13.5 13.766 13.3234 13.6467 13.0503C12.9902 11.5477 11.4916 10.5 9.75 10.5ZM7.75 14.75C7.75 13.6454 8.64543 12.75 9.75 12.75C10.8546 12.75 11.75 13.6454 11.75 14.75C11.75 15.8546 10.8546 16.75 9.75 16.75C8.64543 16.75 7.75 15.8546 7.75 14.75Z" fill="#D5DDE0" />
                                </svg>
                                <input className={ProfileSettingsCSS.password__input + " input"} type="password" name="password" placeholder="" id="password-input" />
                            </label>
                        </div>
                        <input onChange={this.passwordUnlockLock} className={ProfileSettingsCSS.password_checkbox + " visually-hidden"} type="checkbox" name="password-unlock" id="password-unlock" />
                        <label className={ProfileSettingsCSS.password_checkbox_label} htmlFor="password-unlock">
                            <img className={ProfileSettingsCSS.password_checkbox_img} src={password_unlock} width="22" height="22" alt="" id="password-unlock-img" />
                        </label>
                        {/* <div className={ProfileSettingsCSS.profile_alerts}>
                    <label className={ProfileSettingsCSS.profile_alerts__label} htmlFor="alert-input">
                        <span className={ProfileSettingsCSS.profile_alerts__heading}>Оповещения</span>
                        <span className={ProfileSettingsCSS.profile_alerts__text}>Для получения сообщений</span>
                    </label>
                    <input className={ProfileSettingsCSS.alerts_input + " visually-hidden"} type="checkbox" name="alert" id="alert-input" />
                </div> */}
                        <button onClick={this.saveNewData} className={ProfileSettingsCSS.profile__save_button + " button"}>Сохранить</button>
                        <button className={ProfileSettingsCSS.profile__delete_button}>Удалить аккаунт</button>
                    </div>
                </section >
            </div >
        )
    }
};

export default ProfileSettings;