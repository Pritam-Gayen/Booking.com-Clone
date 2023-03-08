import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBxdcWcnG5M1U68nwpfLKdk_VTYH1MyL14",
    authDomain: "booking-clone-e4810.firebaseapp.com",
    projectId: "booking-clone-e4810",
    storageBucket: "booking-clone-e4810.appspot.com",
    messagingSenderId: "955028959287",
    appId: "1:955028959287:web:7910a48c7af9d002fa0fb2",
    measurementId: "G-XNJE38Z36G"
};

const storagePath = "gs://booking-clone-e4810.appspot.com";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {db, storage, storagePath};