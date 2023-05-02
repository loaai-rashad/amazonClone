import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyA1r-5PmVf8fRNo-uGkS4oMblmmYn-FG_k",
    authDomain: "clone-35ff0.firebaseapp.com",
    projectId: "clone-35ff0",
    storageBucket: "clone-35ff0.appspot.com",
    messagingSenderId: "1095218724939",
    appId: "1:1095218724939:web:e8bad690b3220b0b9acdce",
    measurementId: "G-LLPRH36VG9"
});

const auth = getAuth(firebaseApp);

export { auth };