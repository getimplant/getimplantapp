// Import the functions you need from the SDKs you need
import { getFirestore } from '@firebase/firestore';
import { getAuth,setPersistence, browserSessionPersistence} from '@firebase/auth';
import { initializeApp } from "firebase/app";
import { getStorage,ref } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCms2VjkmLC1ej6aOANCXUf40OcG_peO_o",
  authDomain: "getimplant-612d3.firebaseapp.com",
  projectId: "getimplant-612d3",
  storageBucket: "getimplant-612d3.appspot.com",
  messagingSenderId: "344122839367",
  appId: "1:344122839367:web:3a379301fe62e3e04dbc62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
setPersistence(auth, browserSessionPersistence);
const projectStorage=getStorage(app);
const db=getFirestore();
const timestamp = new Date();
export {db,projectStorage,timestamp}