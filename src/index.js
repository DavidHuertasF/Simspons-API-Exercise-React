import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './screens/Router';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDizW90wg_hL5tGfl2ZKJt2Cu6Eg-S8F20",
  authDomain: "e-commerce-7d79c.firebaseapp.com",
  projectId: "e-commerce-7d79c",
  storageBucket: "e-commerce-7d79c.appspot.com",
  messagingSenderId: "366484230972",
  appId: "1:366484230972:web:3e0da2b8d4772f34a20439"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
