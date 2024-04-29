
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
  apiKey: "AIzaSyDYukiVcV8WHac2dckQC_kuzMosWISLKlQ",
  authDomain: "moveis1-app.firebaseapp.com",
  projectId: "moveis1-app",
  storageBucket: "moveis1-app.appspot.com",
  messagingSenderId: "956269646270",
  appId: "1:956269646270:web:3fcf59652a7aac9cc869ef"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)

});

export {auth};  
