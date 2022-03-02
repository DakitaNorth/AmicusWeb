import React from "react";
import pageFooterCSS from "./css/pageFooter.module.css";

const PageFooter = () => (
    <footer className={pageFooterCSS.page_footer}>
        <div className={pageFooterCSS.page_footer__container}>
            <span className={pageFooterCSS.page_footer__text}>AmicusDrive 2022</span>
        </div>
    </footer>
);

export default PageFooter;