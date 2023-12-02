import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyDURGeNYaF2g0B6YRCUP17c-NNYAeNCzuA",
  authDomain: "eccomerce-reactjs-dbc12.firebaseapp.com",
  projectId: "eccomerce-reactjs-dbc12",
  storageBucket: "eccomerce-reactjs-dbc12.appspot.com",
  messagingSenderId: "614235105171",
  appId: "1:614235105171:web:e23aef3473e61383b1aa66"
};

initializeApp(firebaseConfig);








ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)