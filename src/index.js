import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as firebase from 'firebase/app'
import AuthProvider from './AuthProvider';

firebase.initializeApp({
  apiKey: "AIzaSyDkNTQ3wRPLzslwsUTY04vHen715vw9aHk",
  authDomain: "saule2.firebaseapp.com",
  projectId: "saule2",
  storageBucket: "saule2.appspot.com",
  messagingSenderId: "397336453349",
  appId: "1:397336453349:web:161a5357e1bbe9950b340c"
})


ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


