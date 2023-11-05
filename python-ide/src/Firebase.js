import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDFrQ6QhraVEB-L6qRYDzcyuaomzNOnV6M",
    authDomain: "brainlox-prod.firebaseapp.com",
    projectId: "brainlox-prod",
    storageBucket: "brainlox-prod.appspot.com",
    messagingSenderId: "554524496361",
    appId: "1:554524496361:web:f1af155f6cd772cb2afb78",
    measurementId: "G-HFXW0D7VQ3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export {auth,provider}