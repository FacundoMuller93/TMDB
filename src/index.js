import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import store from "./store/index"
import { Provider } from "react-redux"

const target = document.getElementById("root");
let persistor = persistStore(store);

ReactDOM.render(<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}><BrowserRouter><App/></BrowserRouter></PersistGate></Provider>, target);
