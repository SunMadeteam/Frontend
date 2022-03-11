import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: "AIzaSyDF88NhywgXLaS--bmo4pBWkoDJhqavf6s",
  authDomain: "saule-b6190.firebaseapp.com",
  projectId: "saule-b6190",
  storageBucket: "saule-b6190.appspot.com",
  messagingSenderId: "950785878943",
  appId: "1:950785878943:web:09414eb51b456ed11babaa"
})


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


