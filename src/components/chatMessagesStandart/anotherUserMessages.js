import React from "react";
import AnotherUserMessagesCSS from "./css/anotherUserMessages.module.css";

import { db } from "../firebase/firebase";

const AnotherUserMessages = props => {
    return (
        <div className="universal-form">
            <div className={AnotherUserMessagesCSS.message}>
                <span className={AnotherUserMessagesCSS.message__text}>{props.msg}</span>
            </div>
        </div>
    )
};

export default AnotherUserMessages;