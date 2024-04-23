import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2cWneIBf12gKG8CnzHJiZB2UJegUOqHM",
  authDomain: "amazeshop-1a4db.firebaseapp.com",
  projectId: "amazeshop-1a4db",
  storageBucket: "amazeshop-1a4db.appspot.com",
  messagingSenderId: "258885537540",
  appId: "1:258885537540:web:bdb737c523ae4dfeb1ca51",
  measurementId: "G-SLQZN152YX",
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db = getFirestore(app);

export{app,auth,db}
