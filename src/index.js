import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



firebase.initializeApp({
  apiKey: "AIzaSyAp3ucwMK3B8UDpCtf6mIbw2MFhC5cDVn8",
  authDomain: "chat-react-bbd16.firebaseapp.com",
  projectId: "chat-react-bbd16",
  storageBucket: "chat-react-bbd16.appspot.com",
  messagingSenderId: "341866310188",
  appId: "1:341866310188:web:a3f80ab0ddf69e45d9bf89",
  measurementId: "G-3XGW1BDKWF"
})


export const ConText=createContext( null)


const auth=firebase.auth()
const firestore=firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConText.Provider value={{
    firebase,auth,firestore
  }}>
    <App />
  </ConText.Provider>
);
