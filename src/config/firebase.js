
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import {getAuth} from 'firebase/auth';

  // apiKey: "",
  // authDomain: "",
  // projectId: "",
  // storageBucket: "",
  // messagingSenderId: "",
  // appId: ""

const firebaseConfig = {
 
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  
  appId: ""
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)

});

export {auth};  
