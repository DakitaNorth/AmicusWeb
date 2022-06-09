// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCUE6DasWFT2wNccpPcvZICrnE1nuIKFTg",
    authDomain: "amicus-f81c5.firebaseapp.com",
    databaseURL: "https://amicus-f81c5-default-rtdb.firebaseio.com",
    projectId: "amicus-f81c5",
    storageBucket: "amicus-f81c5.appspot.com",
    messagingSenderId: "836905689866",
    appId: "1:836905689866:web:c603bdefb99a50e36e50f3",
    measurementId: "G-ZM395S32Z1"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };