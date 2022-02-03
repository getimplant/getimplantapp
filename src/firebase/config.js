// Import the functions you need from the SDKs you need
import { getFirestore } from '@firebase/firestore';
import { getAuth,setPersistence, browserSessionPersistence} from '@firebase/auth';
import { initializeApp } from "firebase/app";
import { getStorage,ref } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFK17oVNdA7UwrJZOkUcyLXBoBLvUDh8Q",
  authDomain: "loginapp-95667.firebaseapp.com",
  databaseURL: "https://loginapp-95667.firebaseio.com",
  projectId: "loginapp-95667",
  storageBucket: "loginapp-95667.appspot.com",
  messagingSenderId: "239224780742",
  appId: "1:239224780742:web:339eb2b56a702a26f224c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
setPersistence(auth, browserSessionPersistence);
const projectStorage=getStorage(app);
const db=getFirestore();
const timestamp = new Date();
export {db,projectStorage,timestamp}