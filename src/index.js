import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {persistor} from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react' //for persisting to localStorage
import { BrowserRouter as Router } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </React.StrictMode>
    </Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
