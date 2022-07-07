import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store'
import { persistStore } from 'redux-persist';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import ScrollTop from './components/ScrollTop';
import { Authentification } from './reducers/loginSlice';
import { UserInfo } from './reducers/userInfoSlice';
import { boardInfo } from './reducers/boardSlice';
import { modalInfo } from './reducers/modalSlice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export interface RootState {
  login : Authentification;
  userInfo : UserInfo;
  board : boardInfo;
  modal : modalInfo;
}

export let persistor = persistStore(store);
root.render(
  <BrowserRouter>
    <ScrollTop/>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
