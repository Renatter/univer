import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getStorage
} from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlAJFPvH4U7kHlLJi0lZixGQMMhPiTBSo",
    authDomain: "university-fa1bf.firebaseapp.com",
    projectId: "university-fa1bf",
    storageBucket: "university-fa1bf.appspot.com",
    messagingSenderId: "126287718186",
    appId: "1:126287718186:web:b454670fec2ee18fd06053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);
export {
    auth,
    db,
    storage
}