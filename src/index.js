import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as firebase from 'firebase/app'
import AuthProvider from './AuthProvider';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistore } from './redux/index';

firebase.initializeApp({
  apiKey: "AIzaSyDc3DnkafD8lGVFXNBu7L0RKF3WVnBfsZI",
  authDomain: "sunmade-3a3e9.firebaseapp.com",
  projectId: "sunmade-3a3e9",
  storageBucket: "sunmade-3a3e9.appspot.com",
  messagingSenderId: "453066980289",
  appId: "1:453066980289:web:dc357703b98ebf546e4d40"
})


ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
    <Provider store={store}>
        <PersistGate persistor={persistore}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);


