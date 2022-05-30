import React from "react";
import FaqPageCSS from './css/faqPage.module.css';

const FaqPage = () => {

    function textVisible(e) {
        let textId = "text-" + e.target.id;

        document.getElementById(textId).classList.toggle(FaqPageCSS.faq__item_text_visible);
    };

    return (
        <div className="universal-form">
            <h1 className={FaqPageCSS.page_main__heading}>Частые вопросы</h1>
            <section className={FaqPageCSS.faq_page}>
                <div className={FaqPageCSS.faq_page__container}>
                    <ul className={FaqPageCSS.faq_page__list + " " + FaqPageCSS.faq}>
                        <li className={FaqPageCSS.faq__item}>
                            <span className={FaqPageCSS.faq__item_label}>Кто мы?</span>
                            <span className={FaqPageCSS.faq__item_text} id="text-1">
                                Мы - небольшая команда из двух студентов 4 курса информационных систем. <br />
                                Благодаря данному web-сервису, пользователю получать возможность беспрепятственного,
                                быстро и безопасно передвигаться в городских условиях без нужды в приобретении личного транспортного средства.
                            </span>
                            <button onClick={textVisible} className={FaqPageCSS.faq__item_button} id="1">Подробнее</button>
                        </li>
                        <li className={FaqPageCSS.faq__item}>
                            <span className={FaqPageCSS.faq__item_label}>Безопасность</span>
                            <span className={FaqPageCSS.faq__item_text} id="text-2">
                                Безопасность пользователей — главная задача сервиса.
                                Мы постоянно создаём новые инструменты безопасности и следим за тем, чтобы все требования были соблюдены. <br />
                                Банки стараются защитить владельцев карт от мошенников, разрабатывая новые меры безопасности. Вы тоже можете защитить свою карту, следуя основным советам:
                            </span>
                            <button onClick={textVisible} className={FaqPageCSS.faq__item_button} id="2">Подробнее</button>
                        </li>
                        <li className={FaqPageCSS.faq__item}>
                            <span className={FaqPageCSS.faq__item_label}>Работа web-сервиса</span>
                            <span className={FaqPageCSS.faq__item_text} id="text-3">
                                Данная работа представляет из себя web-сервис по поиску автомобильных попутчиков (карпулингу),
                                обладающий возможностью проведения регулярных поездок, как междугородних, так и в черте города.
                            </span>
                            <button onClick={textVisible} className={FaqPageCSS.faq__item_button} id="3">Подробнее</button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
};

export default FaqPage;