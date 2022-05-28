import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ProfileCSS from "./css/profile.module.css";

import avatar_load from "../../img/preloader/preloader_avatar.svg";

import AreUSure from "../areUSure/areUSure";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
};

const Profile = () => {

    const [profileData, setProfileData] = useState([]);
    const [profileReRender, setProfileReRender] = useState(false);

    const [outDirty, setOutDirty] = useState(false);
    const [outText, setOutText] = useState("");

    useEffect(() => {
        document.getElementById("avatar__img").src = avatar_load;

        gettingProfileData();
    }, [profileReRender]);

    function gettingProfileData() {
        const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
        const phone = LoginPassword.phone;
        const password = LoginPassword.password;

        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/authorization";
        axios.post(API_URL, { phone, password }, { headers })
            .then((response) => {
                console.log(response.data);
                setProfileData(response.data);
            });
    };

    function handleFile(e) {
        const LoginPassword = JSON.parse(localStorage.getItem("LoginPassword"));
        const userId = LoginPassword.id;

        let avatarData = e.target.files[0];
        e.target.value = "";

        var formData = new FormData();

        formData.append("file", avatarData);

        console.log(formData.get("file"));

        const API_URL = "https://xn--80aaggtieo3biv.xn--p1ai/uploadphoto/" + userId;

        axios.post(API_URL, formData)
            .then((response) => {
                console.log(response);
                setProfileReRender(true);
                setTimeout(() => setProfileReRender(false), 3000);
            })
    };

    function storageCleanUp() {
        setOutDirty(true);
        setTimeout(() => setOutDirty(false), 10000);
        setOutText("storageCleanUp");
    };

    return (
        <div className="universal-form">
            {(outDirty && outText) && <AreUSure text={outText}></AreUSure>}
            <h1 className="visually-hidden">Окно профиля</h1>
            <section className={ProfileCSS.my_profile}>
                <div className={ProfileCSS.my_profile__container}>
                    <div className={ProfileCSS.my_profile__avatar + " " + ProfileCSS.avatar}>
                        <label className={ProfileCSS.avatar__load_button} htmlFor="avatar__load_input">
                            <input type="file" className="visually-hidden" onChange={handleFile} name="avatar__load" id="avatar__load_input" />
                            <img className={ProfileCSS.avatar__img} src={profileData.photo} width="85" height="85" alt="Ваш аватар" id="avatar__img" />
                        </label>
                        <span className={ProfileCSS.avatar__name}>{profileData.name}</span>
                        <span className={ProfileCSS.avatar__email}>{profileData.mail}</span>
                    </div>
                    <ul className={ProfileCSS.my_profile__setting_list + " " + ProfileCSS.setting_list}>
                        <li>
                            <NavLink to="/my-profile-settings" className={ProfileCSS.setting_list__item}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#476DF5" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9473 14.0074C13.9473 10.6896 16.6369 8 19.9547 8C23.2725 8 25.9621 10.6896 25.9621 14.0074C25.9621 17.3252 23.2725 20.0148 19.9547 20.0148C16.6369 20.0148 13.9473 17.3252 13.9473 14.0074ZM19.9547 10.1203C17.8079 10.1203 16.0675 11.8606 16.0675 14.0074C16.0675 16.1542 17.8079 17.8945 19.9547 17.8945C22.1015 17.8945 23.8418 16.1542 23.8418 14.0074C23.8418 11.8606 22.1015 10.1203 19.9547 10.1203Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.3006 24.2553C12.5442 24.2553 11.1203 25.6792 11.1203 27.4357V29.1154C11.1203 29.1409 11.1388 29.1627 11.164 29.1669C16.9859 30.1174 22.9234 30.1174 28.7453 29.1669C28.7706 29.1627 28.7891 29.1409 28.7891 29.1154V27.4357C28.7891 25.6792 27.3652 24.2553 25.6087 24.2553H25.1269C25.0896 24.2553 25.0526 24.2612 25.0172 24.2728L23.7938 24.6723C21.2992 25.4868 18.6102 25.4868 16.1156 24.6723L14.8922 24.2728C14.8567 24.2612 14.8197 24.2553 14.7825 24.2553H14.3006ZM9 27.4357C9 24.5082 11.3732 22.1351 14.3006 22.1351H14.7825C15.0432 22.1351 15.3024 22.1763 15.5503 22.2572L16.7737 22.6567C18.8406 23.3316 21.0687 23.3316 23.1356 22.6567L24.3591 22.2572C24.607 22.1763 24.8661 22.1351 25.1269 22.1351H25.6087C28.5362 22.1351 30.9093 24.5082 30.9093 27.4357V29.1154C30.9093 30.1801 30.1377 31.0879 29.087 31.2594C23.0388 32.2469 16.8705 32.2469 10.8224 31.2594C9.77161 31.0879 9 30.18 9 29.1154V27.4357Z" fill="white" />
                                </svg>
                                <span>Настройки профиля</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-car-settings" className={ProfileCSS.setting_list__item}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#476DF5" />
                                    <path d="M31.4802 16.1861H29.7201C29.586 16.1861 29.4571 16.2379 29.3604 16.3307L28.9846 16.6906C28.3513 15.2251 27.4427 13.7759 26.2154 12.2756C25.552 11.4649 24.5709 11 23.5235 11H16.4764C15.4289 11 14.4478 11.4649 13.7848 12.2756C12.5188 13.8232 11.6282 15.2375 11.0099 16.6854L10.6397 16.3307C10.5429 16.2379 10.414 16.1861 10.2799 16.1861H8.51986C8.23272 16.1861 8 16.4189 8 16.706V17.9094C8 18.1838 8.21333 18.4109 8.48718 18.4282L10.2963 18.5422C10.023 19.341 9.80955 20.5313 9.80955 22.2099C9.80955 23.6665 10.1005 24.6238 10.6068 25.2435V28.0476C10.6068 28.2881 10.8017 28.4829 11.0422 28.4829H13.0447C13.2853 28.4829 13.4803 28.2881 13.4803 28.0476V26.3063H26.5198V28.0476C26.5198 28.2881 26.7148 28.4829 26.9552 28.4829H28.9578C29.1982 28.4829 29.3932 28.2881 29.3932 28.0476V25.2435C29.8994 24.6238 30.1905 23.6665 30.1905 22.2099C30.1905 20.5313 29.9771 19.341 29.7037 18.5422L31.5129 18.4282C31.7867 18.4109 32 18.1838 32 17.9094V16.706C32 16.4189 31.7674 16.1861 31.4802 16.1861ZM15.2706 13.4911C15.5677 13.1279 16.0072 12.9195 16.4764 12.9195H23.5235C23.9927 12.9195 24.4324 13.1279 24.7295 13.4911C25.5881 14.5406 26.2661 15.5451 26.7902 16.5456L13.1978 16.5482C13.7104 15.5698 14.3923 14.5646 15.2706 13.4911ZM13.7893 24.1769C12.7926 24.1769 11.9846 23.8513 11.9846 23.0616C11.9846 22.2718 12.2778 21.6315 13.2745 21.6315C14.2712 21.6315 15.5939 22.2718 15.5939 23.0616C15.5939 23.8513 14.7859 24.1769 13.7893 24.1769ZM21.8918 24.0123H18.1083C17.5379 24.0123 17.0739 23.5483 17.0739 22.978C17.0739 22.818 17.2037 22.6883 17.3637 22.6883H22.6365C22.7965 22.6883 22.9261 22.818 22.9261 22.978C22.9261 23.5484 22.4621 24.0123 21.8918 24.0123ZM26.2107 24.1769C25.214 24.1769 24.406 23.8513 24.406 23.0616C24.406 22.2718 25.7289 21.6315 26.7255 21.6315C27.7222 21.6315 28.0154 22.2718 28.0154 23.0616C28.0154 23.8513 27.2075 24.1769 26.2107 24.1769Z" fill="white" />
                                </svg>
                                <span>Настройки авто</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-card-settings" className={ProfileCSS.setting_list__item}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#476DF5" />
                                    <path d="M22.3867 22.6016C27.8008 22.6016 30.625 19.4727 30.625 15.3359C30.625 11.2578 27.8477 8 22.3867 8H13.668V19.5312H10V22.6016H13.668V24.6172H10V27.6992H13.668V32H17.2773V27.6992H22.5625V24.6172H17.2773V22.6016H22.3867ZM17.2773 19.5312V11.0938H22.3867C25.5273 11.0938 27.0273 12.9102 27.0273 15.3477C27.0273 17.8086 25.5391 19.5312 22.3398 19.5312H17.2773Z" fill="white" />
                                </svg>
                                <span>Настройки оплаты</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-servics-settings" className={ProfileCSS.setting_list__item + " " + ProfileCSS.setting_list__item_additionally}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#476DF5" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M27.3348 18.3022L27.3273 18.5781L27.3348 18.8702L27.3277 19.1465L27.3348 19.4381L27.3281 19.7163L27.3347 20.006L27.1502 28.0741C27.1065 29.9883 25.6506 31.5736 23.747 31.7797C21.0352 32.0734 18.2996 32.0734 15.5878 31.7797C13.6842 31.5736 12.2283 29.9883 12.1845 28.0741L12.0001 20.006L12.0068 19.7144L12.0001 19.4381L12.0071 19.1476L12.0001 18.8702L12.0075 18.5794L12 18.3022L12.1863 11.3758C12.1889 11.2792 12.1957 11.1836 12.2065 11.0891L12.2107 11.0492L12.2141 11.017C12.3057 10.0809 12.8244 9.26452 13.5803 8.77459C13.6367 8.73708 13.6944 8.70136 13.7534 8.66751C13.8111 8.63338 13.87 8.601 13.93 8.57046C14.3009 8.37468 14.7149 8.24778 15.1557 8.20722C18.1571 7.93093 21.1776 7.93093 24.1791 8.20722C24.6191 8.24772 25.0325 8.37428 25.403 8.56953C25.463 8.60002 25.5219 8.63235 25.5796 8.66644C25.6404 8.7013 25.6999 8.73815 25.758 8.7769C26.51 9.26574 27.0264 10.0779 27.1199 11.0093L27.1288 11.0937C27.1393 11.1866 27.1459 11.2808 27.1485 11.3758L27.3348 18.3022ZM25.431 11.2834L25.6093 19.083L25.4648 24.4559C25.4324 25.6637 24.502 26.6565 23.2988 26.7673C20.883 26.9897 18.4518 26.9897 16.036 26.7673C14.8328 26.6565 13.9024 25.6637 13.8699 24.4559L13.7254 19.0837L13.9037 11.2834C13.9041 11.2666 13.9048 11.2499 13.9058 11.2333C13.9734 10.7764 14.2382 10.3819 14.6137 10.1424C14.7559 10.0683 14.9137 10.0191 15.0816 10.0009C18.1299 9.6708 21.2049 9.6708 24.2532 10.0009C24.421 10.0191 24.5788 10.0682 24.721 10.1423C25.0966 10.3819 25.3615 10.7765 25.429 11.2337C25.43 11.2502 25.4307 11.2668 25.431 11.2834ZM19.6674 31.0239C20.6084 31.0239 21.3712 30.2611 21.3712 29.3201C21.3712 28.3791 20.6084 27.6163 19.6674 27.6163C18.7264 27.6163 17.9636 28.3791 17.9636 29.3201C17.9636 30.2611 18.7264 31.0239 19.6674 31.0239Z" fill="white" />
                                </svg>
                                <span>Дополнительно</span>
                            </NavLink>
                        </li>
                    </ul>
                    <button onClick={storageCleanUp} className={ProfileCSS.my_profile__button_out}>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.75 14C8.33579 14 8 14.3358 8 14.75C8 15.1642 8.33579 15.5 8.75 15.5H14.75C15.7165 15.5 16.5 14.7165 16.5 13.75V1.75C16.5 0.783502 15.7165 0 14.75 0H8.75C8.33579 0 8 0.335788 8 0.750001C8 1.16421 8.33579 1.5 8.75 1.5L14.75 1.5C14.8881 1.5 15 1.61193 15 1.75L15 13.75C15 13.8881 14.8881 14 14.75 14H8.75Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.2531 10.1152C11.9434 10.1152 12.5031 9.55557 12.5031 8.86522V6.6247C12.5031 5.93435 11.9434 5.3747 11.2531 5.3747L6.64048 5.3747C6.63396 5.30128 6.62713 5.22787 6.62 5.15448L6.56597 4.5986C6.48354 3.75049 5.58294 3.24258 4.81451 3.61084C3.18029 4.39403 1.70085 5.46578 0.447355 6.77454L0.348156 6.87811C-0.116052 7.36278 -0.116052 8.12712 0.348155 8.6118L0.447355 8.71537C1.70085 10.0241 3.18029 11.0959 4.81451 11.8791C5.58293 12.2473 6.48354 11.7394 6.56597 10.8913L6.62 10.3354C6.62713 10.262 6.63396 10.1886 6.64048 10.1152H11.2531ZM5.94511 8.61522C5.67874 8.61522 5.44326 8.75451 5.31008 8.96598C5.24523 9.06896 5.20464 9.18906 5.19656 9.31853C5.17842 9.60941 5.15524 9.90005 5.12703 10.1903L5.11135 10.3517C4.0753 9.81774 3.11316 9.15283 2.24838 8.37391C2.02402 8.17183 1.80622 7.96208 1.59538 7.74496C2.61892 6.6909 3.80651 5.81069 5.11135 5.13824L5.12703 5.29959C5.15524 5.58987 5.17842 5.88051 5.19656 6.17139C5.22122 6.56671 5.54902 6.8747 5.94511 6.8747H11.0031V8.61522H5.94511Z" fill="white" />
                        </svg>
                        Выйти
                    </button>
                </div>
            </section>
        </div>
    )
};

export default Profile;