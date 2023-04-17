import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase/app";
import * as firebaseAnalytics from "firebase/analytics";
import "firebase/auth";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: "AIzaSyDBqwl0A1Pw1Sp1uDaNzgCsnVA_ilwtAnA",
  authDomain: "members-only-935b3.firebaseapp.com",
  projectId: "members-only-935b3",
  storageBucket: "members-only-935b3.appspot.com",
  messagingSenderId: "218546715371",
  appId: "1:218546715371:web:beaa40616f57a0204edcae",
  measurementId: "G-FCLNM1QP49"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebaseAnalytics.getAnalytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
